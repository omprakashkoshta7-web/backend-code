import { useEffect, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Plus, Edit2, Trash2, X, ChevronDown, ChevronUp } from 'lucide-react'

const TOPICS = ['Arrays', 'Strings', 'Hashing', 'Linked List', 'Stack', 'Queue', 'Heap', 'Trees', 'BST', 'Graphs']

export default function Questions() {
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const [form, setForm] = useState({
    title: '', difficulty: 'Easy', topic_id: '', description: '',
    pattern: '', problem_statement: '', constraints: '',
    visualization_type: 'array', sample_input: '',
  })

  const [examples, setExamples] = useState<{ input: string; output: string; explanation: string }[]>([
    { input: '', output: '', explanation: '' }
  ])

  const [testCases, setTestCases] = useState<{ id?: string; input: string; expected_output: string; is_hidden: boolean }[]>([
    { input: '', expected_output: '', is_hidden: false }
  ])
  const [loadingTests, setLoadingTests] = useState(false)

  const fetch = () => {
    setLoading(true)
    adminApi.getQuestions().then((r) => setQuestions(r.data)).catch(() => {}).finally(() => setLoading(false))
  }
  useEffect(() => { fetch() }, [])

  const resetForm = () => {
    setForm({ title: '', difficulty: 'Easy', topic_id: '', description: '', pattern: '', problem_statement: '', constraints: '', visualization_type: 'array', sample_input: '' })
    setExamples([{ input: '', output: '', explanation: '' }])
    setTestCases([{ input: '', expected_output: '', is_hidden: false }])
    setEditId(null)
    setEditSlug(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validExamples = examples.filter(ex => ex.input && ex.output)
      const sampleTests = testCases.filter(tc => tc.input && tc.expected_output && !tc.is_hidden)
      const hiddenTests = testCases.filter(tc => tc.input && tc.expected_output && tc.is_hidden)

      const payload = {
        ...form,
        topic_id: form.topic_id.toLowerCase().replace(/\s+/g, '-'),
        examples: validExamples.length > 0 ? validExamples : undefined,
        sample_tests: sampleTests,
        hidden_tests: hiddenTests,
      }

      if (editId) {
        await adminApi.updateQuestion(editId, payload)
        toast.success('Question updated')
      } else {
        await adminApi.addQuestion(payload)
        toast.success('Question added')
      }
      setShowForm(false)
      resetForm()
      fetch()
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this question?')) return
    try {
      await adminApi.deleteQuestion(id)
      toast.success('Deleted')
      fetch()
    } catch { toast.error('Failed to delete') }
  }

  const handleEdit = async (q: any) => {
    setEditId(q.id)
    setEditSlug(q.slug)
    setForm({
      title: q.title || '', difficulty: q.difficulty || 'Easy', topic_id: q.topic_name || '',
      description: q.description || '', pattern: q.pattern || '',
      problem_statement: q.problem_statement || '', constraints: q.constraints || '',
      visualization_type: q.visualization_type || 'array', sample_input: q.sample_input || '',
    })

    // Load examples
    if (q.examples && q.examples.length > 0) {
      setExamples(q.examples.map((e: any) => ({ input: e.input, output: e.output, explanation: e.explanation || '' })))
    } else {
      setExamples([{ input: '', output: '', explanation: '' }])
    }

    // Load test cases
    setLoadingTests(true)
    try {
      const res = await adminApi.getTestCases(q.slug)
      if (res.data.length > 0) {
        setTestCases(res.data)
      } else {
        setTestCases([{ input: '', expected_output: '', is_hidden: false }])
      }
    } catch {
      setTestCases([{ input: '', expected_output: '', is_hidden: false }])
    }
    setLoadingTests(false)

    setShowForm(true)
    setExpandedRow(q.id)
  }

  const addExample = () => setExamples(prev => [...prev, { input: '', output: '', explanation: '' }])
  const removeExample = (i: number) => setExamples(prev => prev.filter((_, idx) => idx !== i))
  const updateExample = (i: number, field: string, value: string) => {
    setExamples(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: value } : e))
  }

  const addTestCase = () => setTestCases(prev => [...prev, { input: '', expected_output: '', is_hidden: false }])
  const removeTestCase = (i: number) => setTestCases(prev => prev.filter((_, idx) => idx !== i))
  const updateTestCase = (i: number, field: string, value: any) => {
    setTestCases(prev => prev.map((tc, idx) => idx === i ? { ...tc, [field]: value } : tc))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Questions</h1>
        <button onClick={() => { setShowForm(true); resetForm() }} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Question
        </button>
      </div>

      {/* Edit/Add Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 pb-8 bg-black/40 overflow-y-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">{editId ? 'Edit Question' : 'Add Question'}</h2>
              <button onClick={() => { setShowForm(false); resetForm() }} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Tabs */}
              <div className="flex gap-1 px-6 pt-4">
                {['Basic', 'Content', 'Test Cases'].map(tab => (
                  <button key={tab} type="button" onClick={() => setExpandedRow(expandedRow === `tab-${tab}` ? null : `tab-${tab}`)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${expandedRow === `tab-${tab}` ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="px-6 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Basic Info - Always visible */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty *</label>
                    <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm">
                      <option>Easy</option><option>Medium</option><option>Hard</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Topic *</label>
                    <select value={form.topic_id} onChange={(e) => setForm({ ...form, topic_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm">
                      <option value="">Select topic</option>
                      {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pattern</label>
                    <input type="text" value={form.pattern} onChange={(e) => setForm({ ...form, pattern: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm" placeholder="HashMap Lookup" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                  <textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm resize-none" />
                </div>

                {/* Content Tab */}
                {expandedRow === 'tab-Content' && (
                  <div className="space-y-4 border-t pt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Problem Statement</label>
                      <textarea rows={4} value={form.problem_statement} onChange={(e) => setForm({ ...form, problem_statement: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm resize-none" />
                    </div>

                    {/* Examples */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">Examples (shown on left panel)</label>
                        <button type="button" onClick={addExample} className="text-sm text-primary-600 hover:text-primary-700 font-medium">+ Add Example</button>
                      </div>
                      <div className="space-y-3">
                        {examples.map((ex, i) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-500">Example {i + 1}</span>
                              {examples.length > 1 && <button type="button" onClick={() => removeExample(i)} className="text-red-500 hover:text-red-600 text-xs">Remove</button>}
                            </div>
                            <input value={ex.input} onChange={(e) => updateExample(i, 'input', e.target.value)} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm mb-2 font-mono" placeholder='nums = [2,7,11,15], target = 9' />
                            <div className="grid grid-cols-2 gap-2">
                              <input value={ex.output} onChange={(e) => updateExample(i, 'output', e.target.value)} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-mono" placeholder='[0,1]' />
                              <input value={ex.explanation} onChange={(e) => updateExample(i, 'explanation', e.target.value)} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-mono" placeholder='Explanation (optional)' />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Constraints</label>
                      <textarea rows={3} value={form.constraints} onChange={(e) => setForm({ ...form, constraints: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm resize-none" placeholder='2 <= nums.length <= 10^4&#10;-10^9 <= nums[i] <= 10^9' />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Visualization Type</label>
                        <select value={form.visualization_type} onChange={(e) => setForm({ ...form, visualization_type: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm">
                          {['array','hashmap','linkedlist','tree','graph','stack','queue','heap','binarysearch','slidingwindow','dp','none'].map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sample Vis Input</label>
                        <input type="text" value={form.sample_input} onChange={(e) => setForm({ ...form, sample_input: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-mono" placeholder='[2,7,11,15], target=9' />
                      </div>
                    </div>
                  </div>
                )}

                {/* Test Cases Tab */}
                {expandedRow === 'tab-Test Cases' && (
                  <div className="space-y-3 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-700">Test Cases</label>
                      <button type="button" onClick={addTestCase} className="text-sm text-primary-600 hover:text-primary-700 font-medium">+ Add Test Case</button>
                    </div>
                    {loadingTests ? (
                      <div className="text-sm text-gray-400 py-4 text-center">Loading test cases...</div>
                    ) : (
                      <div className="space-y-2">
                        {testCases.map((tc, i) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-500">{tc.is_hidden ? 'Hidden' : 'Sample'} Test {i + 1}</span>
                              <div className="flex items-center gap-3">
                                <label className="flex items-center gap-1 cursor-pointer">
                                  <input type="checkbox" checked={tc.is_hidden} onChange={(e) => updateTestCase(i, 'is_hidden', e.target.checked)} className="w-3.5 h-3.5 rounded" />
                                  <span className="text-xs text-gray-500">Hidden</span>
                                </label>
                                {testCases.length > 1 && <button type="button" onClick={() => removeTestCase(i)} className="text-red-500 hover:text-red-600 text-xs">Remove</button>}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <input value={tc.input} onChange={(e) => updateTestCase(i, 'input', e.target.value)} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-mono" placeholder='nums=[2,7,11,15], target=9' />
                              <input value={tc.expected_output} onChange={(e) => updateTestCase(i, 'expected_output', e.target.value)} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-mono" placeholder='[0,1]' />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex gap-3 px-6 py-4 border-t">
                <button type="submit" className="btn-primary">{editId ? 'Update' : 'Add'} Question</button>
                <button type="button" onClick={() => { setShowForm(false); resetForm() }} className="btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Questions Table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Title</th>
              <th className="text-left px-6 py-3 font-medium">Difficulty</th>
              <th className="text-left px-6 py-3 font-medium">Topic</th>
              <th className="text-left px-6 py-3 font-medium">Viz</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {questions.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{q.title}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>{q.difficulty}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">{q.topic_name}</td>
                <td className="px-6 py-4 text-gray-400 text-xs font-mono">{q.visualization_type || '-'}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleEdit(q)} className="p-2 text-gray-400 hover:text-primary-600"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(q.id)} className="p-2 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
