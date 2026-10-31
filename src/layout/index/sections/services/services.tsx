import { Hat } from '@/shared'
import { Section } from '@/template'
import { Card } from '.'
import * as S from './services.styles'

const cardsData = [
  {
    image: '/images/real/porch.webp',
    alt: 'A home with a covered front porch',
    title: 'Purchase a home',
    description:
      'Tell Becca your area, timing and priorities. She can help you compare available homes and plan useful next steps.',
    href: '/homes',
    buttonText: 'Start my search',
  },
  {
    image: '/images/real/kitchen.webp',
    alt: 'Kitchen with a large island',
    title: 'Plan your sale',
    description:
      'Start a private listing draft, organize property facts and decide what to verify before you set a timeline.',
    href: '/listing-planner',
    buttonText: 'Open listing planner',
  },
  {
    image: '/images/real/big-spring-park.webp',
    alt: 'Big Spring Park in downtown Huntsville',
    title: 'Explore local areas',
    description:
      'See real places, compare your commute and find the parcel-level details worth checking before you tour.',
    href: '/areas',
    buttonText: 'Compare areas',
  },
]

export function Services() {
  return (
    <Section direction="vertical" padding="1" hasMaxWidth css={{ textAlign: 'center' }}>
      <Hat>MAIN SERVICES</Hat>
      <S.Title>Looking to buy or sell a home?</S.Title>
      <S.Description>
        Tell me what you are trying to accomplish, and I will help you plan the next step.{' '}
        <br /> As an Alabama Associate Broker, I work with buyers and sellers to compare
        options, ask the right questions, and move forward with a clear plan.
      </S.Description>

      <S.Cards>
        {cardsData.map(data => (
          <Card key={data.title} data={data} />
        ))}
      </S.Cards>
      <S.PhotoCredit>
        Big Spring Park photo by{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Big_Spring_Park.jpg">
          BullDawg2021
        </a>
        , resized. <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
      </S.PhotoCredit>
    </Section>
  )
}
