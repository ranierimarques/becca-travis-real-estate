import dynamic from 'next/dynamic'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { useSetAtom } from 'jotai'
import { visualizationAtom } from 'src/pages/homes'
import { Box, Flex, Image } from '@/common'
import {
  CardListItemProps,
  MenuProps,
  aboutHuntsvilleListItems,
  communitiesListItems,
  menus,
} from '../navigation/navigation'
import * as S from './navigation-mobile.styles'

const Contact = dynamic(() => import('@/shared').then(module => module.Contact), {
  ssr: false,
  loading: () => <div />,
})

type Props = {
  isOpen: boolean
  toggleMenuVisibility: () => void
}

type ToggleMenuVisibility = {
  toggleMenuVisibility: () => void
}

function CardListItem({
  content,
  toggleMenuVisibility,
}: CardListItemProps & ToggleMenuVisibility) {
  const setVisualization = useSetAtom(visualizationAtom)

  function handleClick() {
    toggleMenuVisibility()

    if (content.onClickValue) {
      setVisualization(content.onClickValue)
    }
  }

  if (content.disabled) {
    return (
      <S.CardListItem>
        <S.DisabledCardLink>
          {content.icon}
          <div>
            <Flex align="center" css={{ pos: 'relative', w: 'fit-content', mb: 8 }}>
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
      <S.CardLink href={content.href} onClick={handleClick}>
        {content.icon}
        <div>
          <Flex
            align="center"
            css={{
              pos: 'relative',
              w: 'fit-content',
              mb: 8,
              '@bp1': {
                mb: 4,
              },
            }}
          >
            <S.CardTitle>{content.title}</S.CardTitle>
            <S.ArrowRight css={{ pos: 'absolute', right: -18 }} />
          </Flex>
          <S.CardDescription>{content.description}</S.CardDescription>
        </div>
      </S.CardLink>
    </S.CardListItem>
  )
}

function Menu({ menu, toggleMenuVisibility }: MenuProps & ToggleMenuVisibility) {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gap: 20,
        p: '0 0 16px',

        '@bp2': {
          gridTemplateColumns: 'auto',
        },

        '@bp1': {
          gap: 16,
        },
      }}
    >
      {menu.map(category => (
        <div key={category.id}>
          <S.CategoryTitle>{category.title}</S.CategoryTitle>
          <ul>
            {category.listItem.map(item => (
              <CardListItem
                key={item.id}
                content={item}
                toggleMenuVisibility={toggleMenuVisibility}
              />
            ))}
          </ul>
        </div>
      ))}
    </Box>
  )
}

function CommunityGuideMenu({ toggleMenuVisibility }: ToggleMenuVisibility) {
  return (
    <div>
      <Box css={{ p: '0 0 20px', '@bp1': { p: '0 0 16px' } }}>
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
                  <S.HuntsvilleLink
                    href={item.href}
                    onClick={toggleMenuVisibility}
                    css={{ $$color: item.color }}
                  >
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
                </li>
              )
            })}
          </S.CommunitiesList>
        </Box>
      </Box>

      <Box css={{ p: '0 0 16px' }}>
        <S.CommunitiesTitle>Our communities</S.CommunitiesTitle>
        <S.OurCommunitiesList>
          {communitiesListItems.map(item => (
            <li key={item.name}>
              <S.OurCommunitiesListLink href={item.href} onClick={toggleMenuVisibility}>
                <Image
                  style={{
                    userSelect: 'none',
                    pointerEvents: 'none',
                    borderRadius: '4px',
                    objectFit: 'cover',
                  }}
                  src={item.image}
                  alt={`${item.name} photo`}
                  fill
                />
                <S.OurCommunitiesImageOverlay />
                <S.OurCommunitiesImageName>{item.name}, AL</S.OurCommunitiesImageName>
              </S.OurCommunitiesListLink>
            </li>
          ))}
        </S.OurCommunitiesList>
      </Box>
    </div>
  )
}

export function NavigationMobile({ isOpen, toggleMenuVisibility }: Props) {
  return (
    <S.Nav isVisible={isOpen}>
      <S.Root type="single" collapsible>
        <S.Item value="item-1">
          <AccordionPrimitive.Header>
            <S.Trigger>
              Buyers <S.Chevron />
            </S.Trigger>
          </AccordionPrimitive.Header>
          <S.Content>
            <Menu menu={menus.buyers} toggleMenuVisibility={toggleMenuVisibility} />
          </S.Content>
        </S.Item>

        <S.Item value="item-2">
          <AccordionPrimitive.Header>
            <S.Trigger>
              Sellers <S.Chevron />
            </S.Trigger>
          </AccordionPrimitive.Header>
          <S.Content>
            <Menu menu={menus.sellers} toggleMenuVisibility={toggleMenuVisibility} />
          </S.Content>
        </S.Item>

        <S.Item value="item-3">
          <AccordionPrimitive.Header>
            <S.Trigger>
              Community Guides <S.Chevron />
            </S.Trigger>
          </AccordionPrimitive.Header>
          <S.Content>
            <CommunityGuideMenu toggleMenuVisibility={toggleMenuVisibility} />
          </S.Content>
        </S.Item>

        <S.Item value="item-4">
          <AccordionPrimitive.Header>
            <S.Trigger>
              Why Becca? <S.Chevron />
            </S.Trigger>
          </AccordionPrimitive.Header>
          <S.Content>
            <Menu menu={menus.whyBecca} toggleMenuVisibility={toggleMenuVisibility} />
          </S.Content>
        </S.Item>
      </S.Root>

      <S.List>
        <li>
          <S.Link href="/blog/1" onClick={toggleMenuVisibility}>
            Blog
          </S.Link>
        </li>
        <li>
          <S.Link href="/contact-us" onClick={toggleMenuVisibility}>
            Contact Us
          </S.Link>
        </li>
        <li>
          <S.DisabledLink>Local Guides</S.DisabledLink>
        </li>
        <li>
          <S.DisabledLink>My Account</S.DisabledLink>
        </li>
      </S.List>

      <Contact size="3" css={{ width: '100%', mt: 32 }} />
    </S.Nav>
  )
}
