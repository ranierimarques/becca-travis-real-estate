import Image from 'next/image'
import Link from 'next/link'
import { Box } from 'src/common/box/box'
import { EqualHousing, Mls, Realtor } from '../images'
import { ColdwellBanker, Facebook, Instagram, Linkedin, Logo, Mail, Phone } from '../svgs'
import * as S from './information.styles'

const siteMapLinks = [
  { href: '/', text: 'Search for homes' },
  { href: '/', text: 'Buying' },
  { href: '/', text: 'Selling' },
  { href: '/', text: 'About huntsville' },
  { href: '/', text: 'Communities' },
  { href: '/', text: 'Blog' },
]

const resourcesLinks = [
  { href: '/', text: 'Purchase a home' },
  { href: '/', text: 'Sell your home' },
  { href: '/', text: 'Blog' },
]

type linksProps = {
  links: {
    href: string
    text: string
  }[]
}

function Links({ links }: linksProps) {
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

export function Information() {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'auto auto auto',
        rowGap: 40,

        padding: '64px 0',
        maxWidth: 1072,
        margin: '0 auto',
      }}
    >
      {/* Slogan and Logo Link */}
      <Box css={{ gridRow: 'span 2' }}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <S.Slogan>
          Love where you home. <br />
          Home where you love
        </S.Slogan>
      </Box>

      {/* Site map */}
      <Box css={{ gridRow: 'span 2' }}>
        <S.Title>Site map</S.Title>
        <S.Separator />
        <S.LinkList>
          <Links links={siteMapLinks} />
        </S.LinkList>
      </Box>

      {/* Contact */}
      <div>
        <S.Title>Contact</S.Title>
        <S.Separator />
        <S.LinkList>
          <li>
            <S.SocialLink
              href="mailto:octane@contato.com"
              target="_self"
              rel="noreferrer noopener"
            >
              <Mail /> Becca@BeccaTravis.com
            </S.SocialLink>
          </li>
          <li>
            <S.SocialLink
              href="tel:+55-85-3482-6566"
              target="_self"
              rel="noreferrer noopener"
            >
              <Phone /> Becca@BeccaTravis.com
            </S.SocialLink>
          </li>
        </S.LinkList>
      </div>

      {/* Get social */}
      <Box css={{ alignSelf: 'end' }}>
        <S.Title>Get social</S.Title>
        <S.Separator />
        <S.LinkList css={{ flexDirection: 'row', gap: 8 }}>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <Instagram />
            </a>
          </li>
        </S.LinkList>
      </Box>

      {/* Images */}
      <Box css={{ display: 'flex', gap: 24, alignItems: 'flex-end', alignSelf: 'end' }}>
        <ColdwellBanker />
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 90,
            height: 'fit-content',
            gap: 8,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <Image src={Realtor} alt="Realtor logo" />
          <Image src={EqualHousing} alt="Equal Housing logo" />
          <Image src={Mls} alt="MLS logo" />
        </Box>
      </Box>

      {/* Resources */}
      <div>
        <S.Title>Resources</S.Title>
        <S.Separator />
        <S.LinkList>
          <Links links={resourcesLinks} />
        </S.LinkList>
      </div>

      {/* About Us */}
      <div>
        <S.Title>About us</S.Title>
        <S.Separator />
        <S.AboutUsDescription>
          As a real estate professional, I am available to address all of your real estate
          needs. Please give me a call or email when you are ready to visit some homes, or
          to schedule a free home buying or selling consultation. I’m looking forward to
          work with you!
        </S.AboutUsDescription>
      </div>
    </Box>
  )
}
