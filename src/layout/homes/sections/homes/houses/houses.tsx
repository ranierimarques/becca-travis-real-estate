import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import { HouseCard } from '@/shared'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import { visualizationAtom } from 'src/pages/homes'
import * as S from './houses.styles'

export function Houses() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { house, fetchNextPage, isFetchingNextPage, isInitialLoading } = useHouse()
  const loaderRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const visualization = useAtomValue(visualizationAtom)

  useEffect(() => {
    const options = {
      root: scrollRef.current,
      rootMargin: '300px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(entities => {
      const target = entities[0]

      if (target.isIntersecting && !isFetchingNextPage && fetchNextPage) {
        fetchNextPage()
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [fetchNextPage, isFetchingNextPage])

  useEffect(() => {
    scrollRef.current?.scroll({ top: 0 })
  }, [geoLocation])

  return (
    <S.ScrollableDiv ref={scrollRef}>
      <S.Houses visualization={visualization}>
        {/* Show 9 Skeleton's cards when loading first time */}
        {isInitialLoading &&
          [...Array(9)].map((_, index) => <S.SkeletonCard key={index} />)}

        {house?.listings?.map(listing => (
          <HouseCard
            key={listing.id}
            listing={listing}
            variant={visualization === 'map' ? 'small' : undefined}
          />
        ))}

        {isFetchingNextPage &&
          [...Array(9)].map((_, index) => <S.SkeletonCard key={index} />)}
      </S.Houses>

      <div ref={loaderRef} />
    </S.ScrollableDiv>
  )
}
