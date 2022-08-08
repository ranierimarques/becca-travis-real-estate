import { Button } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useRef } from 'react'
import { CalendarSvg, CrossSvg, MailSvg, PhoneSvg } from '../svgs'
import * as S from './talk-to-me.styles'

const contacts = [
  { text: 'Email', href: '#', svg: <MailSvg /> },
  { text: 'Call', href: '#', svg: <PhoneSvg /> },
  { text: 'Schedule', href: '#', svg: <CalendarSvg /> },
]

export function TalkToMe() {
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button css={{ marginLeft: 16 }}>Talk to me</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <S.Overlay />
        <S.Content onOpenAutoFocus={onOpenAutoFocus} ref={contentRef}>
          <S.Title>Talk to me</S.Title>
          <S.Description>You can reach me at:</S.Description>

          <S.ContactList>
            {contacts.map(contact => (
              <li key={contact.text}>
                <S.ContactLink
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {contact.svg}
                  <S.ContactText>{contact.text}</S.ContactText>
                </S.ContactLink>
              </li>
            ))}
          </S.ContactList>

          <DialogPrimitive.Close asChild>
            <S.IconButton aria-label="Close">
              <CrossSvg />
            </S.IconButton>
          </DialogPrimitive.Close>
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
