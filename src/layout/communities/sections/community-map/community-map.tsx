import { Map } from '@/layout/homes/sections/homes'
import { Section } from '@/template'
import * as S from './community-map.styles'

interface CommunityMapProps {
  communityName: string
}

const coordinates: Record<string, { lat: number; lng: number }> = {
  harvest: {
    lat: 34.86075438004774,
    lng: -86.75534072839538,
  },
  huntsville: {
    lat: 34.7503416,
    lng: -86.6350868,
  },
  hamptonCove: {
    lat: 34.667557003937894,
    lng: -86.48839492533041,
  },
  decatur: {
    lat: 34.5803895320498,
    lng: -86.98434669229624,
  },
  athens: {
    lat: 34.800267319924096,
    lng: -86.97260788913428,
  },
  meridianville: {
    lat: 34.86234101051261,
    lng: -86.56953412150527,
  },
}

export function CommunityMap({ communityName }: CommunityMapProps) {
  const isHamptonCove = communityName === 'hampton cove'
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
      <Map
        variant={1}
        coords={coordinates[isHamptonCove ? 'hamptonCove' : communityName]}
        zoom={12}
      />
    </Section>
  )
}
