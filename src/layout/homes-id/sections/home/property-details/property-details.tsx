import { Box, Flex } from '@/common'
import { Tooltip } from '@/primitives'
import useRelativeDate from '@/resources/hooks/useRelativeDate'
import { FormattedHouse } from '@/services/house-listings/types'
import * as Svg from '../svgs'
import * as S from './property-details.styles'

interface ListingDetails {
  listing: FormattedHouse['listing']
}

export function PropertyDetails({ listing }: ListingDetails) {
  const relativeDate = useRelativeDate(listing.lastUpdated)

  const details = [
    {
      svg: <Svg.Price />,
      text: listing.price,
      tooltip: 'Home value',
    },
    {
      svg: <Svg.Bedroom />,
      text: `${listing.bedroomsTotal ?? 0} Bedrooms`,
      tooltip: 'Total bedrooms',
    },
    {
      svg: <Svg.Bathroom />,
      text: `${listing.bathroomsTotal ?? 0} Bathrooms`,
      tooltip: 'Total bathrooms',
    },
    {
      svg: <Svg.SquareFeet />,
      text: `${listing.buildingTotalArea ?? 0} Sq.Ft`,
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
      information: listing.cityRegion ?? 'Not defined',
    },
  ]

  return (
    <S.PropertyDetails>
      <S.Title>
        Property details <Svg.Clock />
      </S.Title>

      <S.Hr />

      <Flex
        direction={{
          '@initial': 'column',
          '@bp4': 'row',
        }}
        align="center"
        justify="between"
        css={{
          w: '100%',
          gap: 16,
          p: '0px 20px',
          '@bp4': { gap: 32, p: 0, justifyContent: 'unset' },
          '@bp2': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          },
        }}
      >
        {details.map(detail => {
          return (
            <S.DetailItem key={detail.tooltip}>
              <Flex align="center" css={{ gap: 12, '@bp4': { gap: 8 } }}>
                {detail.svg}
                <S.DetailText>{detail.text}</S.DetailText>
              </Flex>
              <Tooltip content={detail.tooltip} variant="2">
                <S.TooltipButton>
                  <Svg.Information />
                </S.TooltipButton>
              </Tooltip>
            </S.DetailItem>
          )
        })}
      </Flex>

      <S.Hr
        css={{
          display: 'block',
          '@bp3': { display: 'none' },
        }}
      />

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16,
          w: '100%',
          padding: '0px 20px',
          '@bp4': { padding: 0, gridTemplateColumns: '1fr 1fr', gap: '24px' },
          '@bp3': { display: 'none' },
        }}
      >
        {moreDetails.map(detail => {
          return (
            <S.MoreDetail key={detail.title}>
              <S.DetailTitle>{detail.title}:</S.DetailTitle>
              <S.DetailDescription title={detail.information}>
                {detail.information}
              </S.DetailDescription>
            </S.MoreDetail>
          )
        })}
      </Box>

      <S.Accordion type="single" defaultValue="item-1" collapsible>
        <S.Item value="item-1">
          <S.Header>
            <S.Trigger>
              <span>Listing Details</span>
              <S.Chevron />
            </S.Trigger>
          </S.Header>
          <S.Content>
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                padding: '24px 16px',
              }}
            >
              <S.MoreDetail css={{ display: 'none', '@bp3': { display: 'flex' } }}>
                <S.DetailTitle>Status:</S.DetailTitle>
                <S.DetailDescription title={listing.status}>
                  {listing.status}
                </S.DetailDescription>
              </S.MoreDetail>
              <Box
                css={{
                  display: 'none',
                  '@bp2': { display: 'flex', flexDirection: 'column', gap: 24 },
                }}
              >
                <S.MoreDetail>
                  <S.DetailTitle>On site:</S.DetailTitle>
                  <S.DetailDescription>10 days</S.DetailDescription>
                </S.MoreDetail>
                <S.MoreDetail>
                  <S.DetailTitle>Updated:</S.DetailTitle>
                  <S.DetailDescription>{relativeDate}</S.DetailDescription>
                </S.MoreDetail>
              </Box>

              {moreDetails.map(detail => {
                return (
                  <S.MoreDetail key={detail.title}>
                    <S.DetailTitle>{detail.title}:</S.DetailTitle>
                    <S.DetailDescription title={detail.information}>
                      {detail.information}
                    </S.DetailDescription>
                  </S.MoreDetail>
                )
              })}
            </Box>
          </S.Content>
        </S.Item>
      </S.Accordion>

      <S.Hr
        css={{
          display: 'none',
          '@bp4': { display: 'block' },
          '@bp3': { display: 'none' },
        }}
      />
    </S.PropertyDetails>
  )
}
