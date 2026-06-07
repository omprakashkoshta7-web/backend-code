import { Router, Response } from 'express';
import { randomUUID } from 'crypto';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getDb, saveDb } from '../data/db';
import type { ShopProduct } from '../types';

const router = Router();

interface ShopPurchase {
  id: string;
  user_id: string;
  user_name: string;
  user_email: string;
  product_id: string;
  product_title: string;
  product_category: string;
  amount: number;
  utr?: string;
  status: 'pending' | 'verified' | 'failed';
  created_at: string;
  verified_at?: string;
  download_count: number;
}

const UPI_ID = process.env.UPI_ID || 'codesprout@upi';
const UPI_PAYEE_NAME = process.env.UPI_PAYEE_NAME || 'CodeSprout';
const UPI_CURRENCY = process.env.UPI_CURRENCY || 'INR';

function buildUpiLink(amount: number, txnNote: string) {
  const params = new URLSearchParams({
    pa: UPI_ID, pn: UPI_PAYEE_NAME, am: String(amount), cu: UPI_CURRENCY, tn: txnNote,
  });
  return `upi://pay?${params.toString()}`;
}

// All routes require authentication
router.use(authenticate);

router.post('/init', (req: AuthRequest, res: Response) => {
  const { product_id } = req.body;
  if (!product_id) return res.status(400).json({ error: 'product_id required' });

  const db = getDb();
  const product = (db.shopProducts || []).find((p: ShopProduct) => p.id === product_id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  const isFree = product.price === 'free' || (typeof product.price === 'object' && product.price.amount === 0);
  if (isFree) {
    return res.status(400).json({ error: 'Free product, no payment needed' });
  }

  const amount = typeof product.price === 'object' ? product.price.amount : 0;
  const userId = req.user!.id;
  const txnId = `SP${Date.now()}${userId.slice(-4).toUpperCase()}`;
  const upiLink = buildUpiLink(amount, `Shop ${product.title} ${txnId}`);

  const purchase: ShopPurchase = {
    id: randomUUID(),
    user_id: userId,
    user_name: req.user!.name || req.user!.email,
    user_email: req.user!.email,
    product_id,
    product_title: product.title,
    product_category: product.category,
    amount,
    status: 'pending',
    created_at: new Date().toISOString(),
    download_count: 0,
  };

  db.shopPurchases = db.shopPurchases || [];
  db.shopPurchases.push(purchase);
  saveDb();

  res.json({
    purchase_id: purchase.id,
    txn_id: txnId,
    amount,
    currency: UPI_CURRENCY,
    upi_id: UPI_ID,
    payee_name: UPI_PAYEE_NAME,
    qr_data: upiLink,
    upi_deep_link: upiLink,
    status: 'pending',
    expires_in: '15 minutes',
  });
});

router.post('/verify', (req: AuthRequest, res: Response) => {
  const { utr, purchase_id } = req.body;
  if (!utr || utr.length < 5) {
    return res.status(400).json({ error: 'Valid UTR number required' });
  }

  const db = getDb();
  const userId = req.user!.id;
  const purchase = purchase_id
    ? (db.shopPurchases || []).find((p: ShopPurchase) => p.id === purchase_id && p.user_id === userId)
    : (db.shopPurchases || []).filter((p: ShopPurchase) => p.user_id === userId).slice(-1)[0];

  if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
  if (purchase.status === 'verified') return res.status(400).json({ error: 'Already verified' });

  purchase.utr = utr;
  purchase.status = 'verified';
  purchase.verified_at = new Date().toISOString();
  saveDb();

  res.json({
    success: true,
    message: 'Payment verified! You can now download the resource.',
    purchase: { id: purchase.id, status: purchase.status, product_id: purchase.product_id, product_title: purchase.product_title },
  });
});

router.get('/my-purchases', (req: AuthRequest, res: Response) => {
  const db = getDb();
  const userId = req.user!.id;
  const purchases = (db.shopPurchases || [])
    .filter((p: ShopPurchase) => p.user_id === userId)
    .map((p: ShopPurchase) => ({ product_id: p.product_id, status: p.status, verified_at: p.verified_at, download_count: p.download_count }));
  res.json({ purchases });
});

router.get('/download/:product_id', (req: AuthRequest, res: Response) => {
  const db = getDb();
  const userId = req.user!.id;
  const product = (db.shopProducts || []).find((p: ShopProduct) => p.id === req.params.product_id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  const isFree = product.price === 'free' || (typeof product.price === 'object' && product.price.amount === 0);
  let purchase: ShopPurchase | undefined;
  if (!isFree) {
    purchase = (db.shopPurchases || []).find((p: ShopPurchase) => p.user_id === userId && p.product_id === product.id && p.status === 'verified');
    if (!purchase) return res.status(403).json({ error: 'You must purchase this product first' });
    purchase.download_count = (purchase.download_count || 0) + 1;
    saveDb();
  }

  if (product.download_url) {
    return res.json({ download_url: product.download_url, product_title: product.title });
  }
  res.json({
    download_url: null,
    product_title: product.title,
    message: 'Download link will be emailed to you shortly',
  });
});

export default router;
