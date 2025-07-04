import { useEffect, useRef } from 'react'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useFiltersStore } from '@/layout/homes/store/filters'
import { useVisualizationStore } from '@/layout/homes/store/visualization'
import { HouseCard } from '@/shared'
import * as S from './houses.styles'

type SkeletonCardsProps = { count: number }

function SkeletonCards({ count }: SkeletonCardsProps) {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <S.SkeletonCard key={index} />
      ))}
    </>
  )
}

function NoResults() {
  return <div>No results</div>
}

export function Houses() {
  const filters = useFiltersStore(state => state.filters)
  const { house, fetchNextPage, isFetchingNextPage, isInitialLoading } = useHouse()
  const loaderRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const visualization = useVisualizationStore(state => state.visualization)

  useEffect(() => {
    const options = {
      root: scrollRef.current,
      rootMargin: '300px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(entities => {
      const target = entities[0]

      if (target.isIntersecting && !isFetchingNextPage && fetchNextPage && house.total) {
        fetchNextPage()
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [fetchNextPage, isFetchingNextPage, house.total])

  useEffect(() => {
    scrollRef.current?.scroll({ top: 0 })
  }, [filters])

  return (
    <S.ScrollableDiv ref={scrollRef}>
      <S.Houses visualization={visualization}>
        {isInitialLoading && <SkeletonCards count={9} />}

        {house.listings?.map(listing => (
          <HouseCard
            key={listing.id}
            listing={listing}
            variant={visualization === 'map' ? 'small' : undefined}
          />
        ))}

        {!house.total && <NoResults />}

        {isFetchingNextPage && <SkeletonCards count={9} />}
      </S.Houses>

      <div ref={loaderRef} />
    </S.ScrollableDiv>
  )
}
