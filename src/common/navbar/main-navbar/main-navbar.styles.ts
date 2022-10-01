import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1072,
  height: 70,
  margin: '0 auto',
})

export const Link = styled('a', {
  flexShrink: '0',

  '&:focus-visible': {
    borderRadius: 1,
    outline: '2px auto rgba($colors$magenta1Rgb, 0.2)',
    outlineOffset: '6px',
  },
})
