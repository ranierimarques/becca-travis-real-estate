/* eslint-disable react/display-name */
import { Button } from "@common"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { forwardRef, ReactNode, Ref } from "react"
import {
  athens,
  decatur,
  hamptonCove,
  harvest,
  huntsville,
  meridianville,
} from "./images"
import * as S from "./navigation-menu.styles"

type wrapperLinkProps = {
  onClick?: any
  href?: string
  children: ReactNode
}

type customLinkProps = {
  children: ReactNode
  href: string
}

const WrappedLink = forwardRef(
  (
    { onClick, href, children }: wrapperLinkProps,
    forwardedRef: Ref<HTMLAnchorElement>
  ) => {
    const { pathname } = useRouter()
    const isActive = Boolean(pathname === href)

    return (
      <NavigationMenuPrimitive.Link
        active={isActive}
        href={href}
        onClick={onClick}
        ref={forwardedRef}
        asChild
      >
        {children}
      </NavigationMenuPrimitive.Link>
    )
  }
)

const CustomLink = ({ children, href }: customLinkProps) => {
  return (
    <Link href={href} passHref>
      <WrappedLink>{children}</WrappedLink>
    </Link>
  )
}

const StyledTriggerWithCaret = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <S.Trigger {...props} ref={forwardedRef}>
      {children}
      <S.Caret aria-hidden />
    </S.Trigger>
  )
)

const StyledIndicatorWithArrow = forwardRef(
  ({ ...props }: any, forwardedRef) => (
    <S.Indicator {...props} ref={forwardedRef}>
      <S.Arrow />
    </S.Indicator>
  )
)

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
  { image: harvest, name: "Harvest", href: "/" },
  { image: huntsville, name: "Huntsville", href: "/" },
  { image: hamptonCove, name: "Hamptom Cove", href: "/" },
  { image: decatur, name: "Decatur", href: "/" },
  { image: athens, name: "Athens", href: "/" },
  { image: meridianville, name: "Meridianville", href: "/" },
]

export function NavigationMenu() {
  return (
    <S.Root>
      <S.List>
        <NavigationMenuPrimitive.Item>
          <StyledTriggerWithCaret>Buyers</StyledTriggerWithCaret>
          <S.Content>
            <S.ContentList layout="one">
              <ContentListItem href="/" title="Search Houses">
                Properties for sale
              </ContentListItem>
              <ContentListItem href="/" title="Our featured listings">
                New featured houses
              </ContentListItem>
              <ContentListItem href="/" title="Buyers Resources">
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
              <ContentListItem href="/" title="Sellers Resources">
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
                      Huntsville, the city where waves of history wash over you
                      as soon as it rains...
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
                              userSelect: "none",
                              pointerEvents: "none",
                              borderRadius: "4px",
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
          <CustomLink href="/">
            <S.Link>Why Becca?</S.Link>
          </CustomLink>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <CustomLink href="/blog">
            <S.Link>Blog</S.Link>
          </CustomLink>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <CustomLink href="/">
            <Button as="a" css={{ marginLeft: 16 }}>
              Talk to me
            </Button>
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
