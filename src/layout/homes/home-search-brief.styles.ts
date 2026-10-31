import { styled } from 'stitches.config'

export const Shell = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.82fr) minmax(420px, 1.18fr)',
  overflow: 'hidden',
  border: '1px solid rgba($colors$magenta1Rgb, 0.14)',
  borderRadius: 16,
  boxShadow: '0 18px 50px rgba($colors$magenta1Rgb, 0.08)',

  '@bp3': { gridTemplateColumns: '1fr' },
})

export const ValuePanel = styled('div', {
  padding: 36,
  color: '$white',
  background: '$magenta6',

  '& h2': {
    margin: '12px 0 0',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  '& p': {
    margin: '14px 0 0',
    color: 'rgba($colors$whiteRgb, 0.78)',
    fontSize: 15,
    lineHeight: 1.65,
  },
  '& ul': {
    display: 'grid',
    gap: 11,
    margin: '25px 0 0',
    padding: 0,
    listStyle: 'none',
  },
  '& li': {
    position: 'relative',
    paddingLeft: 24,
    fontSize: 14,
    lineHeight: 1.5,
  },
  '& li::before': {
    content: '✓',
    position: 'absolute',
    left: 0,
    color: '#FFC6A2',
    fontWeight: 700,
  },
  '& a': {
    display: 'inline-block',
    marginTop: 30,
    color: '#FFC6A2',
    fontSize: 13,
    fontWeight: 700,
    textUnderlineOffset: 4,
  },

  '@bp2': { padding: 26 },
})

export const Eyebrow = styled('p', {
  margin: '0 !important',
  color: '#FFC6A2 !important',
  fontSize: '11px !important',
  fontWeight: '700 !important',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

export const Form = styled('form', {
  padding: 36,
  background: '$white',

  '& > h2': {
    margin: 0,
    color: '$magenta6',
    fontSize: 25,
    fontWeight: 600,
  },
  '& > p': {
    margin: '7px 0 0',
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.5,
  },

  '@bp2': { padding: 26 },
})

export const ContactChoice = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
  marginTop: 20,
  padding: 4,
  background: '$offWhite1',
  borderRadius: 9,

  '& button': {
    minHeight: 42,
    color: '$magenta6',
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: 7,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 13,
    fontWeight: 650,
  },
  '& button[data-selected="true"]': {
    background: '$white',
    borderColor: 'rgba($colors$magenta1Rgb, 0.2)',
    boxShadow: '0 3px 12px rgba($colors$magenta1Rgb, 0.08)',
  },
  '& button:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.35)',
    outlineOffset: 1,
  },

  '@bp1': { gridTemplateColumns: '1fr' },
})

export const Fields = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 13,
  marginTop: 18,

  '& label': { display: 'grid', gap: 6 },
  '& label > span': { color: '$magenta6', fontSize: 12, fontWeight: 600 },
  '& input, & select, & textarea': {
    width: '100%',
    minHeight: 44,
    padding: '10px 12px',
    color: '$gray1',
    background: '$white',
    border: '1px solid rgba($colors$magenta1Rgb, 0.23)',
    borderRadius: 7,
    fontFamily: 'inherit',
    fontSize: 14,
  },
  '& textarea': { resize: 'vertical' },
  '& input:focus, & select:focus, & textarea:focus': {
    borderColor: '$magenta1',
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.2)',
  },

  '@bp2': { gridTemplateColumns: '1fr' },
})

export const WideLabel = styled('label', { gridColumn: '1 / -1' })

export const Consent = styled('p', {
  marginTop: '14px !important',
  color: '$gray4 !important',
  fontSize: '10px !important',
  lineHeight: '1.5 !important',

  '& a': { color: '$magenta1', textUnderlineOffset: 2 },
})

export const Submit = styled('button', {
  width: '100%',
  minHeight: 49,
  marginTop: 14,
  color: '$white',
  background: '$magenta1',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 700,

  '&:hover:not(:disabled)': { background: '$magenta9' },
  '&:disabled': { cursor: 'wait', opacity: 0.65 },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.45)',
    outlineOffset: 3,
  },
})

export const Error = styled('small', {
  display: 'block',
  marginTop: 8,
  color: '#9d1f45',
  fontSize: 12,
  fontWeight: 650,
  lineHeight: 1.4,

  '& a': { color: 'inherit', fontWeight: 700 },
})

export const Success = styled('div', {
  display: 'grid',
  gridTemplateColumns: '46px 1fr',
  gap: 16,
  padding: 34,
  color: '$magenta6',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.16)',
  borderRadius: 16,
  boxShadow: '0 18px 50px rgba($colors$magenta1Rgb, 0.08)',

  '& > svg': { width: 40, height: 40, color: '$magenta1' },
  '& h2': { margin: 0, fontSize: 25, fontWeight: 600 },
  '& p': { margin: '8px 0 0', color: '$gray3', lineHeight: 1.6 },
  '& a': {
    display: 'inline-block',
    marginTop: 16,
    color: '$magenta1',
    fontWeight: 700,
    textUnderlineOffset: 4,
  },
})
