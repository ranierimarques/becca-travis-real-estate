import { Box, Button, Flex, Image } from '@/common'
import { Section } from '@/template'
import { becca } from './images'
import * as S from './last-call.styles'
import * as Svg from './svgs'

export function LastCall() {
  return (
    <Section hasMaxWidth padding="6">
      <S.Container>
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp4': 'center',
          }}
        >
          <S.Title>
            Let&apos;s start a <S.Conversation>conversation</S.Conversation>
          </S.Title>
          <S.Paragraph>
            Schedule a time to chat with Becca Travis <br /> and learn more about how I
            can help you.
          </S.Paragraph>
          <Flex
            align="center"
            direction={{
              '@initial': 'row',
              '@bp2': 'column',
            }}
            css={{
              gap: 16,

              color: '$magenta1',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',

              '@bp2': {
                width: '100%',
                gap: 8,
              },
            }}
          >
            <Button
              size={{
                '@initial': '3',
                '@bp1': '2',
              }}
              href="https://calendly.com/beccatravis"
              as="a"
              target="_blank"
              css={{
                '@bp2': {
                  width: '100%',
                },
              }}
            >
              Schedule
            </Button>
            or
            <Button
              href="tel:+1-256-318-9066"
              as="a"
              target="_self"
              outlined
              size={{
                '@initial': '3',
                '@bp1': '2',
              }}
              css={{
                '@bp2': {
                  width: '100%',
                },
              }}
            >
              Call
            </Button>
          </Flex>
        </Flex>

        <Box
          css={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <Box
            css={{
              position: 'absolute',
              top: -144,
              right: 0,
              opacity: '0.1',

              '@bp5': {
                right: -139,
              },

              '@bp4': {
                top: '50%',
                right: '50%',

                transform: 'translate(50%, -50%)',
              },
            }}
          >
            <Svg.Circles />
          </Box>
        </Box>
        <S.IconContainer
          css={{
            top: 26,
            right: 541,
            bg: '$tangerine1',
            br: 16,

            '@bp5': {
              top: 26,
              right: 410,
            },
            '@bp4': {
              display: 'none',
            },
          }}
        >
          <Svg.Heart />
        </S.IconContainer>
        <S.IconContainer
          css={{
            bottom: 160,
            right: 579,
            bg: '$tangerine1',
            br: 12,

            '@bp5': {
              bottom: 160,
              right: 440,
            },
            '@bp4': {
              display: 'none',
            },
          }}
        >
          <Svg.Shield />
        </S.IconContainer>
        <S.IconContainer
          css={{
            bottom: 36,
            right: 539,
            bg: '$tangerine2',
            br: 14,

            '@bp5': {
              bottom: 36,
              right: 403,
            },

            '@bp4': {
              display: 'none',
            },
          }}
        >
          <Svg.Medal />
        </S.IconContainer>
        <S.IconContainer
          css={{
            top: 23,
            right: 69,
            bg: '$tangerine2',
            br: 14,
            '@bp5': {
              display: 'none',
            },
          }}
        >
          <Svg.Pin />
        </S.IconContainer>
        <S.IconContainer
          css={{
            top: 159,
            right: 32,
            bg: '$tangerine1',
            br: 16,
            '@bp5': {
              display: 'none',
            },
          }}
        >
          <Svg.House />
        </S.IconContainer>
        <S.IconContainer
          css={{
            bottom: 40,
            right: 80,
            bg: '$tangerine2',
            br: 12,
            '@bp5': {
              display: 'none',
            },
          }}
        >
          <Svg.Like />
        </S.IconContainer>

        <Box
          css={{
            position: 'absolute',
            bottom: 0,
            right: 195,

            width: 291,
            height: 410,

            br: '28px 28px 0 0',
            overflow: 'hidden',

            '@bp5': {
              right: 46,
            },

            '@bp4': {
              display: 'none',
            },
          }}
        >
          <Image
            src={becca}
            alt="Becca Travis"
            quality="100"
            fill
            skeletonBackground="rgba($colors$tangerine10Rgb)"
          />
        </Box>
      </S.Container>
    </Section>
  )
}
