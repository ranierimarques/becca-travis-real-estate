import { Box } from '@/common'
import Image from 'next/image'
import { EqualHousing, Mls, Realtor } from '../images'
import { ColdwellBanker, Facebook, Instagram, Linkedin, Mail, Phone } from '../svgs'
import * as S from './links.styles'

const siteMapLinks = [
  { href: '/homes', text: 'Purchase a home' },
  { href: '/sell-with-us', text: 'Sell your home' },
  { href: '/huntsville', text: 'About Huntsville' },
  { href: '/mortgage-calculator', text: 'Mortgage calculator' },
  { href: '/why-becca', text: 'Why Becca?' },
  { href: '/reviews', text: 'Client reviews' },
]

const resourcesLinks = [
  { href: '/buyers-resources', text: 'Buyers resources' },
  { href: '/sellers-resources', text: 'Sellers resources' },
  { href: '/blog', text: 'Blog' },
]

const utilsLinks = [
  { href: '/', text: 'Privacy Notice' },
  { href: '/', text: 'DMCA' },
  { href: '/', text: 'Accessibility statement' },
  { href: '/', text: 'Terms of service' },
  { href: '/', text: 'Fraud alert' },
]

type linksProps = {
  links: {
    href: string
    text: string
  }[]
}

function GetLinks({ links }: linksProps) {
  return (
    <>
      {links.map(link => (
        <li key={link.text}>
          <S.Link href={link.href}>{link.text}</S.Link>
        </li>
      ))}
    </>
  )
}

export function Links() {
  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-between',

        padding: '64px 0',

        '@bp4': {
          display: 'block',
          columnCount: '3',

          padding: '56px 0 64px',
        },
        '@bp3': {
          padding: '32px 0',
        },
        '@bp2': {
          columnCount: '1',
        },
      }}
    >
      {/* Resources */}
      <Box css={{ breakInside: 'avoid' }}>
        <S.Title>Resources</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={resourcesLinks} />
        </S.LinkList>
      </Box>

      {/* Site map */}
      <Box
        css={{
          breakInside: 'avoid',
          '@bp4': {
            marginTop: 32,
          },
          '@bp1': {
            marginTop: 24,
          },
        }}
      >
        <S.Title>Site map</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={siteMapLinks} />
        </S.LinkList>
      </Box>

      {/* Contact and Get Social */}
      <Box
        css={{
          breakInside: 'avoid',
          '@bp2': {
            marginTop: 32,
          },
          '@bp1': {
            marginTop: 24,
          },
        }}
      >
        {/* Contact */}
        <div>
          <S.Title>Contact</S.Title>
          <S.Separator />
          <S.LinkList>
            <li>
              <S.ContactLink
                href="mailto:becca@beccatravis.com"
                target="_self"
                rel="noreferrer noopener"
              >
                <Mail /> becca@beccatravis.com
              </S.ContactLink>
            </li>
            <li>
              <S.ContactLink
                href="tel:+1-256-318-9066"
                target="_self"
                rel="noreferrer noopener"
              >
                <Phone /> +1 (256) 318-9066
              </S.ContactLink>
            </li>
          </S.LinkList>
        </div>

        {/* Get social */}
        <Box
          css={{
            marginTop: 32,
            '@bp1': {
              marginTop: 24,
            },
          }}
        >
          <S.Title>Get social</S.Title>
          <S.Separator />
          <S.LinkList css={{ flexDirection: 'row', gap: 8 }}>
            <li>
              <S.SocialLink
                href="https://www.facebook.com/beccatravisrealestate/"
                target="_blank"
                rel="noreferrer noopener"
                title="Facebook"
                aria-label="Follow us on Facebook"
              >
                <Facebook />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.linkedin.com/in/beccatravis/"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                href="https://www.instagram.com/beccatravisrealestate/"
                target="_blank"
                rel="noreferrer noopener"
                title="Instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram />
              </S.SocialLink>
            </li>
          </S.LinkList>
        </Box>
      </Box>

      {/* Utils */}
      <Box
        css={{
          breakInside: 'avoid',
          '@bp4': {
            paddingTop: 32,
          },
          '@bp1': {
            paddingTop: 24,
          },
        }}
      >
        <S.Title>Utils</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={utilsLinks} />
        </S.LinkList>
      </Box>

      {/* Images */}
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,

          userSelect: 'none',
          pointerEvents: 'none',
          breakInside: 'avoid',

          '@bp2': {
            marginTop: 32,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          '@bp1': {
            marginTop: 24,
          },
        }}
      >
        <Image src={Mls} alt="MLS logo" quality={100} />
        <ColdwellBanker />
        <Image src={Realtor} alt="Realtor logo" quality={100} />
        <Image src={EqualHousing} alt="Equal Housing logo" quality={100} />
      </Box>
    </Box>
  )
}
