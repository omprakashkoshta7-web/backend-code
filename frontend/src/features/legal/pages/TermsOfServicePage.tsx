import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using CodeSprout, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.',
  },
  {
    title: 'Account Registration',
    content: 'You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.',
  },
  {
    title: 'Subscription & Payments',
    content: 'Premium features require a paid subscription at ₹5/month. Payments are processed securely through Razorpay. Subscriptions auto-renew unless cancelled. Refunds are handled on a case-by-case basis.',
  },
  {
    title: 'User Conduct',
    content: 'You agree not to misuse the platform, including attempting to bypass premium features, scraping content, or engaging in any activity that disrupts the service for other users.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on CodeSprout — including questions, patterns, and learning materials — is owned by CodeSprout and protected by copyright. You may not reproduce or distribute content without permission.',
  },
  {
    title: 'Limitation of Liability',
    content: 'CodeSprout is provided "as is" without warranties. We are not liable for any damages arising from use of the platform, including loss of data or interruptions in service.',
  },
  {
    title: 'Termination',
    content: 'We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time from your profile settings.',
  },
  {
    title: 'Changes to Terms',
    content: 'We may update these terms at any time. Continued use after changes are posted constitutes acceptance of the new terms.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1020' }}>
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Terms of Service</h1>
        </div>
        <p className="text-white/40 text-sm mb-8">Last updated: June 2025</p>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <h2 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/20 flex items-center justify-center text-xs text-amber-300 font-bold shrink-0">{i + 1}</span>
                {section.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
