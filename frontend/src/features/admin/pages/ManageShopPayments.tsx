import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import { adminApi } from '../api/adminApi';
import { formatDate } from '@/shared/utils/helpers';
import { CreditCard, CheckCircle, XCircle, Clock, Search } from 'lucide-react';

export default function ManageShopPayments() {
  const [purchases, setPurchases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    adminApi.getShopPurchases().then(r => setPurchases(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const filtered = purchases.filter(p =>
    !search || p.product_title?.toLowerCase().includes(search.toLowerCase()) ||
    p.user_name?.toLowerCase().includes(search.toLowerCase()) ||
    p.user_email?.toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status: string) => {
    switch (status) {
      case 'verified': return <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400"><CheckCircle className="w-3 h-3" /> Verified</span>;
      case 'pending': return <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400"><Clock className="w-3 h-3" /> Pending</span>;
      case 'failed': return <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400"><XCircle className="w-3 h-3" /> Failed</span>;
      default: return <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-slate-400">{status}</span>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Shop Payments</h1>
              <p className="text-slate-400">{purchases.length} total purchase{purchases.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product, user..."
                className="w-64 pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm"
              />
            </div>
          </div>

          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-[#111827] rounded-xl p-4 animate-pulse"><div className="h-5 bg-gray-700 rounded w-64" /></div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <CreditCard className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">{search ? 'No matching purchases' : 'No shop purchases yet'}</p>
            </div>
          ) : (
            <div className="bg-[#111827] rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E293B] border-b border-white/10">
                    <th className="text-left px-4 py-3 font-medium text-slate-400">User</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Product</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Amount</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Status</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Razorpay Payment ID</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Date</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Downloads</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3">
                        <div className="font-medium text-white">{p.user_name}</div>
                        <div className="text-xs text-slate-500">{p.user_email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-white">{p.product_title}</div>
                        <div className="text-xs text-slate-500">{p.product_category}</div>
                      </td>
                      <td className="px-4 py-3 text-white font-medium">₹{p.amount}</td>
                      <td className="px-4 py-3">{statusBadge(p.status)}</td>
                      <td className="px-4 py-3 text-slate-400 text-xs font-mono">{p.razorpay_payment_id || '-'}</td>
                      <td className="px-4 py-3 text-slate-400">{formatDate(p.created_at)}</td>
                      <td className="px-4 py-3 text-slate-400 text-center">{p.download_count || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
