import { Flex } from '@common'
import { useHouse } from '@layout/homes/hooks/useHouse'
import { SearchInput } from '@shared'
import * as Svg from '../svgs'
import * as S from './search.styles'

export function Search() {
  const { house, isLoading } = useHouse()

  return (
    <S.Container>
      <Flex justify="between">
        <S.HomesForSale>{isLoading ? '---' : house.total} Homes for sale</S.HomesForSale>
        <S.LastUpdate>
          Last update:{' '}
          {isLoading && (
            <>
              <S.Space>------- --, ----</S.Space> at <S.Space>--:-- --</S.Space>
            </>
          )}
          {house.listings?.[0] ? house.listings?.[0]?.lastModification : '--'}
        </S.LastUpdate>
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
