import { Button } from '@/common'
import { Dialog } from '@/primitives'
import * as Svg from '../svgs'
import * as S from './contact.styles'

const contacts = [
  {
    text: 'Text',
    target: '_self',
    href: 'sms:+1-256-318-9066',
    svg: <Svg.MessageChat />,
  },
  { text: 'Call', target: '_self', href: 'tel:+1-256-318-9066', svg: <Svg.Phone /> },
  {
    text: 'Email',
    target: '_self',
    href: 'mailto:becca@beccatravis.com',
    svg: <Svg.Mail />,
  },
]

export default function Contact() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button css={{ marginLeft: 16 }}>Let&apos;s chat</Button>
      </Dialog.Trigger>
      <Dialog.Content title="Let's chat" description="You can reach me at:">
        <S.Title>Let&apos;s chat</S.Title>
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
