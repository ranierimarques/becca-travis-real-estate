import { Button } from '@/common'
import * as S from './miss-out-card.styles'

export function MissOutCard() {
  return (
    <S.MissOut>
      <S.Circles />
      <S.MissTitle>Don&apos;t Miss Out</S.MissTitle>
      <S.MissDescription>
        New Homes are getting added all the time. Save Your Search and be the first to
        know.
      </S.MissDescription>
      <Button size="2">Get started</Button>
    </S.MissOut>
  )
}
