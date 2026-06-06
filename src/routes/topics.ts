import { Router, Request, Response } from 'express';
import { getDb } from '../data/db';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const db = getDb();
  res.json(db.topics);
});

router.get('/:slug', (req: Request, res: Response) => {
  const db = getDb();
  const topic = db.topics.find((t) => t.slug === req.params.slug);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  const topicQuestions = db.questions
    .filter((q) => q.topic_id === topic.id)
    .map(({ id, title, slug, difficulty }) => ({ id, title, slug, difficulty }));

  res.json({ ...topic, questions: topicQuestions });
});

export default router;
