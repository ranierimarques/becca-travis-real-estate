import { Box, Button } from '@common'
import { Hat } from '@shared'
import * as S from './selling-with-us.styles'

export function SellingWithUs() {
  return (
    <S.Section>
      <S.Container>
        <div>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Selling your home with us</S.Title>
          <S.Paragraph>
            Huntsville is a great place to live for many reasons. The people are friendly
            and welcoming, the city is clean and safe.
          </S.Paragraph>
          <Button size="2" href="/contact-us">
            Contact Becca Travis
          </Button>
        </div>

        <Box
          css={{
            overflow: 'hidden',
            br: 8,
            h: '100%',
            lineHeight: 0,
            maxWidth: '535px',
          }}
        >
          <video src="/dream-home.mp4" controls />
        </Box>
      </S.Container>
    </S.Section>
  )
}
