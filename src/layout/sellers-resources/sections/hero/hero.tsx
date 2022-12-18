import { Box, Button } from '@/common'
import { Hat } from '@/shared'
import Image from 'next/legacy/image'
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
          <S.Title>Schedule your no-pressure selling consult with Becca </S.Title>
          <S.Skills>
            {skills.map(skill => {
              return (
                <S.Skill key={skill}>
                  <CheckmarkSvg /> {skill}{' '}
                </S.Skill>
              )
            })}
          </S.Skills>
          <Button size="2" href="/contact-us">
            Contact Becca Travis
          </Button>
          <S.Span>
            Learn how I work and ensure your goals are my goals every step of the way.
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
          <Box css={{ position: 'absolute', bottom: -130, left: -146 }}>
            <Image src={becca} alt="Becca Travis" />
          </Box>
          <S.ImageDescription>Image by Becca Travis</S.ImageDescription>
        </S.ImageContainer>
      </S.Container>
    </S.Section>
  )
}
