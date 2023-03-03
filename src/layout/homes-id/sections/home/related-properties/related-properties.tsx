import { useQuery } from '@tanstack/react-query'
import { getHouseListing } from '@/services/house-listings'
import { HouseCard } from '@/shared'
import * as S from './related-properties.styles'

interface Props {
  coords: string[]
  id: string
}

export function RelatedProperties({ coords, id }: Props) {
  const { data: listings } = useQuery({
    queryKey: ['home/houses', id],
    queryFn: () =>
      getHouseListing({
        type: 'card',
        params: {
          limit: '4',
          near: `${coords[0]},${coords[1]}`,
          'ListingId.ne': id,
        },
        fetchOn: 'browser',
      }),
  })

  return (
    <S.Container id="related-properties" data-tab-container>
      <S.Title>Related Properties</S.Title>
      <S.Properties>
        {listings?.map(listing => {
          return <HouseCard key={listing.id} listing={listing} />
        })}
      </S.Properties>
    </S.Container>
  )
}
