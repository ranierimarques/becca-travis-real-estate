import { HouseCard } from '@shared'
import * as S from './homes.styles'

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

export function Homes({ listings }: Listings) {
  return (
    <S.Container>
      <S.Houses>
        {listings.map(listing => (
          <HouseCard key={listing.id} listing={listing} />
        ))}
      </S.Houses>
    </S.Container>
  )
}
