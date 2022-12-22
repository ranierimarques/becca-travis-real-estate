import { Button, Flex } from '@/common'
import { Contact } from '@/shared'
import * as S from './faster-contact.styles'

export function FasterContact() {
  return (
    <S.Container>
      <S.Title>Do you need a faster contact?</S.Title>
      <S.Paragraph>
        I&apos;m ready to help you and take all your questions, get in touch!
      </S.Paragraph>

      <Flex direction="column" css={{ gap: 8 }}>
        <Button
          as="a"
          href="https://calendly.com/beccatravis"
          target="_blank"
          size={2}
          css={{ w: '100%', textAlign: 'center' }}
        >
          Request a tour
        </Button>
        <Contact>
          <Button outlined size={2} css={{ w: '100%' }}>
            Contact Becca Travis
          </Button>
        </Contact>
      </Flex>
    </S.Container>
  )
}
