import { Box, Button, Flex } from '@common'
import Image from 'next/image'
import { contactFaster } from '../images'
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

        <S.FasterContact>
          <Box css={{ lineHeight: '0', br: 8, overflow: 'hidden' }}>
            <Image src={contactFaster} alt="" quality={100} />
          </Box>

          <S.FasterContactTitle>Do you need a faster contact?</S.FasterContactTitle>
          <S.FasterContactParagraph>
            I&apos;m ready to help you and take all your questions, get in touch!
          </S.FasterContactParagraph>
          <Button outlined size={2} css={{ w: '100%' }}>
            Contact Becca Travis
          </Button>
        </S.FasterContact>
      </Flex>
    </S.Section>
  )
}
