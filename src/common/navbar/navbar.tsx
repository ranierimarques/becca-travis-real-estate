import { HelperNavbar, MainNavbar } from "."
import * as S from "./navbar.styles"

export function Navbar() {
  return (
    <S.Header>
      <HelperNavbar />
      <MainNavbar />
    </S.Header>
  )
}
