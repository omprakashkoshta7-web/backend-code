import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2, ExternalLink, BookOpen, ArrowLeft } from 'lucide-react';
import ROADMAPS from '../data/roadmaps';
import type { Roadmap } from '../data/roadmaps';

export default function RoadmapPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<Roadmap | null>(null);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggleStep = (order: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(order)) next.delete(order);
      else next.add(order);
      return next;
    });
  };

  const handleBack = () => {
    setSelected(null);
    setCompleted(new Set());
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => { handleBack(); onClose(); }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl"
            style={{ backgroundColor: '#111827', scrollbarWidth: 'thin' }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-white/10" style={{ backgroundColor: '#111827' }}>
              <div className="flex items-center gap-3">
                {selected ? (
                  <button onClick={handleBack} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </span>
                )}
                <div>
                  <h2 className="text-lg font-bold text-white">{selected ? selected.title : 'Programming Roadmaps'}</h2>
                  <p className="text-xs text-white/40">{selected ? `${selected.steps.length} steps` : 'Choose a path to get started'}</p>
                </div>
              </div>
              <button onClick={() => { handleBack(); onClose(); }} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              {!selected ? (
                /* Grid of roadmap cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ROADMAPS.map((roadmap, i) => (
                    <motion.button
                      key={roadmap.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => setSelected(roadmap)}
                      className="text-left p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${roadmap.color} flex items-center justify-center text-white text-xs font-bold mb-3 shadow-lg`}>
                        {roadmap.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">{roadmap.title}</h3>
                      <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{roadmap.description}</p>
                      <div className="flex items-center gap-1.5 mt-3 text-[10px] text-white/30">
                        <BookOpen className="w-3 h-3" />
                        <span>{roadmap.steps.length} steps</span>
                        <ChevronRight className="w-3 h-3 ml-auto group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                /* Single roadmap detail */
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                      {selected.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{selected.title}</h3>
                      <p className="text-xs sm:text-sm text-white/50 mt-0.5">{selected.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{completed.size}/{selected.steps.length}</div>
                      <div className="text-[10px] text-white/30">{Math.round((completed.size / selected.steps.length) * 100)}% complete</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full mb-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(completed.size / selected.steps.length) * 100}%` }}
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                    />
                  </div>

                  {/* Steps */}
                  <div className="space-y-2">
                    {selected.steps.map((step, i) => {
                      const done = completed.has(step.order);
                      return (
                        <motion.div
                          key={step.order}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${done ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}
                          onClick={() => toggleStep(step.order)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${done ? 'border-emerald-500 bg-emerald-500' : 'border-white/20'}`}>
                              {done && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] text-white/30 font-mono">Step {step.order}</span>
                                <h4 className={`text-sm font-semibold transition-colors ${done ? 'text-emerald-400' : 'text-white'}`}>{step.title}</h4>
                              </div>
                              <p className={`text-xs leading-relaxed ${done ? 'text-white/40' : 'text-white/50'}`}>{step.description}</p>
                              {step.resources.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {step.resources.map((r, j) => (
                                    <a
                                      key={j}
                                      href={r.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={e => e.stopPropagation()}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 text-[10px] font-medium transition-all"
                                    >
                                      <ExternalLink className="w-3 h-3" /> {r.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
