import dynamic from 'next/dynamic'
import { useAtomValue } from 'jotai'
import { visualizationAtom } from 'src/pages/homes'
import { Houses, Search } from '.'
import * as S from './homes.styles'

const Map = dynamic(() => import('.').then(module => module.Map))

const huntsvilleCoordinates = {
  lat: 34.7503416,
  lng: -86.6350868,
}

export function Homes() {
  const visualization = useAtomValue(visualizationAtom)

  return (
    <S.Section visualization={visualization}>
      <S.Wrapper>
        <Search />
        <Houses />
      </S.Wrapper>
      {visualization === 'map' && <Map coords={huntsvilleCoordinates} />}
    </S.Section>
  )
}
