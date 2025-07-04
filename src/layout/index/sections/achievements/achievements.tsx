import { Box, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './achievements.styles'
import { becca } from './images'
import * as Svg from './svgs'

const badges = [
  {
    icon: <Svg.Chip />,
    description: `Coldwell Banker International Diamond Recipient`,
  },
  {
    icon: <Svg.Cup />,
    description: 'Alabamas Top Real Estate Agent',
  },
  {
    icon: <Svg.Flag />,
    description: 'Fluent in English, Portuguese, and Spanish',
  },
  {
    icon: <Svg.Rocket />,
    description: '12+ Years of Experience',
  },
]

export function Achievements() {
  return (
    <Section
      direction="vertical"
      hasMaxWidth
      padding="3"
      background="rgba($grayW8Rgb, 0.1)"
    >
      <Flex
        direction="column"
        align="center"
        css={{
          gap: 16,
          '@bp4': {
            gap: 12,
          },
        }}
      >
        <Hat>Becca Travis Real Estate Group</Hat>
        <S.Line />
        <S.Title>
          Experience the freedom that comes with having one of Alabama&apos;s top real
          estate agents by your side.
        </S.Title>
      </Flex>

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 24,
          w: '100%',

          '@bp4': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <S.Paragraph>
          Our goal is to exceed your expectations and deliver top-notch results in real
          estate. With a focus on achieving your goals and providing exceptional service,
          we take pride in our satisfied customers who trust us to get the job done.
          <S.LineLeft />
          <S.LineLeftSmall />
        </S.Paragraph>

        <Box
          css={{
            transform: 'translateY(-11.6997%)',
            width: 'inherit',
            maxWidth: '336px',
            justifySelf: 'center',

            '@bp4': {
              transform: 'none',
              marginBottom: 24,
            },
            '@bp2': {
              marginBottom: 8,
            },
            '@bp1': {
              marginBottom: 0,
            },
          }}
        >
          <Box css={{ br: '28px', aspectRatio: '336 / 453' }}>
            <Image src={becca} alt="Becca Travis" quality={100} fill />
          </Box>
        </Box>

        <S.Badges>
          {badges.map((badge, i) => {
            return (
              <S.Badge key={i}>
                <Flex align="start" css={{ gap: 12 }}>
                  {badge.icon}
                  <S.BadgeDescription>{badge.description}</S.BadgeDescription>
                </Flex>
                {i !== badges.length - 1 && <Svg.Line />}
                {i !== badges.length - 1 && <S.LineWithTriangle />}
              </S.Badge>
            )
          })}

          <S.LineRight />
          <S.LineRightSmall />
        </S.Badges>
      </Box>
    </Section>
  )
}
