import { ScrollArea } from '@primitives'
import { HouseCard } from '@shared'
import * as S from './houses.styles'

interface Listings {
  listings: {
    id: string
    media: string
    price: string
    address: string
    bedroomsTotal: number
    bathroomsTotal: number
    livingArea: string
  }[]
}

export function Houses({ listings }: Listings) {
  return (
    <ScrollArea>
      <S.Houses>
        {/* <MissOutCard /> */}
        {listings.map(listing => (
          <HouseCard key={listing.id} listing={listing} variant="small" />
        ))}
      </S.Houses>
    </ScrollArea>
  )
}
