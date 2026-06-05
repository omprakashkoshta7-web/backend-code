import { useEffect, useState, useRef } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Plus, Edit2, Trash2, Upload, GripVertical, ImageIcon } from 'lucide-react'

const LANG_LABELS: Record<string, string> = { javascript: 'JavaScript', python: 'Python', java: 'Java', cpp: 'C++' }

export default function CheatSheets() {
  const [cheatSheets, setCheatSheets] = useState<any[]>([])
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState<any>({
    question_id: '', pattern: '', recognition: '', approach: '', approach_steps: '', approach_diagram: '',
    time_complexity: '', space_complexity: '', mistakes: '',
    template_javascript: '', template_python: '', template_java: '', template_cpp: '',
    approach_images: [] as { url: string; caption: string }[],
  })

  const loadData = () => {
    setLoading(true)
    Promise.all([adminApi.getCheatSheets(), adminApi.getQuestions()])
      .then(([cs, qs]) => { setCheatSheets(cs.data); setQuestions(qs.data) })
      .catch(() => {}).finally(() => setLoading(false))
  }
  useEffect(() => { loadData() }, [])

  const uploadImage = async (file: File) => {
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('image', file)
      const res = await adminApi.uploadImage(fd)
      return res.data.url
    } catch (err: any) { toast.error(err.response?.data?.error || 'Upload failed'); return null }
    finally { setUploading(false) }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    for (const file of Array.from(files)) {
      const url = await uploadImage(file)
      if (url) setForm({ ...form, approach_images: [...form.approach_images, { url, caption: '' }] })
    }
    if (fileRef.current) fileRef.current.value = ''
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (!text.startsWith('data:image')) { toast.error('Clipboard does not contain an image'); return }
      setUploading(true)
      const res = await adminApi.uploadBase64(text)
      setForm({ ...form, approach_images: [...form.approach_images, { url: res.data.url, caption: '' }] })
      toast.success('Image pasted')
    } catch (err: any) { toast.error(err.response?.data?.error || 'Paste failed') }
    finally { setUploading(false) }
  }

  const removeImage = (idx: number) => {
    setForm({ ...form, approach_images: form.approach_images.filter((_: any, i: number) => i !== idx) })
  }

  const updateImageCaption = (idx: number, caption: string) => {
    const imgs = [...form.approach_images]
    imgs[idx] = { ...imgs[idx], caption }
    setForm({ ...form, approach_images: imgs })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      ...form,
      recognition: form.recognition.split('\n').filter(Boolean),
      mistakes: form.mistakes.split('\n').filter(Boolean),
      approach_steps: form.approach_steps.split('\n').filter(Boolean),
      template: {
        javascript: form.template_javascript,
        python: form.template_python,
        java: form.template_java,
        cpp: form.template_cpp,
      },
    }
    try {
      if (editId) {
        await adminApi.updateCheatSheet(editId, data)
        toast.success('Cheat sheet updated')
      } else {
        await adminApi.addCheatSheet(data)
        toast.success('Cheat sheet added')
      }
      setShowForm(false); setEditId(null)
      setForm({ question_id: '', pattern: '', recognition: '', approach: '', approach_steps: '', approach_diagram: '', time_complexity: '', space_complexity: '', mistakes: '', template_javascript: '', template_python: '', template_java: '', template_cpp: '', approach_images: [] })
      loadData()
    } catch (err: any) { toast.error(err.response?.data?.error || 'Failed') }
  }

  const handleEdit = async (qid: string) => {
    try {
      const res = await adminApi.getCheatSheet(qid)
      const cs = res.data
      setForm({
        question_id: cs.question_id, pattern: cs.pattern,
        recognition: (cs.recognition || []).join('\n'),
        approach: cs.approach || '',
        approach_steps: (cs.approach_steps || []).join('\n'),
        approach_diagram: cs.approach_diagram || '',
        time_complexity: cs.complexity?.time || '',
        space_complexity: cs.complexity?.space || '',
        mistakes: (cs.mistakes || []).join('\n'),
        template_javascript: cs.template?.javascript || '',
        template_python: cs.template?.python || '',
        template_java: cs.template?.java || '',
        template_cpp: cs.template?.cpp || '',
        approach_images: cs.approach_images || [],
      })
      setEditId(qid)
      setShowForm(true)
    } catch { toast.error('Failed to load cheat sheet') }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cheat Sheets</h1>
        <button onClick={() => { setShowForm(true); setEditId(null) }} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Cheat Sheet
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Question ID</label>
              <input type="text" required value={form.question_id} onChange={(e) => setForm({ ...form, question_id: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" disabled={!!editId} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pattern</label>
              <input type="text" required value={form.pattern} onChange={(e) => setForm({ ...form, pattern: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Complexity</label>
              <input type="text" value={form.time_complexity} onChange={(e) => setForm({ ...form, time_complexity: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Space Complexity</label>
              <input type="text" value={form.space_complexity} onChange={(e) => setForm({ ...form, space_complexity: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recognition (one per line)</label>
            <textarea rows={3} value={form.recognition} onChange={(e) => setForm({ ...form, recognition: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Approach</label>
            <textarea rows={3} value={form.approach} onChange={(e) => setForm({ ...form, approach: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Approach Steps (one per line)</label>
            <textarea rows={4} value={form.approach_steps} onChange={(e) => setForm({ ...form, approach_steps: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Approach Diagram (ASCII)</label>
            <textarea rows={4} value={form.approach_diagram} onChange={(e) => setForm({ ...form, approach_diagram: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm" />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Approach Images</label>
            <div className="flex flex-wrap gap-2 mb-3">
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm text-gray-700">
                <Upload className="w-4 h-4" /> {uploading ? 'Uploading...' : 'Upload Images'}
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileUpload} disabled={uploading} />
              </label>
              <button type="button" onClick={handlePaste} disabled={uploading} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-sm text-gray-700">
                <ImageIcon className="w-4 h-4" /> Paste Image
              </button>
            </div>
            {form.approach_images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {form.approach_images.map((img: any, i: number) => (
                  <div key={i} className="relative border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                    <img src={img.url} alt={img.caption || `Image ${i + 1}`} className="w-full h-32 object-cover" />
                    <div className="p-2 space-y-1">
                      <input
                        type="text" placeholder="Caption (optional)" value={img.caption}
                        onChange={(e) => updateImageCaption(i, e.target.value)}
                        className="w-full text-xs px-2 py-1 rounded border border-gray-200"
                      />
                      <button type="button" onClick={() => removeImage(i)} className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1">
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Code Templates</label>
            {(['javascript', 'python', 'java', 'cpp'] as const).map((lang) => (
              <div key={lang} className="flex gap-2 items-start mb-2">
                <span className="text-xs font-mono w-20 mt-3 text-gray-500 uppercase">{LANG_LABELS[lang]}</span>
                <textarea rows={4} value={(form as any)[`template_${lang}`] || ''} onChange={(e) => setForm({ ...form, [`template_${lang}`]: e.target.value })}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm" />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Common Mistakes (one per line)</label>
            <textarea rows={3} value={form.mistakes} onChange={(e) => setForm({ ...form, mistakes: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200" />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary">{editId ? 'Update' : 'Add'} Cheat Sheet</button>
            <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      )}

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Question ID</th>
              <th className="text-left px-6 py-3 font-medium">Pattern</th>
              <th className="text-left px-6 py-3 font-medium">Images</th>
              <th className="text-left px-6 py-3 font-medium">Template Languages</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cheatSheets.map((cs) => (
              <tr key={cs.question_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{cs.question_id}</td>
                <td className="px-6 py-4 text-gray-500">{cs.pattern}</td>
                <td className="px-6 py-4">
                  {cs.approach_images?.length > 0 ? (
                    <div className="flex gap-1">
                      {cs.approach_images.map((img: any, i: number) => (
                        <img key={i} src={img.url} alt="" className="w-8 h-8 rounded object-cover border" />
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400 text-xs">None</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {['javascript', 'python', 'java', 'cpp'].map((l) => (
                      <span key={l} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{LANG_LABELS[l]}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleEdit(cs.question_id)} className="p-2 text-gray-400 hover:text-primary-600"><Edit2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
