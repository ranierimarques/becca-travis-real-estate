import { Flex } from '@/common'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useVisualizationStore } from '@/layout/homes/store/visualization'
import useRelativeDate from '@/resources/hooks/useRelativeDate'
import { getDate } from '@/resources/utils/date'
import { SearchInput } from '@/shared'
import { useRouter } from 'next/router'
import * as Svg from '../svgs'
import * as S from './search.styles'

type LastUpdateProps = {
  timestamp: string
}

function LastUpdate({ timestamp }: LastUpdateProps) {
  const relativeDate = useRelativeDate(timestamp)

  return <span title={getDate(timestamp, 'en-US', 'full')}>{relativeDate}</span>
}

export function Search() {
  const router = useRouter()
  const { house, isLoading } = useHouse()
  const visualization = useVisualizationStore(state => state.visualization)

  const hasListing = house.listings?.[0]
  const timestamp = house.timestamp ?? ''

  return (
    <>
      <S.Container visualization={visualization}>
        <S.HeaderInfos>
          <S.HomesForSale>
            {isLoading ? '---' : house.total} Homes for sale
          </S.HomesForSale>
          <S.LastUpdate>
            Last update: {isLoading && <S.Space>- ------- ---</S.Space>}
            {hasListing ? <LastUpdate timestamp={timestamp} /> : '--'}
          </S.LastUpdate>
        </S.HeaderInfos>

        <SearchInput variant="houses" visualization={visualization} />

        <S.Options>
          <Flex>
            <S.Button
              onClick={() => router.replace('?view=map')}
              active={visualization === 'map'}
              borderDirection="left"
            >
              <Svg.Location /> Map
            </S.Button>
            <S.Button
              onClick={() => router.replace('?view=gallery')}
              active={visualization === 'gallery'}
              borderDirection="right"
            >
              <Svg.Gallery /> Gallery
            </S.Button>
          </Flex>

          <S.Button active={false}>
            <Svg.Filter /> Filter
          </S.Button>
        </S.Options>
      </S.Container>

      <S.HeaderInfos variant="2">
        <S.HomesForSale variant="2">
          {isLoading ? '---' : house.total} Homes for sale
        </S.HomesForSale>
        <S.LastUpdate variant="2">
          Last update: {isLoading && <S.Space>- ------- ---</S.Space>}
          {hasListing ? <LastUpdate timestamp={timestamp} /> : '--'}
        </S.LastUpdate>
      </S.HeaderInfos>
    </>
  )
}
