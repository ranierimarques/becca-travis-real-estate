import { styled } from 'stitches.config'

export const Header = styled('header', {
  background: '$white',
  boxShadow: 'inset 0 -1px 0 0 rgba($colors$magenta1Rgb, 0.15)',

  '@bp4': {
    position: 'sticky',
    top: 0,

    zIndex: 100,
  },
})
