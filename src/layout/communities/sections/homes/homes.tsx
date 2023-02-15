import { Button } from '@/common'
import { getHouseListing } from '@/services/house-listings'
import { HouseCard } from '@/shared'
import { Section } from '@/template'
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
      params: { 'City.in': communityName, limit: '6', offset: `${6 * activeIndex}` },
      fetchOn: 'browser',
    })
    setActiveIndex(oldValue => oldValue + 1)
    setListingData([...listingData, ...newListing])
    setIsLoading(false)
  }

  return (
    <Section hasMaxWidth>
      <S.Title>
        <S.Community>{communityName}</S.Community> Homes for Sale
      </S.Title>
      <S.Container>
        <S.Houses loadedMore={activeIndex > 1}>
          {listingData.map(listing => (
            <HouseCard key={listing.id} listing={listing} />
          ))}
        </S.Houses>
        {listings.length >= 6 && (
          <S.OverlayWrapper>
            <S.Overlay />
            <Button
              size={{
                '@initial': '2',
                '@bp4': '3',
              }}
              css={{
                pointerEvents: 'auto',
                zIndex: 1,

                '@bp1': {
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: '400',
                },
              }}
              onClick={handleRequestNewListings}
              loading={isLoading}
              disabled={isLoading}
            >
              View more properties
            </Button>
          </S.OverlayWrapper>
        )}
      </S.Container>
    </Section>
  )
}
