import { Box, Button, Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './selling-with-us.styles'

export function SellingWithUs() {
  return (
    <Section hasMaxWidth>
      <S.Container>
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp4': 'center',
          }}
        >
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Selling your home with us</S.Title>
          <S.Paragraph>
            Huntsville is a great place to live for many reasons. The people are friendly
            and welcoming, the city is clean and safe.
          </S.Paragraph>
          <Button
            href="/contact-us"
            size={{
              '@initial': '2',
              '@bp4': '3',
            }}
            css={{
              '@bp1': {
                padding: '12px 24px',
                borderRadius: '5px',
                fontSize: '14px',
                lineHeight: '21px',
                fontWeight: '400',
              },
            }}
          >
            Contact Becca Travis
          </Button>
        </Flex>

        <Box
          css={{
            overflow: 'hidden',
            br: 8,
            h: '100%',
            lineHeight: 0,
            maxWidth: '535px',

            '@bp5': {
              maxWidth: '456px',
            },
            '@bp4': {
              maxWidth: 'none',
            },
          }}
        >
          <video src="/dream-home.mp4" controls />
        </Box>
      </S.Container>
    </Section>
  )
}
