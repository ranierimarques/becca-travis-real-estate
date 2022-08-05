import { Button } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Link from 'next/link'
import { CalendarSvg, CrossSvg, MailSvg, PhoneSvg } from '../svgs'
import * as S from './talk-to-me.styles'

const contacts = [
  { text: 'Write an email', svg: <MailSvg /> },
  { text: 'Call', svg: <PhoneSvg /> },
  { text: 'Schedule', svg: <CalendarSvg /> },
]

export function TalkToMe() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button css={{ marginLeft: 16 }}>Talk to me</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <S.Overlay />
        <S.Content>
          <S.Title>Talk to me</S.Title>
          <S.Description>You can reach me at:</S.Description>

          <S.ContactList>
            {contacts.map(contact => (
              <li key={contact.text}>
                <Link href="#" passHref>
                  <S.Contact>
                    {contact.svg}
                    <S.ContactText>{contact.text}</S.ContactText>
                  </S.Contact>
                </Link>
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
