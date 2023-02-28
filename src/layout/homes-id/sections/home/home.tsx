import { FormattedHouse } from '@/services/house-listings/types'
import {
  AskAQuestion,
  Description,
  FasterContact,
  Features,
  Header,
  PaymentCalculator,
  PropertyDetails,
  RelatedProperties,
  Slider,
  TableOfContents,
} from '.'
import * as S from './home.styles'

interface Listing {
  listing: FormattedHouse['listing']
}

export function Home({ listing }: Listing) {
  return (
    <S.Section
      hasMaxWidth={{
        '@initial': 'true',
        '@bp2': 'false',
      }}
    >
      <Header listing={listing} />
      <Slider key={listing.id} media={listing.media} />
      <PropertyDetails listing={listing} />
      <TableOfContents />
      <Description publicRemarks={listing.publicRemarks} />
      <Features listing={listing} />
      <AskAQuestion />
      <FasterContact />
      {/* <PaymentCalculator price={listing.priceNumber} /> */}
      <RelatedProperties id={listing.id} coords={listing.coords} />
    </S.Section>
  )
}
