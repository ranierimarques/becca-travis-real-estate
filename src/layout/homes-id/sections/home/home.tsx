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
  Slider,
} from '.'
import * as S from './home.styles'

interface Listing {
  listing: {
    price: string
    address: string
    status: string
    lastUpdated: string
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
}

const pageIndex = [
  {
    name: 'Description',
    href: '',
  },
  {
    name: 'Features',
    href: '',
  },
  {
    name: 'Ask a Question',
    href: '',
  },
  {
    name: 'Related Properties',
    href: '',
  },
]

export function Home({ listing }: Listing) {
  return (
    <S.Section>
      <Header listing={listing} />

      <Flex css={{ gap: 32 }}>
        <div>
          <Slider media={listing.media} />
          <S.PageIndex>
            {pageIndex.map(section => (
              <li key={section.name}>{section.name}</li>
            ))}
          </S.PageIndex>
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

      <LastCall />
    </S.Section>
  )
}