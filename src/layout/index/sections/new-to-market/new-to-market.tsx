import { Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './new-to-market.styles'

export function NewToMarket() {
  return (
    <Section
      hasMaxWidth
      padding="2"
      direction={{ '@initial': undefined, '@bp3': 'vertical' }}
    >
      <Hat>FIND YOUR PLACE</Hat>
      <Flex
        align="center"
        justify={{ '@initial': 'between', '@bp3': 'center' }}
        css={{ w: '100%', margin: '8px 0 24px' }}
      >
        <S.Title>Let’s find your next home</S.Title>
        <S.ViewAll href="/homes#buyer-brief">BUILD MY SEARCH BRIEF</S.ViewAll>
      </Flex>
      <p>
        Start a personal search brief around your area, timing and priorities. If you want
        to browse first, open the official{' '}
        <a href="https://www.valleymls.com/" target="_blank" rel="noopener noreferrer">
          ValleyMLS home search
        </a>
        . Listings and availability can change.
      </p>
    </Section>
  )
}
