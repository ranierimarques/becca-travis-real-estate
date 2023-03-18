import { Box, Flex, Image } from '@/common'
import { convertToSlug } from '@/resources/utils/convert'
import { FormattedHouseCard } from '@/services/house-listings/types'
import * as S from './map-house-card.styles'
import * as Svg from './svgs'

interface MapHouseCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  listing: FormattedHouseCard
}

export function MapHouseCard({ listing, ...props }: MapHouseCardProps) {
  return (
    <S.Link
      href={`/homes/${listing.id}/${convertToSlug(listing.address)}`}
      draggable="false"
      {...props}
    >
      <Box css={{ position: 'relative', aspectRatio: '16 / 9' }}>
        {listing.media ? (
          <Image src={listing.media} style={{ objectFit: 'cover' }} alt="House" fill />
        ) : (
          <Svg.NoHouse />
        )}
      </Box>
      <Flex direction="column">
        <S.Status status={listing.status} />
        <S.Price>{listing.price}</S.Price>
        <Flex css={{ gap: 8, mb: 8 }}>
          <S.Info>
            {listing.bedroomsTotal} <span>beds</span>
          </S.Info>
          <S.Info>
            {listing.bathroomsTotal} <span>baths</span>
          </S.Info>
        </Flex>

        <Box css={{ w: '100%', bg: '$grayW9', h: 1, mb: 8 }} />

        <S.Info>
          {listing.livingArea ?? 'ND'} <span>sqft</span>
        </S.Info>
      </Flex>
    </S.Link>
  )
}
