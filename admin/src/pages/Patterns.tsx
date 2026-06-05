import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Plus, Edit2, Trash2, X } from 'lucide-react'

interface FlowStep {
  step: string
  desc: string
}

interface PatternForm {
  slug: string
  name: string
  category: string
  summary: string
  template: string
  tips: string
  traps: string
  time_complexity: string
  space_complexity: string
  flow: FlowStep[]
}

const EMPTY_FORM: PatternForm = {
  slug: '',
  name: '',
  category: '',
  summary: '',
  template: '',
  tips: '',
  traps: '',
  time_complexity: '',
  space_complexity: '',
  flow: [
    { step: 'Step 1', desc: '' },
    { step: 'Step 2', desc: '' },
  ],
}

export default function Patterns() {
  const [patterns, setPatterns] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [form, setForm] = useState<PatternForm>(EMPTY_FORM)
  const [search, setSearch] = useState('')

  const loadData = () => {
    setLoading(true)
    adminApi.getPatterns()
      .then((r) => setPatterns(r.data))
      .catch(() => toast.error('Failed to load patterns'))
      .finally(() => setLoading(false))
  }
  useEffect(() => { loadData() }, [])

  const filtered = patterns.filter((p) => {
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.slug.includes(q)
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload: any = {
      name: form.name.trim(),
      category: form.category.trim() || 'General',
      summary: form.summary.trim(),
      template: form.template,
      tips: form.tips.split('\n').map((s) => s.trim()).filter(Boolean),
      traps: form.traps.split('\n').map((s) => s.trim()).filter(Boolean),
      time_complexity: form.time_complexity.trim() || 'N/A',
      space_complexity: form.space_complexity.trim() || 'N/A',
      flow: form.flow.filter((s) => s.step.trim() || s.desc.trim()),
    }
    if (form.slug.trim()) payload.slug = form.slug.trim()

    try {
      if (editSlug) {
        await adminApi.updatePattern(editSlug, payload)
        toast.success('Pattern updated')
      } else {
        await adminApi.addPattern(payload)
        toast.success('Pattern added')
      }
      setShowForm(false)
      setEditSlug(null)
      setForm(EMPTY_FORM)
      loadData()
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to save pattern')
    }
  }

  const handleEdit = async (slug: string) => {
    try {
      const res = await adminApi.getPattern(slug)
      const p = res.data
      setForm({
        slug: p.slug,
        name: p.name,
        category: p.category || '',
        summary: p.summary || '',
        template: p.template || '',
        tips: (p.tips || []).join('\n'),
        traps: (p.traps || []).join('\n'),
        time_complexity: p.time_complexity || '',
        space_complexity: p.space_complexity || '',
        flow: p.flow && p.flow.length > 0 ? p.flow : [{ step: 'Step 1', desc: '' }],
      })
      setEditSlug(slug)
      setShowForm(true)
    } catch {
      toast.error('Failed to load pattern')
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete pattern "${slug}"? This cannot be undone.`)) return
    try {
      await adminApi.deletePattern(slug)
      toast.success('Pattern deleted')
      loadData()
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to delete')
    }
  }

  const handleNew = () => {
    setForm(EMPTY_FORM)
    setEditSlug(null)
    setShowForm(true)
  }

  const updateFlowStep = (idx: number, field: keyof FlowStep, value: string) => {
    const next = [...form.flow]
    next[idx] = { ...next[idx], [field]: value }
    setForm({ ...form, flow: next })
  }

  const addFlowStep = () => {
    setForm({ ...form, flow: [...form.flow, { step: `Step ${form.flow.length + 1}`, desc: '' }] })
  }

  const removeFlowStep = (idx: number) => {
    setForm({ ...form, flow: form.flow.filter((_, i) => i !== idx) })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patterns</h1>
          <p className="text-sm text-gray-500 mt-1">Manage pattern detail pages shown to users.</p>
        </div>
        <button onClick={handleNew} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Pattern
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search patterns by name, category, or slug..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200"
        />
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-6 mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{editSlug ? 'Edit Pattern' : 'New Pattern'}</h2>
            <button type="button" onClick={() => { setShowForm(false); setEditSlug(null) }} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="e.g. Kadane's Algorithm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug {editSlug ? '(read-only)' : '(auto if empty)'}
              </label>
              <input
                type="text" value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                disabled={!!editSlug}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="e.g. kadanes-algorithm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text" value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="e.g. Array, DP, Graph"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Complexity</label>
              <input
                type="text" value={form.time_complexity}
                onChange={(e) => setForm({ ...form, time_complexity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="e.g. O(n)"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Space Complexity</label>
              <input
                type="text" value={form.space_complexity}
                onChange={(e) => setForm({ ...form, space_complexity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="e.g. O(1)"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Summary *</label>
            <textarea
              rows={3} required value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
              placeholder="One- or two-sentence description of the pattern and when to use it."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">How It Works (flow steps)</label>
              <button type="button" onClick={addFlowStep} className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add step
              </button>
            </div>
            <div className="space-y-2">
              {form.flow.map((s, i) => (
                <div key={i} className="flex gap-2 items-start p-3 rounded-xl border border-gray-200 bg-gray-50">
                  <span className="text-xs font-mono w-6 mt-2.5 text-gray-400">{i + 1}.</span>
                  <input
                    type="text" value={s.step}
                    onChange={(e) => updateFlowStep(i, 'step', e.target.value)}
                    placeholder="Step title"
                    className="w-40 px-3 py-2 rounded-lg border border-gray-200 text-sm"
                  />
                  <textarea
                    rows={1} value={s.desc}
                    onChange={(e) => updateFlowStep(i, 'desc', e.target.value)}
                    placeholder="Description"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm"
                  />
                  <button type="button" onClick={() => removeFlowStep(i)} className="p-1.5 text-gray-400 hover:text-red-500" title="Remove step">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Code Template</label>
            <textarea
              rows={6} value={form.template}
              onChange={(e) => setForm({ ...form, template: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm"
              placeholder="Pseudocode or starter template..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tips (one per line)</label>
              <textarea
                rows={4} value={form.tips}
                onChange={(e) => setForm({ ...form, tips: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="Use Map() for better key types&#10;Initialize with default values..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Common Traps (one per line)</label>
              <textarea
                rows={4} value={form.traps}
                onChange={(e) => setForm({ ...form, traps: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200"
                placeholder="Forgetting to handle duplicates&#10;Off-by-one errors..."
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn-primary">{editSlug ? 'Update Pattern' : 'Create Pattern'}</button>
            <button type="button" onClick={() => { setShowForm(false); setEditSlug(null) }} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="card overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No patterns found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Name</th>
                <th className="text-left px-6 py-3 font-medium">Slug</th>
                <th className="text-left px-6 py-3 font-medium">Category</th>
                <th className="text-left px-6 py-3 font-medium">Time</th>
                <th className="text-left px-6 py-3 font-medium">Space</th>
                <th className="text-right px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((p) => (
                <tr key={p.slug} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{p.slug}</td>
                  <td className="px-6 py-4 text-gray-500">{p.category}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{p.time_complexity}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{p.space_complexity}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleEdit(p.slug)} className="p-2 text-gray-400 hover:text-primary-600"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(p.slug)} className="p-2 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
