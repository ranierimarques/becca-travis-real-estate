import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1072,
  margin: '0 auto',
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

const linkStyles = {
  display: 'flex',
  alignItems: 'center',

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,

  padding: '6px 8px',

  '&:focus': { outline: '2px solid rgba($colors$tangerine8Rgb, 0.5)', outlineOffset: 0 },
  '&:hover': { background: 'rgba($colors$tangerine9Rgb, 0.15)' },
}

export const Link = styled('a', linkStyles, {
  gap: 8,
})

export const ButtonTrigger = styled('button', linkStyles, {
  gap: 6,

  cursor: 'pointer',
})
