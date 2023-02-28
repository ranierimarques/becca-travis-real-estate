import { ReactNode } from 'react'
import type * as Stitches from '@stitches/react'
import { Button } from '@/common'
import { Dialog } from '@/primitives'
import * as S from './contact.styles'
import * as Svg from './svgs'

type ButtonProps = React.ComponentProps<typeof Button>

interface ContactProps {
  css?: Stitches.CSS
  size?: ButtonProps['size']
  children?: ReactNode
}

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

export function Contact({ children, ...props }: ContactProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children ? children : <Button {...props}>Let&apos;s chat</Button>}
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
