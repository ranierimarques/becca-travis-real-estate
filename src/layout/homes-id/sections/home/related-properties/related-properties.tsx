import { FormattedHouseCard } from '@/services/house-listings/types'
import { HouseCard } from '@/shared'
import * as S from './related-properties.styles'

interface RelatedPropertiesProps {
  listings: FormattedHouseCard[]
}

export function RelatedProperties({ listings }: RelatedPropertiesProps) {
  return (
    <S.Container id="related-properties" data-tab-container>
      <S.Title>Related Properties</S.Title>
      <S.Properties>
        {listings.map((listing, index) => {
          return <HouseCard key={index} listing={listing} />
        })}
      </S.Properties>
    </S.Container>
  )
}
