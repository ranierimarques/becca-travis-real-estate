import { Box, Flex } from '@common'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './house-card.styles'
import { BedSvg, ShowerSvg, SquareSvg } from './svgs'

interface HouseCardProps {
  house: {
    ListingId: string
    BedroomsTotal: string
    BathroomsTotalInteger: string
    LivingArea: number
    UnparsedAddress: string
    ListPrice: number
    Media: {
      MediaURL: string
    }[]
  }
}

export function HouseCard({ house }: HouseCardProps) {
  function formatToDollar(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  function convertSquareFeets(size: number) {
    return new Intl.NumberFormat().format(size)
  }

  return (
    <li>
      <Link href="/">
        <a>
          <Box css={{ position: 'relative', w: '100%', aspectRatio: '16 / 9' }}>
            <Image
              src={house.Media[0].MediaURL}
              alt="house"
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
            <S.Value>{formatToDollar(house.ListPrice)}</S.Value>
            <S.Address>{house.UnparsedAddress}</S.Address>
            <Flex align="center" css={{ gap: '8px 12px', mb: 12, flexWrap: 'wrap' }}>
              <S.Details>
                <BedSvg />
                {house.BedroomsTotal} beds
              </S.Details>
              <S.Details>
                <ShowerSvg />
                {house.BathroomsTotalInteger} baths
              </S.Details>
              <S.Details>
                <SquareSvg />
                {convertSquareFeets(house.LivingArea)} sqft
              </S.Details>
            </Flex>
            <S.VAMLS>2022 VAMLS, Inc.</S.VAMLS>
          </S.HouseInfo>
        </a>
      </Link>
    </li>
  )
}
