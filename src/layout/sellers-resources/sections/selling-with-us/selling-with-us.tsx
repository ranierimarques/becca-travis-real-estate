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
          <Hat variant="2">Sell Your Home with Confidence</Hat>
          <S.Title>Maximize Your Home&apos;s Value</S.Title>
          <S.Paragraph>
            Selling your home with us means you&apos;ll have a dedicated team of
            experienced professionals on your side, working to get you the best possible
            outcome. From the moment you decide to work with us we&apos;ll be with you
            every step of the way, providing personalized service and expert guidance.
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
