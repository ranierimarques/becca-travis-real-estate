import { ArrowDownSvg, LogoSvg } from "../svgs"

import * as S from "./main-navbar.styles"

export function MainNavbar() {
  return (
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
  )
}
