import { Box, Button, Flex } from '@common'
import Image from 'next/image'
import { becca } from './images'
import * as S from './last-call.styles'
import {
  CirclesSvg,
  HeartSvg,
  HouseSvg,
  LikeSvg,
  MedalSvg,
  PinSvg,
  ShieldSvg,
} from './svgs'

export function LastCall() {
  return (
    <S.Section>
      <S.Container>
        <Flex direction="column" align="start">
          <S.Title>
            Let&apos;s start a <S.Conversation>conversation</S.Conversation>
          </S.Title>
          <S.Paragraph>
            Schedule a time to chat with Becca Travis and learn more about how I can help
            you.
          </S.Paragraph>
          <Flex
            align="center"
            css={{
              gap: 16,

              color: '$magenta1',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            <Button
              size="2"
              href="https://calendly.com/beccatravis"
              as="a"
              target="_blank"
            >
              Schedule
            </Button>
            or
            <Button href="tel:+1-256-318-9066" as="a" target="_self" outlined size="2">
              Call
            </Button>
          </Flex>
        </Flex>

        <div>
          <S.IconContainer css={{ top: 26, left: 471, bg: '$tangerine1', br: 16 }}>
            <HeartSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer css={{ bottom: 160, left: 449, bg: '$tangerine1', br: 12 }}>
            <ShieldSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer css={{ bottom: 36, left: 474, bg: '$tangerine2', br: 14 }}>
            <MedalSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer css={{ top: 23, right: 69, bg: '$tangerine2', br: 14 }}>
            <PinSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer css={{ top: 159, right: 32, bg: '$tangerine1', br: 16 }}>
            <HouseSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer css={{ bottom: 40, right: 80, bg: '$tangerine2', br: 12 }}>
            <LikeSvg className={S.SvgStyles()} />
          </S.IconContainer>

          <Box css={{ position: 'absolute', bottom: -5, right: 195, zIndex: 2 }}>
            <Image src={becca} alt="Becca Travis" quality="100" />
          </Box>
          <Box css={{ position: 'absolute', bottom: 0, right: 0, opacity: '.1' }}>
            <CirclesSvg className={S.SvgStyles()} />
          </Box>
        </div>
      </S.Container>
    </S.Section>
  )
}
