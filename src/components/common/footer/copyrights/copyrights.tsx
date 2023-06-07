import { useState } from 'react'
import { Box } from '@/common'
import * as Svg from '../svgs'
import * as S from './copyrights.styles'

export function Copyrights() {
  const [isHeartActive, setIsHeartActive] = useState(false)

  const handleToggleHeartActive = () => setIsHeartActive(!isHeartActive)

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',

        padding: '32px 0',

        boxShadow: '0 -1px 0 0 $colors$grayW9',

        '@bp4': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <S.MadeBy>
        Made with <S.Heart active={isHeartActive} onClick={handleToggleHeartActive} /> by
        <S.Link
          href="https://www.instagram.com/octane.std/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Octane Studio
        </S.Link>
      </S.MadeBy>

      <S.Logos>
        <S.LogoLink href="/">
          <Svg.Logo />
        </S.LogoLink>
        <S.Divider vertical />
        <S.ColdLink
          href="https://www.coldwellbanker.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Svg.ColdWellLogo />
        </S.ColdLink>
      </S.Logos>

      <S.Copyright>© {new Date().getFullYear()} — All rights reserved.</S.Copyright>

      <S.Divider />
    </Box>
  )
}
