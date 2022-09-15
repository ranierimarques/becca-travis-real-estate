import { Button, Flex } from '@common'
import * as S from './faster-contact.styles'

export function FasterContact() {
  return (
    <S.Container>
      <S.Title>Do you need a faster contact?</S.Title>
      <S.Paragraph>
        I&apos;m ready to help you and take all your questions, get in touch!
      </S.Paragraph>

      <Flex direction="column" css={{ gap: 8 }}>
        <Button size={2} css={{ w: '100%' }}>
          Request a tour
        </Button>
        <Button outlined size={2} css={{ w: '100%' }}>
          Contact Becca Travis
        </Button>
      </Flex>
    </S.Container>
  )
}
