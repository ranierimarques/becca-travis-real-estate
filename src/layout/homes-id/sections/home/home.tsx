import { Box, Flex } from '@common'
import { LastCall } from '@shared'
import { AskAQuestion, FasterContact, PropertyDetails, Slider } from '.'
import * as S from './home.styles'
import * as Svg from './svgs'

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
  }
}

export function Home({ listing }: Listing) {
  return (
    <S.Section>
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

            <S.HouseStatus>
              On site:
              <S.Status>10 days</S.Status>
            </S.HouseStatus>

            <S.Dot />

            <S.HouseStatus>
              Updated:
              <S.Status>{listing.lastUpdated}</S.Status>
            </S.HouseStatus>
          </Flex>
        </S.Header>

        <Flex justify="between" css={{ mb: 32 }}>
          <Slider media={listing.media} />
          <PropertyDetails listing={listing} />
        </Flex>
      </div>

      <Flex align="start">
        <AskAQuestion />
        <FasterContact />
      </Flex>

      <LastCall />
    </S.Section>
  )
}
