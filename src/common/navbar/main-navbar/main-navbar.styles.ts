import { styled } from 'stitches.config'

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
  lineHeight: '21px',
})

export const TalkToMe = styled('a', {
  padding: '10px 16px',

  background: '#8C3C62',
  borderRadius: '6px',

  color: '#FFF5F5',
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '21px',
})
