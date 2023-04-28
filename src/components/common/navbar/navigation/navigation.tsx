import { Box, Flex, Image } from '@/common'
import { NavigationMenu } from '@/primitives'
import * as Img from '../images'
import * as Svg from '../svgs'
import * as S from './navigation.styles'

export const communitiesListItems = [
  { image: Img.harvest, name: 'Harvest', href: '/communities/harvest' },
  { image: Img.huntsville, name: 'Huntsville', href: '/communities/huntsville' },
  { image: Img.hamptomCove, name: 'Hampton Cove', href: '/communities/hampton-cove' },
  { image: Img.decatur, name: 'Decatur', href: '/communities/decatur' },
  { image: Img.athens, name: 'Athens', href: '/communities/athens' },
  { image: Img.meridianville, name: 'Meridianville', href: '/communities/meridianville' },
]

export const aboutHuntsvilleListItems = [
  {
    id: 1,
    icon: <Svg.House className={S.SvgStyles()} />,
    title: 'Huntsville',
    href: '/communities/huntsville',
    description: 'Discover Huntsville',
    color: '$colors$green1Rgb',
    disabled: false,
  },
  {
    id: 2,
    icon: <Svg.Baggage className={S.SvgStyles()} />,
    title: 'Relocation Information',
    href: '/communities/huntsville#relocation-information',
    description: 'All you need to know about your Relocation',
    color: '$colors$red1Rgb',
    disabled: true,
  },
  {
    id: 3,
    icon: <Svg.Pencil className={S.SvgStyles()} />,
    title: 'Huntsville school',
    href: '/communities/huntsville#school',
    description: 'Discover our schools',
    color: '$colors$blue2Rgb',
    disabled: true,
  },
]

export const menus = {
  buyers: [
    {
      id: 1,
      title: 'SEARCH',
      listItem: [
        {
          id: 1,
          icon: <Svg.Location />,
          title: 'Search Map View',
          description: 'View all properties for sale',
          href: '/homes?view=map',
          disabled: false,
        },
        {
          id: 2,
          icon: <Svg.Gallery />,
          title: 'Search List View',
          description: 'View all properties for sale',
          href: '/homes?view=gallery',
          disabled: false,
        },
      ],
    },
    {
      id: 2,
      title: 'RESOURCES',
      listItem: [
        {
          id: 1,
          icon: <Svg.OpenBook />,
          title: 'Buyers Resources',
          description: 'All you need to know to buy your property',
          href: '/buyers-resources',
          disabled: true,
        },
        {
          id: 2,
          icon: <Svg.Calculator />,
          title: 'Mortgage Calculator',
          description: 'Estimate your monthly mortgage payment',
          href: '/mortgage-calculator',
          disabled: true,
        },
      ],
    },
  ],
  sellers: [
    {
      id: 1,
      title: 'SELLERS',
      listItem: [
        {
          id: 1,
          icon: <Svg.HomePrice />,
          title: 'Sell with us',
          description: 'We can help you sell your home',
          href: '/sell-with-us',
          disabled: false,
        },
      ],
    },
    {
      id: 2,
      title: 'RESOURCES',
      listItem: [
        {
          id: 1,
          icon: <Svg.OpenBook />,
          title: 'Sellers Resources',
          description: 'All you need to sell your property',
          href: '/sellers-resources',
          disabled: false,
        },
      ],
    },
  ],
  whyBecca: [
    {
      id: 1,
      title: 'FEEDBACK',
      listItem: [
        {
          id: 1,
          icon: <Svg.MessageHeart />,
          title: 'Client reviews',
          description: 'See what our clients are telling about us',
          href: '/reviews',
          disabled: true,
        },
        {
          id: 2,
          icon: <Svg.UserMessageChat />,
          title: 'Referral',
          description: 'See what our partners are telling about us',
          href: '/referral',
          disabled: true,
        },
      ],
    },
    {
      id: 2,
      title: 'ABOUT ME',
      listItem: [
        {
          id: 1,
          icon: <Svg.HeartShine />,
          title: 'Why Becca?',
          description: 'Why we are your best choice',
          href: '/why-becca',
          disabled: false,
        },
      ],
    },
  ],
}

export type CardListItemProps = {
  content: {
    description: string
    title: string
    href: string
    icon: JSX.Element
    disabled?: boolean
  }
}

function CardListItem({ content }: CardListItemProps) {
  if (content.disabled) {
    return (
      <S.CardListItem>
        <S.DisabledCardLink>
          {content.icon}
          <div>
            <Flex align="center" css={{ pos: 'relative', w: 'fit-content', mb: 4 }}>
              <S.CardTitle>{content.title}</S.CardTitle>
              <S.ArrowRight css={{ pos: 'absolute', right: -18 }} />
            </Flex>
            <S.CardDescription>{content.description}</S.CardDescription>
          </div>
        </S.DisabledCardLink>
      </S.CardListItem>
    )
  }

  return (
    <S.CardListItem>
      <NavigationMenu.NavigationLink asChild>
        <S.CardLink href={content.href}>
          {content.icon}
          <div>
            <Flex align="center" css={{ pos: 'relative', w: 'fit-content', mb: 4 }}>
              <S.CardTitle>{content.title}</S.CardTitle>
              <S.ArrowRight css={{ pos: 'absolute', right: -18 }} />
            </Flex>
            <S.CardDescription>{content.description}</S.CardDescription>
          </div>
        </S.CardLink>
      </NavigationMenu.NavigationLink>
    </S.CardListItem>
  )
}

