import { useHouse } from '@layout/homes/hooks/useHouse'
import { ScrollArea } from '@primitives'
import { HouseCard } from '@shared'
import * as S from './houses.styles'

export function Houses() {
  const { house, isLoading } = useHouse()

  return (
    <ScrollArea>
      <S.Houses>
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
          <HouseCard key={listing.id} listing={listing} variant="small" />
        ))}
      </S.Houses>
    </ScrollArea>
  )
}
