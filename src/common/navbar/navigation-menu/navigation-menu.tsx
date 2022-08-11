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
  CertificateSvg,
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
  description: string
  title: string
  href: string
  icon: JSX.Element
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
  { image: harvest, name: 'Harvest', href: '/' },
  { image: huntsville, name: 'Huntsville', href: '/' },
  { image: hamptomCove, name: 'Hamptom Cove', href: '/' },
  { image: decatur, name: 'Decatur', href: '/' },
  { image: athens, name: 'Athens', href: '/' },
  { image: meridianville, name: 'Meridianville', href: '/' },
]

const aboutHuntsvilleListItems = [
  {
    id: 1,
    icon: <HouseSvg className={S.SvgStyles()} />,
    title: 'Huntsville',
    href: '/',
    description: 'Discover Huntsville!',
    color: '$colors$green1Rgb',
  },
  {
    id: 2,
    icon: <BaggageSvg className={S.SvgStyles()} />,
    title: 'Relocation Information',
    href: '/',
    description: 'Discover Huntsville!',
    color: '$colors$red1Rgb',
  },
  {
    id: 3,
    icon: <PencilSvg className={S.SvgStyles()} />,
    title: 'Huntsville school',
    href: '/',
    description: 'Discover Huntsville!',
    color: '$colors$blue2Rgb',
  },
  {
    id: 4,
    icon: <CalculatorSvg className={S.SvgStyles()} />,
    title: 'Calculator',
    href: '/',
    description: 'Discover Huntsville!',
    color: '$colors$tangerine8Rgb',
  },
]

const menus = {
  buyers: [
    {
      id: 1,
      title: 'HOME SEARCH TOOLS',
      listItem: [
        {
          id: 1,
          icon: <LocationSvg />,
          title: 'Search Map View',
          description: 'Properties for sale',
          href: '/',
        },
        {
          id: 2,
          icon: <GallerySvg />,
          title: 'Search List View',
          description: 'New featured houses',
          href: '/',
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
          description: 'All you need to buy your property',
          href: '/buyers-resources',
        },
      ],
    },
  ],
  sellers: [
    {
      id: 1,
      title: 'SELLERS TOOLS',
      listItem: [
        {
          id: 1,
          icon: <HomePriceSvg />,
          title: 'Selling your home with us',
          description: 'All you need to sell your property',
          href: '/sellers-resources',
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
          description: 'Properties for sale',
          href: '/',
        },
      ],
    },
  ],
  whyBecca: [
    {
      id: 1,
      title: 'MOTIVATION',
      listItem: [
        {
          id: 1,
          icon: <HeartShineSvg />,
          title: 'Why Becca?',
          description: 'Properties for sale',
          href: '/why-becca',
        },
        {
          id: 2,
          icon: <CertificateSvg />,
          title: 'Awards and certifications',
          description: 'New featured houses',
          href: '/',
        },
      ],
    },
    {
      id: 2,
      title: 'CLIENTS',
      listItem: [
        {
          id: 1,
          icon: <MessageHeartSvg />,
          title: 'Client reviews',
          description: 'All you need to sell your property',
          href: '/',
        },
        {
          id: 2,
          icon: <UserMessageChatSvg />,
          title: 'Referral',
          description: 'All you need to sell your property',
          href: '/',
        },
      ],
    },
  ],
}

function Menu({ menu }: MenuProps) {
  return (
    <S.Content css={{ display: 'flex', p: 24, gap: 40 }}>
      {menu.map(category => (
        <div key={category.id}>
          <S.CategoryTitle>{category.title}</S.CategoryTitle>
          <ul>
            {category.listItem.map(item => (
              <CardListItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </ul>
        </div>
      ))}
    </S.Content>
  )
}

function CardListItem({ description, title, icon, href }: CardListItemProps) {
  return (
    <S.CardListItem>
      <CustomLink href={href}>
        <S.CardLink>
          {icon}
          <div>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardDescription>{description}</S.CardDescription>
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
          <Box
            css={{
              display: 'grid',
              width: 'fit-content',
              gridTemplateColumns: 'auto auto',
              gap: '24px 72px',
            }}
          >
            {aboutHuntsvilleListItems.map(item => (
              <CustomLink href={item.href} key={item.id}>
                <S.HuntsvilleLink css={{ $$color: item.color }}>
                  {item.icon}
                  <Box>
                    <Flex align="center" css={{ gap: 4 }}>
                      <S.HuntsvilleTitle>{item.title}</S.HuntsvilleTitle>
                      <S.ArrowRight />
                    </Flex>
                    <S.HuntsvilleDescription>{item.description}</S.HuntsvilleDescription>
                  </Box>
                </S.HuntsvilleLink>
              </CustomLink>
            ))}
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
