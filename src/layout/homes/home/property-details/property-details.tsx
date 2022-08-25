import { Flex } from "@common"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import {
  BathroomSvg,
  BedroomSvg,
  InformationSvg,
  PriceSvg,
  SquareFeetSvg,
} from "../svgs"
import * as S from "./property-details.styles"

interface PropertyDetailsProps {
  data: {
    ListPrice: number
    BedroomsTotal: number
    BathroomsTotalInteger: number
    LotSizeSquareFeet: number
    SubdivisionName: string
    PropertySubType: string
    CountyOrParish: string
    CityRegion: string | null
  }
}

export function PropertyDetails({ data }: PropertyDetailsProps) {
  const details = [
    {
      svg: <PriceSvg />,
      text: formatToDollar(data.ListPrice),
      tooltip: "Home value",
    },
    {
      svg: <BedroomSvg />,
      text: `${data.BedroomsTotal} Bedrooms`,
      tooltip: "Total bedrooms",
    },
    {
      svg: <BathroomSvg />,
      text: `${data.BathroomsTotalInteger} Bathrooms`,
      tooltip: "Total bathrooms",
    },
    {
      svg: <SquareFeetSvg />,
      text: `${convertSquareFeets(data.LotSizeSquareFeet)} Sq.Ft`,
      tooltip: "Total meters",
    },
  ]

  const moreDetails = [
    {
      title: "Neighborhood",
      information: data.SubdivisionName,
    },
    {
      title: "Type",
      information: data.PropertySubType,
    },
    {
      title: "County",
      information: data.CountyOrParish.toLowerCase().replace(
        /^\w/,
        (char: string) => char.toUpperCase()
      ),
    },
    {
      title: "Area",
      information: data.CityRegion === null ? "Not defined" : data.CityRegion,
    },
  ]

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
    <S.PropertyDetails>
      <S.Title>Property details</S.Title>

      <S.Hr />

      <Flex
        direction="column"
        align="center"
        justify="between"
        css={{ w: "100%", gap: 16, padding: "0px 20px" }}
      >
        {details.map(detail => {
          return (
            <S.DetailItem key={detail.tooltip}>
              <Flex align="center" css={{ gap: 12 }}>
                {detail.svg}
                <S.DetailText>{detail.text}</S.DetailText>
              </Flex>
              <TooltipPrimitive.Provider>
                <TooltipPrimitive.Root delayDuration={400}>
                  <TooltipPrimitive.Trigger asChild>
                    <button>
                      <InformationSvg />
                    </button>
                  </TooltipPrimitive.Trigger>
                  <Content sideOffset={10}>{detail.tooltip}</Content>
                </TooltipPrimitive.Root>
              </TooltipPrimitive.Provider>
            </S.DetailItem>
          )
        })}
      </Flex>

      <S.Hr />

      <Flex
        direction="column"
        align="center"
        justify="between"
        css={{ w: "100%", gap: 16, padding: "0px 20px" }}
      >
        {moreDetails.map(detail => {
          return (
            <S.MoreDetail key={detail.title}>
              <S.DetailTitle>{detail.title}:</S.DetailTitle>
              <S.DetailDescription>{detail.information}</S.DetailDescription>
            </S.MoreDetail>
          )
        })}
      </Flex>
    </S.PropertyDetails>
  )
}

function Content({ children, ...props }: any) {
  return (
    <TooltipPrimitive.Portal>
      <S.TooltipContent {...props}>
        {children}
        <S.Tip />
      </S.TooltipContent>
    </TooltipPrimitive.Portal>
  )
}
