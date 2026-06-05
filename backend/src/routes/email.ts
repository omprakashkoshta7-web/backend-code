import { Router, Request, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getAllUsers, getUserById, getSubscriptions } from '../data/db';
import {
  sendWelcomeEmail,
  sendSubscriptionEmail,
  sendPremiumExpiringEmail,
  sendStreakReminderEmail,
  isEmailEnabled,
} from '../services/email';
import { sendSystemNotification } from '../services/notifications';

const router = Router();
const SUBSCRIPTION_DAYS = 30;

// GET /api/email/status — check if email is configured
router.get('/status', authenticate, (_req: AuthRequest, res: Response) => {
  res.json({ enabled: isEmailEnabled() });
});

// POST /api/email/test — admin only
router.post('/test', authenticate, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'admin only' });
  const { to, type = 'welcome' } = req.body || {};
  const target = to || req.user.email;
  try {
    switch (type) {
      case 'welcome': await sendWelcomeEmail(target, req.user.name || 'Test User'); break;
      case 'subscription': await sendSubscriptionEmail(target, req.user.name || 'Test', 'Premium', new Date(Date.now() + SUBSCRIPTION_DAYS * 86400000), 1); break;
      case 'expiring': await sendPremiumExpiringEmail(target, req.user.name || 'Test', 3, new Date(Date.now() + 3 * 86400000)); break;
      case 'streak': await sendStreakReminderEmail(target, req.user.name || 'Test', 5); break;
      default: return res.status(400).json({ error: 'unknown type' });
    }
    res.json({ ok: true, message: `Sent ${type} email to ${target}` });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'send failed' });
  }
});

// POST /api/email/check-expiring — admin: scan all subs, email those expiring in ≤3 days
router.post('/check-expiring', authenticate, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'admin only' });
  const subs = getSubscriptions();
  const now = Date.now();
  const threeDays = 3 * 86400000;
  const sent: { email: string; daysLeft: number }[] = [];
  for (const s of subs) {
    if (s.status !== 'active' || !s.end_date) continue;
    const end = new Date(s.end_date).getTime();
    const left = end - now;
    if (left > 0 && left <= threeDays) {
      const days = Math.ceil(left / 86400000);
      const user = getUserById(s.user_id);
      if (user) {
        await sendPremiumExpiringEmail(user.email, user.name, days, new Date(end));
        sent.push({ email: user.email, daysLeft: days });
      }
    }
  }
  res.json({ sent, count: sent.length });
});

// POST /api/email/streak-nudge/:userId — manual streak email trigger
router.post('/streak-nudge/:userId', authenticate, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'admin only' });
  const user = getUserById(req.params.userId);
  if (!user) return res.status(404).json({ error: 'user not found' });
  const days = Number(req.body?.days) || 1;
  await sendStreakReminderEmail(user.email, user.name, days);
  await sendSystemNotification(user.id, '🔥 Streak alert!', `Don't break your ${days}-day streak on CodeSprout — solve one problem today!`, '🔥', '/games');
  res.json({ ok: true });
});

export default router;
