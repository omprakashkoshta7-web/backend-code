import { userStorage } from './userStorage';

export default async function fireNotification(event: string, payload: Record<string, any> = {}) {
  try {
    const u = await userStorage.get();
    if (!u?.id) return;
    fetch(`/api/notifications/trigger?userId=${u.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, payload }),
    }).catch(() => {});
  } catch {}
}
