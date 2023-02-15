import { Box, Flex } from '@/common'
import { DropdownMenu, Toast } from '@/primitives'
import useRelativeDate from '@/resources/hooks/useRelativeDate'
import { FormattedHouse } from '@/services/house-listings/types'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './header.styles'

interface Listing {
  listing: FormattedHouse['listing']
}

export function Header({ listing }: Listing) {
  const relativeDate = useRelativeDate(listing.lastUpdated)

  const titleDetails = [
    {
      title: 'Status:',
      status: listing.status,
    },
    {
      title: 'On site:',
      status: '10 days',
    },
    {
      title: 'Updated:',
      status: relativeDate,
      alt: listing.lastUpdatedTitle,
    },
  ]
  const router = useRouter()
  const [openToast, setOpenToast] = useState(false)

  async function copyToClipboard() {
    navigator.clipboard.writeText(`https://beccatravis.com${router.asPath}`)
    setOpenToast(true)
  }

  return (
    <S.Header>
      <Flex align="center" justify="between" css={{ mb: 16 }}>
        <S.HouseName>{listing.address}</S.HouseName>
        <Box css={{ position: 'relative' }}>
          <Toast openToast={openToast} onOpenToast={setOpenToast} />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger variant={2}>
              <Svg.Share />
              Share
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="center" sideOffset={8}>
              <DropdownMenu.Group>
                <DropdownMenu.Item asChild>
                  <a
                    href={`https://www.facebook.com/dialog/share?app_id=657185652633943&display=popup&href=https%3A%2F%2Fdev.beccatravis.com%2Fhomes%2F1812215`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Svg.Facebook />
                    <S.ShareOption>Share on Facebook</S.ShareOption>
                  </a>
                </DropdownMenu.Item>
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
              </DropdownMenu.Group>
              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>

      <Flex align="center" css={{ gap: 16 }}>
        <S.HousePrice>{listing.price}</S.HousePrice>
        <Box css={{ h: 16, w: 2, background: 'rgba($colors$gray5Rgb, .5)' }} />
        {titleDetails.map((titleDetail, index) => {
          return (
            <Flex align="center" css={{ gap: 16 }} key={titleDetail.title}>
              <S.HouseStatus>
                {titleDetail.title}
                <S.Status title={titleDetail.alt}> {titleDetail.status}</S.Status>
              </S.HouseStatus>
              {index + 1 < titleDetails.length && <S.Dot />}
            </Flex>
          )
        })}
      </Flex>
    </S.Header>
  )
}
