import { Box, Flex } from "@common"
import Image from "next/image"
import Link from "next/link"
import * as S from "./homes.styles"
import { BedSvg, FavoriteSvg, ShowerSvg, SquareSvg } from "./svgs"

export function Homes({ data }: any) {
  function formatToDollar(amount: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  function convertSquareFeets(size: number) {
    return new Intl.NumberFormat().format(size)
  }

  return (
    <S.Container>
      <S.Houses>
        {data.map((house: any) => {
          return (
            <S.House key={house.ListingId}>
              <Link href={`/homes/${house.ListingId}`} passHref>
                <a>
                  <Box css={{ position: "relative", lineHeight: 0 }}>
                    <Image
                      src={house.Media[0].MediaURL}
                      alt="house"
                      width={336}
                      height={189}
                    />
                    <S.New>New</S.New>
                    <S.HeartSvg>
                      <FavoriteSvg />
                    </S.HeartSvg>
                  </Box>
                </a>
              </Link>

              <S.HouseInfo>
                <S.Status>
                  <Box css={{ w: 8, h: 8, bg: "#83CF77", br: 4 }} />
                  For sale
                </S.Status>
                <S.Value>{formatToDollar(house.ListPrice)}</S.Value>
                <S.Address>{house.UnparsedAddress}</S.Address>
                <Flex align="center" css={{ gap: 12, mb: 12 }}>
                  <S.Bedrooms>
                    <BedSvg /> {house.BedroomsTotal} beds
                  </S.Bedrooms>
                  <S.Bathrooms>
                    <ShowerSvg /> {house.BathroomsTotalInteger} baths
                  </S.Bathrooms>
                  <S.SquareFeet>
                    <SquareSvg /> {convertSquareFeets(house.LivingArea)} sqft
                  </S.SquareFeet>
                </Flex>
                <S.VAMLS>2022 VAMLS, Inc.</S.VAMLS>
              </S.HouseInfo>
            </S.House>
          )
        })}
      </S.Houses>
    </S.Container>
  )
}
