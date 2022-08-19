import { Box, Flex, Hat } from "@common"
import Image from "next/image"
import * as S from "./achievements.styles"
import { becca } from "./images"
import {
  ChipSvg,
  CupSvg,
  FlagSvg,
  LineLeftSvg,
  LineRightSvg,
  LineSvg,
  RocketSvg,
} from "./svgs"

const badges = [
  {
    svg: <ChipSvg />,
    description: `Coldwell Banker International 
    Diamond Recipient`,
  },
  {
    svg: <CupSvg />,
    description: "Alabamas Top Real State Agent",
  },
  {
    svg: <FlagSvg />,
    description: "12+ Years of Experience",
  },
  {
    svg: <RocketSvg />,
    description: "Huntsville Top Real State Agent",
  },
]

export function Achievements() {
  return (
    <S.Section>
      <Flex direction="column" align="center" css={{ gap: 16 }}>
        <Hat>Becca Travis Real State Group</Hat>
        <S.Line />
        <S.Title>
          Enjoy the freedom that comes with having one of Alabama&apos;s top
          real estate agent&apos;s in your corner.
        </S.Title>
      </Flex>

      <Flex align="start" css={{ gap: "70px" }}>
        <S.Paragraph>
          We thrive on satisfied customers and individuals who seek us out
          because they know that when you come here what matters most is getting
          results and when it comes to real estate, we want to exceed your
          expectations.
        </S.Paragraph>

        <Box css={{ position: "relative", top: "-53px" }}>
          <Image src={becca} alt="Becca Travis" quality={100} />
          <Box css={{ position: "absolute", bottom: 66, left: -219 }}>
            <LineLeftSvg />
          </Box>
          <Box css={{ position: "absolute", bottom: 66, right: -219 }}>
            <LineRightSvg />
          </Box>
        </Box>

        <S.Badges>
          {badges.map((badge, i) => {
            return (
              <S.Badge key={i}>
                <Flex align="start" css={{ gap: 12 }}>
                  {badge.svg}
                  <S.BadgeDescription>{badge.description}</S.BadgeDescription>
                </Flex>
                {i !== badges.length - 1 && <LineSvg />}
              </S.Badge>
            )
          })}
        </S.Badges>
      </Flex>
    </S.Section>
  )
}
