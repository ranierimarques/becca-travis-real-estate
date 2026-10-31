import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.92fr) minmax(0, 1.08fr)',
  alignItems: 'center',
  gap: 56,
  padding: '58px 0 64px',

  '@bp4': {
    gridTemplateColumns: '1fr',
    gap: 28,
    padding: '44px 0 48px',
  },

  '@bp2': {
    gap: 22,
    padding: '32px 0 40px',
  },
})

export const Copy = styled('div', {
  width: '100%',
  maxWidth: 500,
  justifySelf: 'start',
  '@bp4': { maxWidth: 660 },
})

export const Title = styled('h1', {
  margin: '12px 0 16px',
  color: '$magenta6',
  fontSize: 46,
  fontWeight: 500,
  lineHeight: 1.08,
  letterSpacing: '-0.035em',

  '@bp4': { maxWidth: 680, fontSize: 42 },
  '@bp2': { margin: '8px 0 12px', fontSize: 34, lineHeight: 1.12 },
  '@bp1': { fontSize: 30 },
})

export const Description = styled('p', {
  maxWidth: 480,
  margin: 0,
  color: '$gray2',
  fontSize: 16,
  lineHeight: 1.7,

  '@bp2': { fontSize: 14, lineHeight: 1.65 },
})

export const Actions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 12,
  marginTop: 26,

  '@bp2': {
    gap: 10,
    marginTop: 20,
    '& a': { whiteSpace: 'normal', textAlign: 'center' },
  },
})

export const Figure = styled('figure', {
  width: '100%',
  minWidth: 0,
  margin: 0,
})

export const ImageFrame = styled('div', {
  position: 'relative',
  width: '100%',
  aspectRatio: '1.48 / 1',
  maxHeight: 420,
  overflow: 'hidden',
  borderRadius: 10,
  background: '$tangerine5',
  boxShadow: '0 18px 45px rgba($colors$magenta6Rgb, 0.12)',

  '@bp4': { aspectRatio: '1.8 / 1', maxHeight: 380 },
  '@bp2': { aspectRatio: '1.42 / 1', maxHeight: 300, borderRadius: 8 },
})

export const ImageSource = styled('figcaption', {
  marginTop: 9,
  color: '$gray3',
  fontSize: 11,
  lineHeight: 1.5,
  textAlign: 'right',

  '& a': {
    color: '$magenta6',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  },
})
