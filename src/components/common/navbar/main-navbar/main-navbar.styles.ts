import NextLink from 'next/link'
import { styled } from 'stitches.config'
import * as Svg from '../svgs'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 64px',

  height: 70,

  '@bp4': {
    padding: '0 40px',
  },
  '@bp3': {
    padding: '0 32px',
  },
  '@bp2': {
    padding: '0 24px',
  },
  '@bp1': {
    padding: '0 16px',
  },
})

export const Link = styled(NextLink, {
  '&:focus-visible': {
    borderRadius: 1,
    outline: '2px auto rgba($colors$magenta1Rgb, 0.2)',
    outlineOffset: '6px',
  },
})

export const LargeLanguage = styled(Svg.LargeLanguage, {
  '@bp1': {
    size: '24px',
  },
})

export const MobileBars = styled(Svg.MobileBars, {
  '@bp1': {
    size: '40px',
  },

  variants: {
    isVisible: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})

export const MobileClose = styled(Svg.MobileClose, {
  '@bp1': {
    size: '40px',
  },

  variants: {
    isVisible: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})
