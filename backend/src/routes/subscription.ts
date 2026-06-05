import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getSubscription, addSubscription } from '../data/store';
import type { Subscription } from '../types';

const router = Router();

router.use(authenticate);

router.get('/', (req: AuthRequest, res: Response) => {
  const sub = getSubscription(req.user!.id);
  if (sub) {
    res.json(sub);
  } else {
    res.json({ plan: 'free', status: 'active' });
  }
});

router.post('/', (req: AuthRequest, res: Response) => {
  const { plan } = req.body;
  if (!plan || !['free', 'premium'].includes(plan)) {
    return res.status(400).json({ error: 'Valid plan required (free/premium)' });
  }

  const newSub: Subscription = {
    id: String(Date.now()),
    user_id: req.user!.id,
    plan: plan as 'free' | 'premium',
    status: 'active',
    start_date: new Date().toISOString(),
    end_date: plan === 'premium' ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : undefined,
  };

  addSubscription(newSub);

  res.json(newSub);
});

router.post('/cancel', (req: AuthRequest, res: Response) => {
  const sub = getSubscription(req.user!.id);
  if (!sub) return res.status(404).json({ error: 'No subscription found' });
  sub.status = 'cancelled';
  res.json(sub);
});

export default router;
