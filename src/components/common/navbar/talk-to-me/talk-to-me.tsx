import { Button } from '@common'
import { Dialog } from '@primitives'
import { CalendarSvg, MailSvg, PhoneSvg } from '../svgs'
import * as S from './talk-to-me.styles'

const contacts = [
  {
    text: 'Email',
    target: '_self',
    href: 'mailto:becca@beccatravis.com',
    svg: <MailSvg />,
  },
  { text: 'Call', target: '_self', href: 'tel:+1-256-318-9066', svg: <PhoneSvg /> },
  {
    text: 'Schedule',
    target: '_blank',
    href: 'https://calendly.com/beccatravis',
    svg: <CalendarSvg />,
  },
]

export default function TalkToMe() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button css={{ marginLeft: 16 }}>Talk to me</Button>
      </Dialog.Trigger>
      <Dialog.Content title="Talk to me" description="You can reach me at:">
        <S.Title>Talk to me</S.Title>
        <S.Description>You can reach me at:</S.Description>

        <S.List>
          {contacts.map(contact => (
            <li key={contact.text}>
              <S.Link
                href={contact.href}
                target={contact.target}
                rel="noreferrer noopener"
              >
                {contact.svg}
                <S.Text>{contact.text}</S.Text>
              </S.Link>
            </li>
          ))}
        </S.List>
      </Dialog.Content>
    </Dialog.Root>
  )
}
