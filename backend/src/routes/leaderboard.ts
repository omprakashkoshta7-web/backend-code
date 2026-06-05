import { Router, Request, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getSubmissions, getUserStats } from '../data/store';
import type { SubmissionRecord } from '../data/store';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const allUserIds = new Set<string>();
  const nameById = new Map<string, string>();
  const submissions = getSubmissions();
  submissions.forEach((s: SubmissionRecord) => {
    allUserIds.add(s.user_id);
    nameById.set(s.user_id, s.user_name);
  });

  const stats = Array.from(allUserIds).map((id) =>
    getUserStats(id, nameById.get(id) || 'Anonymous')
  );

  stats.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.solved !== a.solved) return b.solved - a.solved;
    if (b.streak !== a.streak) return b.streak - a.streak;
    return a.total_submissions - b.total_submissions;
  });

  const top = stats.slice(0, 10).map((s, idx) => ({
    rank: idx + 1,
    user_id: s.user_id,
    user_name: s.user_name,
    solved: s.solved,
    easy: s.easy,
    medium: s.medium,
    hard: s.hard,
    total_submissions: s.total_submissions,
    streak: s.streak,
    points: s.points,
  }));

  res.json({ leaderboard: top, total_users: stats.length });
});

router.get('/me', authenticate, (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  const userName = req.user!.name || 'Anonymous';

  const allUserIds = new Set<string>([userId]);
  const nameById = new Map<string, string>([[userId, userName]]);
  const submissions = getSubmissions();
  submissions.forEach((s: SubmissionRecord) => {
    allUserIds.add(s.user_id);
    nameById.set(s.user_id, s.user_name);
  });

  const all = Array.from(allUserIds).map((id) => getUserStats(id, nameById.get(id) || 'Anonymous'));
  all.sort((a, b) => b.points - a.points || b.solved - a.solved || b.streak - a.streak);

  const myRank = all.findIndex((s) => s.user_id === userId) + 1;
  const myStats = getUserStats(userId, userName);
  res.json({ rank: myRank, total_users: all.length, stats: myStats });
});

export default router;
