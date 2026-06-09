import { useEffect, useMemo, useState } from 'react'
import { adminApi } from '../api/client'
import toast from 'react-hot-toast'
import { Plus, Trash2, ArrowUp, ArrowDown, LayoutGrid, Code, FileText, Image, ArrowRight, Save, Sparkles } from 'lucide-react'

type BlockType = 'heading' | 'text' | 'button' | 'image' | 'card'

type TemplateBlock =
  | { type: 'heading'; text: string; size: 'text-2xl' | 'text-3xl' | 'text-4xl'; align: 'left' | 'center' | 'right' }
  | { type: 'text'; text: string; align: 'left' | 'center' | 'right' }
  | { type: 'button'; text: string; url: string; style: 'primary' | 'secondary'; align: 'left' | 'center' | 'right' }
  | { type: 'image'; src: string; alt: string }
  | { type: 'card'; title: string; description: string; buttonText: string; buttonUrl: string }

const BLOCK_PRESETS: { type: BlockType; label: string; icon: JSX.Element }[] = [
  { type: 'heading', label: 'Heading', icon: <FileText className="w-4 h-4" /> },
  { type: 'text', label: 'Text', icon: <TextIcon /> },
  { type: 'button', label: 'Button', icon: <ArrowRight className="w-4 h-4" /> },
  { type: 'image', label: 'Image', icon: <Image className="w-4 h-4" /> },
  { type: 'card', label: 'Card', icon: <LayoutGrid className="w-4 h-4" /> },
]

function TextIcon() {
  return <span className="w-4 h-4 inline-flex items-center justify-center text-xs font-bold">T</span>
}

const defaultBlock = (type: BlockType): TemplateBlock => {
  switch (type) {
    case 'heading':
      return { type: 'heading', text: 'New section title', size: 'text-3xl', align: 'left' }
    case 'text':
      return { type: 'text', text: 'Add supporting content and details here.', align: 'left' }
    case 'button':
      return { type: 'button', text: 'Call to action', url: '#', style: 'primary', align: 'left' }
    case 'image':
      return { type: 'image', src: 'https://images.unsplash.com/photo-1557683304-673a23048d34?auto=format&fit=crop&w=800&q=60', alt: 'Template image' }
    case 'card':
      return { type: 'card', title: 'Card Title', description: 'A short description summary.', buttonText: 'Learn more', buttonUrl: '#' }
  }
}

const blockLabel = (block: TemplateBlock) => {
  switch (block.type) {
    case 'heading': return 'Heading'
    case 'text': return 'Text'
    case 'button': return 'Button'
    case 'image': return 'Image'
    case 'card': return 'Card'
  }
}

const buildHtml = (blocks: TemplateBlock[]) => {
  const html = blocks.map((block) => {
    switch (block.type) {
      case 'heading':
        return `<h2 class="${block.size} font-semibold text-slate-900 ${block.align === 'center' ? 'text-center' : block.align === 'right' ? 'text-right' : 'text-left'} mb-4">${block.text}</h2>`
      case 'text':
        return `<p class="text-base text-slate-700 ${block.align === 'center' ? 'text-center' : block.align === 'right' ? 'text-right' : 'text-left'} leading-7">${block.text}</p>`
      case 'button':
        return `<div class="${block.align === 'center' ? 'text-center' : block.align === 'right' ? 'text-right' : 'text-left'}"><a href="${block.url}" class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm ${block.style === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'} transition">${block.text}</a></div>`
      case 'image':
        return `<div class="overflow-hidden rounded-3xl border border-slate-200"><img src="${block.src}" alt="${block.alt}" class="w-full object-cover" /></div>`
      case 'card':
        return `<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 class="text-xl font-semibold text-slate-900 mb-2">${block.title}</h3><p class="text-slate-600 mb-4">${block.description}</p><a href="${block.buttonUrl}" class="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">${block.buttonText}</a></div>`
      default:
        return ''
    }
  }).join('')

  return `<div class="space-y-6 text-slate-900">${html}</div>`
}

