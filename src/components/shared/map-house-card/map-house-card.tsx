import { Box, Flex, Image } from '@/common'
import { FormattedHouseCard } from '@/services/house-listings/types'
import * as S from './map-house-card.styles'
import * as Svg from './svgs'

interface MapHouseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  listing: FormattedHouseCard
}

export function MapHouseCard({ listing, ...props }: MapHouseCardProps) {
  return (
    <div {...props}>
      <S.Link href={`/homes/${listing.id}`} draggable="false">
        <Box css={{ position: 'relative', aspectRatio: '16 / 9' }}>
          {listing.media ? (
            <Image src={listing.media} style={{ objectFit: 'cover' }} alt="House" fill />
          ) : (
            <Svg.NoHouse />
          )}
        </Box>
        <Flex direction="column">
          <Box
            css={{
              bg: '$green1',
              br: 1,
              w: 4,
              h: 4,
              position: 'absolute',
              top: 4,
              right: 4,
            }}
          />
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
    </div>
  )
}