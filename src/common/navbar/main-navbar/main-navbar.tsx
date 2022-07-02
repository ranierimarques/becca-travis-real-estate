import { NavigationMenu } from '@common'
import Link from 'next/link'
import { LogoSvg } from '../svgs'
import * as S from './main-navbar.styles'

export function MainNavbar() {
  return (
    <S.Nav>
      <Link href="/">
        <a>
          <LogoSvg />
        </a>
      </Link>
      <NavigationMenu />
    </S.Nav>
  )
}
