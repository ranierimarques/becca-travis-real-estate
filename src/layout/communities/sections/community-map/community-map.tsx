import { Map } from '@/layout/homes/sections/homes'
import * as S from './community-map.styles'

interface CommunityMapProps {
  communityName: string
}

export function CommunityMap({ communityName }: CommunityMapProps) {
  return (
    <S.Section>
      <S.Title>{communityName} map</S.Title>
      <Map />
    </S.Section>
  )
}
