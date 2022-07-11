import Link from 'next/link'
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
    <div>
      {links.map(link => (
        <Link href={link.href} key={link.text}>
          <a>{link.text}</a>
        </Link>
      ))}
    </div>
  )
}
