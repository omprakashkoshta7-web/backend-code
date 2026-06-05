import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { questions } from '../data/seed';
import { getSubscription } from '../data/store';

const router = Router();
const recentViews: { user_id: string; question_id: string; viewed_at: string }[] = [];

router.use(authenticate);

router.get('/', (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;

  const userRecent = recentViews
    .filter((v) => v.user_id === userId)
    .slice(-10)
    .reverse()
    .map((v) => {
      const q = questions.find((q) => q.id === v.question_id);
      return q ? { id: q.id, title: q.title, slug: q.slug, difficulty: q.difficulty, viewed_at: v.viewed_at } : null;
    })
    .filter(Boolean);

  const subscription = getSubscription(userId);

  res.json({
    bookmarks: [],
    recent_questions: userRecent,
    completed_topics: [],
    subscription: subscription || null,
  });
});

export default router;
