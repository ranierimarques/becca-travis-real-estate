import { Box, Flex } from '@/common'
import { FormattedHouse } from '@/services/house-listings/types'
import * as S from './features.styles'

interface Listing {
  listing: FormattedHouse['listing']
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
    <S.Container id="features" data-tab-container>
      {features.map((feature, index) => {
        return (
          <div key={index}>
            <S.Title>{feature.title}</S.Title>
            <Flex direction="column" css={{ gap: 24 }}>
              {feature.feats.map((info, i) => (
                <Flex
                  key={i}
                  align="center"
                  justify="between"
                  css={{
                    pb: 8,
                    borderBottom: '1px solid $grayW6',
                    w: '100%',
                  }}
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
