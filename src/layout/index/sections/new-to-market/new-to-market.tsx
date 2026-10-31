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
        The public property search is being updated. Start a personal search brief now so
        Becca can understand your target area, timing and priorities.
      </p>
    </Section>
  )
}
