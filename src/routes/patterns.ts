import { Router, Request, Response } from 'express';
import { getPatternDetails, getPatternDetail, addPatternDetail, updatePatternDetail, deletePatternDetail } from '../data/db';
import type { PatternDetail, PatternFlowStep } from '../types';

const router = Router();

const slugify = (s: string) =>
  s.toLowerCase().replace(/[''`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const validatePayload = (body: any): { ok: true; data: Partial<PatternDetail> } | { ok: false; error: string } => {
  if (!body.name || typeof body.name !== 'string') {
    return { ok: false, error: 'name is required' };
  }
  if (!body.summary || typeof body.summary !== 'string') {
    return { ok: false, error: 'summary is required' };
  }
  return { ok: true, data: body };
};

const normalizeFlow = (flow: any): PatternFlowStep[] => {
  if (!Array.isArray(flow)) return [];
  return flow
    .map((s: any) => ({
      step: typeof s?.step === 'string' ? s.step : '',
      desc: typeof s?.desc === 'string' ? s.desc : '',
    }))
    .filter((s) => s.step || s.desc);
};

const normalizeStringArray = (arr: any): string[] => {
  if (!Array.isArray(arr)) return [];
  return arr.map((x) => String(x)).filter((x) => x.trim().length > 0);
};

router.get('/patterns', (_req: Request, res: Response) => {
  const patterns = getPatternDetails().map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    summary: p.summary,
    time_complexity: p.time_complexity,
    space_complexity: p.space_complexity,
    updated_at: p.updated_at,
  }));
  res.json(patterns);
});

router.get('/patterns/:slug', (req: Request, res: Response) => {
  const p = getPatternDetail(req.params.slug);
  if (!p) return res.status(404).json({ error: 'Pattern not found' });
  res.json(p);
});

router.post('/patterns', (req: Request, res: Response) => {
  const v = validatePayload(req.body);
  if (!v.ok) return res.status(400).json({ error: v.error });

  const name = v.data.name!.trim();
  const slug = (req.body.slug && String(req.body.slug).trim()) || slugify(name);

  if (getPatternDetail(slug)) {
    return res.status(409).json({ error: `Pattern with slug "${slug}" already exists` });
  }

  const newPattern: PatternDetail = {
    slug,
    name,
    category: v.data.category || 'General',
    summary: v.data.summary || '',
    flow: normalizeFlow(v.data.flow),
    template: v.data.template || '',
    tips: normalizeStringArray(v.data.tips),
    traps: normalizeStringArray(v.data.traps),
    time_complexity: v.data.time_complexity || 'N/A',
    space_complexity: v.data.space_complexity || 'N/A',
    updated_at: new Date().toISOString(),
  };

  addPatternDetail(newPattern);
  res.status(201).json(newPattern);
});

router.put('/patterns/:slug', (req: Request, res: Response) => {
  const existing = getPatternDetail(req.params.slug);
  if (!existing) return res.status(404).json({ error: 'Pattern not found' });

  const updates: Partial<PatternDetail> = {};

  if (req.body.name !== undefined) updates.name = String(req.body.name);
  if (req.body.category !== undefined) updates.category = String(req.body.category);
  if (req.body.summary !== undefined) updates.summary = String(req.body.summary);
  if (req.body.template !== undefined) updates.template = String(req.body.template);
  if (req.body.time_complexity !== undefined) updates.time_complexity = String(req.body.time_complexity);
  if (req.body.space_complexity !== undefined) updates.space_complexity = String(req.body.space_complexity);
  if (req.body.flow !== undefined) updates.flow = normalizeFlow(req.body.flow);
  if (req.body.tips !== undefined) updates.tips = normalizeStringArray(req.body.tips);
  if (req.body.traps !== undefined) updates.traps = normalizeStringArray(req.body.traps);

  const updated = updatePatternDetail(req.params.slug, updates);
  res.json(updated);
});

router.delete('/patterns/:slug', (req: Request, res: Response) => {
  const deleted = deletePatternDetail(req.params.slug);
  if (!deleted) return res.status(404).json({ error: 'Pattern not found' });
  res.json({ success: true });
});

export default router;
