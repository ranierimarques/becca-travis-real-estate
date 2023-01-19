import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  paddingTop: 160,

  overflowX: 'hidden',

  '@bp4': {
    paddingTop: 120,
  },
  '@bp2': {
    paddingTop: 80,
  },
})

export const Title = styled('h2', {
  margin: '8px 0 16px',
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',

    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },

  '& br': {
    display: 'none',

    '@bp2': {
      display: 'block',
    },
  },
})

export const Paragraph = styled('p', {
  marginBottom: 48,

  maxWidth: '300px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '$gray2',

  '@bp2': {
    lineHeight: '26px',
    marginBottom: 40,
  },
  '@bp1': {
    fontSize: '14px',
    marginBottom: 24,
  },
})
