import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Loader2, Trophy, RotateCcw, CheckCircle2, AlertCircle, XCircle, Clock, Target, BarChart3,
} from 'lucide-react';
import { interviewApi } from '../api/interviewApi';
import type { MockSession } from '../types';
import SEO from '@/shared/components/SEO';
import { useUser } from '@/shared/hooks/useUser';

export default function MockResultPage() {
  return (
    <>
      <SEO
        title="Mock Interview Result - CodeSprout"
        description="Review your mock interview performance with per-question feedback."
        path="/interview-prep/mock-result"
        noindex
      />
      <MockResultContent />
    </>
  );
}

function MockResultContent() {
  const { id = '' } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useUser();
  const [session, setSession] = useState<MockSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=' + encodeURIComponent(window.location.pathname));
      return;
    }
    interviewApi.getMockSession(id)
      .then((res) => setSession(res.data))
      .catch((e) => setError(e?.response?.data?.error || 'Failed to load session'))
      .finally(() => setLoading(false));
  }, [id, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">Couldn't load session</h2>
          <p className="text-sm text-slate-400 mb-4">{error || 'Session not found'}</p>
          <Link
            to="/interview-prep/dashboard"
            className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const answers = session.answers || [];
  const knew = answers.filter(a => a.score >= 70).length;
  const partial = answers.filter(a => a.score >= 40 && a.score < 70).length;
  const missed = answers.filter(a => a.score < 40).length;
  const totalScore = session.overall_score || (answers.length > 0 ? Math.round(answers.reduce((s, a) => s + a.score, 0) / answers.length) : 0);
  const duration = session.ended_at
    ? Math.round((new Date(session.ended_at).getTime() - new Date(session.started_at).getTime()) / 1000)
    : 0;

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/interview-prep/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-4">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>

        <div className="text-center mb-6">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Mock Interview Result
          </h1>
          <p className="text-sm text-slate-400 mt-1">{session.subject} · {session.round_type} · {new Date(session.started_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        </div>

        <div className="bg-gradient-to-br from-primary-500/20 to-pink-500/20 border border-primary-500/30 rounded-2xl p-6 sm:p-8 text-center mb-6">
          <div className="text-5xl sm:text-6xl font-extrabold text-white mb-1">{totalScore}%</div>
          <div className="text-sm text-slate-300">Overall Score</div>
          {duration > 0 && (
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" /> {Math.floor(duration / 60)}m {duration % 60}s
            </div>
          )}
          <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-emerald-500/15">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <div className="text-emerald-300 font-bold text-lg">{knew}</div>
              <div className="text-xs text-slate-400">Knew it</div>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/15">
              <AlertCircle className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <div className="text-amber-300 font-bold text-lg">{partial}</div>
              <div className="text-xs text-slate-400">Partial</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-500/15">
              <XCircle className="w-5 h-5 text-rose-400 mx-auto mb-1" />
              <div className="text-rose-300 font-bold text-lg">{missed}</div>
              <div className="text-xs text-slate-400">Missed</div>
            </div>
          </div>
        </div>

        {answers.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center mb-6">
            <p className="text-sm text-slate-400">This session was abandoned before any answers were submitted.</p>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            <h3 className="text-lg font-bold text-white">Question-by-Question</h3>
            {answers.map((a, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-start gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    a.score >= 70 ? 'bg-emerald-500/20 text-emerald-400' : a.score >= 40 ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {a.score}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white">{a.question}</div>
                    <div className="text-xs text-slate-400 mt-1.5">
                      <span className="text-primary-400 font-semibold">Feedback:</span> {a.feedback}
                    </div>
                    <details className="mt-1.5 text-xs">
                      <summary className="text-slate-400 cursor-pointer hover:text-white">Your answer</summary>
                      <div className="mt-1 p-2 rounded bg-slate-800/50 text-slate-300">{a.user_answer}</div>
                    </details>
                    <details className="mt-1 text-xs">
                      <summary className="text-slate-400 cursor-pointer hover:text-white">Expected answer</summary>
                      <div className="mt-1 p-2 rounded bg-slate-800/50 text-slate-300">{a.expected_answer}</div>
                    </details>
                    {a.audio_data_url && (
                      <audio src={a.audio_data_url} controls className="mt-2 h-8" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Link
            to="/interview-prep/dashboard"
            className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl flex items-center justify-center gap-1.5"
          >
            Back to Dashboard
          </Link>
          <Link
            to={`/interview-prep/mock?subject=${encodeURIComponent(session.subject)}`}
            className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}
