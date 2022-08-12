/* eslint-disable react/display-name */
import { Box, Flex } from '@common'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, ReactNode } from 'react'
import {
  athens,
  decatur,
  hamptomCove,
  harvest,
  huntsville,
  meridianville,
} from '../images'
import {
  BaggageSvg,
  CalculatorSvg,
  GallerySvg,
  HeartShineSvg,
  HomePriceSvg,
  HouseSvg,
  LocationSvg,
  MessageHeartSvg,
  OpenBookSvg,
  PencilSvg,
  UserMessageChatSvg,
} from '../svgs'
import * as S from './navigation-menu.styles'

type customLinkProps = {
  children: ReactNode
  href: string
}

type CardListItemProps = {
  content: {
    description: string
    title: string
    href: string
    icon: JSX.Element
  }
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

function CustomLink({ children, href, ...props }: customLinkProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <NavigationMenuPrimitive.Link active={isActive} asChild {...props}>
        {children}
      </NavigationMenuPrimitive.Link>
    </NextLink>
  )
}

const TriggerWithCaret = forwardRef(({ children, ...props }: any, forwardedRef) => (
  <S.Trigger {...props} ref={forwardedRef}>
    {children}
    <S.Caret aria-hidden />
  </S.Trigger>
))

const IndicatorWithArrow = forwardRef(({ ...props }: any, forwardedRef) => (
  <S.Indicator {...props} ref={forwardedRef}>
    <S.Arrow />
  </S.Indicator>
))

const communitiesListItems = [
  { image: harvest, name: 'Harvest', href: '/harvest' },
  { image: huntsville, name: 'Huntsville', href: '/huntsville' },
  { image: hamptomCove, name: 'Hamptom Cove', href: '/hamptom-cove' },
  { image: decatur, name: 'Decatur', href: '/decatur' },
  { image: athens, name: 'Athens', href: '/athens' },
  { image: meridianville, name: 'Meridianville', href: '/meridianville' },
]

const aboutHuntsvilleListItems = [
  {
    id: 1,
    icon: <HouseSvg className={S.SvgStyles()} />,
    title: 'Huntsville',
    href: '/huntsville',
    description: 'Discover Huntsville',
    color: '$colors$green1Rgb',
  },
  {
    id: 2,
    icon: <BaggageSvg className={S.SvgStyles()} />,
    title: 'Relocation Information',
    href: '/huntsville/relocation-information',
    description: 'All you need to know about your Relocation',
    color: '$colors$red1Rgb',
  },
  {
    id: 3,
    icon: <PencilSvg className={S.SvgStyles()} />,
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
          icon: <LocationSvg />,
          title: 'Search Map View',
          description: 'View all properties for sale',
          href: '/homes',
        },
        {
          id: 2,
          icon: <GallerySvg />,
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
          icon: <OpenBookSvg />,
          title: 'Buyers Resources',
          description: 'All you need to know to buy your property',
          href: '/buyers-resources',
        },
        {
          id: 2,
          icon: <CalculatorSvg />,
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
          icon: <HomePriceSvg />,
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
          icon: <OpenBookSvg />,
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
          icon: <MessageHeartSvg />,
          title: 'Client reviews',
          description: 'See what our clients are telling about us',
          href: '/reviews',
        },
        {
          id: 2,
          icon: <UserMessageChatSvg />,
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
          icon: <HeartShineSvg />,
          title: 'Why Becca?',
          description: 'Why we are your best choice',
          href: '/why-becca',
        },
      ],
    },
  ],
}

function Menu({ menu }: MenuProps) {
  return (
    <S.Content
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
    </S.Content>
  )
}

function CardListItem({ content }: CardListItemProps) {
  return (
    <S.CardListItem>
      <CustomLink href={content.href}>
        <S.CardLink>
          <div>{content.icon}</div>
          <div>
            <S.CardTitle>{content.title}</S.CardTitle>
            <S.CardDescription>{content.description}</S.CardDescription>
          </div>
        </S.CardLink>
      </CustomLink>
    </S.CardListItem>
  )
}

function CommunityGuideMenu() {
  return (
    <S.Content>
      <div>
        <Box css={{ p: '24px 24px 32px' }}>
          <S.CommunitiesTitle>About Huntsville</S.CommunitiesTitle>
          <Box>
            <S.CommunitiesList>
              {aboutHuntsvilleListItems.map(item => (
                <li key={item.id}>
                  <CustomLink href={item.href}>
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
                  </CustomLink>
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
                <CustomLink href={item.href}>
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
                </CustomLink>
              </li>
            ))}
          </S.OurCommunitiesList>
        </Box>
      </div>
    </S.Content>
  )
}

export function NavigationMenu() {
  return (
    <S.Root>
      <S.List>
        <NavigationMenuPrimitive.Item>
          <TriggerWithCaret>Buyers</TriggerWithCaret>
          <Menu menu={menus.buyers} />
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <TriggerWithCaret>Sellers</TriggerWithCaret>
          <Menu menu={menus.sellers} />
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <TriggerWithCaret>Community guides</TriggerWithCaret>
          <CommunityGuideMenu />
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <TriggerWithCaret>Why Becca</TriggerWithCaret>
          <Menu menu={menus.whyBecca} />
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <CustomLink href="/blog">
            <S.Link>Blog</S.Link>
          </CustomLink>
        </NavigationMenuPrimitive.Item>

        <IndicatorWithArrow />
      </S.List>

      <S.ViewportPosition>
        <S.Viewport />
      </S.ViewportPosition>
    </S.Root>
  )
}
