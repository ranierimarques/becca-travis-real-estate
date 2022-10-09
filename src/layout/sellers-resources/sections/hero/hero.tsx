import { Box, Button } from '@common'
import { Hat } from '@shared'
import Image from 'next/image'
import * as S from './hero.styles'
import { becca, house } from './images'
import { CheckmarkSvg } from './svgs'

const skills = ['Experience', 'Professionalism', 'Efficiency']

export function Hero() {
  return (
    <S.Section>
      <S.Container>
        <div>
          <Hat>Seller Resources</Hat>
          <S.Title>Need help selling your home? We can help you!</S.Title>
          <S.Skills>
            {skills.map(skill => {
              return (
                <S.Skill key={skill}>
                  <CheckmarkSvg /> {skill}{' '}
                </S.Skill>
              )
            })}
          </S.Skills>
          <Button size="2">Contact Becca Travis</Button>
          <S.Span>
            We’re always ready to help by providing the best service for you
          </S.Span>
        </div>
        <S.ImageContainer>
          <Box
            css={{
              br: 8,
              overflow: 'hidden',
            }}
          >
            <Image src={house} alt="house" width={520} height={419} />
          </Box>
          <Box css={{ position: 'absolute', top: 15, left: -146 }}>
            <Image src={becca} alt="Becca Travis" width={422} height={533} />
          </Box>
          <S.ImageDescription>Image by Becca Travis</S.ImageDescription>
        </S.ImageContainer>
      </S.Container>
    </S.Section>
  )
}
