/* eslint-disable react/display-name */
import { Box } from '@common'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { forwardRef, Suspense } from 'react'
import { ChatSvg, EarthSvg, ShieldSvg, UserSvg } from '../svgs'
import * as S from './helper-navbar.styles'

const DropdownLanguage = dynamic<{}>(
  () => import('../dropdown-language/dropdown-language'),
  {
    suspense: true,
  }
)

export const Trigger = forwardRef<any>(({ ...props }, forwardedRef) => (
  <S.ButtonTrigger {...props} ref={forwardedRef}>
    <EarthSvg />
    Language
  </S.ButtonTrigger>
))

const links = [
  { id: 1, icon: <ShieldSvg />, text: 'Local Guides', href: '/local-guides' },
  { id: 2, icon: <ChatSvg />, text: 'Contact Us', href: '/contact-us' },
  { id: 3, icon: <UserSvg />, text: 'My account', href: '/profile' },
]

export function HelperNavbar() {
  return (
    <Box css={{ padding: '6px 0', background: '$tangerine10' }}>
      <S.Nav>
        <Suspense fallback={<Trigger />}>
          <DropdownLanguage />
        </Suspense>

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
