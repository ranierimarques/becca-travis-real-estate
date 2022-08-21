import dynamic from 'next/dynamic'
import Link from 'next/link'
import { TalkToMe } from '../index'
import { LogoSvg } from '../svgs'
import * as S from './main-navbar.styles'

const NavigationMenu = dynamic<{}>(() => import('../navigation-menu/navigation-menu'))

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
