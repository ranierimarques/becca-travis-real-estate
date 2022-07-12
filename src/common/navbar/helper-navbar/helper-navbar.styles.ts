import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1072,
  margin: '0 auto',
})

export const LanguageButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,
})

export const Link = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,
})
