import { Box, Button } from '@/common'
import { Contact } from '@/shared'
import * as S from './faster-contact.styles'

export function FasterContact() {
  return (
    <S.Container>
      <S.Title>Do you need a faster contact?</S.Title>
      <S.Paragraph>
        I&apos;m ready to help you and take all your questions, get in touch!
      </S.Paragraph>

      <Box
        css={{ display: 'grid', gap: 8, '@bp4': { gridTemplateColumns: '1fr 1fr 1fr' } }}
      >
        <Button
          as="a"
          href="https://calendly.com/beccatravis"
          target="_blank"
          size={2}
          css={{ w: '100%', textAlign: 'center', '@bp4': { gridColumn: 'span 2' } }}
        >
          Request a tour
        </Button>
        <Contact>
          <Button
            outlined
            size={2}
            css={{
              w: '100%',
              '@bp4': {
                lineHeight: 0,
                color: 'transparent',

                '&::before': {
                  content: `Contact`,
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: '$magenta1',
                  marginRight: -140,
                },

                '&:not(:disabled)': {
                  '&:hover': {
                    background: 'rgba($colors$magenta5Rgb, 0.2)',
                    color: 'transparent',
                  },
                  '&:active': {
                    background: 'rgba($colors$magenta5Rgb, 0.4)',
                    color: 'transparent',
                  },
                },
              },
            }}
          >
            Contact Becca Travis
          </Button>
        </Contact>
      </Box>
    </S.Container>
  )
}
