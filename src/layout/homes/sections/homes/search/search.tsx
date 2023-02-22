import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { visualizationAtom } from 'src/pages/homes'
import { Flex } from '@/common'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import useRelativeDate from '@/resources/hooks/useRelativeDate'
import { getDate } from '@/resources/utils/date'
import { SearchInput } from '@/shared'
import { Filters } from '../'
import * as Svg from '../svgs'
import * as S from './search.styles'

type LastUpdateProps = {
  timestamp: string | undefined
}

function LastUpdate({ timestamp = new Date().toISOString() }: LastUpdateProps) {
  const relativeDate = useRelativeDate(timestamp)

  return <span title={getDate(timestamp, 'en-US', 'full')}>{relativeDate}</span>
}

type HeaderInfosProps = {
  isLoadingAll: boolean | undefined
  total: number | undefined
  timestamp: string | undefined
} & S.HeaderInfosVariants

function HeaderInfos({ isLoadingAll, total, timestamp, variant }: HeaderInfosProps) {
  return (
    <S.HeaderInfos variant={variant}>
      <S.HomesForSale>
        {isLoadingAll ? '---' : (total || 0).toLocaleString('en')} Homes for sale
      </S.HomesForSale>
      <S.LastUpdate>
        Last update:{' '}
        {isLoadingAll ? (
          <S.Space>-- ------- ---</S.Space>
        ) : (
          <LastUpdate timestamp={timestamp} />
        )}
      </S.LastUpdate>
    </S.HeaderInfos>
  )
}

export function Search() {
  const router = useRouter()
  const [visualization, setVisualization] = useAtom(visualizationAtom)
  const { house, isLoadingAll } = useHouse()

  function onChangeVisualization(view: 'map' | 'gallery') {
    router.replace(`?view=${view}`, undefined, { shallow: true })
    setVisualization(view)
  }

  return (
    <>
      <S.Container visualization={visualization}>
        <HeaderInfos
          isLoadingAll={isLoadingAll}
          total={house?.total}
          timestamp={house?.timestamp}
        />

        <SearchInput variant="houses" visualization={visualization} />

        <S.Options>
          <Flex>
            <S.Button
              onClick={() => onChangeVisualization('map')}
              active={visualization === 'map'}
              borderDirection="left"
            >
              <Svg.Location /> Map
            </S.Button>
            <S.Button
              onClick={() => onChangeVisualization('gallery')}
              active={visualization === 'gallery'}
              borderDirection="right"
            >
              <Svg.Gallery /> Gallery
            </S.Button>
          </Flex>

          <Filters />
        </S.Options>
      </S.Container>

      <HeaderInfos
        variant="2"
        isLoadingAll={isLoadingAll}
        total={house?.total}
        timestamp={house?.timestamp}
      />
    </>
  )
}
