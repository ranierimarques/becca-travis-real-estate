import { styled } from 'stitches.config'

export const Title = styled('h4', {
  margin: '32px 0 8px',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',

  '@bp2': {
    margin: '24px 0 14px',

    fontSize: '20px',
    lineHeight: '24px',
  },
  '@bp1': {
    margin: '20px 0 12px',

    fontSize: '18px',
    lineHeight: '26px',
  },
})

export const Description = styled('p', {
  maxWidth: '612px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '26px',
  color: '$grayW5',

  '@bp4': {
    fontSize: '16px',
    lineHeight: '28px',
  },

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})
