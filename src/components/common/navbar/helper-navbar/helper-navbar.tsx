import dynamic from 'next/dynamic'
import { Box } from '@/common'
import * as Svg from '../svgs'
import * as S from './helper-navbar.styles'

const DropdownLanguage = dynamic(() => import('../dropdown-language/dropdown-language'), {
  ssr: false,
  loading: () => <div />,
})

const links = [
  {
    id: 1,
    icon: <Svg.Shield />,
    text: 'Huntsville Buyer Hub',
    href: '/north-alabama-property-research',
  },
  { id: 2, icon: <Svg.Chat />, text: 'Contact Us', href: '/contact-us' },
  { id: 3, icon: <Svg.User />, text: 'My account', href: '/profile', disabled: true },
]

export function HelperNavbar() {
  return (
    <Box
      css={{
        padding: '6px 0',
        background: '$tangerine10',
        '@bp4': {
          display: 'none',
        },
      }}
    >
      <S.Nav>
        <DropdownLanguage />

        <S.OptionsList>
          {links.map(link => {
            if (link.disabled) {
              return (
                <li key={link.id}>
                  <S.DisabledLink>
                    {link.icon} {link.text}
                  </S.DisabledLink>
                </li>
              )
            }
            return (
              <li key={link.id}>
                <S.Link
                  href={link.href}
                  css={
                    link.id === 1
                      ? {
                          background: '$magenta1',
                          color: '$white',
                          borderRadius: 999,
                          padding: '6px 12px',
                          '&:hover': { background: '$magenta7' },
                        }
                      : {}
                  }
                >
                  {link.icon} {link.text}
                </S.Link>
              </li>
            )
          })}
        </S.OptionsList>
      </S.Nav>
    </Box>
  )
}
