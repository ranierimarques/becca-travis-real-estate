import { DropdownMenu } from '@primitives'
import { useState } from 'react'
import { BrFlag, EarthSvg, EnFlag, EsFlag } from '../svgs'
import * as S from './dropdown-language.styles'

export default function DropdownLanguage() {
  const [language, setLanguage] = useState('en-US')

  return (
    <DropdownMenu.Root>
      <S.Trigger>
        <EarthSvg />
        Language
      </S.Trigger>
      <S.Content align="start">
        <S.RadioGroup value={language} onValueChange={setLanguage}>
          <S.RadioItem value="en-US" icon={<S.CheckMark />}>
            <EnFlag />
            <S.LanguageText>English</S.LanguageText>
          </S.RadioItem>
          <S.RadioItem value="pt-BR" icon={<S.CheckMark />} disabled>
            <BrFlag />
            <S.LanguageText>Portuguese</S.LanguageText>
          </S.RadioItem>
          <S.RadioItem value="en-BR" icon={<S.CheckMark />} disabled>
            <EsFlag />
            <S.LanguageText>Spanish</S.LanguageText>
          </S.RadioItem>
        </S.RadioGroup>
        <S.Arrow />
      </S.Content>
    </DropdownMenu.Root>
  )
}