export default function TemplateBuilder() {
  const [templates, setTemplates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editId, setEditId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [blocks, setBlocks] = useState<TemplateBlock[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [rawHtml, setRawHtml] = useState('')
  const [isRawMode, setIsRawMode] = useState(false)

  const fetchTemplates = async () => {
    setLoading(true)
    try {
      const res = await adminApi.getProducts()
      setTemplates((res.data || []).filter((item: any) => item.category === 'template'))
    } catch (error) {
      toast.error('Failed to load templates')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  const currentHtml = useMemo(() => {
    if (isRawMode) return rawHtml
    return buildHtml(blocks)
  }, [blocks, rawHtml, isRawMode])

  const addBlock = (type: BlockType) => {
    setBlocks(prev => [...prev, defaultBlock(type)])
    setSelectedIndex(blocks.length)
    setIsRawMode(false)
  }

  const updateBlock = (index: number, update: Partial<TemplateBlock>) => {
    setBlocks(prev => prev.map((block, idx) => idx === index ? { ...block, ...(update as any) } : block))
  }

  const removeBlock = (index: number) => {
    setBlocks(prev => prev.filter((_, idx) => idx !== index))
    setSelectedIndex(prev => Math.max(0, prev - 1))
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    setBlocks(prev => {
      const next = [...prev]
      const swapIndex = direction === 'up' ? index - 1 : index + 1
      if (swapIndex < 0 || swapIndex >= next.length) return next
      const temp = next[swapIndex]
      next[swapIndex] = next[index]
      next[index] = temp
      return next
    })
    setSelectedIndex(prev => {
      if (prev !== index) return prev
      return direction === 'up' ? Math.max(0, prev - 1) : Math.min(blocks.length - 1, prev + 1)
    })
  }

  const resetBuilder = () => {
    setEditId(null)
    setTitle('')
    setDescription('')
    setTags('')
    setBlocks([])
    setRawHtml('')
    setSelectedIndex(0)
    setIsRawMode(false)
  }

  const loadTemplate = (item: any) => {
    setEditId(item.id)
    setTitle(item.title)
    setDescription(item.description || '')
    setTags((item.tags || []).join(', '))
    setRawHtml(item.template_html || '')
    setBlocks([])
    setSelectedIndex(0)
    setIsRawMode(true)
  }

  const saveTemplate = async () => {
    if (!title.trim()) {
      toast.error('Template title is required')
      return
    }
    const data = {
      title: title.trim(),
      description: description.trim(),
      category: 'template',
      price: 'free',
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      template_html: currentHtml,
    }

    try {
      if (editId) {
        await adminApi.updateProduct(editId, data)
        toast.success('Template updated')
      } else {
        await adminApi.addProduct(data)
        toast.success('Template created')
      }
      fetchTemplates()
      resetBuilder()
    } catch (err) {
      toast.error('Save failed')
    }
  }

  const seedDefaultTemplates = async () => {
    try {
      const res = await adminApi.seedTemplateProducts()
      const added = res.data?.added || 0
      if (added > 0) {
        toast.success(`${added} template(s) seeded`)
      } else {
        toast('No new default templates were added')
      }
      fetchTemplates()
    } catch (err) {
      toast.error('Template seed failed')
    }
  }

  const selectedBlock = blocks[selectedIndex]

  return (
    <div className="min-h-screen bg-slate-50 py-6">
      <div className="mb-8 rounded-[2rem] bg-gradient-to-r from-primary-700 via-indigo-700 to-slate-900 p-8 text-white shadow-[0_35px_60px_-35px_rgba(15,23,42,0.75)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">Admin Canvas</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Template Builder</h1>
            <p className="max-w-2xl text-slate-200">Create admin-only templates with a clean drag-style builder, live preview, and consistent color patterns.</p>
          </div>
          <button onClick={resetBuilder} className="btn-secondary inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20">
            <Sparkles className="w-4 h-4" /> New Template
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-3 space-y-4">
          <div className="card p-4 space-y-4">
            <div className="flex items-center gap-3 text-slate-900 font-semibold text-sm">
              <LayoutGrid className="w-4 h-4" /> Existing Templates
            </div>
            {loading ? (
              <p className="text-sm text-gray-500">Loading…</p>
            ) : templates.length === 0 ? (
              <p className="text-sm text-gray-500">No templates yet. Create one using the canvas.</p>
            ) : (
              <div className="space-y-3">
                {templates.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => loadTemplate(item)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-indigo-500 hover:bg-indigo-50"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 truncate">{item.description || 'No description'}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="card p-4 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <Code className="w-4 h-4" /> Settings
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <input value={tags} onChange={e => setTags(e.target.value)} placeholder="example, hero, card" className="w-full rounded-xl border border-gray-200 px-3 py-2" />
              <label className="block text-sm font-medium text-gray-700">Mode</label>
              <div className="flex gap-2">
                <button type="button" onClick={() => setIsRawMode(false)} className={`rounded-xl px-3 py-2 text-sm ${!isRawMode ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Canvas</button>
                <button type="button" onClick={() => setIsRawMode(true)} className={`rounded-xl px-3 py-2 text-sm ${isRawMode ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>Raw HTML</button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button type="button" onClick={saveTemplate} className="btn-primary flex-1 items-center justify-center gap-2 inline-flex"><Save className="w-4 h-4" /> Save Template</button>
              <button type="button" onClick={seedDefaultTemplates} className="btn-secondary flex-1 items-center justify-center gap-2 inline-flex"><Sparkles className="w-4 h-4" /> Seed Default Templates</button>
            </div>
          </div>
        </section>

        <section className="col-span-12 xl:col-span-6 space-y-4">
          <div className="card p-4">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Canvas</h2>
                <p className="text-sm text-slate-500">Add blocks and arrange the template visually.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {BLOCK_PRESETS.map((preset) => (
                  <button key={preset.type} type="button" onClick={() => addBlock(preset.type)} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-indigo-500 hover:text-indigo-700">
                    {preset.icon} {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {blocks.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  Add a block to begin building your template.
                </div>
              ) : (
                <div className="space-y-4">
                  {blocks.map((block, index) => (
                    <div key={index} className={`rounded-3xl border p-4 ${selectedIndex === index ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{blockLabel(block)}</div>
                          <div className="text-xs text-slate-500">Block #{index + 1}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => setSelectedIndex(index)} className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-700">Edit</button>
                          <button type="button" onClick={() => moveBlock(index, 'up')} disabled={index === 0} className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"> <ArrowUp className="w-4 h-4" /> </button>
                          <button type="button" onClick={() => moveBlock(index, 'down')} disabled={index === blocks.length - 1} className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"> <ArrowDown className="w-4 h-4" /> </button>
                          <button type="button" onClick={() => removeBlock(index)} className="rounded-full border border-red-200 bg-white p-2 text-red-500 transition hover:border-red-300 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Preview</h2>
                <p className="text-sm text-slate-500">Real-time HTML preview of your template.</p>
              </div>
              <div className="text-xs text-slate-500">{blocks.length} blocks</div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 min-h-[320px]">
              <div dangerouslySetInnerHTML={{ __html: currentHtml || '<div class="text-slate-500">No template content yet.</div>' }} />
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Raw HTML</h2>
                <p className="text-sm text-slate-500">Adjust the generated HTML directly when needed.</p>
              </div>
              <button type="button" onClick={() => setIsRawMode(true)} className="rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700">Switch to raw editor</button>
            </div>
            <textarea value={rawHtml} onChange={e => setRawHtml(e.target.value)} rows={8} className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900" placeholder="Paste custom HTML here to override generated output..." />
          </div>
        </section>

        <section className="col-span-12 xl:col-span-3 space-y-4">
          <div className="card p-4">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-4">
              <Sparkles className="w-4 h-4" /> Selected Block
            </div>
            {selectedBlock ? (
              <div className="space-y-4">
                <div className="text-sm text-slate-500">Edit block properties below.</div>
                {selectedBlock.type === 'heading' && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Heading text</label>
                    <input value={selectedBlock.text} onChange={e => updateBlock(selectedIndex, { text: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Size</label>
                    <select value={selectedBlock.size} onChange={e => updateBlock(selectedIndex, { size: e.target.value as any })} className="w-full rounded-xl border border-gray-200 px-3 py-2">
                      <option value="text-2xl">Large</option>
                      <option value="text-3xl">Bigger</option>
                      <option value="text-4xl">Extra large</option>
                    </select>
                    <label className="block text-sm font-medium text-gray-700">Alignment</label>
                    <select value={selectedBlock.align} onChange={e => updateBlock(selectedIndex, { align: e.target.value as any })} className="w-full rounded-xl border border-gray-200 px-3 py-2">
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </>
                )}
                {selectedBlock.type === 'text' && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Body text</label>
                    <textarea value={selectedBlock.text} onChange={e => updateBlock(selectedIndex, { text: e.target.value })} rows={4} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Alignment</label>
                    <select value={selectedBlock.align} onChange={e => updateBlock(selectedIndex, { align: e.target.value as any })} className="w-full rounded-xl border border-gray-200 px-3 py-2">
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </>
                )}
                {selectedBlock.type === 'button' && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Button text</label>
                    <input value={selectedBlock.text} onChange={e => updateBlock(selectedIndex, { text: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Button URL</label>
                    <input value={selectedBlock.url} onChange={e => updateBlock(selectedIndex, { url: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Style</label>
                    <select value={selectedBlock.style} onChange={e => updateBlock(selectedIndex, { style: e.target.value as any })} className="w-full rounded-xl border border-gray-200 px-3 py-2">
                      <option value="primary">Primary</option>
                      <option value="secondary">Secondary</option>
                    </select>
                    <label className="block text-sm font-medium text-gray-700">Alignment</label>
                    <select value={selectedBlock.align} onChange={e => updateBlock(selectedIndex, { align: e.target.value as any })} className="w-full rounded-xl border border-gray-200 px-3 py-2">
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </>
                )}
                {selectedBlock.type === 'image' && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input value={selectedBlock.src} onChange={e => updateBlock(selectedIndex, { src: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Alt text</label>
                    <input value={selectedBlock.alt} onChange={e => updateBlock(selectedIndex, { alt: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                  </>
                )}
                {selectedBlock.type === 'card' && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Card title</label>
                    <input value={selectedBlock.title} onChange={e => updateBlock(selectedIndex, { title: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Card description</label>
                    <textarea value={selectedBlock.description} onChange={e => updateBlock(selectedIndex, { description: e.target.value })} rows={3} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Button text</label>
                    <input value={selectedBlock.buttonText} onChange={e => updateBlock(selectedIndex, { buttonText: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Button URL</label>
                    <input value={selectedBlock.buttonUrl} onChange={e => updateBlock(selectedIndex, { buttonUrl: e.target.value })} className="w-full rounded-xl border border-gray-200 px-3 py-2" />
                  </>
                )}
              </div>
            ) : (
              <div className="text-sm text-slate-500">Select a block in the canvas above to edit its details.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
