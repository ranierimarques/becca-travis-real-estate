import { Button } from '@/common'
import { HouseCard } from '@/shared'
import { FormattedHouseCards } from '@/types/houses'
import { useState } from 'react'
import * as S from './homes.styles'

interface HomesProps {
  listings: FormattedHouseCards
  communityName: string
}

export function Homes({ listings, communityName }: HomesProps) {
  const [listingData, setListingData] = useState(listings)

  return (
    <S.Section>
      <S.Title>{communityName} Homes for Sale</S.Title>
      <S.Container>
        <S.Houses>
          {listingData.map(listing => (
            <HouseCard key={listing.id} listing={listing} badge="New" />
          ))}
        </S.Houses>
        <S.OverlayWrapper>
          <S.Overlay />
          <Button size="2" css={{ pointerEvents: 'auto', zIndex: 1 }}>
            Show more...
          </Button>
        </S.OverlayWrapper>
      </S.Container>
    </S.Section>
  )
}
