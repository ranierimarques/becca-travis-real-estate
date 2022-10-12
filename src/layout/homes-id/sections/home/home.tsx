import { Flex } from '@common'
import { LastCall } from '@shared'
<<<<<<< HEAD:src/layout/homes-id/home/home.tsx
import { Slider } from '.'
import { AskAQuestion } from './ask-a-question/ask-a-question'
import { Description } from './description/description'
import { FasterContact } from './faster-contact/faster-contact'
import { Features } from './features/features'
import { Header } from './header/header'
import * as S from './home.styles'
import { PaymentCalculator } from './payment-calculator/payment-calculator'
import { PropertyDetails } from './property-details/property-details'
=======
import { AskAQuestion, FasterContact, PropertyDetails, Slider } from '.'
import * as S from './home.styles'
import * as Svg from './svgs'
>>>>>>> new-architecture:src/layout/homes-id/sections/home/home.tsx

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
<<<<<<< HEAD:src/layout/homes-id/home/home.tsx
      <Header listing={listing} />
=======
      <div>
        <S.Header>
          <Flex align="center" justify="between" css={{ mb: 16 }}>
            <S.HouseName>{listing.address}</S.HouseName>
            <S.ShareAndSave>
              <S.Button>
                <Svg.Share />
                Share
              </S.Button>

              <S.Button>
                <Svg.Heart />
                Favorite
              </S.Button>
            </S.ShareAndSave>
          </Flex>

          <Flex align="center" css={{ gap: 16 }}>
            <S.HousePrice>{listing.price}</S.HousePrice>
            <Box css={{ h: 16, w: 2, background: 'rgba($colors$gray5Rgb, .5)' }} />
            <S.HouseStatus>
              Status:
              <S.Status>{listing.status}</S.Status>
            </S.HouseStatus>

            <S.Dot />
>>>>>>> new-architecture:src/layout/homes-id/sections/home/home.tsx

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

          <PaymentCalculator />
        </Flex>
      </Flex>

      <LastCall />
    </S.Section>
  )
}
