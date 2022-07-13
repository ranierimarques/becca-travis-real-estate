import Link from 'next/link'
import { Box } from 'src/common/box/box'
import * as S from './disclaimer-links.styles'

const links = [
  { href: '/', text: 'Privacy notice' },
  { href: '/', text: 'DMCA' },
  { href: '/', text: 'Accessibility statement' },
  { href: '/', text: 'Terms of service' },
  { href: '/', text: 'Fraud alert' },
]

export function DisclaimerLinks() {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,

        padding: '20px 0',
        boxShadow: 'inset 0 1px 0 0 $colors$magenta9, inset 0 -1px 0 0 $colors$magenta9',
        background: 'rgba($colors$magenta7Rgb, 0.5)',
      }}
    >
      {links.map(link => (
        <Link href={link.href} key={link.text} passHref>
          <S.Link>{link.text}</S.Link>
        </Link>
      ))}
    </Box>
  )
}
