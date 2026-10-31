import { useMemo, useState } from 'react'
import { stateGuides } from '@/resources/relocation/state-guides'
import * as S from './state-directory.styles'

const stateGroups = [
  {
    name: 'Nordeste',
    slugs: [
      'connecticut',
      'maine',
      'massachusetts',
      'new-hampshire',
      'rhode-island',
      'vermont',
      'new-jersey',
      'new-york',
      'pennsylvania',
    ],
  },
  {
    name: 'Sul',
    slugs: [
      'delaware',
      'florida',
      'georgia',
      'maryland',
      'north-carolina',
      'south-carolina',
      'virginia',
      'west-virginia',
      'alabama',
      'kentucky',
      'mississippi',
      'tennessee',
      'arkansas',
      'louisiana',
      'oklahoma',
      'texas',
    ],
  },
  {
    name: 'Centro Oeste',
    slugs: [
      'indiana',
      'illinois',
      'michigan',
      'ohio',
      'wisconsin',
      'iowa',
      'kansas',
      'minnesota',
      'missouri',
      'nebraska',
      'north-dakota',
      'south-dakota',
    ],
  },
  {
    name: 'Oeste',
    slugs: [
      'alaska',
      'arizona',
      'california',
      'colorado',
      'hawaii',
      'idaho',
      'montana',
      'nevada',
      'new-mexico',
      'oregon',
      'utah',
      'washington',
      'wyoming',
    ],
  },
] as const

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function StateDirectory() {
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    const normalizedQuery = normalize(query.trim())

    return stateGroups
      .map(group => ({
        ...group,
        states: group.slugs
          .map(slug => stateGuides.find(state => state.slug === slug))
          .filter((state): state is typeof stateGuides[number] => Boolean(state))
          .filter(state => {
            if (!normalizedQuery) return true
            return normalize(
              `${state.name} ${state.englishName} ${state.abbreviation}`
            ).includes(normalizedQuery)
          }),
      }))
      .filter(group => group.states.length > 0)
  }, [query])

  return (
    <S.Section id="guias-por-estado">
      <S.Container>
        <S.HeadingRow>
          <S.Heading>
            <span>Guias de mudança</span>
            <h2>Escolha um estado e comece com contexto local.</h2>
            <p>
              Explore regiões, custos que precisam ser confirmados, perguntas para a
              equipe local e um roteiro prático de compra em cada um dos 50 estados.
            </p>
          </S.Heading>

          <S.Search>
            <span>Encontre seu estado</span>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Digite Flórida, Texas, Califórnia..."
              autoComplete="off"
            />
          </S.Search>
        </S.HeadingRow>

        {groups.length > 0 ? (
          <S.Regions>
            {groups.map(group => (
              <S.Region key={group.name}>
                <h3>{group.name}</h3>
                <S.Grid>
                  {group.states.map(state => (
                    <S.StateLink
                      key={state.slug}
                      href={`/agenciamento/${state.slug}`}
                      aria-label={`Guia para comprar casa ${state.locationPhrase} em português`}
                    >
                      <strong>{state.abbreviation}</strong>
                      <span>
                        <strong>{state.name}</strong>
                        <small>Guia em português</small>
                      </span>
                      <em aria-hidden="true">→</em>
                    </S.StateLink>
                  ))}
                </S.Grid>
              </S.Region>
            ))}
          </S.Regions>
        ) : (
          <S.Empty>
            Nenhum estado encontrado. Tente o nome em português, inglês ou a sigla.
          </S.Empty>
        )}

        <S.PlannerCallout>
          <div>
            <strong>Ainda comparando estados?</strong>
            <span>
              Use o planejador para transformar sua rotina em critérios de decisão.
            </span>
          </div>
          <a href="#planejador">Comparar com um plano</a>
        </S.PlannerCallout>
      </S.Container>
    </S.Section>
  )
}
