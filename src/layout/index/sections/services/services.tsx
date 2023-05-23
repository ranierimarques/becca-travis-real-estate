import { Hat } from '@/shared'
import { Section } from '@/template'
import { Card } from '.'
import { find, purchase, sell } from './images'
import * as S from './services.styles'

const cardsData = [
  {
    image: purchase,
    alt: 'A magnifying glass searching a house',
    title: 'Purchase a home',
    description: `Looking to move to Huntsville or Madison, AL? We've got you covered. With our constantly updated database, we're the go-to source for finding homes in North Alabama.
    `,
    href: '/homes',
    buttonText: 'Search a home',
  },
  {
    image: sell,
    alt: 'Home sales page',
    title: 'Sell your home today',
    description: `Selling your home is a significant decision, and we understand that your situation is unique. We create a customized strategy to sell your property for top dollar. Trust us for exceptional service and results that exceed your expectations.`,
    href: '/sell-with-us',
    buttonText: 'Sell your home',
  },
  {
    image: find,
    alt: 'Your home price valuation chart',
    title: 'Find your home value',
    description: `Get a personalized estimate of your home's value with ease. Our accurate estimate system makes it simple to find out what your property is worth. Find your home's value now.`,
    href: '/sellers-resources#home-bot',
    buttonText: 'Estimate value',
  },
]

export function Services() {
  return (
    <Section direction="vertical" padding="1" hasMaxWidth css={{ textAlign: 'center' }}>
      <Hat>MAIN SERVICES</Hat>
      <S.Title>Looking to buy or sell a home?</S.Title>
      <S.Description>
        As one of the top real estate agents in the area, I have the experience and
        expertise to help you achieve your goals. <br /> With a consultative approach, I
        work closely with clients to make their home buying and selling dreams a reality.
        Don&apos;t settle for anything less than exceptional service.
      </S.Description>

      <S.Cards>
        {cardsData.map(data => (
          <Card key={data.title} data={data} />
        ))}
      </S.Cards>
    </Section>
  )
}
