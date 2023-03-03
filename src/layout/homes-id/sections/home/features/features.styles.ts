import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'features',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '96px 60px',

  marginBottom: 120,

  scrollMarginTop: 100,

  maxWidth: '612px',

  '@bp5': {
    gap: '48px 24px',
    marginBottom: 80,
  },
  '@bp4': {
    gap: '48px 32px',
    marginBottom: 64,
    scrollMarginTop: 170,

    maxWidth: 'none',
  },
  '@bp3': {
    gridTemplateColumns: '1fr',
    gap: '48px',
  },
  '@bp2': {
    px: 24,
    gap: '40px',
    marginBottom: 80,
  },
  '@bp1': {
    px: 16,
    marginBottom: 64,
  },
})

export const Title = styled('h3', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',

  '@bp4': {
    fontSize: '20px',
    lineHeight: '24px',
  },
  '@bp1': {
    fontSize: '18px',
    lineHeight: '26px',
  },
})

export const Feature = styled('span', {
  maxWidth: '90px',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$grayW4',

  '@bp4': {
    fontSize: '16px',
  },
  '@bp2': {
    fontSize: '14px',
  },
})

export const Value = styled('span', {
  maxWidth: '82px',
  textAlign: 'end',

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$grayW4',

  '@bp4': {
    fontSize: '14px',
  },
  '@bp2': {
    fontSize: '12px',
  },
})
