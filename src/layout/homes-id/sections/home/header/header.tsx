import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box, Flex } from '@/common'
import { DropdownMenu, Toast } from '@/primitives'
import useRelativeDate from '@/resources/hooks/useRelativeDate'
import { FormattedHouse } from '@/services/house-listings/types'
import * as Svg from '../svgs'
import * as S from './header.styles'

interface Listing {
  listing: FormattedHouse['listing']
}

export function Header({ listing }: Listing) {
  const router = useRouter()
  const relativeDate = useRelativeDate(listing.lastUpdated)
  const [openToast, setOpenToast] = useState(false)

  async function copyToClipboard() {
    await navigator.clipboard.writeText(`https://beccatravis.com${router.asPath}`)
    setOpenToast(true)
  }

  async function handleShare() {
    await navigator.share({
      url: `https://beccatravis.com${router.asPath}`,
    })
  }

  return (
    <S.Header>
      <Flex
        align={{
          '@initial': 'center',
          '@bp2': 'start',
        }}
        justify="between"
        css={{ mb: 16, '@bp4': { mb: 12 } }}
      >
        <S.HouseName>{listing.address}</S.HouseName>
        <Box css={{ position: 'relative' }}>
          <Toast openToast={openToast} onOpenToast={setOpenToast} />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <S.ShareButton>
                <S.Dots />
                <Box
                  as="span"
                  css={{
                    display: 'flex',
                    alignItems: 'center',

                    gap: 8,

                    '@bp4': {
                      display: 'none',
                    },
                  }}
                >
                  <Svg.Share />
                  Share
                </Box>
              </S.ShareButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="center" collisionPadding={20} sideOffset={8}>
              <DropdownMenu.Group>
                <DropdownMenu.Item asChild>
                  <a
                    href={`mailto:?body=https://beccatravis.com${router.asPath} `}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Svg.Email />
                    <S.ShareOption>Share via Email</S.ShareOption>
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={copyToClipboard}>
                  <Svg.AttachmentLink />
                  <S.ShareOption>Copy property link</S.ShareOption>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleShare}>
                  <Svg.ShareOptions />
                  <S.ShareOption>More share options</S.ShareOption>
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>

      <Flex
        align="center"
        css={{
          gap: 16,

          '@bp3': {
            '> :nth-child(3)': {
              display: 'none',
            },
          },
        }}
      >
        <S.HousePrice>{listing.price}</S.HousePrice>
        <Box
          css={{
            h: 16,
            w: 2,
            background: 'rgba($colors$gray5Rgb, .5)',
            '@bp2': { display: 'none' },
          }}
        />
        <S.StatusWrapper>
          <S.HouseStatus>
            Status: <S.Status> {listing.status}</S.Status>
          </S.HouseStatus>
          <S.Dot />
        </S.StatusWrapper>
        {/* <S.StatusWrapper>
          <S.HouseStatus>
            On site: <S.Status> 10 days</S.Status>
          </S.HouseStatus>
          <S.Dot />
        </S.StatusWrapper> */}
        <S.StatusWrapper>
          <S.HouseStatus>
            Updated:{' '}
            <S.Status
              as="time"
              title={listing.lastUpdatedTitle}
              dateTime={listing.lastUpdated}
            >
              {relativeDate}
            </S.Status>
          </S.HouseStatus>
        </S.StatusWrapper>
      </Flex>
    </S.Header>
  )
}
