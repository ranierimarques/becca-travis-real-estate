import { Hat } from '@common'
import { Card } from '.'
import { find, purchase, sell } from './images'
import * as S from './services.styles'

const cardsData = [
  {
    image: purchase,
    alt: 'A white house in a green garden in the morning',
    title: 'Purchase a home',
    description: `So, you're looking for a new place to call home? We've got just the thing! Search through our list of properties and find your perfect match.`,
    href: '#',
    buttonText: 'Search a home',
  },
  {
    image: find,
    alt: 'A cozy house at sunset',
    title: 'Find Your home Value',
    description: `We make it easy for you to get a personalized estimate of your home's value by providing an accurate estimate.`,
    href: '#',
    buttonText: 'Estimate value',
  },
  {
    image: sell,
    alt: 'A distant house in the middle of a green field',
    title: 'Sell your home today',
    description: `With our expertise in the real estate industry, We can get your home on market and save you time.`,
    href: '#',
    buttonText: 'Sell your home',
  },
]

export function Services() {
  return (
    <S.Section>
      <Hat>MAIN SERVICES</Hat>
      <S.Title>How can we help you now?</S.Title>
      <S.Description>
        We’re always ready to help by providing <br />
        the best service for you
      </S.Description>

      <S.Cards>
        {cardsData.map(data => (
          <Card key={data.title} data={data} />
        ))}
      </S.Cards>
    </S.Section>
  )
}
