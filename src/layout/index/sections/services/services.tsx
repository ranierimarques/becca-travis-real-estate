import { Hat } from '@/shared'
import { Card } from '.'
import { find, purchase, sell } from './images'
import * as S from './services.styles'

const cardsData = [
  {
    image: purchase,
    alt: 'A magnifying glass searching a house',
    title: 'Purchase a home',
    description: `Do you want to move to the Huntsville or Madison, Al area? We have you covered. Our database is constantly updated so we are the best place to search for homes in North Alabama.`,
    href: '/homes',
    buttonText: 'Search a home',
  },
  {
    image: sell,
    alt: 'Home sales page',
    title: 'Sell your home today',
    description: `We understand you have unique needs when it comes to selling your home. We will come up with a custom strategy to sell your property for top dollar.`,
    href: '/sell-with-us',
    buttonText: 'Sell your home',
  },
  {
    image: find,
    alt: 'Your home price valuation chart',
    title: 'Find your home value',
    description: `We make it easy for you to get a personalized estimate of your home's value by providing an accurate estimate. Find your properties value.`,
    href: '/sellers-resources#home-bot',
    buttonText: 'Estimate value',
  },
]

export function Services() {
  return (
    <S.Section>
      <Hat>MAIN SERVICES</Hat>
      <S.Title>How can we help you?</S.Title>
      <S.Description>
        Experience matters. As one of Huntsvilles, Al top agents I know how to deliver top
        results. <br />
        You would not settle buying a home, why settle with your agent.
      </S.Description>

      <S.Cards>
        {cardsData.map(data => (
          <Card key={data.title} data={data} />
        ))}
      </S.Cards>
    </S.Section>
  )
}
