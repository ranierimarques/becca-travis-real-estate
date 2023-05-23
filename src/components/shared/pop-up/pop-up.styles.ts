import { styled } from 'stitches.config'

export const Title = styled('h3', {
  marginBottom: 10,

  maxWidth: 350,

  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '30px',
  color: '$magenta1',

  '@bp4': {
    fontSize: '20px',

    maxWidth: 450,
  },
  '@bp1': {
    fontSize: '18px',
    lineHeight: '28px',

    maxWidth: 245,
  },
})

export const Description = styled('span', {
  display: 'inline-block',
  marginBottom: 16,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$gray3',

  maxWidth: 356,
})
