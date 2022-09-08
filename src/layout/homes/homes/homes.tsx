import { Houses, Map } from '.'
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
      <Houses listings={listings} />
      <Map />
    </S.Container>
  )
}
