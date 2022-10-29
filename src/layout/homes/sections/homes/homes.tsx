import { Flex } from '@common'
import { Houses, Map, Search } from '.'
import * as S from './homes.styles'

export function Homes() {
  return (
    <S.Container>
      <Flex
        direction="column"
        css={{ maxWidth: '45%', minWidth: '45%', height: 'calc(100vh - 110px)' }}
      >
        <Search />
        <Houses />
      </Flex>
      <Map />
    </S.Container>
  )
}
