import { DropdownMenu } from '@primitives'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './dropdown-language.styles'

export default function DropdownLanguage() {
  const [language, setLanguage] = useState('en-US')

  return (
    <DropdownMenu.Root>
      <S.Trigger>
        <Svg.Earth />
        Language
      </S.Trigger>
      <S.Content align="start">
        <S.RadioGroup value={language} onValueChange={setLanguage}>
          <S.RadioItem value="en-US" icon={<S.CheckMark />}>
            <Svg.EnFlag />
            <S.LanguageText>English</S.LanguageText>
          </S.RadioItem>
          <S.RadioItem value="pt-BR" icon={<S.CheckMark />} disabled>
            <Svg.BrFlag />
            <S.LanguageText>Portuguese</S.LanguageText>
          </S.RadioItem>
          <S.RadioItem value="en-BR" icon={<S.CheckMark />} disabled>
            <Svg.EsFlag />
            <S.LanguageText>Spanish</S.LanguageText>
          </S.RadioItem>
        </S.RadioGroup>
        <S.Arrow />
      </S.Content>
    </DropdownMenu.Root>
  )
}
