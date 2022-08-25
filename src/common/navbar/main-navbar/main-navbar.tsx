import dynamic from 'next/dynamic'
import Link from 'next/link'
import { LogoSvg } from '../svgs'
import * as S from './main-navbar.styles'

const NavigationMenu = dynamic<{}>(() => import('../navigation-menu/navigation-menu'))
const TalkToMe = dynamic<{}>(() => import('../talk-to-me/talk-to-me'))

export function MainNavbar() {
  return (
    <S.Nav>
      <Link href="/" passHref>
        <S.Link>
          <LogoSvg />
        </S.Link>
      </Link>
      <NavigationMenu />
      <TalkToMe />
    </S.Nav>
  )
}
