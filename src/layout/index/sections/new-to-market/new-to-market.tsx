import { Flex } from '@common'
import { Hat, HouseCard } from '@shared'
import Link from 'next/link'
import * as S from './new-to-market.styles'

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

export function NewToMarket({ listings }: Listings) {
  return (
    <S.Section>
      <Hat>NEW PROPERTIES</Hat>
      <Flex align="center" justify="between" css={{ w: '100%', margin: '8px 0 48px' }}>
        <S.Title>New to Market</S.Title>
        <Link href="/homes" passHref>
          <S.ViewAll>VIEW ALL</S.ViewAll>
        </Link>
      </Flex>

      <S.Houses>
        {listings.map(listing => (
          <HouseCard key={listing.id} listing={listing} />
        ))}
      </S.Houses>
    </S.Section>
  )
}
