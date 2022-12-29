import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const ViewAll = styled(NextLink, {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$magenta9',

  '&:hover': {
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  '&:focus': {
    textDecoration: 'none',
    outline: '2px solid rgba($colors$magenta9Rgb, 0.5)',
    outlineOffset: 2,
  },

  '@bp3': {
    display: 'none',
  },
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,

  '& > li:nth-child(n+4)': {
    display: 'none',
  },

  '@bp5': {
    gap: 24,
  },
  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
    width: '100%',

    '& > li:nth-child(4)': {
      display: 'block',
    },
  },
  '@bp3': {
    '& > li:nth-child(n+5)': {
      display: 'block',
    },
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },
})
