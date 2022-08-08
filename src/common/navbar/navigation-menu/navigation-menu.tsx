/* eslint-disable react/display-name */
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react'
import {
  athens,
  decatur,
  hamptonCove,
  harvest,
  huntsville,
  meridianville,
} from '../images'
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

export function NavigationMenu() {
  const navItemPreviousIdRef = useRef('')
  const [navItemId, setNavItemId] = useState('')
  const [navItemDimensions, setNavItemDimensions] = useState<DOMRect>()

  const navItemHalfWidth = navItemDimensions ? navItemDimensions?.width / 2 : 0

  function handleValueChange(value: string) {
    if (navItemId !== '' || !value) navItemPreviousIdRef.current = value

    setNavItemId(value)
  }

  useEffect(() => {
    const element = document.getElementById(`radix-:Rd4m:-trigger-${navItemId}`)
    const elementDimensions = element?.getBoundingClientRect()

    if (elementDimensions) {
      setNavItemDimensions(elementDimensions)
    }
  }, [navItemId])

  return (
    <S.Root onValueChange={handleValueChange}>
      <S.List>
        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Buyers</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList>
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
            <S.ContentList>
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
            <S.Communities>
              <div>
                <S.CommunitiesTitle>About Huntsville</S.CommunitiesTitle>
                <CustomLink href="/">
                  <S.HuntsvilleLink>
                    <S.HuntsvilleHeader>
                      <S.HomeIcon />
                      <S.HuntsvilleTitle>Huntsville</S.HuntsvilleTitle>
                    </S.HuntsvilleHeader>
                    <S.HuntsvilleDescription>
                      Huntsville, the city where waves of history wash over you as soon as
                      it rains...
                    </S.HuntsvilleDescription>
                  </S.HuntsvilleLink>
                </CustomLink>
              </div>

              <S.Separator />

              <div>
                <S.CommunitiesTitle>Our communities</S.CommunitiesTitle>
                <S.OurCommunitiesList>
                  {communitiesListItems.map(item => (
                    <li key={item.name}>
                      <CustomLink href={item.href}>
                        <S.OurCommunitiesListLink>
                          <S.OurCommunitiesImageOverlay />
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
                          <S.OurCommunitiesImageName>
                            {item.name}, AL
                          </S.OurCommunitiesImageName>
                        </S.OurCommunitiesListLink>
                      </CustomLink>
                    </li>
                  ))}
                </S.OurCommunitiesList>
              </div>
            </S.Communities>
          </S.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Why Becca</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList>
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

      <S.ViewportPosition
        transition={Boolean(navItemPreviousIdRef.current)}
        css={{
          left: navItemDimensions?.left,
          transform: `translateX(calc(-50% + ${navItemHalfWidth}px))`,
        }}
      >
        <S.Viewport />
      </S.ViewportPosition>
    </S.Root>
  )
}
