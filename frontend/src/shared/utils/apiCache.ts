const PREFIX = 'api_cache_';
const DEFAULT_TTL = 5 * 60 * 1000;

const TTL_BY_PATTERN: [RegExp, number][] = [
  [/\/resume\/templates/, 30 * 60 * 1000],
  [/\/resume\/list/, 1 * 60 * 1000],
  [/\/topics/, 10 * 60 * 1000],
  [/\/patterns/, 10 * 60 * 1000],
  [/\/leaderboard/, 2 * 60 * 1000],
  [/\/stats/, 5 * 60 * 1000],
  [/\/roadmaps/, 10 * 60 * 1000],
  [/\/questions\?/, 5 * 60 * 1000],
];

function getTTL(url: string): number {
  for (const [pattern, ttl] of TTL_BY_PATTERN) {
    if (pattern.test(url)) return ttl;
  }
  return DEFAULT_TTL;
}

export function getCached<T>(url: string): T | null {
  try {
    const key = PREFIX + url;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { data, expiry } = JSON.parse(raw);
    if (Date.now() > expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return data as T;
  } catch {
    return null;
  }
}

export function setCache<T>(url: string, data: T, ttl?: number): void {
  try {
    const key = PREFIX + url;
    const expiry = Date.now() + (ttl ?? getTTL(url));
    localStorage.setItem(key, JSON.stringify({ data, expiry }));
  } catch {
    /* localStorage full — silently fail */
  }
}

export function clearApiCache(pattern?: RegExp): void {
  const prefixLen = PREFIX.length;
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (!key?.startsWith(PREFIX)) continue;
    if (!pattern || pattern.test(key.slice(prefixLen))) {
      localStorage.removeItem(key);
    }
  }
}
