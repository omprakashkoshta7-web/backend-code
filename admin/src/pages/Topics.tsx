import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function Topics() {
  const [topics, setTopics] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const fetch = () => {
    setLoading(true)
    adminApi.getTopics().then((r) => setTopics(r.data)).catch(() => {}).finally(() => setLoading(false))
  }
  useEffect(() => { fetch() }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editId) {
        await adminApi.updateTopic(editId, { name, description })
        toast.success('Topic updated')
      } else {
        await adminApi.addTopic({ name })
        toast.success('Topic added')
      }
      setShowForm(false); setEditId(null); setName(''); setDescription('')
      fetch()
    } catch { toast.error('Failed') }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this topic?')) return
    try {
      await adminApi.deleteTopic(id)
      toast.success('Deleted')
      fetch()
    } catch { toast.error('Failed') }
  }

  const handleEdit = (t: any) => {
    setName(t.name); setDescription(t.description || '')
    setEditId(t.id); setShowForm(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Topics</h1>
        <button onClick={() => { setShowForm(true); setEditId(null); setName(''); setDescription('') }} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Topic
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary">{editId ? 'Update' : 'Add'} Topic</button>
            <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Name</th>
              <th className="text-left px-6 py-3 font-medium">Slug</th>
              <th className="text-left px-6 py-3 font-medium">Questions</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {topics.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{t.name}</td>
                <td className="px-6 py-4 text-gray-500">{t.slug}</td>
                <td className="px-6 py-4 text-gray-500">{t.questionCount || 0}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleEdit(t)} className="p-2 text-gray-400 hover:text-primary-600"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
