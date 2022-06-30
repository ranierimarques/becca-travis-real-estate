import { Card } from '.'
import { downtownHuntsville } from './images'
import * as S from './services.styles'

const cardsData = [
  {
    image: downtownHuntsville,
    alt: 'Downtown Hunstsville Lake',
    title: 'Purchase a home',
    description: `So, you're looking for a new place to call home? We've got just the thing! Search through our list of properties and find your perfect match.`,
    href: '#',
    buttonText: 'Search a home',
  },
  {
    image: downtownHuntsville,
    alt: 'Downtown Hunstsville Lake',
    title: 'Find Your home Value',
    description: `We make it easy for you to get a personalized estimate of your home's value by providing an accurate estimate.`,
    href: '#',
    buttonText: 'Estimate value',
  },
  {
    image: downtownHuntsville,
    alt: 'Downtown Hunstsville Lake',
    title: 'Sell your home today',
    description: `With our expertise in the real estate industry, We can get your home on market and save you time.`,
    href: '#',
    buttonText: 'Sell your home',
  },
]

export function Services() {
  return (
    <S.Section>
      <S.Hat>MAIN SERVICES</S.Hat>
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
