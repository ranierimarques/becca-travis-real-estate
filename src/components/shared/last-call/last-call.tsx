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
            Schedule a time to chat with Becca Travis and learn more about how I can help
            you.
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

              '@bp2': {
                width: '100%',
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
                  textAlign: 'center',
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
                  textAlign: 'center',
                },
              }}
            >
              Call
            </Button>
          </Flex>
        </Flex>

        {/* <Box
          css={{
            position: 'absolute',
            bottom: 0,
            right: '50%',
            transform: 'translateX(50%)',
            opacity: '.2',

            display: 'none',

            zIndex: -1,

            '@bp4': {
              display: 'block',
            },
          }}
        >
          <Svg.Circles720 />
        </Box> */}

        <div>
          <Box
            css={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              opacity: '.1',
              display: 'none',
              '@bp5': {
                display: 'block',
              },
              '@bp4': {
                display: 'none',
              },
            }}
          >
            <Svg.Circles1024 className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              opacity: '.1',

              '@bp5': {
                display: 'none',
              },
            }}
          >
            <Svg.Circles className={S.SvgStyles()} />
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
            <Svg.Heart className={S.SvgStyles()} />
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
            <Svg.Shield className={S.SvgStyles()} />
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
            <Svg.Medal className={S.SvgStyles()} />
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
            <Svg.Pin className={S.SvgStyles()} />
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
            <Svg.House className={S.SvgStyles()} />
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
            <Svg.Like className={S.SvgStyles()} />
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
        </div>
      </S.Container>
    </Section>
  )
}
