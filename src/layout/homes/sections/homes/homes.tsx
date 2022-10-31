import { useVisualizationStore } from '@layout/homes/store/visualization'
import { Houses, Map, Search } from '.'
import * as S from './homes.styles'

export function Homes() {
  const visualization = useVisualizationStore(state => state.visualization)

  return (
    <S.Section visualization={visualization}>
      <S.Wrapper>
        <Search />
        <Houses />
      </S.Wrapper>
      {visualization === 'map' && <Map />}
    </S.Section>
  )
}
