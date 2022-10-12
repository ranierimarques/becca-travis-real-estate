import { Box, Button } from '@common'
import { Hat } from '@shared'
import Image from 'next/image'
import { house } from './images'
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
          <Button size="2">Contact Becca Travis</Button>
        </div>

        <S.ImageContainer>
          <Box css={{ overflow: 'hidden', borderRadius: 8 }}>
            <Image src={house} alt="House" />
          </Box>
          <S.ImageDescription>Image by Becca Travis</S.ImageDescription>
        </S.ImageContainer>
      </S.Container>
    </S.Section>
  )
}
