import { Box } from '@common'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as Svg from '../svgs'
import * as S from './helper-navbar.styles'

const DropdownLanguage = dynamic(() => import('../dropdown-language/dropdown-language'))

const links = [
  { id: 1, icon: <Svg.Shield />, text: 'Local Guides', href: '/local-guides' },
  { id: 2, icon: <Svg.Chat />, text: 'Contact Us', href: '/contact-us' },
  { id: 3, icon: <Svg.User />, text: 'My account', href: '/profile' },
]

export function HelperNavbar() {
  return (
    <Box css={{ padding: '6px 0', background: '$tangerine10' }}>
      <S.Nav>
        <DropdownLanguage />

        <S.OptionsList>
          {links.map(link => (
            <li key={link.id}>
              <Link href={link.href} passHref>
                <S.Link>
                  {link.icon} {link.text}
                </S.Link>
              </Link>
            </li>
          ))}
        </S.OptionsList>
      </S.Nav>
    </Box>
  )
}