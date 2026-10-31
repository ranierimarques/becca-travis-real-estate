import { useEffect, useRef, useState } from 'react'
import * as S from './live-mls-drawer.styles'

export interface LiveMlsTarget {
  label: string
  url: string
}

interface LiveMlsDrawerProps {
  target: LiveMlsTarget | null
  onClose: () => void
}

export function LiveMlsDrawer({ target, onClose }: LiveMlsDrawerProps) {
  const [property, setProperty] = useState('')
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!target) return
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[role="dialog"] a[href], [role="dialog"] button:not(:disabled), [role="dialog"] input:not(:disabled)'
        )
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.getElementById('live-mls-close-button')?.focus()
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [target])

  if (!target) return null

  const textBody = encodeURIComponent(
    'Hi Becca, I would like to ask about ' + property.trim() + '.'
  )
  const textUrl = `sms:+12563189066?body=${textBody}`

  return (
    <S.Overlay
      role="presentation"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <S.Drawer
        role="dialog"
        aria-modal="true"
        aria-label={`${target.label} live listings`}
      >
        <S.Toolbar>
          <S.BrandBlock>
            <S.DrawerTitle>Ask Becca</S.DrawerTitle>
            <S.DrawerSub>{target.label} · ValleyMLS</S.DrawerSub>
          </S.BrandBlock>
          <S.ContactForm
            onSubmit={event => {
              event.preventDefault()
              window.location.href = textUrl
            }}
          >
            <label htmlFor="listing-reference">Have a home in mind?</label>
            <div>
              <input
                id="listing-reference"
                value={property}
                onChange={event => setProperty(event.target.value)}
                placeholder="Address or MLS number"
                required
              />
              <button type="submit">Text Becca</button>
            </div>
          </S.ContactForm>
          <S.Actions>
            <S.PopOut href={target.url} target="_blank" rel="noreferrer noopener">
              Browse live listings <span aria-hidden="true">↗</span>
            </S.PopOut>
            <S.CloseButton
              id="live-mls-close-button"
              type="button"
              onClick={onClose}
              aria-label="Close listings and return to guide"
            >
              Close <span aria-hidden="true">×</span>
            </S.CloseButton>
          </S.Actions>
        </S.Toolbar>
        <S.FrameTitle>{target.label}</S.FrameTitle>
        <S.Frame>
          <S.FrameMessage>Current homes are listed through ValleyMLS.</S.FrameMessage>
          <S.FrameCopy>
            Open the secure search to browse listings, or send Becca the address or MLS
            number of a home you would like to discuss.
          </S.FrameCopy>
          <S.FrameLink href={target.url} target="_blank" rel="noreferrer noopener">
            Open {target.label} listings <span aria-hidden="true">↗</span>
          </S.FrameLink>
        </S.Frame>
      </S.Drawer>
    </S.Overlay>
  )
}
