import { Box, Button } from "@common"
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
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <S.Title>
            Get started with <S.BeccaTravis>Becca Travis</S.BeccaTravis>
          </S.Title>
          <S.Paragraph>
            Is there a problem finding your dream home? Just contact us
          </S.Paragraph>
          <Box
            css={{
              display: "flex",
              alignItems: "center",
              gap: 24,

              color: "$magenta1",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            <Button
              href="#"
              css={{
                color: "$white",
                padding: "12px 20px",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              Schedule
            </Button>
            or
            <Button
              href="#"
              css={{
                color: "$magenta1",
                padding: "12px 20px",
                border: "1px solid $magenta1",
                backgroundColor: "transparent",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              Call
            </Button>
          </Box>
        </Box>

        <div>
          <Box
            css={{
              position: "absolute",
              top: "26px",
              left: "471px",

              padding: "10px",
              background: "$tangerine1",
              borderRadius: "16px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <HeartSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: "absolute",
              bottom: "160px",
              left: "384px",

              padding: "10px",
              background: "$tangerine1",
              borderRadius: "12px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <ShieldSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: "absolute",
              bottom: "36px",
              left: "474px",

              padding: "10px",
              background: "$tangerine2",
              borderRadius: "14px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <MedalSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: "absolute",
              top: "23px",
              right: "69px",

              padding: "10px",
              background: "$tangerine2",
              borderRadius: "14px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <PinSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: "absolute",
              top: "159px",
              right: "32px",

              padding: "10px",
              background: "$tangerine1",
              borderRadius: "16px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <HouseSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: "absolute",
              bottom: "69px",
              right: "134px",

              padding: "10px",
              background: "$tangerine2",
              borderRadius: "12px",

              filter:
                "drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))",

              zIndex: 2,
            }}
          >
            <LikeSvg className={S.SvgStyles()} />
          </Box>

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
          <Box css={{ position: "absolute", bottom: 0, right: 0 }}>
            <CirclesSvg className={S.SvgStyles()} />
          </Box>
        </div>
      </S.Container>
    </S.Section>
  )
}
