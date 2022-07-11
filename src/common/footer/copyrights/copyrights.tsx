import { Box } from 'src/common/box/box'
import * as S from './copyrights.styles'

export function Copyrights() {
  return (
    <Box
      css={{
        padding: '32px 0',
        maxWidth: 1072,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <S.MadeBy>
        Made with <S.Heart /> by
        <S.Link href="http://octanestd.com/">Octane Studio</S.Link>
      </S.MadeBy>

      <S.Copyright>
        © 2022 Becca Travis Real State Group. All rights reserved.
      </S.Copyright>
    </Box>
  )
}
