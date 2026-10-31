import Link from 'next/link'
import * as S from './buyer-paths.styles'

const paths = [
  {
    number: '01',
    title: 'Start a personal home search',
    description:
      'Share your target area, timing and must haves so Becca can help turn your search into a focused next step.',
    action: 'Build my home search',
    href: '/homes#buyer-brief',
  },
  {
    number: '02',
    title: 'Compare North Alabama areas',
    description:
      'Narrow your options by commute, routine, property priorities and the questions you still need answered.',
    action: 'Compare areas',
    href: '/areas',
  },
  {
    number: '03',
    title: 'Organize the numbers',
    description:
      'Use free worksheets for payments, cash to close, home tours, moving costs and offer planning.',
    action: 'Open planning tools',
    href: '/planning-tools',
  },
  {
    number: 'PT',
    title: 'Atendimento em português',
    description:
      'Crie um resumo da sua mudança e peça ajuda para comprar no Alabama ou planejar uma compra em outro estado.',
    action: 'Criar meu plano',
    href: '/agenciamento#planejador',
    featured: true,
  },
] as const

export function BuyerPaths() {
  return (
    <S.Section aria-labelledby="buyer-paths-title">
      <S.Container>
        <S.Header>
          <div>
            <S.Eyebrow>Start with your decision</S.Eyebrow>
            <S.Title id="buyer-paths-title">Choose the help you need today.</S.Title>
          </div>
          <S.Intro>
            You do not need every answer before reaching out. Start with a search, an area
            comparison, a planning tool or a Portuguese relocation brief.
          </S.Intro>
        </S.Header>

        <S.Grid>
          {paths.map(path => (
            <S.Card key={path.title} featured={'featured' in path && path.featured}>
              <S.Number>{path.number}</S.Number>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <Link href={path.href}>
                {path.action} <span aria-hidden="true">→</span>
              </Link>
            </S.Card>
          ))}
        </S.Grid>
      </S.Container>
    </S.Section>
  )
}
