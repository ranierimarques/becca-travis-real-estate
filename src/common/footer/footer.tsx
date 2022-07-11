import { Copyrights, DisclaimerLinks, Information } from '.'
import * as S from './footer.styles'

export function Footer() {
  return (
    <S.Footer>
      <Information />
      <DisclaimerLinks />
      <Copyrights />
    </S.Footer>
  )
}
