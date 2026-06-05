import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import { Users, ListChecks, BookOpen, CreditCard } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    adminApi.getStats().then((r) => setStats(r.data)).catch(() => {})
  }, [])

  const cards = [
    { label: 'Total Users', value: stats?.total_users ?? '...', icon: Users, color: 'bg-blue-500' },
    { label: 'Questions', value: stats?.total_questions ?? '...', icon: ListChecks, color: 'bg-green-500' },
    { label: 'Topics', value: stats?.total_topics ?? '...', icon: BookOpen, color: 'bg-purple-500' },
    { label: 'Premium Users', value: stats?.premium_users ?? 0, icon: CreditCard, color: 'bg-yellow-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((c) => (
          <div key={c.label} className="card p-6 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center`}>
              <c.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{c.value}</div>
              <div className="text-sm text-gray-500">{c.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
