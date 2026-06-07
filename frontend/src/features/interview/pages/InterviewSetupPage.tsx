import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Code2, Layout, Server, Layers, BarChart3, Brain, Cloud, Bug, Users, Sparkles,
  GraduationCap, Sprout, Target, Trophy, BookOpen, FileDown, Mic, Zap, Check,
  Plus, X, Loader2, Briefcase, Wand2, CheckCircle2,
} from 'lucide-react';
import { ROLES, EXPERIENCE_LEVELS, INTERVIEW_MODES, getRoleById, type RoleId, type ExperienceLevel, type InterviewMode } from '../data/roles';
import { interviewApi } from '../api/interviewApi';
import SEO from '@/shared/components/SEO';
import { useUser } from '@/shared/hooks/useUser';

const ICON_MAP: Record<string, any> = {
  Code2, Layout, Server, Layers, BarChart3, Brain, Cloud, Bug, Users, Sparkles,
  GraduationCap, Sprout, Target, Trophy, BookOpen, FileDown, Mic, Zap, Briefcase, Wand2,
};

type Step = 1 | 2 | 3 | 4;

export default function InterviewSetupPage() {
  return (
    <>
      <SEO
        title="Interview Preparation Setup - CodeSprout"
        description="Set up your personalized interview preparation journey. Choose your role, experience level, subjects, and study mode."
        path="/interview-prep/setup"
        noindex
      />
      <InterviewSetupContent />
    </>
  );
}

