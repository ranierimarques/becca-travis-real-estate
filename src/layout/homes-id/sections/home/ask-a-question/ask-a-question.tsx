import { Button, Flex } from '@common'
import * as S from './ask-a-question.styles'

export function AskAQuestion() {
  return (
    <S.Section>
      <S.Title>Ask a Question</S.Title>

      <Flex align="start" css={{ gap: 32 }}>
        <S.Form action="">
          <S.Label>
            First Name
            <S.Input type="text" />
          </S.Label>
          <S.Label>
            Last Name
            <S.Input type="text" />
          </S.Label>
          <S.Label>
            Email
            <S.Input type="email" />
          </S.Label>
          <S.Label>
            Phone
            <S.Input type="text" />
          </S.Label>
          <S.Label>
            Your Message
            <S.TextArea rows={6} cols={80} />
          </S.Label>

          <Flex align="center" css={{ gap: 32, marginLeft: 'auto' }}>
            <S.Checkbox>
              <input type="checkbox" />I agree to the privacy policy
            </S.Checkbox>
            <Button size="2">Send your message</Button>
          </Flex>
        </S.Form>
      </Flex>
    </S.Section>
  )
}
