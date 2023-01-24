import { useHouse } from '@/layout/homes/hooks/useHouse'
import { HouseCard } from '@/shared'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import { visualizationAtom } from 'src/pages/homes'
import * as S from './houses.styles'

export function Houses() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { house, setSize, isLoadingMore, isLoadingInitialData } = useHouse()
  const visualization = useAtomValue(visualizationAtom)

  useEffect(() => {
    const options = {
      root: scrollRef.current,
      rootMargin: '300px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(entities => {
      const target = entities[0]

      if (target.isIntersecting && !isLoadingMore) {
        setSize(oldSize => oldSize + 1)
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [setSize, isLoadingMore])

  return (
    <S.ScrollableDiv ref={scrollRef}>
      <S.Houses visualization={visualization}>
        {/* Show 9 Skeleton's cards when loading first time */}
        {isLoadingInitialData &&
          [...Array(9)].map((_, index) => <S.SkeletonCard key={index} />)}

        {house.listings?.map(listing => (
          <HouseCard
            key={listing.id}
            listing={listing}
            variant={visualization === 'map' ? 'small' : undefined}
          />
        ))}

        {isLoadingMore && [...Array(9)].map((_, index) => <S.SkeletonCard key={index} />)}
      </S.Houses>

      <div ref={loaderRef} />
    </S.ScrollableDiv>
  )
}
