import { NavigationMenu } from "@common"
import { LogoSvg } from "../svgs"

import * as S from "./main-navbar.styles"

export function MainNavbar() {
  return (
    <S.SecondNav>
      <a href="#">
        <LogoSvg />
      </a>
      <NavigationMenu />
    </S.SecondNav>
  )
}
