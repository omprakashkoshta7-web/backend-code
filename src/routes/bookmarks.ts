import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { questions } from '../data/seed';
import type { Bookmark } from '../types';

const router = Router();
const bookmarks: Bookmark[] = [];

router.use(authenticate);

router.get('/', (req: AuthRequest, res: Response) => {
  const userBookmarks = bookmarks
    .filter((b) => b.user_id === req.user!.id)
    .map((b) => {
      const q = questions.find((q) => q.id === b.question_id);
      return {
        id: b.id,
        question_id: b.question_id,
        title: q?.title || 'Unknown',
        slug: q?.slug || '',
        difficulty: q?.difficulty || 'Easy',
        topic_name: q?.topic_name || '',
        created_at: b.created_at,
      };
    });
  res.json(userBookmarks);
});

router.post('/toggle', (req: AuthRequest, res: Response) => {
  const { question_id } = req.body;
  if (!question_id) return res.status(400).json({ error: 'question_id required' });

  const existing = bookmarks.find((b) => b.user_id === req.user!.id && b.question_id === question_id);
  if (existing) {
    const idx = bookmarks.indexOf(existing);
    bookmarks.splice(idx, 1);
    return res.json({ bookmarked: false });
  }

  const newBookmark: Bookmark = {
    id: String(bookmarks.length + 1),
    user_id: req.user!.id,
    question_id,
    created_at: new Date().toISOString(),
  };
  bookmarks.push(newBookmark);
  res.json({ bookmarked: true, bookmark: newBookmark });
});

export default router;
