import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { Trigger } from '../helper-navbar/helper-navbar'
import { BrFlag, EnFlag, EsFlag } from '../svgs'
import * as S from './dropdown-language.styles'

export default function DropdownLanguage() {
  const [language, setLanguage] = useState('en-US')

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Trigger />
      </DropdownMenuPrimitive.Trigger>
      <S.Content align="start">
        <S.RadioGroup value={language} onValueChange={setLanguage}>
          <S.RadioItem value="en-US">
            <EnFlag />
            <S.LanguageText>English</S.LanguageText>
            <S.ItemIndicator>
              <S.CheckMark />
            </S.ItemIndicator>
          </S.RadioItem>
          <S.RadioItem value="pt-BR" disabled>
            <BrFlag />
            <S.LanguageText>Portuguese</S.LanguageText>
            <S.ItemIndicator>
              <S.CheckMark />
            </S.ItemIndicator>
          </S.RadioItem>
          <S.RadioItem value="en-BR" disabled>
            <EsFlag />
            <S.LanguageText>Spanish</S.LanguageText>
            <S.ItemIndicator>
              <S.CheckMark />
            </S.ItemIndicator>
          </S.RadioItem>
        </S.RadioGroup>
        <S.Arrow />
      </S.Content>
    </DropdownMenuPrimitive.Root>
  )
}
