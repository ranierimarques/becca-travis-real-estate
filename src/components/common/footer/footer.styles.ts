import { styled } from 'stitches.config'

export const Footer = styled('footer', {
  boxShadow: '0 0 0 1px rgba($colors$grayW9Rgb, 0.75)',
  background: '$grayW10',
})

export const Wrapper = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 64px',

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
