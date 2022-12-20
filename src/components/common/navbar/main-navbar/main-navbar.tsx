import dynamic from 'next/dynamic'
import * as Svg from '../svgs'
import * as S from './main-navbar.styles'

const Navigation = dynamic(
  () => import('../navigation/navigation').then(module => module.Navigation),
  { ssr: false, loading: () => <div /> }
)
const TalkToMe = dynamic(
  () => import('../contact/contact').then(module => module.Contact),
  { ssr: false, loading: () => <div /> }
)
export function MainNavbar() {
  return (
    <S.Nav>
      <S.Link href="/">
        <Svg.Logo />
      </S.Link>

      <Navigation />
      <TalkToMe />
    </S.Nav>
  )
}
