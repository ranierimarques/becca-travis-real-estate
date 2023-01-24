import { Button } from '@/common'
import { getHouseListing } from '@/services/house-listings'
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
  const [activeIndex, setActiveIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  async function handleRequestNewListings() {
    if (isLoading) return
    setIsLoading(true)
    const newListing = await getHouseListing({
      type: 'card',
      params: { City: communityName, limit: '6', offset: `${6 * activeIndex}` },
      fetchOn: 'browser',
    })
    setActiveIndex(oldValue => oldValue + 1)
    setListingData([...listingData, ...newListing])
    setIsLoading(false)
  }

  return (
    <S.Section>
      <S.Title>
        <S.Community>{communityName}</S.Community> Homes for Sale
      </S.Title>
      <S.Container>
        <S.Houses>
          {listingData.map(listing => (
            <HouseCard key={listing.id} listing={listing} />
          ))}
        </S.Houses>
        {listings.length >= 6 && (
          <S.OverlayWrapper>
            <S.Overlay />
            <Button
              size="2"
              css={{ pointerEvents: 'auto', zIndex: 1 }}
              onClick={handleRequestNewListings}
              loading={isLoading}
              disabled={isLoading}
            >
              Show more...
            </Button>
          </S.OverlayWrapper>
        )}
      </S.Container>
    </S.Section>
  )
}
