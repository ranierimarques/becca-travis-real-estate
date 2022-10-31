import { Flex } from '@common'
import { useHouse } from '@layout/homes/hooks/useHouse'
import { useVisualizationStore } from '@layout/homes/store/visualization'
import { SearchInput } from '@shared'
import * as Svg from '../svgs'
import * as S from './search.styles'

function LastUpdateLoading() {
  return (
    <>
      <S.Space>------- --, ----</S.Space> at <S.Space>--:-- --</S.Space>
    </>
  )
}

export function Search() {
  const { house, isLoading } = useHouse()
  const setVisualization = useVisualizationStore(state => state.setVisualization)
  const visualization = useVisualizationStore(state => state.visualization)

  const hasListing = house.listings?.[0]

  return (
    <>
      <S.Container visualization={visualization}>
        <S.HeaderInfos>
          <S.HomesForSale>
            {isLoading ? '---' : house.total} Homes for sale
          </S.HomesForSale>
          <S.LastUpdate>
            Last update: {isLoading && <LastUpdateLoading />}
            {hasListing ? house.listings?.[0]?.lastModification : '--'}
          </S.LastUpdate>
        </S.HeaderInfos>

        <SearchInput variant="houses" visualization={visualization} />

        <S.Options>
          <Flex>
            <S.Button
              onClick={() => setVisualization('map')}
              active={visualization === 'map'}
              borderDirection="left"
            >
              <Svg.Location /> Map
            </S.Button>
            <S.Button
              onClick={() => setVisualization('gallery')}
              active={visualization === 'gallery'}
              borderDirection="right"
            >
              <Svg.Gallery /> Gallery
            </S.Button>
          </Flex>

          <S.Button>
            <Svg.Filter /> Filter
          </S.Button>
        </S.Options>
      </S.Container>

      <S.HomesForSale variant="2">
        {isLoading ? '---' : house.total} Homes for sale
      </S.HomesForSale>
    </>
  )
}
