import Link from 'next/link'
import { NavigationMenu, TalkToMe } from '../index'
import { LogoSvg } from '../svgs'
import * as S from './main-navbar.styles'

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
