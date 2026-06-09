import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { resumeApi } from '../api/resumeApi';

interface Template {
  id: string;
  name: string;
  description: string;
  is_ats_friendly: boolean;
  columns: number;
  colors?: string[];
  sections?: string[];
  preview?: string;
  category?: string;
}

interface Props {
  templates?: Template[];
  selected?: string;
  onSelect?: (id: string) => void;
  recommended?: string;
  apiMode?: boolean;
}

/* ─── main gallery component ────────────────────────────────────────────── */

export default function TemplateGallery({ templates: propTemplates, selected, onSelect, recommended, apiMode = true }: Props) {
  const [templates, setTemplates] = useState<Template[]>(propTemplates || []);
  const [loading, setLoading] = useState(apiMode && !propTemplates);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (apiMode && !propTemplates) {
      const fetchTemplates = async () => {
        try {
          setLoading(true);
          const res = await resumeApi.getTemplates();
          setTemplates(res.data.templates);
          setError(null);
        } catch (err: any) {
          setError(err?.response?.data?.error || 'Failed to load templates');
          console.error('Template fetch error:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchTemplates();
    }
  }, [apiMode, propTemplates]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40 flex items-center justify-center h-64" style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}>
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 text-violet-400 animate-spin" />
          <p className="text-sm text-slate-400">Loading templates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40" style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}>
        <p className="text-sm text-rose-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40 space-y-4" style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}>
      <div>
        <h3 className="text-lg font-semibold text-white">Choose a Template</h3>
        {recommended && (
          <p className="text-sm text-slate-400 mt-2">
            AI recommends: <span className="text-violet-400 font-medium">{recommended}</span>
          </p>
        )}
      </div>

      {/* List View Gallery */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {templates.map((t, idx) => {
          const isRec = recommended && t.name.toLowerCase() === recommended.toLowerCase();
          const isSelected = selected === t.id;
          const previewUrl = t.preview ? (t.preview.startsWith('http') ? t.preview : `${import.meta.env.VITE_API_URL || ''}${t.preview}`) : null;

          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onSelect?.(t.id)}
              className={`relative cursor-pointer rounded-lg border transition-all group flex gap-4 p-3 ${
                isSelected
                  ? 'border-violet-500 ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20 bg-violet-500/5'
                  : 'border-white/10 hover:border-white/30 hover:shadow-md hover:bg-white/5'
              }`}
            >
              {/* AI Pick badge */}
              {isRec && (
                <span className="absolute top-2 right-2 z-10 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-500 text-white shadow">
                  AI Pick
                </span>
              )}

              {/* selected checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 left-2 z-10 w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}

              {/* Preview Image from API */}
              {previewUrl && (
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0 border border-white/10 bg-slate-800">
                  <img 
                    src={previewUrl} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23374151" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="10" fill="%239CA3AF" text-anchor="middle" dy=".3em"%3ENo image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              )}

              {/* Template Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{t.description}</p>
                  </div>
                </div>
                
                {/* Tags and Info */}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`text-[10px] font-medium px-2 py-1 rounded whitespace-nowrap ${t.is_ats_friendly ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {t.is_ats_friendly ? '✓ ATS Friendly' : '⭐ Creative'}
                  </span>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">{t.columns === 1 ? '1 Column' : '2 Columns'}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
