import { Box, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import * as S from './achievements.styles'
import { becca } from './images'
import * as Svg from './svgs'

const badges = [
  {
    svg: <Svg.Chip />,
    description: `Coldwell Banker International Diamond Recipient`,
  },
  {
    svg: <Svg.Cup />,
    description: 'Alabamas Top Real State Agent',
  },
  {
    svg: <Svg.Flag />,
    description: '12+ Years of Experience',
  },
  {
    svg: <Svg.Rocket />,
    description: 'Huntsville Top Real State Agent',
  },
]

export function Achievements() {
  return (
    <S.Section>
      <Flex direction="column" align="center" css={{ gap: 16 }}>
        <Hat>Becca Travis Real State Group</Hat>
        <S.Line />
        <S.Title>
          Enjoy the freedom that comes with having one of Alabama&apos;s top real estate
          agent&apos;s in your corner
        </S.Title>
      </Flex>

      <Flex align="start" css={{ gap: '70px' }}>
        <S.Paragraph>
          We thrive on satisfied customers and individuals who seek us out because they
          know that when you come here what matters most is getting results and when it
          comes to real estate, we want to exceed your expectations.
        </S.Paragraph>

        <Box css={{ position: 'relative', top: '-53px' }}>
          <Box css={{ br: '28px' }}>
            <Image
              src={becca}
              alt="Becca Travis"
              quality={100}
              width={336}
              height={453}
            />
          </Box>
          <Box css={{ position: 'absolute', bottom: 66, left: -219 }}>
            <Svg.LineLeft />
          </Box>
          <Box css={{ position: 'absolute', bottom: 66, right: -219 }}>
            <Svg.LineRight />
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
                {i !== badges.length - 1 && <Svg.Line />}
              </S.Badge>
            )
          })}
        </S.Badges>
      </Flex>
    </S.Section>
  )
}
