import { Flex } from '@common'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import {
  BathroomSvg,
  BedroomSvg,
  ClockSvg,
  InformationSvg,
  PriceSvg,
  SquareFeetSvg,
} from '../svgs'
import * as S from './property-details.styles'

interface ListingDetails {
  listing: {
    price: string
    bedroomsTotal: number
    bathroomsTotal: number
    lotSizeSquareFeet: string
    subdivisionName: string
    propertySubType: string
    countyOrParish: string
    cityRegion: string | null
  }
}

export function PropertyDetails({ listing }: ListingDetails) {
  const details = [
    {
      svg: <PriceSvg />,
      text: listing.price,
      tooltip: 'Home value',
    },
    {
      svg: <BedroomSvg />,
      text: `${listing.bedroomsTotal} Bedrooms`,
      tooltip: 'Total bedrooms',
    },
    {
      svg: <BathroomSvg />,
      text: `${listing.bathroomsTotal} Bathrooms`,
      tooltip: 'Total bathrooms',
    },
    {
      svg: <SquareFeetSvg />,
      text: `${listing.lotSizeSquareFeet} Sq.Ft`,
      tooltip: 'Total meters',
    },
  ]

  const moreDetails = [
    {
      title: 'Neighborhood',
      information: listing.subdivisionName,
    },
    {
      title: 'Type',
      information: listing.propertySubType,
    },
    {
      title: 'County',
      information: listing.countyOrParish
        .toLowerCase()
        .replace(/^\w/, (char: string) => char.toUpperCase()),
    },
    {
      title: 'Area',
      information: listing.cityRegion === null ? 'Not defined' : listing.cityRegion,
    },
  ]

  return (
    <S.PropertyDetails>
      <S.Title>
        Property details <ClockSvg />
      </S.Title>

      <S.Hr />

      <Flex
        direction="column"
        align="center"
        justify="between"
        css={{ w: '100%', gap: 16, padding: '0px 20px' }}
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
                    <S.TooltipButton>
                      <InformationSvg />
                    </S.TooltipButton>
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
        css={{ w: '100%', gap: 16, padding: '0px 20px' }}
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
