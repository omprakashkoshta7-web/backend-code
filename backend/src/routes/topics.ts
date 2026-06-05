import { Router, Request, Response } from 'express';
import { topics, questions } from '../data/seed';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(topics);
});

router.get('/:slug', (req: Request, res: Response) => {
  const topic = topics.find((t) => t.slug === req.params.slug);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  const topicQuestions = questions
    .filter((q) => q.topic_id === topic.id)
    .map(({ id, title, slug, difficulty }) => ({ id, title, slug, difficulty }));

  res.json({ ...topic, questions: topicQuestions });
});

export default router;
