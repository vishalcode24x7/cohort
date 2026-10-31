import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import remarkGfm from 'remark-gfm'
import { setCurrentChatId } from '../chat.slice.js'
import { useChat } from '../hooks/useChat.js'
import BrandMark from '../../BrandMark.jsx'

const promptSuggestions = [
  // 'Explain a complex idea simply',
  // 'Help me write something great',
  // 'Give me a fresh perspective',
]

const Dashboard = () => {
  const chat = useChat()
  const dispatch = useDispatch()
  const [chatInput, setChatInput] = useState('')
  const [pendingMessage, setPendingMessage] = useState(null)
  const [isMobileHistoryOpen, setIsMobileHistoryOpen] = useState(false)
  const user = useSelector((state) => state.auth.user)
  const chats = useSelector((state) => state.chat.chats)
  const currentChatId = useSelector((state) => state.chat.currentChatId)
  const isSending = useSelector((state) => state.chat.isSending)
  const chatError = useSelector((state) => state.chat.error)
  const currentChat = chats[currentChatId]
  const messages = currentChat?.messages ?? []
  const displayedMessages = pendingMessage
    ? [...messages, { role: 'user', content: pendingMessage, id: 'pending' }]
    : messages
  const userName = user?.username || user?.email || 'Account'
  const userInitial = userName.charAt(0).toUpperCase()

  useEffect(() => {
    chat.initializeSocketConnection()
    chat.handleGetChats()
  }, [])

  const handleSubmitMessage = async (event) => {
    event.preventDefault()

    const trimmedMessage = chatInput.trim()
    if (!trimmedMessage || isSending) {
      return
    }

    setPendingMessage(trimmedMessage)
    setChatInput('')
    try {
      await chat.handleSendMessage({ message: trimmedMessage, chatId: currentChatId })
    } finally {
      setPendingMessage(null)
    }
  }

  const openChat = (chatId) => {
    chat.handleOpenChat(chatId, chats)
    setIsMobileHistoryOpen(false)
  }

  const startNewChat = () => {
    dispatch(setCurrentChatId(null))
    setChatInput('')
    setIsMobileHistoryOpen(false)
  }

  return (
    <main className='relative flex h-dvh min-h-0 overflow-hidden bg-[#09090b] text-zinc-100'>
      <div className='pointer-events-none absolute -left-48 -top-48 h-[28rem] w-[28rem] rounded-full bg-violet-700/10 blur-[120px]' />
      <div className='pointer-events-none absolute -bottom-60 right-0 h-[32rem] w-[32rem] rounded-full bg-purple-900/10 blur-[140px]' />

      <aside className='relative z-10 hidden h-full w-[280px] shrink-0 flex-col overflow-hidden border-r border-white/[0.07] bg-black/20 px-4 py-5 md:flex'>
        <div className='mb-8 flex items-center gap-3 px-2'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-lg font-bold shadow-lg shadow-purple-950/40'>
            <BrandMark className='h-9 w-9 text-white' />
          </div>
          <div>
            <h1 className='font-semibold tracking-tight text-white'>Perplexity</h1>
            <p className='text-xs text-zinc-500'>Your thinking partner</p>
          </div>
        </div>

        <button
          type='button'
          onClick={startNewChat}
          className='mb-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition hover:from-violet-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-violet-500/25'
        >
          <span aria-hidden='true' className='text-lg leading-none'>+</span>
          New conversation
        </button>

        <div className='mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500'>
          Recent conversations
        </div>
        <nav aria-label='Recent conversations' className='flex-1 space-y-1 overflow-y-auto'>
          {Object.values(chats).length ? (
            Object.values(chats).map((savedChat) => (
              <button
                onClick={() => openChat(savedChat.id)}
                key={savedChat.id}
                type='button'
                title={savedChat.title}
                className={`w-full truncate rounded-xl px-3 py-2.5 text-left text-sm transition ${savedChat.id === currentChatId
                  ? 'border border-violet-500/20 bg-violet-500/10 text-violet-100'
                  : 'border border-transparent text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100'
                  }`}
              >
                {savedChat.title}
              </button>
            ))
          ) : (
            <p className='px-3 py-2 text-sm text-zinc-600'>Your conversations will appear here.</p>
          )}
        </nav>

        <div className='mt-4 shrink-0 border-t border-white/[0.07] pt-4'>
          <div className='mb-4 px-2 text-xs text-zinc-600'>
            Thoughtful answers, one question at a time.
          </div>
          <div className='flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-sm font-semibold text-violet-200'>
              {userInitial}
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-medium text-zinc-200' title={userName}>
                {userName}
              </p>
              {user?.email && user.username && (
                <p className='truncate text-xs text-zinc-500' title={user.email}>
                  {user.email}
                </p>
              )}
            </div>
            <span className='h-2 w-2 shrink-0 rounded-full bg-emerald-400' title='Signed in' />
          </div>
        </div>
      </aside>

      {isMobileHistoryOpen && (
        <div className='fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden'>
          <button
            type='button'
            aria-label='Close conversation history'
            onClick={() => setIsMobileHistoryOpen(false)}
            className='absolute inset-0 z-0 h-full w-full cursor-default'
          />
          <aside
            aria-label='Conversation history'
            aria-modal='true'
            className='relative z-10 flex h-full w-[min(84vw,320px)] flex-col border-r border-white/10 bg-[#0d0d10] px-4 py-5 shadow-2xl shadow-black/50'
            role='dialog'
          >
            <div className='mb-7 flex items-center justify-between px-1'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-purple-950/40'>
                  <BrandMark className='h-9 w-9 text-white' />
                </div>
                <div>
                  <p className='font-semibold text-white'>Conversations</p>
                  <p className='text-xs text-zinc-500'>Your recent chats</p>
                </div>
              </div>
              <button
                type='button'
                aria-label='Close conversation history'
                onClick={() => setIsMobileHistoryOpen(false)}
                className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white'
              >
                ×
              </button>
            </div>
            <button
              type='button'
              onClick={startNewChat}
              className='mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30'
            >
              <span aria-hidden='true' className='text-lg leading-none'>+</span>
              New conversation
            </button>
            <p className='mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500'>
              Recent conversations
            </p>
            <nav aria-label='Recent conversations' className='min-h-0 flex-1 space-y-1 overflow-y-auto'>
              {Object.values(chats).length ? (
                Object.values(chats).map((savedChat) => (
                  <button
                    onClick={() => openChat(savedChat.id)}
                    key={savedChat.id}
                    type='button'
                    title={savedChat.title}
                    className={`w-full truncate rounded-xl px-3 py-3 text-left text-sm transition ${savedChat.id === currentChatId
                      ? 'border border-violet-500/20 bg-violet-500/10 text-violet-100'
                      : 'border border-transparent text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100'
                      }`}
                  >
                    {savedChat.title}
                  </button>
                ))
              ) : (
                <p className='px-3 py-2 text-sm text-zinc-600'>Your conversations will appear here.</p>
              )}
            </nav>
            <div className='mt-4 flex min-w-0 items-center gap-3 border-t border-white/[0.07] pt-4'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-sm font-semibold text-violet-200'>
                {userInitial}
              </div>
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-medium text-zinc-200' title={userName}>{userName}</p>
                {user?.email && user.username && (
                  <p className='truncate text-xs text-zinc-500' title={user.email}>{user.email}</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      )}

      <section className='relative z-10 flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden'>
        <header className='flex h-[68px] shrink-0 items-center justify-between gap-2 border-b border-white/[0.07] px-3 sm:h-[72px] sm:px-7'>
          <div className='flex min-w-0 items-center gap-2 sm:gap-3'>
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-bold md:hidden'>
              <BrandMark className='h-8 w-8 text-white' />
            </div>
            <div className='min-w-0'>
              <p className='truncate text-sm font-medium text-zinc-200'>
                {currentChat?.title || 'New conversation'}
              </p>
              <p className='mt-0.5 text-xs text-zinc-500'>Ask anything. Explore everything.</p>
            </div>
          </div>
          <div className='flex shrink-0 items-center gap-2 md:hidden'>
            <button
              type='button'
              onClick={() => setIsMobileHistoryOpen(true)}
              className='rounded-lg border border-white/10 px-2.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
            >
              Chats
            </button>
            <button
              type='button'
              onClick={startNewChat}
              className='rounded-lg border border-white/10 px-2.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white'
            >
              + New
            </button>
          </div>
          <span className='hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 sm:flex'>
            <span className='h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]' />
            AI assistant
          </span>
        </header>

        <div className='mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col px-3 sm:px-7'>
          <div className='chat-scroll-area min-h-0 flex-1 overflow-y-auto overscroll-contain py-5 sm:py-10'>
            {displayedMessages.length === 0 && !isSending ? (
              <div className='flex min-h-[min(58vh,600px)] flex-col items-center justify-center py-8 text-center sm:min-h-[min(62vh,600px)] sm:py-10'>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-purple-300/20 text-2xl font-bold text-violet-300 shadow-[0_12px_60px_rgba(88,28,135,0.18)] sm:mb-6 sm:h-16 sm:w-16 sm:rounded-[22px]'>
                  <BrandMark className='h-13 w-13' />
                </div>
                <p className='mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400 sm:text-xs sm:tracking-[0.22em]'>
                  A little curiosity goes a long way
                </p>
                <h2 className='max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-4xl'>
                  What’s on your mind?
                </h2>
                <p className='mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:mt-4'>
                  Get clear answers, brainstorm ideas, or untangle something you’ve been thinking about.
                </p>
                <div className='mt-6 grid w-full max-w-2xl gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3'>
                  {promptSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type='button'
                      onClick={() => setChatInput(suggestion)}
                      className='rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 text-left text-sm text-zinc-300 transition hover:border-violet-500/30 hover:bg-violet-500/[0.06] hover:text-white sm:p-4'
                    >
                      <span className='mb-3 block text-base text-violet-400' aria-hidden='true'>↗</span>
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className='space-y-8 pb-8'>
                {displayedMessages.map((message, index) => (
                  <div
                    key={message.id ?? `${message.role}-${index}`}
                    className={`flex gap-2 sm:gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role !== 'user' && (
                      <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-xs font-bold text-white'>
                        <BrandMark className='h-7 w-7' />
                      </div>
                    )}
                    <div
                      className={`max-w-[calc(100%-2.5rem)] text-sm leading-7 sm:max-w-[85%] sm:text-[15px] ${message.role === 'user'
                        ? 'rounded-2xl rounded-br-md border border-violet-400/15 bg-violet-500/[0.12] px-4 py-3 text-zinc-100'
                        : 'min-w-0 flex-1 pt-1 text-zinc-300'
                        }`}
                    >
                      {message.role === 'user' ? (
                        <p className='whitespace-pre-wrap'>{message.content}</p>
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className='mb-3 last:mb-0'>{children}</p>,
                            ul: ({ children }) => <ul className='mb-3 list-disc space-y-1 pl-5'>{children}</ul>,
                            ol: ({ children }) => <ol className='mb-3 list-decimal space-y-1 pl-5'>{children}</ol>,
                            code: ({ children }) => <code className='rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-violet-200'>{children}</code>,
                            pre: ({ children }) => <pre className='mb-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/40 p-4 text-sm'>{children}</pre>,
                            h1: ({ children }) => <h1 className='mb-3 text-xl font-semibold text-white'>{children}</h1>,
                            h2: ({ children }) => <h2 className='mb-3 mt-5 text-lg font-semibold text-white'>{children}</h2>,
                            h3: ({ children }) => <h3 className='mb-2 mt-4 font-semibold text-white'>{children}</h3>,
                            a: ({ children, href }) => <a className='text-violet-300 underline decoration-violet-300/40 underline-offset-4 hover:text-violet-200' href={href}>{children}</a>,
                          }}
                          remarkPlugins={[remarkGfm]}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>
                    {message.role === 'user' && (
                      <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xs font-semibold text-zinc-300'>
                        You
                      </div>
                    )}
                  </div>
                ))}
                {isSending && (
                  <div className='flex gap-2 sm:gap-4' role='status' aria-live='polite'>
                    <div className='mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-xs font-bold text-white'>
                      <BrandMark className='h-7 w-7' />
                    </div>
                    <div className='flex items-center gap-3 pt-1 text-sm text-zinc-400'>
                      <span className='h-4 w-4 animate-spin rounded-full border-2 border-violet-400 border-t-transparent' aria-hidden='true' />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <footer className='shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:pb-6 sm:pt-3'>
            <form
              onSubmit={handleSubmitMessage}
              className='rounded-2xl border border-white/[0.1] bg-[#111113]/95 p-2 shadow-[0_16px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition focus-within:border-violet-500/40 focus-within:shadow-[0_16px_50px_rgba(88,28,135,0.16)]'
            >
              <label className='sr-only' htmlFor='chat-message'>Message Perplexity</label>
              <textarea
                id='chat-message'
                rows={2}
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault()
                    event.currentTarget.form?.requestSubmit()
                  }
                }}
                placeholder='Ask a question or share an idea...'
                className='max-h-40 min-h-[52px] w-full resize-y bg-transparent px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-zinc-600'
              />
              <div className='flex items-center justify-between px-2 pb-1'>
                <span className='text-[11px] text-zinc-600'>Shift + Enter for a new line</span>
                <button
                  type='submit'
                  disabled={!chatInput.trim() || isSending}
                  aria-label='Send message'
                  className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-lg text-white shadow-md shadow-purple-950/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35'
                >
                  <span aria-hidden='true'>↑</span>
                </button>
              </div>
            </form>
            <p className='mt-2 text-center text-[11px] text-zinc-600'>
              AI can make mistakes. Check important information.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
