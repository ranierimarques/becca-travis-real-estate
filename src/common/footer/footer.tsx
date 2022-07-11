import { Copyrights, DisclaimerLinks, Information } from '.'
import * as S from './footer.styles'

export function Footer() {
  return (
    <footer>
      <Information />
      <DisclaimerLinks />
      <Copyrights />
    </footer>
  )
}
