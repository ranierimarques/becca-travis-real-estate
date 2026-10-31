import { Box } from '@/common'
import * as Svg from '../svgs'
import * as S from './copyrights.styles'

export function Copyrights() {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',

        padding: '32px 0',

        boxShadow: '0 -1px 0 0 $colors$grayW9',

        '@bp4': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
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

      <S.Copyright>
        <a
          href="https://arec.alabama.gov/apps/LicenseSearch/Home/Details/131571"
          target="_blank"
          rel="noreferrer noopener"
        >
          Becca Travis · Associate Broker · Coldwell Banker First · AL 000126941-1
        </a>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </S.Copyright>

      <S.Divider />
    </Box>
  )
}
