import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Check, X } from 'lucide-react'

export default function Payments() {
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetch = () => {
    setLoading(true)
    adminApi.getPayments().then((r) => setPayments(r.data)).catch(() => {}).finally(() => setLoading(false))
  }
  useEffect(() => { fetch() }, [])

  const handleVerify = async (id: string, action: 'verify' | 'reject') => {
    try {
      await adminApi.verifyPayment(id, action)
      toast.success(`Payment ${action}ed`)
      fetch()
    } catch { toast.error('Failed') }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Payments</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">ID</th>
              <th className="text-left px-6 py-3 font-medium">User</th>
              <th className="text-left px-6 py-3 font-medium">Amount</th>
              <th className="text-left px-6 py-3 font-medium">UTR</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Date</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#{p.id}</td>
                <td className="px-6 py-4">
                  <div className="text-gray-900">{p.user_name}</div>
                  <div className="text-xs text-gray-500">{p.user_email}</div>
                </td>
                <td className="px-6 py-4">₹{p.amount}</td>
                <td className="px-6 py-4 font-mono text-xs">{p.utr || '-'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === 'verified' ? 'bg-green-100 text-green-700' : p.status === 'failed' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>{p.status}</span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">{new Date(p.created_at).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  {p.status === 'pending' && (
                    <>
                      <button onClick={() => handleVerify(p.id, 'verify')} className="p-2 text-green-500 hover:text-green-700"><Check className="w-4 h-4" /></button>
                      <button onClick={() => handleVerify(p.id, 'reject')} className="p-2 text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
