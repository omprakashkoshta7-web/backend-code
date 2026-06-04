import { motion } from 'framer-motion';
import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';
import type { PricingPlan } from '../types/subscription';

export default function PricingCard({ plan, index, onSelect, isCurrentPlan }: { plan: PricingPlan; index: number; onSelect: () => void; isCurrentPlan?: boolean }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden ${
        isPopular
          ? 'bg-gradient-to-b from-violet-500/10 via-[#111827] to-[#111827] border border-violet-500/30 shadow-2xl shadow-violet-500/10'
          : 'bg-[#111827] border border-white/5'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          {isPopular && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-4"
            >
              <Sparkles className="w-3 h-3" /> Most Popular
            </motion.span>
          )}

          <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
            isPopular
              ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30'
              : 'bg-white/5'
          }`}>
            <Crown className={`w-7 h-7 ${isPopular ? 'text-white' : 'text-white/40'}`} />
          </div>

          <h3 className="text-xl font-bold text-white">{plan.name}</h3>

          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-extrabold text-white">₹{plan.price}</span>
            {plan.price > 0 && <span className="text-white/40 text-sm">/month</span>}
            {plan.price === 0 && <span className="text-white/20 text-sm ml-1">forever</span>}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((f, i) => {
            const isExcluded = plan.price === 0 && i > 2;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isPopular ? 'bg-violet-500/10' : 'bg-white/5'
                }`}>
                  {isExcluded ? (
                    <X className="w-3 h-3 text-white/20" />
                  ) : (
                    <Check className={`w-3 h-3 ${isPopular ? 'text-violet-400' : 'text-emerald-400'}`} />
                  )}
                </span>
                <span className={isExcluded ? 'text-white/25' : 'text-white/60'}>{f}</span>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        {isCurrentPlan ? (
          <div className="w-full py-3.5 rounded-xl font-semibold bg-success-500/10 border border-success-500/20 text-success-400 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Current Plan
          </div>
        ) : (
          <button
            onClick={onSelect}
            className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 ${
              isPopular
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
            }`}
          >
            {plan.price === 0 ? 'Get Started Free' : 'Upgrade to Premium'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
