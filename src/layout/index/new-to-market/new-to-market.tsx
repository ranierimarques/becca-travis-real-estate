import { Flex, Hat } from '@common'
import { useFetch } from '@resources/hooks/useFetch'
import { HouseCard } from '@shared'
import Link from 'next/link'
import * as S from './new-to-market.styles'

const url = `https://api.bridgedataoutput.com/api/v2/valleymls/listings?access_token=c8c61ffc7e3cfcb91714551392eb82cd&limit=3&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active`

interface House {
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

export function NewToMarket() {
  const { data } = useFetch<House>(url)

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
        {data?.bundle.map(house => (
          <HouseCard key={house.ListingId} house={house} />
        ))}
      </S.Houses>
    </S.Section>
  )
}
