import { Form } from '@shared'
import * as S from './ask-a-question.styles'

export function AskAQuestion() {
  return (
    <S.Section>
      <S.Title>Ask a Question</S.Title>

      <S.Container>
        <Form noTitle />
      </S.Container>
    </S.Section>
  )
}
