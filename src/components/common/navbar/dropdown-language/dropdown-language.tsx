import { DropdownMenu } from '@primitives'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './dropdown-language.styles'

export default function DropdownLanguage() {
  const [language, setLanguage] = useState('en-US')

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Svg.Earth />
        Language
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start">
        <DropdownMenu.RadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenu.RadioItem value="en-US">
            <Svg.EnFlag />
            <S.LanguageText>English</S.LanguageText>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="pt-BR" disabled>
            <Svg.BrFlag />
            <S.LanguageText>Portuguese</S.LanguageText>
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="en-BR" disabled>
            <Svg.EsFlag />
            <S.LanguageText>Spanish</S.LanguageText>
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
