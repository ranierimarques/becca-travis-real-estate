import { Box, Button, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import * as S from './hero.styles'
import { house } from './images'
import { CheckmarkSvg } from './svgs'

const skills = ['Experience', 'Professionalism', 'Efficiency']

export function Hero() {
  return (
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <Flex
        direction={{
          '@initial': 'row',
          '@bp4': 'column',
        }}
        justify={{
          '@initial': 'between',
          '@bp4': 'center',
        }}
        align="center"
        css={{ '@bp4': { gap: 40 } }}
      >
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp4': 'center',
          }}
        >
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
          <S.Span>
            Learn how I work and ensure your goals are my goals every step of the way.
          </S.Span>
        </Flex>

        <S.ImageContainer>
          <Box
            css={{
              '@bp4': {
                background: '$white',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '100%',
                width: '100vw',
              },
            }}
          />
          <Box
            css={{
              '@bp4': {
                background: 'rgba($colors$tangerine5Rgb, 0.3)',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '40%',
                width: '100vw',
              },
            }}
          />
          <Box
            css={{
              br: 8,
              overflow: 'hidden',
              h: '100%',

              '@bp4': {
                h: 'unset',
                aspectRatio: '688 / 384',
              },
            }}
          >
            <Image src={house} alt="house" fill quality={100} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: -129,
              left: -146,

              '@bp5': {
                left: -51,
              },

              '@bp4': {
                left: '52%',
                transform: 'translate(-48%, 30%) scale(1.5)',

                bottom: '0',
              },

              '@bp2': {
                transform: 'translate(-48%, 30%) scale(1.8)',
              },
            }}
          >
            <S.BeccaSvg />
          </Box>
        </S.ImageContainer>
      </Flex>
    </S.Section>
  )
}
