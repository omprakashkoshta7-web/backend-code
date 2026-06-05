import { Router, Request, Response } from 'express';
import { getDb } from '../data/db';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const db = getDb();
  const totalUsers = db.users.length;
  res.json({
    total_questions: db.questions.length,
    total_topics: db.topics.length,
    total_patterns: db.patternDetails.length,
    total_cheat_sheets: db.cheatSheets.length,
    total_users: totalUsers,
  });
});

export default router;
