import { Box, Button, Flex } from "@common"
import Image from "next/image"
import { becca } from "./images"
import * as S from "./last-call.styles"
import {
  CirclesSvg,
  HeartSvg,
  HouseSvg,
  LikeSvg,
  MedalSvg,
  PinSvg,
  ShieldSvg,
} from "./svgs"

export function LastCall() {
  return (
    <S.Section>
      <S.Container>
        <Flex direction="column" align="start">
          <S.Title>
            Let&apos;s start a <S.Conversation>conversation</S.Conversation>
          </S.Title>
          <S.Paragraph>
            Schedule a time to chat with Becca Travis and learn more about how I
            can help you.
          </S.Paragraph>
          <Flex
            align="center"
            css={{
              gap: 16,

              color: "$magenta1",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            <Button href="#" size="2">
              Schedule
            </Button>
            or
            <Button href="#" outlined size="2">
              Call
            </Button>
          </Flex>
        </Flex>

        <div>
          <S.IconContainer
            css={{
              top: "26px",
              left: "471px",

              background: "$tangerine1",
              borderRadius: "16px",
            }}
          >
            <HeartSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer
            css={{
              bottom: "160px",
              left: "449px",

              background: "$tangerine1",
              borderRadius: "12px",
            }}
          >
            <ShieldSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer
            css={{
              bottom: "36px",
              left: "474px",

              background: "$tangerine2",
              borderRadius: "14px",
            }}
          >
            <MedalSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer
            css={{
              top: "23px",
              right: "69px",

              background: "$tangerine2",
              borderRadius: "14px",
            }}
          >
            <PinSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer
            css={{
              top: "159px",
              right: "32px",

              background: "$tangerine1",
              borderRadius: "16px",
            }}
          >
            <HouseSvg className={S.SvgStyles()} />
          </S.IconContainer>
          <S.IconContainer
            css={{
              bottom: "40px",
              right: "80px",

              background: "$tangerine2",
              borderRadius: "12px",
            }}
          >
            <LikeSvg className={S.SvgStyles()} />
          </S.IconContainer>

          <Box
            css={{
              position: "absolute",
              bottom: "-5px",
              right: "195px",

              zIndex: 2,
            }}
          >
            <Image src={becca} alt="Becca Travis" quality="100" />
          </Box>
          <Box
            css={{ position: "absolute", bottom: 0, right: 0, opacity: ".1" }}
          >
            <CirclesSvg className={S.SvgStyles()} />
          </Box>
        </div>
      </S.Container>
    </S.Section>
  )
}
