import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useVisualizationStore } from '@/layout/homes/store/visualization'
import { ScrollArea } from '@/primitives'
import { HouseCard } from '@/shared'
import * as S from './houses.styles'
import {
  useGeolocationStore,
  type GeoLocationState,
} from '@/layout/homes/store/geolocation'
import React from 'react'

export function Houses() {
  const { house, isLoading } = useHouse()
  const visualization = useVisualizationStore(state => state.visualization)
  const geoLocation = useGeolocationStore((state: GeoLocationState) => state.geoLocation)
  const setGeoLocation = useGeolocationStore(
    (state: GeoLocationState) => state.setGeoLocation
  )

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target as HTMLDivElement
    if (scrollTop + clientHeight + 0.5 >= scrollHeight && !isLoading) {
      setGeoLocation({
        ...geoLocation,
        offset: house.listings?.length,
        // faz cair no loop infinito que rola la no useHouse.ts se enviar o keepPreviousHouses como ftrue
        //      keepPreviousHouses: true,
      })
    }
  }

  return (
    <ScrollArea onScroll={handleScroll}>
      <S.Houses visualization={visualization}>
        {isLoading && (
          <>
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
            <S.SkeletonCard />
          </>
        )}
        {house.listings?.map(listing => (
          <HouseCard
            key={listing.id}
            listing={listing}
            variant={visualization === 'map' ? 'small' : undefined}
          />
        ))}
      </S.Houses>
    </ScrollArea>
  )
}
