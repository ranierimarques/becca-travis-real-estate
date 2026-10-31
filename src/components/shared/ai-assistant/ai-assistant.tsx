import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { ChatBubbleIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { Dialog } from '@/primitives'
import * as S from './ai-assistant.styles'

type Message = {
  role: 'assistant' | 'error' | 'user'
  content: string
}

const initialMessage: Message = {
  role: 'assistant',
  content:
    'What would you like to know about buying, selling, or moving in North Alabama?',
}

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight })
  }, [messages])

  async function submitMessage() {
    const content = input.trim()
    if (!content || isLoading) return

    const userMessage: Message = { role: 'user', content }
    const conversation = [
      ...messages.filter(message => message.role !== 'error'),
      userMessage,
    ]

    setMessages(conversation)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Becca-Assistant-Client': 'website-v1',
        },
        body: JSON.stringify({
          messages: conversation.slice(-8).map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
        }),
      })

      const data = await response.json()
      if (!response.ok || typeof data.message !== 'string') throw new Error()

      setMessages(current => [...current, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(current => [
        ...current,
        {
          role: 'error',
          content: 'The assistant is unavailable right now. Please contact Becca.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void submitMessage()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void submitMessage()
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.TriggerButton
          type="button"
          aria-label="Open property assistant"
          title="Property assistant"
        >
          <ChatBubbleIcon width={22} height={22} />
        </S.TriggerButton>
      </Dialog.Trigger>

      <Dialog.Content
        variant="2"
        title="Property assistant"
        description="Ask general real estate questions"
      >
        <S.Panel>
          <S.Header>
            <S.Title>Ask Becca&apos;s assistant</S.Title>
            <S.Status>North Alabama real estate information</S.Status>
          </S.Header>

          <S.Messages
            ref={messagesRef}
            aria-busy={isLoading}
            aria-live="polite"
            role="log"
          >
            {messages.map((message, index) => (
              <S.Message key={`${message.role}-${index}`} tone={message.role}>
                {message.content}
              </S.Message>
            ))}
            {isLoading && <S.Message tone="assistant">Thinking...</S.Message>}
          </S.Messages>

          <S.Composer onSubmit={handleSubmit}>
            <S.Input
              aria-label="Message"
              disabled={isLoading}
              maxLength={1000}
              onChange={event => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question"
              rows={1}
              value={input}
            />
            <S.SendButton
              type="submit"
              aria-label="Send message"
              title="Send"
              disabled={!input.trim() || isLoading}
            >
              <PaperPlaneIcon width={19} height={19} />
            </S.SendButton>
            <S.SafetyNote>
              General information only. Do not share confidential information; verify
              property details with Becca.
            </S.SafetyNote>
          </S.Composer>
        </S.Panel>
      </Dialog.Content>
    </Dialog.Root>
  )
}
