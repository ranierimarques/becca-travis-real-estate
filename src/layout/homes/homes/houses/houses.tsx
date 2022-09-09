import { HouseCard, MissOutCard } from '@shared'
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
    <S.Root scrollHideDelay={0}>
      <S.Viewport>
        <S.Houses>
          <MissOutCard />
          {listings.map(listing => (
            <HouseCard key={listing.id} listing={listing} />
          ))}
        </S.Houses>
      </S.Viewport>
      <S.Scrollbar orientation="vertical">
        <S.Thumb />
      </S.Scrollbar>
    </S.Root>
  )
}
