import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getDb } from '../data/db';
import { getUserBookmarks, addBookmark, removeBookmark } from '../data/store';

const router = Router();
router.use(authenticate);

router.get('/', (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  const db = getDb() as any;
  const questions: any[] = db.questions || [];

  const userBookmarks = getUserBookmarks(userId)
    .map((b) => {
      const q = questions.find((x: any) => x.id === b.question_id);
      if (!q) return null;
      return {
        id: b.id,
        question_id: b.question_id,
        title: q.title,
        slug: q.slug,
        difficulty: q.difficulty,
        topic_name: q.topic_name,
        created_at: b.created_at,
      };
    })
    .filter(Boolean);

  res.json(userBookmarks);
});

router.post('/toggle', (req: AuthRequest, res: Response) => {
  const { question_id } = req.body;
  if (!question_id) return res.status(400).json({ error: 'question_id required' });

  const userId = req.user!.id;
  const existing = getUserBookmarks(userId).find((b) => b.question_id === question_id);
  if (existing) {
    removeBookmark(userId, question_id);
    return res.json({ bookmarked: false });
  }

  const created = addBookmark(userId, question_id);
  res.json({ bookmarked: true, bookmark: created });
});

export default router;
