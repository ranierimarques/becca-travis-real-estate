import { Box, Flex } from '@common'
import { DropdownMenu, Toast } from '@primitives'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './header.styles'

interface Listing {
  listing: {
    price: string
    address: string
    status: string
    lastUpdated: string
    media: string[]
    bedroomsTotal: number
    bathroomsTotal: number
    lotSizeSquareFeet: string
    subdivisionName: string
    propertySubType: string
    countyOrParish: string
    cityRegion: string | null

    foundationDetails: string
    levels: string
    buildingTotalArea: string
    newConstruction: string
    propertyCondition: string
    propertyType: string
    sewer: string
    waterSource: string
    elementarySchool: string
    middleSchool: string
    highSchool: string
  }
}

export function Header({ listing }: Listing) {
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
      status: listing.lastUpdated,
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
                <S.Status> {titleDetail.status}</S.Status>
              </S.HouseStatus>
              {index + 1 < titleDetails.length && <S.Dot />}
            </Flex>
          )
        })}
      </Flex>
    </S.Header>
  )
}