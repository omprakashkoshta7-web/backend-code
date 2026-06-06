import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getDb } from '../data/db';
import {
  getSubscription,
  getUserStats,
  getUserBookmarks,
  getUserRecentViews,
  getUserTopicProgress,
} from '../data/store';

const router = Router();
router.use(authenticate);

router.get('/', (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  const userName = req.user!.name || 'Anonymous';
  const db = getDb() as any;
  const questions: any[] = db.questions || [];

  const userBookmarks = getUserBookmarks(userId)
    .map((b) => {
      const q = questions.find((x: any) => x.id === b.question_id);
      if (!q) return null;
      return {
        id: b.id,
        slug: q.slug,
        title: q.title,
        difficulty: q.difficulty,
        topic_name: q.topic_name,
        created_at: b.created_at,
      };
    })
    .filter(Boolean)
    .slice(-10)
    .reverse();

  const userRecent = getUserRecentViews(userId, 10).map((v) => {
    const q = questions.find((x: any) => x.id === v.question_id);
    return q
      ? { id: q.id, slug: q.slug, title: q.title, difficulty: q.difficulty, topic_name: q.topic_name, viewed_at: v.viewed_at }
      : null;
  }).filter(Boolean);

  const stats = getUserStats(userId, userName);
  const topicProgress = getUserTopicProgress(userId);
  const completedTopics = topicProgress.filter((t) => t.pct >= 80).map((t) => t.topic_name);
  const subscription = getSubscription(userId);

  res.json({
    stats,
    bookmarks: userBookmarks,
    recent_questions: userRecent,
    topic_progress: topicProgress,
    completed_topics: completedTopics,
    subscription: subscription || null,
  });
});

export default router;
