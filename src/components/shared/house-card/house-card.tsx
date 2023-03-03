import { Box, Flex, Image } from '@/common'
import { FormattedHouseCard } from '@/services/house-listings/types'
import * as S from './house-card.styles'
import * as Svg from './svgs'

interface HouseCardProps extends React.HTMLAttributes<HTMLLIElement> {
  listing: FormattedHouseCard
  variant?: 'small'
  badge?: string
}

export function HouseCard({ listing, variant, badge, ...props }: HouseCardProps) {
  const isStatusActive =
    listing.status === 'Active' || listing.status === 'Active Under Contract'

  return (
    <li {...props}>
      <S.Link href={`/homes/${listing.id}`} draggable="false" variant={variant}>
        <Box css={{ position: 'relative', w: '100%', aspectRatio: '16 / 9' }}>
          {listing.media ? (
            <Image
              src={listing.media}
              alt="House"
              css={{ objectFit: 'cover', pointerEvents: 'none' }}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Svg.NoHouse />
          )}
          {badge && <S.Badge>{badge}</S.Badge>}
          <S.FavoriteButton
            disabled
            aria-label="Favorite house"
            onClick={event => event.preventDefault()}
          >
            <S.Favorite />
          </S.FavoriteButton>
        </Box>
        <S.HouseInfo>
          <S.Status status={listing.status}>
            <Box css={{ w: 8, h: 8, br: 4 }} />
            {isStatusActive ? 'For sale' : listing.status}
          </S.Status>
          <S.Value>{listing.price}</S.Value>
          <S.Address>{listing.address}</S.Address>
          <Flex align="center" css={{ gap: '8px 12px', mb: 12, flexWrap: 'wrap' }}>
            <S.Details>
              <Svg.Bed />
              {listing.bedroomsTotal} beds
            </S.Details>
            <S.Details>
              <Svg.Shower />
              {listing.bathroomsTotal} baths
            </S.Details>
            <S.Details>
              <Svg.Square />
              {listing.livingArea} sqft
            </S.Details>
          </Flex>
          <S.VAMLS>2022 VAMLS, Inc.</S.VAMLS>
        </S.HouseInfo>
      </S.Link>
    </li>
  )
}
