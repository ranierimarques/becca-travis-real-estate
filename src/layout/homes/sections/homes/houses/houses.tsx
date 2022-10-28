import { useHouse } from '@layout/homes/store/houses'
import { ScrollArea } from '@primitives'
import { HouseCard } from '@shared'
import * as S from './houses.styles'

export function Houses() {
  const { listings } = useHouse()

  return (
    <ScrollArea>
      <S.Houses>
        {/* <MissOutCard /> */}
        {listings?.map(listing => (
          <HouseCard key={listing.id} listing={listing} variant="small" />
        ))}
      </S.Houses>
    </ScrollArea>
  )
}
