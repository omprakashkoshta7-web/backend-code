import { motion } from 'framer-motion';
import { Users, BookOpen, Star, CreditCard } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import { useAdminStats } from '../hooks/useAdmin';

export default function AdminDashboard() {
  const { stats, loading } = useAdminStats();

  const cards = stats ? [
    { icon: Users, label: 'Total Users', value: stats.total_users, color: 'blue' },
    { icon: BookOpen, label: 'Questions', value: stats.total_questions, color: 'green' },
    { icon: Star, label: 'Bookmarks', value: stats.total_bookmarks, color: 'yellow' },
    { icon: CreditCard, label: 'Premium Users', value: stats.premium_users, color: 'purple' },
  ] : [];

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Overview</h1>
          <p className="text-gray-500 mb-8">Platform statistics at a glance</p>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card p-6 animate-pulse"><div className="h-8 bg-gray-200 rounded w-16 mb-2" /><div className="h-4 bg-gray-200 rounded w-24" /></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cards.map((card) => (
                <div key={card.label} className="card p-6">
                  <card.icon className={`w-8 h-8 text-${card.color}-500 mb-3`} />
                  <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
