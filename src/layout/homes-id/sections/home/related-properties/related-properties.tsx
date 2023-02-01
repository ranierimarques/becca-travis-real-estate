import { getHouseListing } from '@/services/house-listings'
import { HouseCard } from '@/shared'
import { useQuery } from '@tanstack/react-query'
import * as S from './related-properties.styles'

interface Props {
  coords: string[]
  id: string
}

export function RelatedProperties({ coords, id }: Props) {
  const { data: listings } = useQuery({
    queryKey: ['/home/houses'],
    queryFn: () =>
      getHouseListing({
        type: 'card',
        params: {
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
