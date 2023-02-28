import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'properties',

  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  marginTop: 120,

  scrollMarginTop: 100,

  '@bp5': {
    marginTop: 80,
  },
  '@bp4': {
    marginTop: 64,
  },
  '@bp2': {
    marginTop: 80,
    px: 24,
  },
  '@bp1': {
    marginTop: 64,
    px: 16,
  },
})

export const Title = styled('h3', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',
})

export const Properties = styled('ul', {
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
  '@bp2': {
    '& > li:nth-child(n+4)': {
      display: 'none',
    },

    gridTemplateColumns: '1fr',
    gap: 24,
  },
})
