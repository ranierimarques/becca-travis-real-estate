import * as S from "./navbar.styles"

import {
  ArrowDownSvg,
  ChatSvg,
  EarthSvg,
  LogoSvg,
  ShieldSvg,
  UserSvg,
} from "./svgs"

export function Navbar() {
  return (
    <S.Header>
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

      <S.SecondNav>
        <S.Logo href="#">
          <LogoSvg />
        </S.Logo>

        <S.Links>
          <li>
            <S.Link href="#">
              Buyers <ArrowDownSvg />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              Sellers <ArrowDownSvg />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">
              Communities <ArrowDownSvg />
            </S.Link>
          </li>
          <li>
            <S.Link href="#">Why Becca?</S.Link>
          </li>
          <li>
            <S.Link href="#">Blog</S.Link>
          </li>
          <li>
            <S.TalkToMe href="">Talk to me</S.TalkToMe>
          </li>
        </S.Links>
      </S.SecondNav>
    </S.Header>
  )
}
