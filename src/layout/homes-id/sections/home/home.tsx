import { Flex } from '@common'
import { LastCall } from '@shared'
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
  relatedProperties: {
    livingArea: string
    bedroomsTotal: number
    media: string
    id: string
    price: string
    bathroomsTotal: number
    address: string
  }[]
}

export function Home({ listing, relatedProperties }: Listing) {
  return (
    <S.Section>
      <Header listing={listing} />

      <Flex css={{ gap: 32 }}>
        <div>
          <Slider media={listing.media} />
          <TableOfContents />
          <Description />
          <Features listing={listing} />
          <AskAQuestion />
        </div>

        <Flex direction="column" css={{ gap: 32 }}>
          <PropertyDetails listing={listing} />

          <FasterContact />

          <PaymentCalculator listing={listing} />
        </Flex>
      </Flex>

      <RelatedProperties listings={relatedProperties} />

      <LastCall />
    </S.Section>
  )
}
