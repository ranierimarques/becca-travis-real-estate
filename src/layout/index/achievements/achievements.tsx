import { Box, Hat } from "@common"
import Image from "next/image"
import * as S from "./achievements.styles"
import { becca, huntsville } from "./images"
import {
  ChatSvg,
  CupSvg,
  HouseSvg,
  LineLeftSvg,
  LineRightSvg,
  UserSvg,
} from "./svgs"

const badges = [
  {
    svg: <CupSvg />,
    number: "20",
    description: "Award Winning",
  },
  {
    svg: <ChatSvg />,
    number: "380",
    description: "Feedback received",
  },
  {
    svg: <UserSvg />,
    number: "500+",
    description: "Happy costumers",
  },
  {
    svg: <HouseSvg />,
    number: "1200+",
    description: "Premium products",
  },
]

export function Achievements() {
  return (
    <S.Section>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Hat>Becca Travis Real State Group</Hat>
        <S.Line></S.Line>
        <S.Title>
          It&apos;s not just about meeting your expectations, it&apos;s oxygen
          for our company.
        </S.Title>
      </Box>

      <Box
        css={{
          display: "flex",
          alignItems: "flex-start",
          gap: "56px",
        }}
      >
        <S.Paragraph>
          We thrive on satisfied customers and individuals who seek us out
          because they know that when you come here what matters most is getting
          results and when it comes to real estate, we want to exceed your
          expectations.
        </S.Paragraph>

        <Box
          css={{
            position: "relative",
            top: "-53px",
          }}
        >
          <Image src={becca} alt="Becca Travis" />
          <Box css={{ position: "absolute", bottom: 66, left: -219 }}>
            <LineLeftSvg />
          </Box>
          <Box css={{ position: "absolute", bottom: 66, right: -219 }}>
            <LineRightSvg />
          </Box>
        </Box>

        <S.Badges>
          {badges.map(badge => {
            return (
              <S.Badge key={badge.description}>
                {badge.svg}
                <S.BadgeTitle>{badge.number}</S.BadgeTitle>
                <S.BadgeDescription>{badge.description}</S.BadgeDescription>
              </S.Badge>
            )
          })}
        </S.Badges>
      </Box>
    </S.Section>
  )
}