function InterviewSetupContent() {
  const navigate = useNavigate();
  const user = useUser();
  const [step, setStep] = useState<Step>(1);
  const [roleId, setRoleId] = useState<RoleId | ''>('');
  const [customRole, setCustomRole] = useState('');
  const [experience, setExperience] = useState<ExperienceLevel | ''>('');
  const [subjects, setSubjects] = useState<string[]>([]);
  const [customSubject, setCustomSubject] = useState('');
  const [mode, setMode] = useState<InterviewMode | ''>('');
  const [dailyGoal, setDailyGoal] = useState(5);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/interview-prep/setup');
      return;
    }
    interviewApi.getPreferences()
      .then((res) => {
        const pref = res.data;
        if (pref) {
          if (pref.role) setRoleId(pref.role as RoleId);
          if (pref.custom_role) setCustomRole(pref.custom_role);
          if (pref.experience) setExperience(pref.experience);
          if (pref.subjects) setSubjects(pref.subjects);
          if (pref.mode) setMode(pref.mode);
          if (pref.daily_goal) setDailyGoal(pref.daily_goal);
        }
      })
      .catch(() => { /* ignore */ })
      .finally(() => setChecking(false));
  }, [user]);

  const roleDef = useMemo(() => (roleId ? getRoleById(roleId) : undefined), [roleId]);

  useEffect(() => {
    if (roleDef && !roleDef.isCustom) {
      setSubjects(roleDef.subjects);
    } else if (roleDef?.isCustom) {
      setSubjects([]);
    }
  }, [roleId]);

  const canNext1 = !!roleId && (!roleDef?.isCustom || customRole.trim().length > 0);
  const canNext2 = !!experience;
  const canNext3 = subjects.length > 0;
  const canSubmit = !!mode;

  const toggleSubject = (s: string) => {
    setSubjects(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };
  const addCustomSubject = () => {
    const s = customSubject.trim();
    if (s && !subjects.includes(s)) setSubjects([...subjects, s]);
    setCustomSubject('');
  };

  const submit = async () => {
    if (!roleId || !experience || !mode) return;
    setError('');
    setSaving(true);
    try {
      await interviewApi.savePreferences({
        role: roleId,
        custom_role: roleDef?.isCustom ? customRole.trim() : undefined,
        experience,
        subjects,
        mode,
        daily_goal: dailyGoal,
      });
      navigate('/interview-prep/dashboard');
    } catch (e: any) {
      setError(e?.response?.data?.error || 'Failed to save preferences');
    } finally {
      setSaving(false);
    }
  };

  const stepTitles: Record<Step, string> = {
    1: 'Choose your target role',
    2: 'Your experience level',
    3: 'Subjects to focus on',
    4: 'Pick your study mode',
  };
  const stepSubs: Record<Step, string> = {
    1: 'We will tailor questions and study plans for this role',
    2: 'This helps us calibrate difficulty',
    3: 'Auto-suggested based on your role — add or remove freely',
    4: 'You can switch modes anytime from the dashboard',
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => step === 1 ? navigate('/interview-prep') : setStep((step - 1) as Step)}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> {step === 1 ? 'Back' : 'Previous'}
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Set up your interview prep
          </h1>
          <p className="text-sm sm:text-base text-slate-400">{stepSubs[step]}</p>
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-1.5 sm:gap-2">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition ${
                s < step ? 'bg-emerald-500 text-white' : s === step ? 'bg-gradient-to-br from-primary-500 to-pink-500 text-white' : 'bg-slate-800 text-slate-500'
              }`}>
                {s < step ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s}
              </div>
              {s < 4 && <div className={`w-6 sm:w-12 h-0.5 ${s < step ? 'bg-emerald-500' : 'bg-slate-800'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">{stepTitles[step]}</h2>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ROLES.map((r) => {
                    const Icon = ICON_MAP[r.icon] || Code2;
                    const isActive = roleId === r.id;
                    return (
                      <button
                        key={r.id}
                        onClick={() => setRoleId(r.id)}
                        className={`relative p-4 rounded-xl border text-left transition ${
                          isActive
                            ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/20'
                            : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                        }`}
                      >
                        {isActive && <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary-400" />}
                        <Icon className={`w-7 h-7 mb-2 ${isActive ? 'text-primary-400' : 'text-slate-400'}`} />
                        <div className="text-sm font-semibold text-white">{r.name}</div>
                        <div className="text-xs text-slate-400 mt-1">{r.description}</div>
                      </button>
                    );
                  })}
                </div>
                {roleDef?.isCustom && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Custom role name</label>
                    <input
                      type="text"
                      value={customRole}
                      onChange={(e) => setCustomRole(e.target.value)}
                      placeholder="e.g. Machine Learning Engineer"
                      className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
                {EXPERIENCE_LEVELS.map((lvl) => {
                  const Icon = ICON_MAP[lvl.icon] || Target;
                  const isActive = experience === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      onClick={() => setExperience(lvl.id)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center gap-4 transition ${
                        isActive
                          ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/20'
                          : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-gradient-to-br from-primary-500 to-pink-500' : 'bg-slate-800'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-white">{lvl.name}</div>
                        <div className="text-sm text-slate-400">{lvl.description}</div>
                      </div>
                      {isActive && <CheckCircle2 className="w-6 h-6 text-primary-400" />}
                    </button>
                  );
                })}
                <div className="mt-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Daily goal (questions to solve)</label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(Math.max(1, Math.min(50, Number(e.target.value) || 5)))}
                    className="w-32 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {(roleDef?.isCustom ? [] : roleDef?.subjects || []).map((s) => {
                    const active = subjects.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSubject(s)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition flex items-center gap-1.5 ${
                          active ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" />} {s}
                      </button>
                    );
                  })}
                  {subjects.filter(s => !roleDef?.subjects.includes(s)).map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full text-sm font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-1.5">
                      {s}
                      <button onClick={() => toggleSubject(s)}><X className="w-3 h-3" /></button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomSubject())}
                    placeholder="Add a custom subject..."
                    className="flex-1 px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
                  />
                  <button
                    onClick={addCustomSubject}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
                <p className="text-xs text-slate-500">Selected: {subjects.length} subject{subjects.length !== 1 && 's'}</p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
                {INTERVIEW_MODES.map((m) => {
                  const Icon = ICON_MAP[m.icon] || BookOpen;
                  const isActive = mode === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center gap-4 transition ${
                        isActive
                          ? 'border-primary-500 bg-primary-500/10 shadow-lg shadow-primary-500/20'
                          : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-gradient-to-br from-primary-500 to-pink-500' : 'bg-slate-800'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-white">{m.name}</div>
                        <div className="text-sm text-slate-400">{m.description}</div>
                      </div>
                      {isActive && <CheckCircle2 className="w-6 h-6 text-primary-400" />}
                    </button>
                  );
                })}

                {error && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">{error}</div>
                )}

                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-pink-500/10 border border-primary-500/20">
                  <div className="text-sm font-semibold text-white mb-1">Summary</div>
                  <div className="text-xs text-slate-300 space-y-0.5">
                    <div>Role: <span className="text-white">{roleDef?.isCustom ? customRole : roleDef?.name}</span></div>
                    <div>Experience: <span className="text-white">{experience}</span></div>
                    <div>Subjects: <span className="text-white">{subjects.length} selected</span></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => step === 1 ? navigate('/interview-prep') : setStep((step - 1) as Step)}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> {step === 1 ? 'Cancel' : 'Back'}
            </button>
            {step < 4 ? (
              <button
                onClick={() => setStep((step + 1) as Step)}
                disabled={step === 1 ? !canNext1 : step === 2 ? !canNext2 : !canNext3}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={!canSubmit || saving}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center gap-2"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                {saving ? 'Saving...' : 'Start preparing'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
