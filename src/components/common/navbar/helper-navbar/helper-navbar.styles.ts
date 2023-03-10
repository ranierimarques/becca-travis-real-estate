import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  maxWidth: '1184px',
  margin: '0 auto',
  padding: '0 56px',
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const Link = styled(NextLink, {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,

  padding: '6px 8px',

  '&:focus': { outline: '2px solid rgba($colors$tangerine8Rgb, 0.5)', outlineOffset: 0 },
  '&:hover': { background: 'rgba($colors$tangerine9Rgb, 0.15)' },
})

export const DisabledLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,

  padding: '6px 8px',

  opacity: 0.33,
  userSelect: 'none',
})
