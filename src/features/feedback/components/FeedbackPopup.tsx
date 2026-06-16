import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackPopup({ isOpen, onClose }: FeedbackPopupProps) {
  console.log('[feedback] FeedbackPopup rendered, isOpen=', isOpen);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0) return;
    setSubmitting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comment }),
      });
      localStorage.setItem('feedback_submitted', 'true');
      toast.success('Thanks for your feedback!');
      onClose();
    } catch {
      toast.error('Failed to submit feedback');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSkip = () => {
    localStorage.setItem('feedback_submitted', 'true');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) handleSkip(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md mx-4 bg-[#1a1f36] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <button
              onClick={handleSkip}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">How was your experience?</h3>
                <p className="text-sm text-slate-400 mt-1">Your feedback helps us improve CodeSprout</p>
              </div>

              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-all hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-600'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value.slice(0, 500))}
                placeholder="Share your thoughts (optional)..."
                rows={3}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
              <p className="text-[10px] text-slate-500 mt-1 text-right">{comment.length}/500</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleSkip}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-white/5 transition-colors"
                >
                  Skip
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={rating === 0 || submitting}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? 'Sending...' : 'Send Feedback'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
