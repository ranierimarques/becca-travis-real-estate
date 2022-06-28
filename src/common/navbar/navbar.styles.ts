import { styled } from 'stitches.config'

export const Header = styled('header', {})

// First Navbar

export const FirstNav = styled('nav', {
  padding: '12px 0',
  background: 'rgba(229, 172, 138, 0.4)',
})

export const NavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1072px',
  margin: '0 auto',
})

export const Language = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',


  color: '#9D446E',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: '400'
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    color: '#9D446E',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400'
  }
})

// Second Navbar

export const SecondNav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1072px',
  height: '70px',
  margin: '0 auto',
})

export const Logo = styled('a', {})

export const Links = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
})

export const Link = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  color: '#9D446E',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px'
})

export const TalkToMe = styled('a', {
  padding: '10px 16px',

  background: '#8C3C62',
  borderRadius: '6px',

  color: '#FFF5F5',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px'
})


