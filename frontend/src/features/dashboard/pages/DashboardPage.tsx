import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Star, Clock, Trophy, Sparkles, ArrowRight, CheckCircle2,
  Target, Flame, Zap, Code2, ChevronRight, Award, BarChart3, Crown,
} from 'lucide-react';
import { useDashboard } from '../hooks/useDashboard';
import { getDifficultyColor } from '@/shared/utils/helpers';
import { useUser } from '@/shared/hooks/useUser';
import SEO from '@/shared/components/SEO';

const difficultyGradient: Record<string, string> = {
  Easy: 'from-emerald-500 to-green-500',
  Medium: 'from-amber-500 to-orange-500',
  Hard: 'from-rose-500 to-red-500',
};

export default function DashboardPage() {
  return (
    <>
      <SEO
        title="Dashboard - Your DSA Progress | CodeSprout"
        description="Track your coding progress, solved questions, streaks, points, and topic-wise preparation analytics on CodeSprout."
        path="/dashboard"
        noindex
      />
      <DashboardContent />
    </>
  );
}

function DashboardContent() {
  const { data, loading } = useDashboard();
  const user = useUser();

  const summary = useMemo(() => {
    const stats = data?.stats;
    const totalSolved = stats?.solved || 0;
    const totalPoints = stats?.points || 0;
    const streak = stats?.streak || 0;
    const submissions = stats?.total_submissions || 0;
    const accuracy = submissions > 0 ? Math.round(((stats?.solved || 0) / submissions) * 100) : 0;
    return { totalSolved, totalPoints, streak, submissions, accuracy };
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary-500 border-t-transparent" />
          <p className="text-sm text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = data?.stats;
  const topicProgress = data?.topic_progress || [];
  const recentQuestions = data?.recent_questions || [];
  const bookmarks = data?.bookmarks || [];

  const statCards = [
    {
      icon: CheckCircle2,
      label: 'Questions Solved',
      value: summary.totalSolved,
      sub: stats ? `${stats.easy}E · ${stats.medium}M · ${stats.hard}H` : '—',
      gradient: 'from-emerald-500 to-green-500',
      shadow: 'shadow-emerald-500/25',
    },
    {
      icon: Flame,
      label: 'Day Streak',
      value: summary.streak,
      sub: summary.streak > 0 ? 'Keep it going!' : 'Solve today to start',
      gradient: 'from-orange-500 to-rose-500',
      shadow: 'shadow-orange-500/25',
    },
    {
      icon: Trophy,
      label: 'Points Earned',
      value: summary.totalPoints.toLocaleString(),
      sub: `${summary.submissions} submissions`,
      gradient: 'from-amber-500 to-yellow-500',
      shadow: 'shadow-amber-500/25',
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: `${summary.accuracy}%`,
      sub: summary.submissions > 0 ? 'From your submissions' : 'Submit code to track',
      gradient: 'from-violet-500 to-fuchsia-500',
      shadow: 'shadow-violet-500/25',
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 mt-1 flex items-center gap-2">
                Welcome back, <span className="font-semibold text-white">{user?.name || 'Coder'}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              {data?.subscription?.plan === 'premium' && data.subscription.status === 'active' ? (
                <div className="flex flex-col items-end gap-1">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-400 shadow-sm flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" /> Premium Plan
                  </span>
                  {data.subscription.end_date && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Renews {new Date(data.subscription.end_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                    </div>
                  )}
                </div>
              ) : (
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-slate-400">Free Plan</span>
              )}
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {statCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="card p-5 sm:p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.gradient} rounded-bl-[40px] opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 shadow-lg ${card.shadow}`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{card.value}</div>
                <div className="text-sm text-slate-400 mt-1">{card.label}</div>
                <div className="text-[11px] text-slate-500 mt-1.5">{card.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Topic progress */}
          {topicProgress.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="card p-6 mb-8">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary-400" /> Topic Progress
                </h2>
                <span className="text-xs text-slate-500">{topicProgress.length} topics with questions</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {topicProgress.slice(0, 8).map((t) => {
                  const pct = Math.min(100, t.pct);
                  const color = pct >= 70 ? 'bg-emerald-500' : pct >= 30 ? 'bg-amber-500' : 'bg-violet-500';
                  return (
                    <Link
                      key={t.topic_id}
                      to={`/topics/${t.topic_name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group"
                    >
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-white font-medium group-hover:text-primary-300 transition-colors">{t.topic_name}</span>
                        <span className="text-slate-400 font-mono text-xs">
                          {t.solved}<span className="text-slate-600">/{t.total}</span>
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                          className={`h-full ${color} rounded-full`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Recent + Bookmarks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-400" /> Recently Viewed
                </h2>
                <Link to="/questions" className="text-sm text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1">
                  Browse all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-1.5">
                {recentQuestions.length === 0 ? (
                  <EmptyState
                    icon={Code2}
                    title="No questions viewed yet"
                    hint="Start solving to see your recent activity here."
                    cta={{ label: 'Browse Questions', to: '/questions' }}
                  />
                ) : (
                  recentQuestions.slice(0, 5).map((q, i) => (
                    <motion.div key={`${q.id}-${q.viewed_at}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link to={`/questions/${q.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-xs font-mono text-white/20 w-4 shrink-0">{i + 1}</span>
                          <div className="min-w-0">
                            <div className="text-sm text-white group-hover:text-primary-300 transition-colors truncate">{q.title}</div>
                            {q.topic_name && <div className="text-[11px] text-slate-500">{q.topic_name}</div>}
                          </div>
                        </div>
                        <span className={`shrink-0 ml-2 text-[10px] font-medium px-2 py-0.5 rounded-full ${getDifficultyColor(q.difficulty)}`}>{q.difficulty}</span>
                      </Link>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> Bookmarks
                </h2>
                <Link to="/bookmarks" className="text-sm text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-1.5">
                {bookmarks.length === 0 ? (
                  <EmptyState
                    icon={Star}
                    title="No bookmarks yet"
                    hint="Tap the star on any question to save it for later."
                    cta={{ label: 'Explore Questions', to: '/questions' }}
                  />
                ) : (
                  bookmarks.slice(0, 5).map((b, i) => (
                    <motion.div key={b.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link to={`/questions/${b.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
                        <div className="flex items-center gap-3 min-w-0">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                          <div className="min-w-0">
                            <div className="text-sm text-white group-hover:text-primary-300 transition-colors truncate">{b.title}</div>
                            {b.topic_name && <div className="text-[11px] text-slate-500">{b.topic_name}</div>}
                          </div>
                        </div>
                        <span className={`shrink-0 ml-2 text-[10px] font-medium px-2 py-0.5 rounded-full ${getDifficultyColor(b.difficulty)}`}>{b.difficulty}</span>
                      </Link>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>

          {/* Difficulty breakdown */}
          {stats && (stats.easy + stats.medium + stats.hard) > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="card p-6 mt-6 sm:mt-8">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-primary-400" /> Difficulty Breakdown
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {(['Easy', 'Medium', 'Hard'] as const).map((d) => {
                  const count = d === 'Easy' ? stats.easy : d === 'Medium' ? stats.medium : stats.hard;
                  return (
                    <Link
                      key={d}
                      to={`/${d.toLowerCase()}`}
                      className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${difficultyGradient[d]} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative">
                        <div className={`text-3xl font-bold bg-gradient-to-br ${difficultyGradient[d]} bg-clip-text text-transparent`}>{count}</div>
                        <div className="text-sm text-slate-300 mt-1">{d} Solved</div>
                        <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 group-hover:text-primary-300 transition-colors">
                          Practice more <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}

          {data?.subscription?.plan !== 'premium' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}>
              <div className="mt-8 card p-6 bg-gradient-to-r from-primary-600 via-primary-500 to-indigo-600 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /> Upgrade to Premium
                    </h2>
                    <p className="text-white/80 text-sm mt-1">Unlock interview notes, edge cases, company frequency & more</p>
                  </div>
                  <Link to="/pricing" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all inline-flex items-center gap-2 shadow-lg shrink-0 group-hover:scale-105">
                    Upgrade <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Empty state nudge when nothing solved yet */}
          {summary.totalSolved === 0 && summary.submissions === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="card p-8 mt-6 sm:mt-8 text-center bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 border-violet-500/20">
              <Zap className="w-10 h-10 text-violet-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Start your first solve</h3>
              <p className="text-sm text-slate-400 mb-4">Pick a topic and submit your first solution to see your stats here.</p>
              <Link to="/questions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 text-white font-semibold text-sm hover:bg-violet-600 transition-all">
                Browse Questions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, title, hint, cta }: { icon: any; title: string; hint: string; cta: { label: string; to: string } }) {
  return (
    <div className="text-center py-6">
      <Icon className="w-8 h-8 text-slate-600 mx-auto mb-2" />
      <p className="text-sm text-white font-medium">{title}</p>
      <p className="text-xs text-slate-500 mt-1 mb-3">{hint}</p>
      <Link to={cta.to} className="inline-flex items-center gap-1 text-xs font-medium text-primary-400 hover:text-primary-300">
        {cta.label} <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
