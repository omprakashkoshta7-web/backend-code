import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { isPremium as checkPremiumSub } from '../data/store';

const JWT_SECRET = process.env.JWT_SECRET || 'dsa-cheatsheets-secret-key-2024';

export interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string; name: string };
}

export function generateToken(user: { id: string; email: string; role: string; name: string }): string {
  return jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string; role: string; name: string };
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export function adminOnly(req: AuthRequest, res: Response, next: NextFunction) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

export function isPremium(req: AuthRequest): boolean {
  if (req.user?.role === 'admin') return true;
  if (!req.user?.id) return false;
  return checkPremiumSub(req.user.id);
}
