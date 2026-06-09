import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide when creating an account, including name, email address, and profile picture (if using Google OAuth). We also collect usage data such as questions viewed, patterns studied, and progress to improve your learning experience.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Your information is used to personalize your learning journey, track your progress, suggest relevant patterns and questions, and improve our platform. We do not sell your personal data to third parties.',
  },
  {
    title: 'Data Storage & Security',
    content: 'Your data is stored securely on MongoDB Atlas with encryption at rest. Passwords are hashed using bcrypt. We use industry-standard security practices to protect your information from unauthorized access.',
  },
  {
    title: 'Cookies & Tracking',
    content: 'We use essential cookies for authentication and session management. We do not use tracking cookies or third-party analytics that share data with advertisers.',
  },
  {
    title: 'Third-Party Services',
    content: 'We use Google OAuth for optional social login, Razorpay for payment processing, and MongoDB Atlas for database hosting. Each service has its own privacy policy governing data handling.',
  },
  {
    title: 'Your Rights',
    content: 'You can update or delete your account information at any time via your profile settings. To request complete account deletion, contact us at support@codesprout.com. We will respond within 30 days.',
  },
  {
    title: 'Data Retention',
    content: 'We retain your account data until you request deletion. Usage analytics may be retained in anonymized form for platform improvement purposes.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the platform constitutes acceptance of any changes.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B1020' }}>
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
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
                <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center text-xs text-purple-300 font-bold shrink-0">{i + 1}</span>
                {section.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-white/40 text-sm">
            Questions? Contact us at{' '}
            <a href="mailto:support@codesprout.com" className="text-purple-400 hover:text-purple-300 transition-colors">support@codesprout.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
