import { styled } from 'stitches.config'

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '$magenta6',

  textAlign: 'center',

  marginBottom: 28,

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp2': {
    fontSize: '22px',
    lineHeight: '32px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})
