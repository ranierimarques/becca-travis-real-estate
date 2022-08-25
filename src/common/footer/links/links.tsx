import Image from 'next/image'
import Link from 'next/link'
import { Box } from 'src/common/box/box'
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
          <Link href={link.href} passHref>
            <S.Link>{link.text}</S.Link>
          </Link>
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
        maxWidth: 1072,
        margin: '0 auto',
      }}
    >
      {/* Resources */}
      <div>
        <S.Title>Resources</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={resourcesLinks} />
        </S.LinkList>
      </div>

      {/* Site map */}
      <Box>
        <S.Title>Site map</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={siteMapLinks} />
        </S.LinkList>
      </Box>

      {/* Contact and Get Social */}
      <div>
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
        <Box css={{ marginTop: 32 }}>
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
      </div>

      {/* Utils */}
      <div>
        <S.Title>Utils</S.Title>
        <S.Separator />
        <S.LinkList>
          <GetLinks links={utilsLinks} />
        </S.LinkList>
      </div>

      {/* Images */}
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,

          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        <Image src={Mls} alt="MLS logo" />
        <ColdwellBanker />
        <Image src={Realtor} alt="Realtor logo" />
        <Image src={EqualHousing} alt="Equal Housing logo" />
      </Box>
    </Box>
  )
}
