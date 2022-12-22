import { Box } from '@/common'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { NavigationMobile } from '..'
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
const DropdownLanguage = dynamic(() => import('../dropdown-language/dropdown-language'), {
  ssr: false,
  loading: () => <div />,
})

export function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenuVisibility() {
    setIsOpen(oldValue => !oldValue)
  }

  useEffect(() => {
    document.body.dataset['overflow'] = String(isOpen)
  }, [isOpen])

  return (
    <S.Nav>
      <S.Link href="/" onClick={() => setIsOpen(false)}>
        <Svg.Logo />
      </S.Link>

      <Box
        css={{
          display: 'none',
          alignItems: 'center',
          gap: 24,
          '@bp4': { display: 'flex' },
          '@bp1': { gap: 14 },
        }}
      >
        <DropdownLanguage>
          <S.LargeLanguage />
        </DropdownLanguage>
        <S.MobileBars isVisible={!isOpen} onClick={toggleMenuVisibility} />
        <S.MobileClose isVisible={isOpen} onClick={toggleMenuVisibility} />

        <NavigationMobile isOpen={isOpen} toggleMenuVisibility={toggleMenuVisibility} />
      </Box>

      <Box css={{ display: 'flex', alignItems: 'center', '@bp4': { display: 'none' } }}>
        <Navigation />
        <TalkToMe css={{ marginLeft: 16 }} />
      </Box>
    </S.Nav>
  )
}
