import { styled } from 'stitches.config'

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',

  '@bp4': {
    marginBottom: 24,

    fontSize: '20px',
    lineHeight: '24px',
  },

  '@bp2': {
    marginBottom: 22,
  },
  '@bp1': {
    marginBottom: 20,

    fontSize: '18px',
    lineHeight: '26px',
  },
})

export const Container = styled('div', {
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',
  padding: '32px',
  position: 'relative',

  '@bp4': {
    boxShadow: 'none',
    padding: 0,
  },
})