export type MenuProps = {
  menu: {
    id: number
    title: string
    listItem: {
      id: number
      icon: JSX.Element
      title: string
      description: string
      href: string
    }[]
  }[]
}

function Menu({ menu }: MenuProps) {
  return (
    <NavigationMenu.Content
      css={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        jc: 'space-between',
        w: 470,
        p: 24,
      }}
    >
      {menu.map(category => (
        <div key={category.id}>
          <S.CategoryTitle>{category.title}</S.CategoryTitle>
          <ul>
            {category.listItem.map(item => (
              <CardListItem key={item.id} content={item} />
            ))}
          </ul>
        </div>
      ))}
    </NavigationMenu.Content>
  )
}

function CommunityGuideMenu() {
  return (
    <NavigationMenu.Content>
      <div>
        <Box css={{ p: '24px 24px 32px' }}>
          <S.CommunitiesTitle>About Huntsville</S.CommunitiesTitle>
          <Box>
            <S.CommunitiesList>
              {aboutHuntsvilleListItems.map(item => {
                if (item.disabled) {
                  return (
                    <li key={item.id}>
                      <S.DisableHuntsvilleLink css={{ $$color: item.color }}>
                        {item.icon}
                        <Box>
                          <Flex align="center" css={{ gap: 4 }}>
                            <S.HuntsvilleTitle>{item.title}</S.HuntsvilleTitle>
                            <S.ArrowRight />
                          </Flex>
                          <S.HuntsvilleDescription>
                            {item.description}
                          </S.HuntsvilleDescription>
                        </Box>
                      </S.DisableHuntsvilleLink>
                    </li>
                  )
                }
                return (
                  <li key={item.id}>
                    <NavigationMenu.NavigationLink asChild>
                      <S.HuntsvilleLink href={item.href} css={{ $$color: item.color }}>
                        {item.icon}
                        <Box>
                          <Flex align="center" css={{ gap: 4 }}>
                            <S.HuntsvilleTitle>{item.title}</S.HuntsvilleTitle>
                            <S.ArrowRight />
                          </Flex>
                          <S.HuntsvilleDescription>
                            {item.description}
                          </S.HuntsvilleDescription>
                        </Box>
                      </S.HuntsvilleLink>
                    </NavigationMenu.NavigationLink>
                  </li>
                )
              })}
            </S.CommunitiesList>
          </Box>
        </Box>

        <Box css={{ bg: 'rgba($colors$tangerine10Rgb, 0.4)', p: '16px 24px 24px' }}>
          <S.CommunitiesTitle>Our communities</S.CommunitiesTitle>
          <S.OurCommunitiesList>
            {communitiesListItems.map(item => (
              <li key={item.name}>
                <NavigationMenu.NavigationLink asChild>
                  <S.OurCommunitiesListLink href={item.href}>
                    <Image
                      style={{
                        userSelect: 'none',
                        pointerEvents: 'none',
                        borderRadius: '4px',
                      }}
                      src={item.image}
                      alt={`${item.name} photo`}
                      fill
                    />
                    <S.OurCommunitiesImageOverlay />
                    <S.OurCommunitiesImageName>{item.name}, AL</S.OurCommunitiesImageName>
                  </S.OurCommunitiesListLink>
                </NavigationMenu.NavigationLink>
              </li>
            ))}
          </S.OurCommunitiesList>
        </Box>
      </div>
    </NavigationMenu.Content>
  )
}

export function Navigation() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.TriggerWithCaret>Buyers</NavigationMenu.TriggerWithCaret>
          <Menu menu={menus.buyers} />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.TriggerWithCaret>Sellers</NavigationMenu.TriggerWithCaret>
          <Menu menu={menus.sellers} />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.TriggerWithCaret>
            Community guides
          </NavigationMenu.TriggerWithCaret>
          <CommunityGuideMenu />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.TriggerWithCaret>Why Becca</NavigationMenu.TriggerWithCaret>
          <Menu menu={menus.whyBecca} />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.NavigationLink asChild>
            <NavigationMenu.Link href="/blog/1">Blog</NavigationMenu.Link>
          </NavigationMenu.NavigationLink>
        </NavigationMenu.Item>

        <NavigationMenu.IndicatorWithArrow />
      </NavigationMenu.List>

      <NavigationMenu.ViewportPosition>
        <NavigationMenu.Viewport />
      </NavigationMenu.ViewportPosition>
    </NavigationMenu.Root>
  )
}
