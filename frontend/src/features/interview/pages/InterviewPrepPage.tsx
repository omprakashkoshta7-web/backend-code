import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Mic, FileDown, BookOpen, Target, Briefcase, CheckCircle2, Zap, Award, Brain,
} from 'lucide-react';
import SEO, { buildBreadcrumbJsonLd } from '@/shared/components/SEO';
import { useUser } from '@/shared/hooks/useUser';

const FEATURES = [
  { icon: Briefcase, title: 'Role-specific prep', desc: 'Pick from 9+ roles or define your own. We tailor questions, depth, and study plans.' },
  { icon: Brain, title: 'AI-generated questions', desc: 'On-demand batch generation — 10 basic + 10 intermediate + 5 advanced per subject, cached for replay.' },
  { icon: Mic, title: 'Mock interviews with feedback', desc: 'Type or record audio. AI grades technical accuracy 0-100 with actionable feedback.' },
  { icon: FileDown, title: 'Downloadable PDF kit', desc: 'Cover + TOC + 100+ curated questions + cheat sheet + revision notes — ready to print.' },
  { icon: BookOpen, title: 'Notes, flashcards & quiz', desc: 'Switch between subject notes, swipe flashcards, or take a timed quiz to lock it in.' },
  { icon: Target, title: 'Daily goal tracking', desc: 'Set a target, watch your progress, and build a streak that lasts.' },
];

const ROLES_PREVIEW = [
  'Software Developer', 'Frontend', 'Backend', 'Full Stack',
  'Data Analyst', 'Data Scientist', 'DevOps', 'QA Engineer', 'HR Interview',
];

export default function InterviewPrepPage() {
  return (
    <>
      <SEO
        title="Interview Preparation - Crack FAANG & Top Tech Interviews | CodeSprout"
        description="Personalized interview prep with AI-generated questions, mock interviews with feedback, downloadable PDF kits, and daily progress tracking. Pick your role, experience, and subjects — we handle the rest."
        path="/interview-prep"
        keywords={['interview preparation', 'mock interview', 'AI interview feedback', 'PDF interview kit', 'FAANG interview', 'coding interview prep', 'company wise questions']}
        jsonLd={buildBreadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Interview Prep', url: '/interview-prep' }])}
      />
      <InterviewPrepLanding />
    </>
  );
}

function InterviewPrepLanding() {
  const user = useUser();
  const ctaTo = user ? '/interview-prep/dashboard' : '/interview-prep/setup';
  const ctaLabel = user ? 'Open My Dashboard' : 'Get Started — Free';

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] bg-primary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-[28rem] h-[28rem] bg-pink-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> AI-Powered Interview Prep
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
            Crack your next interview.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Set up once. Get AI-generated questions, mock interviews with feedback, downloadable PDF kits, and daily progress tracking — all tailored to your role.
          </p>
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Roles preview */}
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">Available roles</div>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {ROLES_PREVIEW.map((r) => (
              <span key={r} className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-sm text-slate-300">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* How it works */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-5 text-center">How it works</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { n: 1, t: 'Pick your role', d: 'Choose from 9+ roles or define a custom one' },
              { n: 2, t: 'Set experience + subjects', d: 'We auto-suggest subjects — adjust freely' },
              { n: 3, t: 'Study or take a mock', d: 'AI generates questions, you learn or take mocks' },
              { n: 4, t: 'Download your kit', d: 'One-click PDF with all questions + revision notes' },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 text-white font-bold flex items-center justify-center mx-auto mb-2">
                  {s.n}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{s.t}</div>
                <div className="text-xs text-slate-400">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition"
          >
            <Zap className="w-4 h-4" /> {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
