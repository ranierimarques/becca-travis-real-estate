import { Box } from '@common'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { brFlag, enFlag, esFlag } from '../images'
import { ChatSvg, EarthSvg, ShieldSvg, UserSvg } from '../svgs'
import * as S from './helper-navbar.styles'

const links = [
  { id: 1, icon: <ShieldSvg />, text: 'Local Guides', href: '/local-guides' },
  { id: 2, icon: <ChatSvg />, text: 'Contact Us', href: '/contact-us' },
  { id: 3, icon: <UserSvg />, text: 'My account', href: '/profile' },
]

export function HelperNavbar() {
  const [language, setLanguage] = useState('en-US')

  return (
    <Box css={{ padding: '6px 0', background: '$tangerine10' }}>
      <S.Nav>
        <DropdownMenuPrimitive.Root>
          <S.Trigger>
            <EarthSvg />
            Language
          </S.Trigger>
          <S.Content align="start">
            <S.RadioGroup value={language} onValueChange={setLanguage}>
              <S.RadioItem value="en-US">
                <Image src={enFlag} alt="United states's flag" width={20} height={15} />
                <S.LanguageText>English</S.LanguageText>
                <S.ItemIndicator>
                  <S.CheckMark />
                </S.ItemIndicator>
              </S.RadioItem>
              <S.RadioItem value="pt-BR" disabled>
                <Image src={brFlag} alt="Brazil's flag" width={20} height={15} />
                <S.LanguageText>Portuguese</S.LanguageText>
                <S.ItemIndicator>
                  <S.CheckMark />
                </S.ItemIndicator>
              </S.RadioItem>
              <S.RadioItem value="en-BR" disabled>
                <Image src={esFlag} alt="Spanish flag" width={20} height={15} />
                <S.LanguageText>Spanish</S.LanguageText>
                <S.ItemIndicator>
                  <S.CheckMark />
                </S.ItemIndicator>
              </S.RadioItem>
            </S.RadioGroup>
            <S.Arrow />
          </S.Content>
        </DropdownMenuPrimitive.Root>

        <S.OptionsList>
          {links.map(link => (
            <li key={link.id}>
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
