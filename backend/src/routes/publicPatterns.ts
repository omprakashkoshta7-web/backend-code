import { Router, Request, Response } from 'express';
import { getPatternDetails, getPatternDetail } from '../data/db';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const patterns = getPatternDetails().map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    summary: p.summary,
    flow: p.flow,
    template: p.template,
    tips: p.tips,
    traps: p.traps,
    time_complexity: p.time_complexity,
    space_complexity: p.space_complexity,
    updated_at: p.updated_at,
  }));
  res.json(patterns);
});

router.get('/:slug', (req: Request, res: Response) => {
  const p = getPatternDetail(req.params.slug);
  if (!p) return res.status(404).json({ error: 'Pattern not found' });
  res.json(p);
});

export default router;
