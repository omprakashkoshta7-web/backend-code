import type { Subscription, Bookmark } from '../types';
import { getSubscriptions as dbGetSubscriptions, getSubscriptionsFresh, addSubscription as dbAddSubscription, getDb } from './db';

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

const getDbSafe = () => getDb() as any;

export const getBookmarksStore = (): Bookmark[] => {
  const db = getDbSafe();
  if (!db.bookmarks) db.bookmarks = [];
  return db.bookmarks;
};

export function getUserBookmarks(userId: string): Bookmark[] {
  return getBookmarksStore().filter((b) => b.user_id === userId);
}

export function addBookmark(userId: string, questionId: string): Bookmark {
  const store = getBookmarksStore();
  const existing = store.find((b) => b.user_id === userId && b.question_id === questionId);
  if (existing) return existing;
  const created: Bookmark = {
    id: String(store.length + 1),
    user_id: userId,
    question_id: questionId,
    created_at: new Date().toISOString(),
  };
  store.push(created);
  return created;
}

export function removeBookmark(userId: string, questionId: string): boolean {
  const store = getBookmarksStore();
  const idx = store.findIndex((b) => b.user_id === userId && b.question_id === questionId);
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

export interface RecentView {
  id: string;
  user_id: string;
  question_id: string;
  viewed_at: string;
}

export const getRecentViewsStore = (): RecentView[] => {
  const db = getDbSafe();
  if (!db.recent_views) db.recent_views = [];
  return db.recent_views;
};

const MAX_RECENT_PER_USER = 20;

export function recordRecentView(userId: string, questionId: string): void {
  if (!userId || !questionId) return;
  const store = getRecentViewsStore();
  store.push({
    id: String(store.length + 1),
    user_id: userId,
    question_id: questionId,
    viewed_at: new Date().toISOString(),
  });
  const userStore = store.filter((v) => v.user_id === userId);
  if (userStore.length > MAX_RECENT_PER_USER) {
    const toRemove = userStore.length - MAX_RECENT_PER_USER;
    for (let i = 0; i < toRemove; i++) {
      const oldestIdx = store.findIndex((v) => v.user_id === userId);
      if (oldestIdx !== -1) store.splice(oldestIdx, 1);
    }
  }
}

export function getUserRecentViews(userId: string, limit = 10): RecentView[] {
  return getRecentViewsStore()
    .filter((v) => v.user_id === userId)
    .slice(-limit)
    .reverse();
}

export interface TopicProgress {
  topic_id: string;
  topic_name: string;
  total: number;
  solved: number;
  pct: number;
}

export function getUserTopicProgress(userId: string): TopicProgress[] {
  const db = getDbSafe();
  const questions: any[] = db.questions || [];
  const solvedSlugs = getUserSolvedSlugs(userId);
  const solvedIds = new Set<string>();
  const solvedSlugsResolved = new Set<string>();
  solvedSlugs.forEach((slug) => {
    solvedSlugsResolved.add(slug);
    const q = questions.find((x: any) => x.slug === slug);
    if (q?.id) solvedIds.add(q.id);
  });

  const byTopic = new Map<string, { id: string; name: string; total: number; solved: number }>();
  questions.forEach((q: any) => {
    const key = q.topic_id || q.topic_name;
    if (!key) return;
    const entry = byTopic.get(key) || { id: q.topic_id || key, name: q.topic_name || key, total: 0, solved: 0 };
    entry.total += 1;
    if (solvedSlugsResolved.has(q.slug) || solvedIds.has(q.id)) entry.solved += 1;
    byTopic.set(key, entry);
  });

  return Array.from(byTopic.values())
    .map((t) => ({
      topic_id: t.id,
      topic_name: t.name,
      total: t.total,
      solved: t.solved,
      pct: t.total > 0 ? Math.round((t.solved / t.total) * 100) : 0,
    }))
    .filter((t) => t.solved > 0 || t.total > 0)
    .sort((a, b) => b.solved - a.solved || b.total - a.total);
}


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
