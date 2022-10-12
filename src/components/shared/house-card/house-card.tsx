import { Box, Flex } from '@common'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './house-card.styles'
import { BedSvg, ShowerSvg, SquareSvg } from './svgs'

interface Listing {
  listing: {
    id: string
    media: string
    price: string
    address: string
    bedroomsTotal: number
    bathroomsTotal: number
    livingArea: string
  }
}

export function HouseCard({ listing }: Listing) {
  return (
    <li>
      <Link href={`/homes/${listing.id}`} passHref>
        <S.Link draggable="false">
          <Box css={{ position: 'relative', w: '100%', aspectRatio: '16 / 9' }}>
            <Image
              src={listing.media}
              alt="House"
              layout="fill"
              style={{ pointerEvents: 'none' }}
            />
            <S.New>New</S.New>
            <S.FavoriteButton
              disabled
              aria-label="Favorite house"
              onClick={event => event.preventDefault()}
            >
              <S.Favorite />
            </S.FavoriteButton>
          </Box>
          <S.HouseInfo>
            <S.Status>
              <Box css={{ w: 8, h: 8, bg: '$green1', br: 4 }} />
              For sale
            </S.Status>
            <S.Value>{listing.price}</S.Value>
            <S.Address>{listing.address}</S.Address>
            <Flex align="center" css={{ gap: '8px 12px', mb: 12, flexWrap: 'wrap' }}>
              <S.Details>
                <BedSvg />
                {listing.bedroomsTotal} beds
              </S.Details>
              <S.Details>
                <ShowerSvg />
                {listing.bathroomsTotal} baths
              </S.Details>
              <S.Details>
                <SquareSvg />
                {listing.livingArea} sqft
              </S.Details>
            </Flex>
            <S.VAMLS>2022 VAMLS, Inc.</S.VAMLS>
          </S.HouseInfo>
        </S.Link>
      </Link>
    </li>
  )
}
