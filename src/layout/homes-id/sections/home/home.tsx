import { Flex } from '@/common'
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
    <S.Section>
      <Header listing={listing} />
      {/* 
      <Flex css={{ gap: 32 }}>
        <Slider key={listing.id} media={listing.media} />
        <PropertyDetails listing={listing} />
      </Flex> */}

      <div>
        <TableOfContents />

        <Flex css={{ gap: 32 }}>
          <div>
            <Description publicRemarks={listing.publicRemarks} />
            <Features listing={listing} />
            <AskAQuestion />
          </div>
          <Flex direction="column" css={{ gap: 32, mt: 32 }}>
            <FasterContact />

            <PaymentCalculator price={listing.priceNumber} />
          </Flex>
        </Flex>

        <RelatedProperties id={listing.id} coords={listing.coords} />
      </div>
    </S.Section>
  )
}
