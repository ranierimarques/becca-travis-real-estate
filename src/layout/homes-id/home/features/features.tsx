import { Flex } from '@common'
import * as S from './features.styles'

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

export function Features({ listing }: Listing) {
  const features = [
    {
      title: 'Exterior Features',
      feats: [
        {
          feat: 'Foundation Details',
          value: listing.foundationDetails,
        },
        {
          feat: 'Levels',
          value: listing.levels,
        },
      ],
    },
    {
      title: 'Interior Features',
      feats: [
        {
          feat: 'Building Area Total',
          value: listing.buildingTotalArea,
        },
      ],
    },
    {
      title: 'Property Features',
      feats: [
        {
          feat: 'City Limits',
          value: 'None',
        },
        {
          feat: 'Mobile Home Allowed',
          value: 'None',
        },
        {
          feat: 'New Construction',
          value: listing.newConstruction ? 'Yes' : 'No',
        },
        {
          feat: 'Property Condition',
          value: listing.propertyCondition,
        },
        {
          feat: 'Property Type',
          value: listing.propertyType,
        },
        {
          feat: 'Sewer',
          value: listing.sewer,
        },
        {
          feat: 'Water Source',
          value: listing.waterSource,
        },
      ],
    },
    {
      title: 'School Information',
      feats: [
        {
          feat: 'Elementary',
          value: listing.elementarySchool,
        },
        {
          feat: 'Middle',
          value: listing.middleSchool,
        },
        {
          feat: 'High',
          value: listing.highSchool,
        },
      ],
    },
  ]

  return (
    <S.Container>
      {features.map((feature, index) => {
        return (
          <div key={index}>
            <S.Title>{feature.title}</S.Title>
            <Flex direction="column" align="start" css={{ gap: 16 }}>
              {feature.feats.map((info, i) => (
                <Flex
                  align="center"
                  justify="between"
                  css={{
                    borderBottom: '1px solid rgba(156, 168, 183, 1)',
                    w: '276px',
                    h: '56px',
                  }}
                  key={i}
                >
                  <S.Feature>{info.feat}</S.Feature>
                  <S.Value>{info.value === null ? 'None' : info.value}</S.Value>
                </Flex>
              ))}
            </Flex>
          </div>
        )
      })}
    </S.Container>
  )
}
