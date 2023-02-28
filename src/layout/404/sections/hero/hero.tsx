import { Box } from '@/common'
import { Hat } from '@/shared'
import * as S from './hero.styles'

const links = [
  {
    id: 1,
    title: 'Search map view',
    description: 'View all properties for sale',
    href: '/homes',
  },
  {
    id: 2,
    title: 'Buyers Resources',
    description: 'All you need to know to buy your property',
    href: '/buyers-resources',
  },
  {
    id: 3,
    title: 'Why Becca?',
    description: 'Why we are your best choice',
    href: '/why-becca',
  },
]

export function Hero() {
  return (
    <S.Section>
      <div>
        <Hat>404 Error</Hat>
        <S.Title>Where is my page?</S.Title>
        <S.Description>
          Looks like you found our secret house <br /> but unfortunately there is nothing
          here
        </S.Description>

        <S.List>
          {links.map(link => (
            <li key={link.id}>
              <S.Link href={link.href}>
                <S.LinkHeader>
                  {link.title}
                  <S.Arrow />
                </S.LinkHeader>
                <S.LinkDescription>{link.description}</S.LinkDescription>
              </S.Link>
            </li>
          ))}
        </S.List>
      </div>

      <Box css={{ position: 'relative', top: 50, right: -40 }}>
        <S.House />
      </Box>
    </S.Section>
  )
}
