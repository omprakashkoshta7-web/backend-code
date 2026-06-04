import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SUBSCRIPTION_PLANS } from '@/shared/utils/constants';
import PricingCard from '../components/PricingCard';
import FAQ from '@/shared/components/FAQ';
import toast from 'react-hot-toast';
import { Crown, Zap, Shield, Sparkles, Check, Calendar } from 'lucide-react';
import type { PricingPlan } from '../types/subscription';
import { subscriptionApi } from '../api/subscriptionApi';

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function daysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

interface SubData {
  plan?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
}

export default function PricingPage() {
  const navigate = useNavigate();
  const [subData, setSubData] = useState<SubData | null>(null);

  useEffect(() => {
    // Try localStorage first
    const isPremium = localStorage.getItem('subscription') === 'premium';
    if (isPremium) {
      try {
        const raw = localStorage.getItem('subscription_data');
        if (raw) { setSubData(JSON.parse(raw)); return; }
      } catch { /* ignore */ }
    }

    // Fetch from backend API
    const token = localStorage.getItem('token');
    if (!token) return;
    subscriptionApi.getStatus()
      .then((res) => {
        if (res.data && res.data.plan === 'premium') {
          setSubData(res.data);
          localStorage.setItem('subscription', 'premium');
          localStorage.setItem('subscription_data', JSON.stringify(res.data));
        }
      })
      .catch(() => {});
  }, []);

  const isPremium = !!subData && subData.plan === 'premium';

  const plans: (PricingPlan & { popular: boolean })[] = [
    { ...SUBSCRIPTION_PLANS.FREE, popular: false },
    { ...SUBSCRIPTION_PLANS.PREMIUM, popular: true },
  ];

  const handleSelect = (plan: PricingPlan) => {
    if (plan.price === 0) {
      navigate('/topics');
    } else {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login to subscribe');
        navigate('/login');
        return;
      }
      navigate('/payment');
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[#0B1020]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
                <Crown className="w-4 h-4" /> Pricing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-white">Simple </span>
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/50 leading-relaxed px-2"
            >
              Start free, upgrade when you need more. No hidden fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/40"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active Plan Banner */}
      {isPremium && subData && (
        <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-violet-500/10 via-[#111827] to-[#111827] border border-violet-500/30 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30 shrink-0">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">Premium Plan Active</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success-500/10 text-success-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>Started: <span className="text-white font-medium">{formatDate(subData.start_date || '')}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>Expires: <span className="text-white font-medium">{formatDate(subData.end_date || '')}</span></span>
                  </div>
                </div>
                {subData.end_date && (
                  <p className="mt-2 text-xs text-violet-400">
                    {daysRemaining(subData.end_date)} days remaining
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Pricing cards */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={i}
              onSelect={() => handleSelect(plan)}
              isCurrentPlan={isPremium && plan.price > 0}
            />
          ))}
        </div>
      </section>

      <div className="relative z-10">
        <FAQ />
      </div>
    </div>
  );
}
