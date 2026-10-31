import { styled } from 'stitches.config'

export const Title = styled('h3', {
  maxWidth: '520px',

  color: '$magenta6',
  fontSize: '32px',
  fontWeight: '500',
  lineHeight: '42px',

  '@bp2': {
    textAlign: 'center',
  },
})

export const Paragraph = styled('h3', {
  maxWidth: '450px',

  color: '$gray2',
  fontSize: '16px',
  fontWeight: '400',

  lineHeight: '26px',

  '@bp5': {
    maxWidth: '366px',
  },

  '@bp2': {
    textAlign: 'center',
  },
})
