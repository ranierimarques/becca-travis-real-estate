import { Flex } from '@/common'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { LastCall } from '@/shared'
import {
  AskAQuestion,
  Description,
  FasterContact,
  Features,
  Header,
  PaymentCalculator,
  PropertyDetails,
  RelatedProperties,
  Slider,
  TableOfContents,
} from '.'
import * as S from './home.styles'

interface Listing {
  listing: {
    price: string
    address: string
    status: string
    lastUpdated: string
    lastUpdatedTitle: string
    media: string[]
    bedroomsTotal: number
    bathroomsTotal: number
    lotSizeSquareFeet: string
    subdivisionName: string
    propertySubType: string
    countyOrParish: string
    cityRegion: string | null

    foundationDetails: string
    levels: string
    buildingTotalArea: string
    newConstruction: string
    propertyCondition: string
    propertyType: string
    sewer: string
    waterSource: string
    elementarySchool: string
    middleSchool: string
    highSchool: string
  }
  relatedProperties: FormattedHouseCard[]
}

export function Home({ listing, relatedProperties }: Listing) {
  return (
    <S.Section>
      <Header listing={listing} />

      <Flex css={{ gap: 32 }}>
        <Slider media={listing.media} />
        <PropertyDetails listing={listing} />
      </Flex>

      <div>
        <TableOfContents />

        <Flex css={{ gap: 32 }}>
          <div>
            <Description />
            <Features listing={listing} />
            <AskAQuestion />
          </div>
          <Flex direction="column" css={{ gap: 32, mt: 32 }}>
            <FasterContact />

            <PaymentCalculator listing={listing} />
          </Flex>
        </Flex>

        <RelatedProperties listings={relatedProperties} />
      </div>

      <LastCall />
    </S.Section>
  )
}
