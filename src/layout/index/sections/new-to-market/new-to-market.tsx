import { Flex } from '@/common'
import { getHouseListing } from '@/services/house-listings'
import { Hat, HouseCard } from '@/shared'
import useSWR from 'swr'
import * as S from './new-to-market.styles'

export function NewToMarket() {
  const { data: listings } = useSWR('/home/houses', async () =>
    getHouseListing({ type: 'card', fetchOn: 'browser' })
  )

  return (
    <S.Section>
      <Hat>NEW PROPERTIES</Hat>
      <Flex align="center" justify="between" css={{ w: '100%', margin: '8px 0 48px' }}>
        <S.Title>New to Market</S.Title>
        <S.ViewAll href="/homes">VIEW ALL</S.ViewAll>
      </Flex>

      <S.Houses>
        {listings?.map(listing => (
          <HouseCard key={listing.id} listing={listing} badge="New" />
        ))}
      </S.Houses>
    </S.Section>
  )
}
