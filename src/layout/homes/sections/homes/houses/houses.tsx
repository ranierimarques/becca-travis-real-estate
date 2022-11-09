import { useHouse } from '@layout/homes/hooks/useHouse'
import { useVisualizationStore } from '@layout/homes/store/visualization'
import { ScrollArea } from '@primitives'
import { HouseCard } from '@shared'
import * as S from './houses.styles'

export function Houses() {
  const { house, isLoading } = useHouse()
  const visualization = useVisualizationStore(state => state.visualization)

  return (
    <ScrollArea>
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
