import Link from 'next/link'
import { Section } from '@/template'
import { FormattedHouseCards } from '@/types/houses'
import * as S from './homes.styles'

interface HomesProps {
  listings: FormattedHouseCards
  communityName: string
}

/** Retained for community templates without rendering the retired test listing feed. */
export function Homes({ communityName }: HomesProps) {
  return (
    <Section hasMaxWidth>
      <S.Title>
        Explore homes near <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Container>
        <p>
          Search current North Alabama listings through ValleyMLS, or tell Becca which
          location and home details matter to you.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 20 }}>
          <Link href="/homes#buyer-brief">Build my search brief</Link>
          <a href="https://www.valleymls.com/" target="_blank" rel="noopener noreferrer">
            Browse ValleyMLS listings
          </a>
        </div>
      </S.Container>
    </Section>
  )
}
