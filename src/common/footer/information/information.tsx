import Image from 'next/image'
import Link from 'next/link'
import { EqualHousing, Mls, Realtor } from '../images'
import { ColdwellBanker, Facebook, Instagram, Linkedin, Logo, Mail, Phone } from '../svgs'
import * as S from './information.styles'

const siteMapLinks = [
  { href: '/', text: 'Search for homes' },
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
          <Link href={link.href}>
            <a>{link.text}</a>
          </Link>
        </li>
      ))}
    </>
  )
}

export function Information() {
  return (
    <div>
      <div>
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <span>
            Love where you home. <br />
            Home where you love
          </span>
        </div>

        <div>
          <ColdwellBanker />
          <div>
            <Image src={Realtor} alt="Realtor logo" />
            <Image src={EqualHousing} alt="Equal Housing logo" />
            <Image src={Mls} alt="MLS logo" />
          </div>
        </div>
      </div>

      <div>
        <span>Site map</span>
        <ul>
          {siteMapLinks.map(link => (
            <li key={link.text}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Site map</span>
        <ul>
          <Links links={siteMapLinks} />
        </ul>
      </div>

      <div>
        <span>Resources</span>
        <ul>
          <Links links={resourcesLinks} />
        </ul>
      </div>

      <div>
        <span>Contact</span>
        <ul>
          <li>
            <a href="mailto:octane@contato.com" target="_self" rel="noreferrer noopener">
              <Mail /> Becca@BeccaTravis.com
            </a>
          </li>
          <li>
            <a href="tel:+55-85-3482-6566" target="_self" rel="noreferrer noopener">
              <Phone /> Becca@BeccaTravis.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <span>Get social</span>
        <ul>
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
        </ul>
      </div>

      <div>
        <span>About us</span>
        <p>
          As a real estate professional, I am available to address all of your real estate
          needs. Please give me a call or email when you are ready to visit some homes, or
          to schedule a free home buying or selling consultation. I’m looking forward to
          work with you!
        </p>
      </div>
    </div>
  )
}
