import { Flex } from '@common'
import { SearchInput } from '@shared'
import * as Svg from '../svgs'
import * as S from './search.styles'

export function Search() {
  return (
    <S.Container>
      <Flex justify="between">
        <S.HomesForSale>3208 Homes for sale</S.HomesForSale>
        <S.LastUpdate>Last update: 30 minutes ago</S.LastUpdate>
      </Flex>
      <SearchInput variant="houses" />
      <Flex justify="between" css={{ mt: 16 }}>
        <Flex>
          <S.Button borderDirection="left" active>
            <Svg.Location /> Map
          </S.Button>
          <S.Button borderDirection="right">
            <Svg.Gallery /> Gallery
          </S.Button>
        </Flex>

        <S.Button>
          <Svg.Filter /> Filter
        </S.Button>
      </Flex>
    </S.Container>
  )
}
