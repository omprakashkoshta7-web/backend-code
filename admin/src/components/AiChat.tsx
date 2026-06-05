import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, ChevronDown } from 'lucide-react'
import { adminApi } from '../api/client'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  tool_results?: any[]
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I\'m your AI admin assistant. I can help you:\n\n• Add, edit, or delete questions\n• Add examples and test cases\n• List and search questions\n\nJust tell me what you want to do!' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: ChatMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const allMessages = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
      const { data } = await adminApi.aiChat(allMessages)
      setMessages(prev => [...prev, { role: 'assistant', content: data.content, tool_results: data.tool_results }])
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + (err.response?.data?.error || err.message) }])
    } finally {
      setLoading(false)
    }
  }

  const quickActions = [
    'List all questions',
    'Add question "Maximum Subarray" - Hard - Arrays',
    'Add examples to two-sum',
    'Add test cases to reverse-linked-list',
  ]

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center transition-all hover:scale-110"
        title="AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[600px] bg-[#0B1020] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">AI Admin Assistant</h3>
                <p className="text-white/40 text-xs">Powered by Gemini Flash</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#333 transparent' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-md bg-indigo-600/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-indigo-400" />
                  </div>
                )}
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-sm'
                    : 'bg-white/5 text-white/80 rounded-bl-sm border border-white/5'
                }`}>
                  {msg.content}
                  {msg.tool_results && msg.tool_results.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {msg.tool_results.map((tr, j) => (
                        <div key={j} className="text-xs bg-green-500/10 border border-green-500/20 rounded-lg px-2 py-1 text-green-300">
                          {tr.success ? '✓' : tr.error ? '✗' : '•'} {tr.message || tr.question?.title || (Array.isArray(tr) ? `${tr.length} items` : 'Done')}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3 h-3 text-white/60" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-md bg-indigo-600/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl rounded-bl-sm px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => { setInput(action); inputRef.current?.focus() }}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/50 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 pb-4 pt-2 border-t border-white/5">
            <div className="flex items-end gap-2 bg-white/5 rounded-xl border border-white/10 focus-within:border-indigo-500/50 transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                placeholder="Ask me anything..."
                rows={1}
                className="flex-1 bg-transparent text-white text-sm px-3 py-2.5 resize-none outline-none placeholder-white/30 max-h-24"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="p-2.5 text-indigo-400 hover:text-indigo-300 disabled:text-white/20 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
