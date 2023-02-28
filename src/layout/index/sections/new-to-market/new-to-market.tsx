import { useInfiniteQuery } from '@tanstack/react-query'
import { Button, Flex } from '@/common'
import { getHouseListing } from '@/services/house-listings'
import { Hat, HouseCard } from '@/shared'
import { Section } from '@/template'
import * as S from './new-to-market.styles'

export function NewToMarket() {
  const { data, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['home/new-to-market'],
    queryFn: ({ pageParam = 0 }) =>
      getHouseListing({
        type: 'card',
        params: { limit: '4', offset: `${pageParam * 4}` },
        fetchOn: 'browser',
      }),
    getNextPageParam: (_, allPages) => allPages.length,
  })

  return (
    <Section
      hasMaxWidth
      padding="2"
      direction={{ '@initial': undefined, '@bp3': 'vertical' }}
    >
      <Hat>NEW PROPERTIES</Hat>
      <Flex
        align="center"
        justify={{ '@initial': 'between', '@bp3': 'center' }}
        css={{
          w: '100%',
          margin: '8px 0 48px',
          '@bp5': {
            margin: '8px 0 40px',
          },
          '@bp4': {
            margin: '12px 0 40px',
          },
          '@bp3': {
            margin: '12px 0 32px',
          },
        }}
      >
        <S.Title>New to Market</S.Title>
        <S.ViewAll href="/homes">VIEW ALL</S.ViewAll>
      </Flex>

      <S.Houses>
        {data?.pages?.map(listings =>
          listings?.map(listing => (
            <HouseCard key={listing.id} listing={listing} badge="New" />
          ))
        )}
      </S.Houses>

      <Button
        size="3"
        onClick={fetchNextPage}
        loading={isFetchingNextPage}
        disabled={isFetchingNextPage}
        css={{
          display: 'none',
          mt: 32,
          '@bp3': { display: 'block' },
          '@bp2': { mt: 24 },
        }}
      >
        View more properties
      </Button>
    </Section>
  )
}
