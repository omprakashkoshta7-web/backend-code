import type { Subscription } from '../types';
import { getSubscriptions as dbGetSubscriptions, getSubscriptionsFresh, addSubscription as dbAddSubscription } from './db';

export { dbGetSubscriptions as getSubscriptions };

export async function isPremiumFresh(userId: string): Promise<boolean> {
  const subs = await getSubscriptionsFresh();
  return subs.some(
    (s) => s.user_id === userId && s.plan === 'premium' && s.status === 'active'
  );
}

export function isPremium(userId: string): boolean {
  return dbGetSubscriptions().some(
    (s) => s.user_id === userId && s.plan === 'premium' && s.status === 'active'
  );
}

export function getSubscription(userId: string): Subscription | undefined {
  return dbGetSubscriptions().find((s) => s.user_id === userId);
}

export { dbAddSubscription as addSubscription };

export interface SubmissionRecord {
  id: string;
  user_id: string;
  user_name: string;
  question_id: string;
  question_slug: string;
  question_title: string;
  language: string;
  passed: boolean;
  total: number;
  runtime_ms: number;
  submitted_at: string;
}

export function getSubmissions(): SubmissionRecord[] {
  return (require('./db').getDb() as any).submissions || [];
}

export function recordSubmission(s: SubmissionRecord): void {
  const db = require('./db').getDb() as any;
  if (!db.submissions) db.submissions = [];
  db.submissions.push(s);
}

export function getUserSolvedSlugs(userId: string): Set<string> {
  const submissions = getSubmissions();
  const map = new Map<string, SubmissionRecord>();
  for (const s of submissions) {
    if (s.user_id !== userId || !s.passed) continue;
    const existing = map.get(s.question_slug);
    if (!existing || new Date(s.submitted_at) > new Date(existing.submitted_at)) {
      map.set(s.question_slug, s);
    }
  }
  return new Set(map.keys());
}

export function getUserStats(userId: string, userName: string): {
  user_id: string;
  user_name: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  total_submissions: number;
  streak: number;
  points: number;
} {
  const submissions = getSubmissions();
  const userSubs = submissions.filter((s) => s.user_id === userId);
  const solvedMap = new Map<string, SubmissionRecord>();
  for (const s of userSubs) {
    if (!s.passed) continue;
    const existing = solvedMap.get(s.question_slug);
    if (!existing || new Date(s.submitted_at) > new Date(existing.submitted_at)) {
      solvedMap.set(s.question_slug, s);
    }
  }

  const { getDb } = require('./db');
  const questions: any[] = getDb().questions || [];
  let easy = 0, medium = 0, hard = 0;
  let totalRuntime = 0;
  solvedMap.forEach((s) => {
    const q = questions.find((x: any) => x.slug === s.question_slug || x.id === s.question_id);
    if (q?.difficulty === 'Easy') easy++;
    else if (q?.difficulty === 'Medium') medium++;
    else if (q?.difficulty === 'Hard') hard++;
    totalRuntime += s.runtime_ms || 0;
  });

  const solved = solvedMap.size;
  const points = easy * 10 + medium * 25 + hard * 50;

  const days = new Set<string>();
  userSubs.forEach((s) => {
    if (!s.passed) return;
    const d = new Date(s.submitted_at);
    days.add(`${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`);
  });
  const sortedDays = Array.from(days).sort().reverse();
  let streak = 0;
  if (sortedDays.length > 0) {
    const today = new Date();
    const todayKey = `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getUTCDate()}`;
    let cursor = new Date(today);
    if (sortedDays[0] !== todayKey) {
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }
    for (const dayKey of sortedDays) {
      const cursorKey = `${cursor.getUTCFullYear()}-${cursor.getUTCMonth()}-${cursor.getUTCDate()}`;
      if (dayKey === cursorKey) {
        streak++;
        cursor.setUTCDate(cursor.getUTCDate() - 1);
      } else {
        break;
      }
    }
  }

  return {
    user_id: userId,
    user_name: userName,
    solved,
    easy,
    medium,
    hard,
    total_submissions: userSubs.length,
    streak,
    points,
  };
}
