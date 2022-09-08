import { Flex } from '@common'
import { Houses, Map, Search } from '.'
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
      <Flex direction="column" css={{ maxWidth: '45%', height: 'calc(100vh - 110px)' }}>
        <Search />
        <Houses listings={listings} />
      </Flex>
      <Map />
    </S.Container>
  )
}
