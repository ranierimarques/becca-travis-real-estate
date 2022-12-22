import { Button } from '@/common'
import { Dialog } from '@/primitives'
import type * as Stitches from '@stitches/react'
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

type ButtonProps = React.ComponentProps<typeof Button>

type Props = {
  css?: Stitches.CSS
  size?: ButtonProps['size']
}

export function Contact({ ...props }: Props) {
  return (
    <Dialog.Root
      onOpenChange={open => (document.body.dataset['overflow'] = String(!open))}
    >
      <Dialog.Trigger asChild>
        <Button {...props}>Let&apos;s chat</Button>
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
