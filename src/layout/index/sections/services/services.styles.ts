import { styled } from 'stitches.config'

export const Title = styled('h2', {
  marginTop: '8px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp3': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Description = styled('p', {
  marginTop: '16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp3': {
    fontSize: '14px',
    lineHeight: '26px',
    '& > br': {
      display: 'none',
    },
    mx: '32px',
  },
  '@bp2': {
    mx: '8px',
  },
  '@bp1': {
    mx: '0',
  },
})

export const Cards = styled('div', {
  marginTop: '48px',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '32px',

  '@bp5': {
    marginTop: '40px',
    gap: '24px',
  },
  '@bp3': {
    gap: '32px',
  },
  '@bp2': {
    marginTop: '32px',
  },
})
