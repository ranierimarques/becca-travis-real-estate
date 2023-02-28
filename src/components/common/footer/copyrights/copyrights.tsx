import { useState } from 'react'
import { Box } from '@/common'
import { Logo } from '../svgs'
import * as S from './copyrights.styles'

export function Copyrights() {
  const [isHeartActive, setIsHeartActive] = useState(false)

  const handleToggleHeartActive = () => setIsHeartActive(!isHeartActive)

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
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

      <S.LogoLink href="/">
        <Logo />
      </S.LogoLink>

      <S.Copyright>© 2022 — All rights reserved.</S.Copyright>

      <S.Divider />
    </Box>
  )
}
