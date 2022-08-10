/* eslint-disable react/display-name */
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, ReactNode } from 'react'
import { Box } from 'src/common/box/box'
import { Flex } from 'src/common/flex/flex'
import {
  athens,
  decatur,
  hamptonCove,
  harvest,
  huntsville,
  meridianville,
} from '../images'
import { BaggageSvg, CalculatorSvg, HouseSvg, PencilSvg } from '../svgs'
import * as S from './navigation-menu.styles'

type customLinkProps = {
  children: ReactNode
  href: string
}

const CustomLink = ({ children, href, ...props }: customLinkProps) => {
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

const StyledTriggerWithCaret = forwardRef(({ children, ...props }: any, forwardedRef) => (
  <S.Trigger {...props} ref={forwardedRef}>
    {children}
    <S.Caret aria-hidden />
  </S.Trigger>
))

const StyledIndicatorWithArrow = forwardRef(({ ...props }: any, forwardedRef) => (
  <S.Indicator {...props} ref={forwardedRef}>
    <S.Arrow />
  </S.Indicator>
))

const ContentListItem = ({ children, title, href }: any) => (
  <li>
    <CustomLink href={href}>
      <S.CardLink>
        <S.LinkTitle>{title}</S.LinkTitle>
        <S.LinkText>{children}</S.LinkText>
      </S.CardLink>
    </CustomLink>
  </li>
)

const communitiesListItems = [
  { image: harvest, name: 'Harvest', href: '/' },
  { image: huntsville, name: 'Huntsville', href: '/' },
  { image: hamptonCove, name: 'Hamptom Cove', href: '/' },
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
  },
  {
    id: 2,
    icon: <BaggageSvg className={S.SvgStyles()} />,
    title: 'Relocation Information',
    href: '/',
    description: 'Discover Huntsville!',
  },
  {
    id: 3,
    icon: <PencilSvg className={S.SvgStyles()} />,
    title: 'Huntsville school',
    href: '/',
    description: 'Discover Huntsville!',
  },
  {
    id: 4,
    icon: <CalculatorSvg className={S.SvgStyles()} />,
    title: 'Calculator',
    href: '/',
    description: 'Discover Huntsville!',
  },
]

export function NavigationMenu() {
  return (
    <S.Root>
      <S.List>
        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Buyers</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList layout="one">
              <ContentListItem href="/" title="Search Map View">
                Properties for sale
              </ContentListItem>
              <ContentListItem href="/" title="Our featured listings">
                New featured houses
              </ContentListItem>
              <ContentListItem href="/buyers-resources" title="Buyers Resources">
                All you need to buy your property
              </ContentListItem>
              <ContentListItem href="/" title="Huntsville school">
                Everything about Huntsville education
              </ContentListItem>
              <ContentListItem href="/" title="Relocation Information">
                All you need to move to a new home
              </ContentListItem>
              <ContentListItem href="/" title="Calculators">
                Estimate your costs with our calculator
              </ContentListItem>
            </S.ContentList>
          </S.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Sellers</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList layout="two">
              <ContentListItem href="/sellers-resources" title="Sellers Resources">
                Properties for sale
              </ContentListItem>
              <ContentListItem href="/" title="Selling your home with us">
                All you need to sell your property
              </ContentListItem>
            </S.ContentList>
          </S.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Community guides</StyledTriggerWithCaret>
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
                      <S.HuntsvilleLink>
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
                          <S.OurCommunitiesImageName>
                            {item.name}, AL
                          </S.OurCommunitiesImageName>
                        </S.OurCommunitiesListLink>
                      </CustomLink>
                    </li>
                  ))}
                </S.OurCommunitiesList>
              </Box>
            </div>
          </S.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Why Becca</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList layout="three">
              <ContentListItem href="/why-becca" title="Why Becca?">
                Properties for sale
              </ContentListItem>
              <ContentListItem href="/" title="Awards and certifications">
                All you need to sell your property
              </ContentListItem>
              <ContentListItem href="/" title="Client reviews">
                All you need to sell your property
              </ContentListItem>
              <ContentListItem href="/" title="Referral">
                All you need to sell your property
              </ContentListItem>
            </S.ContentList>
          </S.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <CustomLink href="/blog">
            <S.Link>Blog</S.Link>
          </CustomLink>
        </NavigationMenuPrimitive.Item>

        <StyledIndicatorWithArrow />
      </S.List>

      <S.ViewportPosition>
        <S.Viewport />
      </S.ViewportPosition>
    </S.Root>
  )
}
