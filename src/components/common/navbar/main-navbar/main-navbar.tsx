import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as Svg from '../svgs'
import * as S from './main-navbar.styles'

const Navigation = dynamic(() => import('../navigation/navigation'))
const TalkToMe = dynamic(() => import('../contact/contact'))

export function MainNavbar() {
  return (
    <S.Nav>
      <Link href="/" passHref>
        <S.Link>
          <Svg.Logo />
        </S.Link>
      </Link>
      <Navigation />
      <TalkToMe />
    </S.Nav>
  )
}
