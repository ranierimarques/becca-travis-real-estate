import { Box, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './achievements.styles'
import { becca } from './images'
import * as Svg from './svgs'

const badges = [
  {
    icon: <Svg.Chip />,
    description: 'Personal home search and sale planning',
  },
  {
    icon: <Svg.Cup />,
    description: 'Associate Broker · Alabama license 000126941-1',
    href: 'https://arec.alabama.gov/apps/LicenseSearch/Home/Details/131571',
  },
  {
    icon: <Svg.Flag />,
    description: 'English and Portuguese; conversational Spanish',
  },
  {
    icon: <Svg.Rocket />,
    description: 'North Alabama buyer and seller guidance',
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
          Clear guidance from the first conversation through your next move.
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
            <Image
              src={becca}
              alt="Becca Travis"
              quality={90}
              fill
              sizes="(max-width: 768px) 100vw, 336px"
            />
          </Box>
        </Box>

        <S.Badges>
          {badges.map((badge, i) => {
            return (
              <S.Badge key={i}>
                <Flex align="start" css={{ gap: 12 }}>
                  {badge.icon}
                  <S.BadgeDescription>
                    {'href' in badge && badge.href ? (
                      <a href={badge.href} target="_blank" rel="noopener noreferrer">
                        {badge.description}
                      </a>
                    ) : (
                      badge.description
                    )}
                  </S.BadgeDescription>
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
