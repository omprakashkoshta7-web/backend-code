import { Router, Request, Response } from 'express';
import {
  getNotifications,
  getUnreadNotificationCount,
  markNotificationRead,
  markAllNotificationsRead,
  deleteNotification,
} from '../data/db';
import {
  sendLevelCompleteNotification,
  sendBadgeNotification,
  sendStreakNotification,
  sendNudgeNotification,
  sendSolveNotification,
  sendSystemNotification,
} from '../services/notifications';

const router = Router();

function getUserId(req: Request): string | null {
  const u = (req as any).user;
  if (u?.id) return u.id;
  const headerId = req.headers['x-user-id'];
  if (typeof headerId === 'string' && headerId) return headerId;
  const qId = (req.query.userId || req.body?.userId) as string | undefined;
  return qId || null;
}

// GET /api/notifications?limit=50
router.get('/', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  const limit = Number(req.query.limit) || 50;
  const list = getNotifications(userId, limit);
  res.json({ notifications: list, unread: list.filter(n => !n.read).length });
});

// GET /api/notifications/unread-count
router.get('/unread-count', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  res.json({ unread: getUnreadNotificationCount(userId) });
});

// POST /api/notifications/:id/read
router.post('/:id/read', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  const n = markNotificationRead(req.params.id, userId);
  if (!n) return res.status(404).json({ error: 'not found' });
  res.json({ notification: n });
});

// POST /api/notifications/read-all
router.post('/read-all', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  const count = markAllNotificationsRead(userId);
  res.json({ marked: count });
});

// DELETE /api/notifications/:id
router.delete('/:id', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  const ok = deleteNotification(req.params.id, userId);
  res.json({ ok });
});

// ====== TRIGGERS (called by frontend events) ======
// POST /api/notifications/trigger
router.post('/trigger', (req: Request, res: Response) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'user id required' });
  const { event, payload = {} } = req.body || {};
  let notif: any = null;
  try {
    switch (event) {
      case 'level_complete':
        notif = sendLevelCompleteNotification(userId, payload.levelName, payload.stars || 0, payload.topic, payload.nextLevelId);
        break;
      case 'badge':
        notif = sendBadgeNotification(userId, payload.badgeName, payload.emoji || '🏆');
        break;
      case 'streak':
        notif = sendStreakNotification(userId, payload.days || 1);
        break;
      case 'nudge':
        notif = sendNudgeNotification(userId);
        break;
      case 'question_solved':
        notif = sendSolveNotification(userId, payload.title || 'a problem');
        break;
      case 'system':
        notif = sendSystemNotification(userId, payload.title || 'Update', payload.message || '', payload.icon, payload.link);
        break;
      default:
        return res.status(400).json({ error: 'unknown event' });
    }
    res.json({ notification: notif });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'trigger failed' });
  }
});

export default router;
