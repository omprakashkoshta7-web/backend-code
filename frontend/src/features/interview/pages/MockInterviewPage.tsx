import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Mic, MicOff, Square, Loader2, Send, ArrowRight, Trophy, RotateCcw, CheckCircle2,
  AlertCircle, XCircle, Sparkles, ChevronLeft, Cpu, Terminal, MessageCircle, UserCheck, Clock, Target,
  Play,
} from 'lucide-react';
import { interviewApi } from '../api/interviewApi';
import type { MockSession, MockAnswer, MockRoundType } from '../types';
import { MOCK_ROUND_TYPES } from '../data/roles';
import SEO from '@/shared/components/SEO';
import { useUser } from '@/shared/hooks/useUser';

const ICON_MAP: Record<string, any> = { Cpu, Terminal, MessageCircle, UserCheck };

export default function MockInterviewPage() {
  return (
    <>
      <SEO
        title="Mock Interview - CodeSprout"
        description="Simulate a real interview with AI feedback on your answers."
        path="/interview-prep/mock"
        noindex
      />
      <MockInterviewContent />
    </>
  );
}

function MockInterviewContent() {
  const navigate = useNavigate();
  const user = useUser();
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject') || '';

  const [session, setSession] = useState<MockSession | null>(null);
  const [subject, setSubject] = useState(subjectParam);
  const [roundType, setRoundType] = useState<MockRoundType>('technical');
  const [numQuestions, setNumQuestions] = useState(5);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState('');
  const [prefs, setPrefs] = useState<any>(null);
  const [loadingPrefs, setLoadingPrefs] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=' + encodeURIComponent(window.location.pathname + window.location.search));
      return;
    }
    interviewApi.getPreferences()
      .then(p => {
        if (!p.data) {
          navigate('/interview-prep/setup');
          return;
        }
        setPrefs(p.data);
        if (!subjectParam && p.data.subjects?.length > 0) {
          setSubject(p.data.subjects[0]);
        }
      })
      .catch(() => navigate('/interview-prep/setup'))
      .finally(() => setLoadingPrefs(false));
  }, [user]);

  const start = async () => {
    if (!subject.trim()) { setError('Please select a subject'); return; }
    setError('');
    setStarting(true);
    try {
      const res = await interviewApi.startMock(subject, roundType, numQuestions);
      setSession(res.data);
    } catch (e: any) {
      setError(e?.response?.data?.error || 'Failed to start mock');
    } finally {
      setStarting(false);
    }
  };

  if (loadingPrefs) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link to="/interview-prep/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-4">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Start Mock Interview
          </h1>
          <p className="text-sm text-slate-400 mb-6">AI will grade your technical accuracy. Audio is recorded for review.</p>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary-500"
              >
                <option value="">Select a subject...</option>
                {prefs?.subjects?.map((s: string) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Round Type</label>
              <div className="grid grid-cols-2 gap-2">
                {MOCK_ROUND_TYPES.map((rt) => {
                  const Icon = ICON_MAP[rt.icon] || Cpu;
                  const isActive = roundType === rt.id;
                  return (
                    <button
                      key={rt.id}
                      onClick={() => setRoundType(rt.id)}
                      className={`p-3 rounded-xl border text-left transition ${
                        isActive
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-primary-400' : 'text-slate-400'}`} />
                      <div className="text-sm font-semibold text-white">{rt.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{rt.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Number of Questions</label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 8, 10].map(n => (
                  <button
                    key={n}
                    onClick={() => setNumQuestions(n)}
                    className={`py-2.5 rounded-lg font-semibold text-sm transition ${
                      numQuestions === n ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">{error}</div>
            )}

            <button
              onClick={start}
              disabled={starting || !subject}
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              {starting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {starting ? 'Preparing questions...' : 'Start Mock Interview'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <MockSessionView session={session} onFinish={() => { setSession(null); navigate('/interview-prep/dashboard'); }} />;
}

// =============== ACTIVE SESSION ===============

function MockSessionView({ session, onFinish }: { session: MockSession; onFinish: () => void }) {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [audioDataUrl, setAudioDataUrl] = useState<string | undefined>(undefined);
  const [recording, setRecording] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<{ score: number; feedback: string; overall_score: number } | null>(null);
  const [answers, setAnswers] = useState<MockAnswer[]>(session.answers || []);
  const [done, setDone] = useState(session.status === 'completed');
  const [abandoning, setAbandoning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState('');
  const startedAtRef = useRef<number>(Date.now());

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => setAudioDataUrl(reader.result as string);
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start();
      setRecording(true);
    } catch (err) {
      alert('Microphone access denied. You can still type your answer.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  const submit = async () => {
    if (!answer.trim() || submitting) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await interviewApi.submitAnswer(session.id, session.questions[idx].id, answer, audioDataUrl);
      const fb = res.data;
      setLastFeedback({ score: fb.technical_accuracy, feedback: fb.feedback, overall_score: fb.overall_score });
      setAnswers(a => [...a, {
        question_id: session.questions[idx].id,
        question: session.questions[idx].question,
        expected_answer: session.questions[idx].expected_answer,
        user_answer: answer,
        audio_data_url: audioDataUrl,
        feedback: fb.feedback,
        technical_accuracy: fb.technical_accuracy,
        score: fb.technical_accuracy,
        answered_at: new Date().toISOString(),
      }]);
    } catch (e: any) {
      setError(e?.response?.data?.error || 'Failed to evaluate answer');
    } finally {
      setSubmitting(false);
    }
  };

  const next = () => {
    setLastFeedback(null);
    setAnswer('');
    setAudioDataUrl(undefined);
    if (idx + 1 >= session.questions.length) {
      finishSession();
    } else {
      setIdx(idx + 1);
    }
  };

  const finishSession = async () => {
    setAbandoning(true);
    try {
      await interviewApi.endMock(session.id);
      setDone(true);
    } catch { /* ignore */ }
    finally { setAbandoning(false); }
  };

  if (done) {
    return <MockResultScreen session={{ ...session, answers }} onClose={onFinish} />;
  }

  if (!session.questions || session.questions.length === 0) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-white mb-2">No questions available</h2>
          <p className="text-sm text-slate-400 mb-4">We couldn't load questions for this subject. Please try again or pick a different subject.</p>
          <button
            onClick={onFinish}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (idx >= session.questions.length) {
    setIdx(session.questions.length - 1);
    return null;
  }

  const q = session.questions[idx];
  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <Link to="/interview-prep/dashboard" onClick={(e) => { if (!confirm('Leave mock interview? Progress will be saved.')) e.preventDefault(); }} className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Exit
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-400 flex items-center gap-1"><Clock className="w-4 h-4" /> {formatTime(elapsed)}</span>
            <span className="text-slate-400">Q {idx + 1}/{session.questions.length}</span>
          </div>
        </div>

        <div className="h-2 bg-slate-800 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-pink-500 transition-all" style={{ width: `${((idx) / session.questions.length) * 100}%` }} />
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">{session.round_type}</span>
            <span className="text-xs text-slate-400">{session.subject}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-5">{q.question}</h2>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here. Be specific and thorough — AI will grade technical accuracy."
            rows={6}
            disabled={!!lastFeedback}
            className="w-full px-3 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 text-sm disabled:opacity-50"
          />

          <div className="flex flex-wrap items-center gap-2 mt-3">
            {!recording ? (
              <button
                onClick={startRecording}
                disabled={!!lastFeedback}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 text-sm rounded-lg flex items-center gap-1.5"
              >
                <Mic className="w-4 h-4" /> Record audio {audioDataUrl ? '(re-record)' : ''}
              </button>
            ) : (
              <button onClick={stopRecording} className="px-3 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-sm rounded-lg flex items-center gap-1.5 animate-pulse">
                <Square className="w-3.5 h-3.5" /> Stop recording
              </button>
            )}
            {audioDataUrl && !recording && (
              <audio src={audioDataUrl} controls className="h-9 rounded" />
            )}
          </div>

          {error && (
            <div className="mt-3 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">{error}</div>
          )}

          <AnimatePresence>
            {lastFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-pink-500/10 border border-primary-500/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white">AI Feedback</div>
                  <div className={`text-2xl font-extrabold ${lastFeedback.score >= 70 ? 'text-emerald-400' : lastFeedback.score >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                    {lastFeedback.score}%
                  </div>
                </div>
                <div className="text-sm text-slate-200 mb-3">{lastFeedback.feedback}</div>
                <div className="text-xs text-slate-400 border-t border-slate-700 pt-2">
                  <strong className="text-primary-400">Expected answer:</strong> {q.expected_answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800">
            <button
              onClick={async () => {
                if (!confirm('End this mock interview now? You can review the results on your dashboard.')) return;
                await finishSession();
              }}
              disabled={abandoning}
              className="text-sm text-slate-500 hover:text-rose-400 transition"
            >
              End interview
            </button>
            {!lastFeedback ? (
              <button
                onClick={submit}
                disabled={!answer.trim() || submitting}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 disabled:opacity-30 text-white font-semibold rounded-xl flex items-center gap-2"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                Submit & Get Feedback
              </button>
            ) : (
              <button
                onClick={next}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl flex items-center gap-2"
              >
                {idx + 1 >= session.questions.length ? 'Finish' : 'Next Question'} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-3 text-center text-xs text-slate-500">
          Overall score so far: <span className="text-white font-bold">{lastFeedback?.overall_score ?? (answers.length > 0 ? Math.round(answers.reduce((s, a) => s + a.score, 0) / answers.length) : 0)}%</span>
        </div>
      </div>
    </div>
  );
}

function MockResultScreen({ session, onClose }: { session: MockSession; onClose: () => void }) {
  const navigate = useNavigate();
  const knew = session.answers.filter(a => a.score >= 70).length;
  const partial = session.answers.filter(a => a.score >= 40 && a.score < 70).length;
  const missed = session.answers.filter(a => a.score < 40).length;
  const totalScore = session.overall_score || (session.answers.length > 0 ? Math.round(session.answers.reduce((s, a) => s + a.score, 0) / session.answers.length) : 0);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Interview Complete!
          </h1>
          <p className="text-sm text-slate-400 mt-1">{session.subject} · {session.round_type}</p>
        </div>

        <div className="bg-gradient-to-br from-primary-500/20 to-pink-500/20 border border-primary-500/30 rounded-2xl p-6 sm:p-8 text-center mb-6">
          <div className="text-5xl sm:text-6xl font-extrabold text-white mb-1">{totalScore}%</div>
          <div className="text-sm text-slate-300">Overall Score</div>
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

        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-bold text-white">Question-by-Question</h3>
          {session.answers.map((a, i) => (
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

        <div className="flex flex-wrap gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl flex items-center justify-center gap-1.5"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/interview-prep/dashboard')}
            className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" /> Practice More
          </button>
        </div>
      </div>
    </div>
  );
}
