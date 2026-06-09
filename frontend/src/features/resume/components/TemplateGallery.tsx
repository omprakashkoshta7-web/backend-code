import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  is_ats_friendly: boolean;
  columns: number;
  colors?: string[];
  sections?: string[];
}

interface Props {
  templates: Template[];
  selected: string;
  onSelect: (id: string) => void;
  recommended?: string;
}

/* ─── mini resume preview component ─────────────────────────────────────── */

function MiniResume({ type, colors }: { type: string; colors: string[] }) {
  const accent = colors?.[0] || '#6d28d9';
  const bg = colors?.[1] || '#f8fafc';

  const sdeLayout = (
    <div className="flex h-full">
      {/* sidebar */}
      <div className="w-[32%] h-full p-2 flex flex-col gap-2" style={{ backgroundColor: accent }}>
        <div className="w-6 h-6 rounded-full bg-white/20 mx-auto" />
        <div className="space-y-1 mt-1">
          {['Contact', 'Skills', 'Links'].map(s => (
            <div key={s} className="text-[5px] font-bold text-white/90 uppercase tracking-wide">{s}</div>
          ))}
          <div className="space-y-0.5">
            {['React', 'Node.js', 'TypeScript', 'Python', 'SQL'].map(sk => (
              <div key={sk} className="text-[4px] text-white/70">{sk}</div>
            ))}
          </div>
        </div>
      </div>
      {/* main */}
      <div className="flex-1 p-2 space-y-2" style={{ backgroundColor: bg }}>
        <div className="h-1.5 w-20 rounded" style={{ backgroundColor: accent }} />
        <div className="h-1 w-16 rounded bg-gray-300" />
        <div className="space-y-1">
          <div className="text-[5px] font-bold text-gray-800 uppercase border-b" style={{ borderColor: accent }}>Experience</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-3/4 rounded bg-gray-200" />
          <div className="h-1 w-5/6 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold text-gray-800 uppercase border-b" style={{ borderColor: accent }}>Education</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-2/3 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold text-gray-800 uppercase border-b" style={{ borderColor: accent }}>Projects</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-4/5 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );

  const frontendLayout = (
    <div className="flex h-full">
      <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
        <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: accent }}>
          <div className="h-5 w-5 rounded-full" style={{ backgroundColor: accent }} />
          <div>
            <div className="h-1.5 w-14 rounded" style={{ backgroundColor: accent }} />
            <div className="h-0.5 w-10 rounded bg-gray-300 mt-0.5" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux', 'CSS3'].map(sk => (
            <div key={sk} className="text-[4px] px-1 py-0.5 rounded text-center text-white" style={{ backgroundColor: accent }}>{sk}</div>
          ))}
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-4/5 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-3/4 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Education</div>
          <div className="h-1 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );

  const backendLayout = (
    <div className="flex h-full">
      <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
        <div className="text-center border-b pb-1" style={{ borderColor: accent }}>
          <div className="h-1.5 w-16 rounded mx-auto" style={{ backgroundColor: accent }} />
          <div className="h-0.5 w-12 rounded bg-gray-300 mx-auto mt-0.5" />
          <div className="flex justify-center gap-2 mt-0.5">
            {['📧', '📱', '🔗'].map((e, i) => (
              <span key={i} className="text-[4px]">{e}</span>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Technical Skills</div>
          <div className="flex flex-wrap gap-0.5">
            {['Java', 'Python', 'SQL', 'Docker', 'AWS', 'Redis', 'Kafka', 'Microservices'].map(sk => (
              <span key={sk} className="text-[3.5px] px-1 py-0.5 rounded border" style={{ borderColor: accent, color: accent }}>{sk}</span>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-5/6 rounded bg-gray-200" />
          <div className="h-1 w-3/4 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Education</div>
          <div className="h-1 w-full rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );

  const aimlLayout = (
    <div className="flex h-full">
      <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
        <div className="flex justify-between items-start border-b pb-1" style={{ borderColor: accent }}>
          <div>
            <div className="h-1.5 w-14 rounded" style={{ backgroundColor: accent }} />
            <div className="h-0.5 w-10 rounded bg-gray-300 mt-0.5" />
          </div>
          <div className="space-y-0.5 text-right">
            <div className="h-0.5 w-10 rounded bg-gray-300" />
            <div className="h-0.5 w-8 rounded bg-gray-300" />
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>ML/AI Skills</div>
          <div className="grid grid-cols-2 gap-0.5">
            {['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'].map(sk => (
              <div key={sk} className="text-[3.5px] px-1 py-0.5 rounded text-white text-center" style={{ backgroundColor: accent }}>{sk}</div>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-4/5 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );

  const fullstackLayout = (
    <div className="flex h-full">
      <div className="w-[30%] h-full p-1.5 flex flex-col gap-1.5" style={{ backgroundColor: accent }}>
        <div className="w-5 h-5 rounded-full bg-white/20 mx-auto" />
        <div className="text-[4px] text-white/90 font-bold uppercase">Contact</div>
        <div className="space-y-0.5">
          {['📧 email', '📱 phone', '🔗 github'].map(c => (
            <div key={c} className="text-[3.5px] text-white/70">{c}</div>
          ))}
        </div>
        <div className="text-[4px] text-white/90 font-bold uppercase mt-1">Skills</div>
        <div className="space-y-0.5">
          {['React', 'Node.js', 'TypeScript', 'Python', 'SQL', 'Docker', 'AWS'].map(sk => (
            <div key={sk} className="text-[3.5px] text-white/70">{sk}</div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-2 space-y-1.5" style={{ backgroundColor: bg }}>
        <div className="h-1.5 w-16 rounded" style={{ backgroundColor: accent }} />
        <div className="h-0.5 w-12 rounded bg-gray-300" />
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-4/5 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div>
          <div className="h-1 w-full rounded bg-gray-200" />
          <div className="h-1 w-5/6 rounded bg-gray-200" />
        </div>
        <div className="space-y-1">
          <div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Education</div>
          <div className="h-1 w-3/4 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );

  const layouts: Record<string, React.ReactNode> = {
    'sde-beginner': sdeLayout,
    'sde-intermediate': sdeLayout,
    'sde-advanced': sdeLayout,
    'frontend': frontendLayout,
    'frontend-advanced': frontendLayout,
    'backend': backendLayout,
    'backend-advanced': backendLayout,
    'ai-ml': aimlLayout,
    'fullstack': fullstackLayout,
    'ats-beginner': sdeLayout,
    'ats-intermediate': sdeLayout,
    'ats-advanced': sdeLayout,
  };

  return (
    <div className="w-full h-full rounded overflow-hidden border border-gray-200 shadow-sm" style={{ backgroundColor: bg }}>
      {layouts[type] || sdeLayout}
    </div>
  );
}

/* ─── main gallery component ────────────────────────────────────────────── */

export default function TemplateGallery({ templates, selected, onSelect, recommended }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 shadow-2xl shadow-purple-900/40" style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}>
      <h3 className="text-lg font-semibold text-white mb-4">Choose a Template</h3>
      {recommended && (
        <p className="text-sm text-slate-400 mb-6">
          AI recommends: <span className="text-violet-400 font-medium">{recommended}</span>
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {templates.map((t, idx) => {
          const isRec = recommended && t.name.toLowerCase() === recommended.toLowerCase();
          const isSelected = selected === t.id;
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onSelect(t.id)}
              className={`relative cursor-pointer rounded-xl border-2 transition-all group ${
                isSelected
                  ? 'border-violet-500 ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20'
                  : 'border-white/10 hover:border-white/30 hover:shadow-md'
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

              {/* mini resume preview */}
              <div className="h-48 m-2 rounded-lg overflow-hidden">
                <MiniResume type={t.id} colors={t.colors || ['#6d28d9', '#f8fafc']} />
              </div>

              {/* template info */}
              <div className="px-3 pb-3 pt-1">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{t.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${t.is_ats_friendly ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {t.is_ats_friendly ? 'ATS Friendly' : 'Creative'}
                  </span>
                  <span className="text-[10px] text-slate-500">{t.columns === 1 ? 'Single' : 'Two'} Column</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
