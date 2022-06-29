import { ChatSvg, EarthSvg, ShieldSvg, UserSvg } from "../svgs"
import * as S from "./helper-navbar.styles"

export function HelperNavbar() {
  return (
    <S.FirstNav>
      <S.NavContainer>
        <S.Language>
          <EarthSvg />
          Language
        </S.Language>
        <S.OptionsList>
          <li>
            <a href="">
              <ShieldSvg /> Knowledge center
            </a>
          </li>
          <li>
            <a href="">
              <ChatSvg /> Contact Us
            </a>
          </li>
          <li>
            <a href="">
              <UserSvg /> My account
            </a>
          </li>
        </S.OptionsList>
      </S.NavContainer>
    </S.FirstNav>
  )
}
