import { Box, Button, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './hero.styles'
import { becca } from './images'
import * as Svg from './svgs'

export function Hero() {
  function scrollTo() {
    document.querySelector('#section-history')?.scrollIntoView()
  }

  return (
    <Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Container>
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp5': 'center',
          }}
        >
          <Hat css={{ marginBottom: 8 }}>Why Becca?</Hat>

          <S.Title>
            With Becca Travis, your sell is our assignment, and helping with your purchase
            is our passion
          </S.Title>
          <S.Paragraph>
            From finding your dream home to negotiating terms on your behalf, we cover
            every step of the process along the way
          </S.Paragraph>

          <Flex
            css={{
              gap: 24,
              '@bp5': {
                width: 288,
              },
              '@bp4': {
                width: 'initial',
              },
            }}
            direction={{
              '@initial': 'row',
              '@bp5': 'column',
            }}
            align="center"
          >
            <Button
              size={{
                '@initial': '2',
                '@bp4': '3',
              }}
              href="/contact-us"
              css={{
                '@bp5': {
                  width: '100%',
                  textAlign: 'center',
                },
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
            <S.KeepExploring onClick={scrollTo}>
              <Svg.CircleArrow /> Keep exploring
            </S.KeepExploring>
          </Flex>
        </Flex>

        <Box
          css={{
            width: '100%',
            maxWidth: 520,

            '@bp5': {
              position: 'relative',
            },
          }}
        >
          <Box
            css={{
              '@bp5': {
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
              '@bp5': {
                background: 'rgba($colors$tangerine5Rgb, 0.3)',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '40%',
                width: '100vw',
              },
            }}
          />
          <Image
            src={becca}
            quality={100}
            alt="Becca Travis photo"
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>
      </S.Container>
    </Section>
  )
}
