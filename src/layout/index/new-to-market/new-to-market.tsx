import { Box, Button, Flex, Hat } from "@common"
import { useFetch } from "@resources/hooks/useFetch"
import Image from "next/image"
import Link from "next/link"
import * as S from "./new-to-market.styles"
import { BedSvg, FavoriteSvg, ShowerSvg, SquareSvg } from "./svgs"

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
    <S.Section>
      <Flex align="start" direction="column" css={{ gap: 8, mb: 40 }}>
        <Hat>NEW PROPERTIES</Hat>
        <Flex align="center" justify="between" css={{ w: "100%" }}>
          <S.Title>New to Market</S.Title>
          <Link href="#" passHref>
            <S.ViewAll>VIEW ALL</S.ViewAll>
          </Link>
        </Flex>
      </Flex>

      <S.Houses>
        {data?.bundle.map(house => {
          console.log(house)
          return (
            <S.House key={house.ListingId}>
              <Link href="#" passHref>
                <a>
                  <Box
                    css={{ position: "relative", lineHeight: 0, maxWidth: 336 }}
                  >
                    <Image
                      src={house.Media[0].MediaURL}
                      alt="house"
                      width={336}
                      height={189}
                    />
                    <S.New>New</S.New>
                  </Box>
                </a>
              </Link>

              <Button
                as="a"
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  position: "absolute",
                  top: "8px",
                  right: "8px",

                  padding: "4px 3px 2px",

                  background: "$grayW3",
                  opacity: "0.8",
                  border: "1px solid $grayW2",
                  boxShadow: "0px 0px 15px rgba($colors$blackRgb, 0.15)",
                  borderRadius: 999,

                  cursor: "pointer",

                  zIndex: 10,
                }}
              >
                <FavoriteSvg />
              </Button>

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
    </S.Section>
  )
}
