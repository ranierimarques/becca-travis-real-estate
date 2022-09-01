import { Flex, Hat } from '@common'
import { HouseCard } from '@shared'
import Link from 'next/link'
import * as S from './new-to-market.styles'

interface House {
  data: {
    bundle: {
      ListingId: string
      BedroomsTotal: string
      BathroomsTotalInteger: string
      LivingArea: number
      UnparsedAddress: string
      ListPrice: number
      Media: {
        MediaURL: string
      }[]
    }[]
  }
}

export function NewToMarket({ data }: House) {
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
        {data.bundle.map(house => (
          <HouseCard key={house.ListingId} house={house} />
        ))}
      </S.Houses>
    </S.Section>
  )
}
