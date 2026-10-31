import { styled } from 'stitches.config'

export const Container = styled('section', {
  display: 'grid',
  gap: 28,
  padding: '40px 0 24px',
})

export const Intro = styled('div', {
  maxWidth: 760,
  margin: '0 auto',
  textAlign: 'center',
})

export const Eyebrow = styled('p', {
  color: '$magenta6',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.08em',
  margin: 0,
  textTransform: 'uppercase',
})

export const Title = styled('h2', {
  color: '$gray1',
  fontSize: 32,
  fontWeight: 500,
  lineHeight: 1.25,
  margin: '10px 0',
  '@bp2': { fontSize: 25 },
})

export const Description = styled('p', {
  color: '$gray2',
  fontSize: 16,
  lineHeight: 1.6,
  margin: 0,
})

export const Panel = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(260px, 0.8fr)',
  gap: 28,
  padding: 28,
  border: '1px solid $colors$grayW8',
  borderRadius: 12,
  background: '$white',
  boxShadow: '0 8px 28px rgba(51, 48, 62, 0.06)',
  '@bp3': { gridTemplateColumns: '1fr' },
  '@bp2': { padding: 20, gap: 22 },
})

export const Fields = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  alignContent: 'start',
  gap: 18,
  '@bp1': { gridTemplateColumns: '1fr' },
})

export const Field = styled('div', { display: 'grid', gap: 7, minWidth: 0 })

export const Label = styled('label', {
  color: '$gray1',
  fontSize: 14,
  fontWeight: 600,
})

export const Input = styled('input', {
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  border: '1px solid $colors$grayW8',
  borderRadius: 6,
  color: '$gray1',
  fontFamily: 'inherit',
  fontSize: 16,
  padding: '12px 13px',
  background: '$white',
  '&:focus-visible': {
    outline: '2px solid $colors$magenta6',
    outlineOffset: 2,
  },
  '&::placeholder': { color: '$gray2', opacity: 0.8 },
})

export const Results = styled('div', {
  alignSelf: 'stretch',
  padding: 22,
  borderRadius: 8,
  background: '$tangerine5',
  '@bp2': { padding: 18 },
})

export const ResultHeading = styled('h3', {
  color: '$gray1',
  fontSize: 15,
  fontWeight: 600,
  margin: 0,
})

export const Total = styled('p', {
  color: '$magenta6',
  fontSize: 36,
  fontWeight: 600,
  lineHeight: 1.2,
  margin: '12px 0 20px',
  '@bp2': { fontSize: 31 },
})

export const Breakdown = styled('div', { display: 'grid', gap: 12 })

export const Row = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 12,
  color: '$gray1',
  fontSize: 14,
  lineHeight: 1.4,
  '& span:last-child': { fontWeight: 600, whiteSpace: 'nowrap' },
})

export const Note = styled('p', {
  maxWidth: 920,
  margin: '0 auto',
  color: '$gray2',
  fontSize: 13,
  lineHeight: 1.55,
  textAlign: 'center',
})
