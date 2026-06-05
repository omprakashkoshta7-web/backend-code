import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Shield, ShieldOff } from 'lucide-react'

export default function Users() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetch = () => {
    setLoading(true)
    adminApi.getUsers().then((r) => setUsers(r.data)).catch(() => {}).finally(() => setLoading(false))
  }
  useEffect(() => { fetch() }, [])

  const handleToggleAdmin = async (user: any) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin'
    if (!confirm(`Set ${user.email} as ${newRole}?`)) return
    try {
      await adminApi.updateUser(user.id, { role: newRole })
      toast.success(`User role updated to ${newRole}`)
      fetch()
    } catch { toast.error('Failed') }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Name</th>
              <th className="text-left px-6 py-3 font-medium">Email</th>
              <th className="text-left px-6 py-3 font-medium">Role</th>
              <th className="text-left px-6 py-3 font-medium">Subscription</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{u.name}</td>
                <td className="px-6 py-4 text-gray-500">{u.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.subscription_plan === 'premium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {u.subscription_plan || 'free'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleToggleAdmin(u)} className="p-2 text-gray-400 hover:text-primary-600" title="Toggle admin role">
                    {u.role === 'admin' ? <ShieldOff className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
