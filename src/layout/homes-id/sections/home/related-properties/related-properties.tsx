import { HouseCard } from '@/shared'
import * as S from './related-properties.styles'

interface RelatedPropertiesProps {
  listings: {
    livingArea: string
    bedroomsTotal: number
    media: string
    id: string
    price: string
    bathroomsTotal: number
    address: string
  }[]
}

export function RelatedProperties({ listings }: RelatedPropertiesProps) {
  return (
    <S.Container id="related-properties">
      <S.Title>Related Properties</S.Title>
      <S.Properties>
        {listings.map((listing, index) => {
          return <HouseCard key={index} listing={listing} />
        })}
      </S.Properties>
    </S.Container>
  )
}
