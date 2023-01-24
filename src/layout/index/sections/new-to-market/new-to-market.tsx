import { Button, Flex } from '@/common'
import { getHouseListing } from '@/services/house-listings'
import { Hat, HouseCard } from '@/shared'
import { Section } from '@/template'
import { FormattedHouseCards } from '@/types/houses'
import useSWRInfinite from 'swr/infinite'
import * as S from './new-to-market.styles'

type Props = {
  initialListings: FormattedHouseCards
}

export function NewToMarket({ initialListings }: Props) {
  const { data, error, size, setSize } = useSWRInfinite(
    index => `home/${index + 1}`,
    async index =>
      getHouseListing({
        type: 'card',
        params: { limit: '4', offset: `${(Number(index.split('/').at(-1)) - 1) * 4}` },
        fetchOn: 'browser',
      }),
    { fallbackData: [initialListings] }
  )

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')

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
        {data?.map(listings =>
          listings?.map(listing => (
            <HouseCard key={listing.id} listing={listing} badge="New" />
          ))
        )}
      </S.Houses>

      <Button
        size="3"
        onClick={() => setSize(oldSize => oldSize + 1)}
        loading={isLoadingMore}
        disabled={isLoadingMore}
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
