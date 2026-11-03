import Link from 'next/link'
import { styled } from 'stitches.config'

export const Header = styled('header', {
  background: 'rgba(255, 252, 250, 0.97)',
  borderBottom: '1px solid rgba(92, 48, 69, 0.11)',
  boxShadow: '0 8px 24px rgba(55, 27, 42, 0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 80,
})

export const Nav = styled('nav', {
  alignItems: 'center',
  display: 'flex',
  gap: 28,
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: 1184,
  minHeight: 66,
  padding: '0 56px',

  '@bp4': {
    padding: '0 40px',
  },

  '@bp3': {
    gap: 12,
    minHeight: 60,
    padding: '0 24px',
  },

  '@bp1': {
    padding: '0 16px',
  },
})

export const LogoLink = styled(Link, {
  display: 'grid',
  flexShrink: 0,

  '& svg': {
    height: 32,
    width: 148,
  },

  '&:focus-visible': {
    borderRadius: 2,
    outline: '2px solid rgba(157, 68, 110, 0.4)',
    outlineOffset: 5,
  },

  '@bp2': {
    '& svg': {
      height: 27,
      width: 126,
    },
  },
})

export const Credential = styled('span', {
  color: '#694c5b',
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.025em',
  lineHeight: 1.2,
  marginLeft: 35,
  whiteSpace: 'nowrap',

  '@bp2': { fontSize: 8, marginLeft: 27 },
  '@bp1': { fontSize: 7, marginLeft: 23 },
})

export const Links = styled('div', {
  alignItems: 'center',
  display: 'flex',
  gap: 24,

  '& a': {
    color: '#694c5b',
    fontSize: 13,
    fontWeight: 750,
    textDecoration: 'none',

    '&:hover, &:focus-visible': {
      color: '$magenta1',
      outline: 'none',
    },
  },

  '& a:last-child': {
    background: '$magenta1',
    borderRadius: 5,
    color: '$white',
    padding: '11px 15px',
  },

  '@bp3': {
    gap: 0,

    '& a:not(:last-child)': {
      display: 'none',
    },

    '& a:last-child': {
      whiteSpace: 'nowrap',
      padding: '10px 12px',
      fontSize: 12,
    },
  },
})
