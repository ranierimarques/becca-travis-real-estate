import { Box, Flex } from '@common'
import { HeartSvg, ShareSvg } from '../svgs'
import * as S from './header.styles'

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

export function Header({ listing }: Listing) {
  const titleDetails = [
    {
      title: 'Status:',
      status: listing.status,
    },
    {
      title: 'On site:',
      status: '10 days',
    },
    {
      title: 'Updated:',
      status: listing.lastUpdated,
    },
  ]

  return (
    <S.Header>
      <Flex align="center" justify="between" css={{ mb: 16 }}>
        <S.HouseName>{listing.address}</S.HouseName>
        <S.ShareAndSave>
          <S.Button>
            <ShareSvg />
            Share
          </S.Button>

          <S.Button>
            <HeartSvg />
            Favorite
          </S.Button>
        </S.ShareAndSave>
      </Flex>

      <Flex align="center" css={{ gap: 16 }}>
        <S.HousePrice>{listing.price}</S.HousePrice>
        <Box css={{ h: 16, w: 2, background: 'rgba($colors$gray5Rgb, .5)' }} />
        {titleDetails.map((titleDetail, index) => {
          return (
            <Flex align="center" css={{ gap: 16 }} key={titleDetail.title}>
              <S.HouseStatus>
                {titleDetail.title}
                <S.Status> {titleDetail.status}</S.Status>
              </S.HouseStatus>
              {index + 1 < titleDetails.length && <S.Dot />}
            </Flex>
          )
        })}
      </Flex>
    </S.Header>
  )
}
