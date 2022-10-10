import { Box, Flex } from '@common'
import { NavigationMenu } from '@primitives'
import Image from 'next/image'
import * as Img from '../images'
import * as Svg from '../svgs'
import * as S from './navigation.styles'

const communitiesListItems = [
  { image: Img.harvest, name: 'Harvest', href: '/harvest' },
  { image: Img.huntsville, name: 'Huntsville', href: '/huntsville' },
  { image: Img.hamptomCove, name: 'Hamptom Cove', href: '/hamptom-cove' },
  { image: Img.decatur, name: 'Decatur', href: '/decatur' },
  { image: Img.athens, name: 'Athens', href: '/athens' },
  { image: Img.meridianville, name: 'Meridianville', href: '/meridianville' },
]

const aboutHuntsvilleListItems = [
  {
    id: 1,
    icon: <Svg.House className={S.SvgStyles()} />,
    title: 'Huntsville',
    href: '/huntsville',
    description: 'Discover Huntsville',
    color: '$colors$green1Rgb',
  },
  {
    id: 2,
    icon: <Svg.Baggage className={S.SvgStyles()} />,
    title: 'Relocation Information',
    href: '/huntsville/relocation-information',
    description: 'All you need to know about your Relocation',
    color: '$colors$red1Rgb',
  },
  {
    id: 3,
    icon: <Svg.Pencil className={S.SvgStyles()} />,
    title: 'Huntsville school',
    href: '/huntsville/school',
    description: 'Discover our schools',
    color: '$colors$blue2Rgb',
  },
]

const menus = {
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
          href: '/homes',
        },
        {
          id: 2,
          icon: <Svg.Gallery />,
          title: 'Search List View',
          description: 'View all properties for sale',
          href: '/homes',
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
        },
        {
          id: 2,
          icon: <Svg.Calculator />,
          title: 'Mortgage Calculator',
          description: 'Estimate your monthly mortgage payment',
          href: '/mortgage-calculator',
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
        },
        {
          id: 2,
          icon: <Svg.UserMessageChat />,
          title: 'Referral',
          description: 'See what our partners are telling about us',
          href: '/referral',
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
        },
      ],
    },
  ],
}

type MenuProps = {
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

type CardListItemProps = {
  content: {
    description: string
    title: string
    href: string
    icon: JSX.Element
  }
}

function CardListItem({ content }: CardListItemProps) {
  return (
    <S.CardListItem>
      <NavigationMenu.CustomLink href={content.href}>
        <S.CardLink>
          {content.icon}
          <div>
            <Flex align="center" css={{ pos: 'relative', w: 'fit-content', mb: 4 }}>
              <S.CardTitle>{content.title}</S.CardTitle>
              <S.ArrowRight css={{ pos: 'absolute', right: -18 }} />
            </Flex>
            <S.CardDescription>{content.description}</S.CardDescription>
          </div>
        </S.CardLink>
      </NavigationMenu.CustomLink>
    </S.CardListItem>
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
              {aboutHuntsvilleListItems.map(item => (
                <li key={item.id}>
                  <NavigationMenu.CustomLink href={item.href}>
                    <S.HuntsvilleLink css={{ $$color: item.color }}>
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
                  </NavigationMenu.CustomLink>
                </li>
              ))}
            </S.CommunitiesList>
          </Box>
        </Box>

        <Box css={{ bg: 'rgba($colors$tangerine10Rgb, 0.4)', p: '16px 24px 24px' }}>
          <S.CommunitiesTitle>Our communities</S.CommunitiesTitle>
          <S.OurCommunitiesList>
            {communitiesListItems.map(item => (
              <li key={item.name}>
                <NavigationMenu.CustomLink href={item.href}>
                  <S.OurCommunitiesListLink>
                    <Image
                      style={{
                        userSelect: 'none',
                        pointerEvents: 'none',
                        borderRadius: '4px',
                      }}
                      src={item.image}
                      alt={`${item.name} photo`}
                      layout="fill"
                    />
                    <S.OurCommunitiesImageOverlay />
                    <S.OurCommunitiesImageName>{item.name}, AL</S.OurCommunitiesImageName>
                  </S.OurCommunitiesListLink>
                </NavigationMenu.CustomLink>
              </li>
            ))}
          </S.OurCommunitiesList>
        </Box>
      </div>
    </NavigationMenu.Content>
  )
}

export default function Navigation() {
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
          <NavigationMenu.CustomLink href="/blog">
            <NavigationMenu.Link>Blog</NavigationMenu.Link>
          </NavigationMenu.CustomLink>
        </NavigationMenu.Item>

        <NavigationMenu.IndicatorWithArrow />
      </NavigationMenu.List>

      <NavigationMenu.ViewportPosition>
        <NavigationMenu.Viewport />
      </NavigationMenu.ViewportPosition>
    </NavigationMenu.Root>
  )
}
