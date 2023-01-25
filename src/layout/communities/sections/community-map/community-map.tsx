import { Map } from '@/layout/homes/sections/homes'
import { Section } from '@/template'
import * as S from './community-map.styles'

interface CommunityMapProps {
  communityName: string
}

export function CommunityMap({ communityName }: CommunityMapProps) {
  return (
    <Section
      hasMaxWidth
      css={{
        pt: 120,
        pb: 120,
        '@bp4': { pb: 96 },
        '@bp3': { pt: 80, pb: 80 },
        '@bp2': { pt: 64, pb: 64 },
      }}
    >
      <S.Title>
        <S.Community>{communityName}</S.Community> map
      </S.Title>
      <Map variant={1} />
    </Section>
  )
}
