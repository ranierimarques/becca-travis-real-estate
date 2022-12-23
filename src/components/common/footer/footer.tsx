import { Copyrights, Links } from '.'
import * as S from './footer.styles'

export function Footer() {
  return (
    <S.Footer>
      <S.Wrapper>
        <Links />
        <Copyrights />
      </S.Wrapper>
    </S.Footer>
  )
}
