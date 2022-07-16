import { Box } from "@common"
import Link from "next/link"
import { ChatSvg, EarthSvg, ShieldSvg, UserSvg } from "../svgs"
import * as S from "./helper-navbar.styles"

const links = [
  { icon: <ShieldSvg />, text: "Local Guides", href: "/" },
  { icon: <ChatSvg />, text: "Contact Us", href: "/" },
  { icon: <UserSvg />, text: "My account", href: "/" },
]

export function HelperNavbar() {
  return (
    <Box css={{ padding: "12px 0", background: "$tangerine10" }}>
      <S.Nav>
        <S.LanguageButton>
          <EarthSvg />
          Language
        </S.LanguageButton>
        <S.OptionsList>
          {links.map(link => (
            <li key={link.text}>
              <Link href={link.href} passHref>
                <S.Link>
                  {link.icon} {link.text}
                </S.Link>
              </Link>
            </li>
          ))}
        </S.OptionsList>
      </S.Nav>
    </Box>
  )
}
