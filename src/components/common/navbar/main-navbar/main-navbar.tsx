import dynamic from 'next/dynamic'
import Link from 'next/link'
import { LogoSvg } from '../svgs'
import * as S from './main-navbar.styles'

const Navigation = dynamic(() => import('../navigation/navigation'))
const TalkToMe = dynamic(() => import('../talk-to-me/talk-to-me'))

export function MainNavbar() {
  return (
    <S.Nav>
      <Link href="/" passHref>
        <S.Link>
          <LogoSvg />
        </S.Link>
      </Link>
      <Navigation />
      <TalkToMe />
    </S.Nav>
  )
}
