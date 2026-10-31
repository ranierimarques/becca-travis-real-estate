import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '72px 0 76px',
  color: '$gray1',
  background: '$white',

  '@bp3': { padding: '58px 0 62px' },
  '@bp1': { padding: '46px 0 50px' },
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1184,
  margin: '0 auto',
  padding: '0 56px',

  '@bp4': { padding: '0 40px' },
  '@bp3': { padding: '0 32px' },
  '@bp2': { padding: '0 24px' },
  '@bp1': { padding: '0 16px' },
})

export const Header = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 0.72fr)',
  alignItems: 'end',
  gap: 52,

  '@bp3': {
    gridTemplateColumns: '1fr',
    gap: 16,
  },
})

export const Eyebrow = styled('p', {
  margin: 0,
  color: '$magenta1',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
})

export const Title = styled('h2', {
  maxWidth: 640,
  margin: '10px 0 0',
  color: '$magenta6',
  fontSize: 'clamp(30px, 4vw, 44px)',
  fontWeight: 500,
  letterSpacing: '-0.025em',
  lineHeight: 1.12,
})

export const Intro = styled('p', {
  margin: 0,
  color: '$gray3',
  fontSize: 15,
  lineHeight: 1.7,
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 12,
  marginTop: 34,

  '@bp4': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  '@bp2': { gridTemplateColumns: '1fr' },
})

export const Card = styled('article', {
  minHeight: 256,
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
  background: '$offWhite1',
  border: '1px solid rgba($colors$magenta1Rgb, 0.1)',
  borderRadius: 12,
  transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba($colors$magenta1Rgb, 0.24)',
    boxShadow: '0 14px 34px rgba($colors$magenta1Rgb, 0.08)',
  },
  '& h3': {
    margin: '18px 0 0',
    color: '$magenta6',
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  '& p': {
    margin: '9px 0 0',
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.62,
  },
  '& a': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    width: 'fit-content',
    marginTop: 'auto',
    paddingTop: 20,
    color: '$magenta1',
    fontSize: 13,
    fontWeight: 700,
    textDecoration: 'none',
  },
  '& a:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: 4,
  },
  '& a:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.42)',
    outlineOffset: 4,
  },

  variants: {
    featured: {
      true: {
        color: '$white',
        background: '$magenta6',
        borderColor: '$magenta6',

        '& h3': { color: '$white' },
        '& p': { color: 'rgba($colors$whiteRgb, 0.78)' },
        '& a': { color: '#FFC6A2' },
      },
    },
  },
})

export const Number = styled('span', {
  width: 38,
  height: 38,
  display: 'grid',
  placeItems: 'center',
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.6)',
  borderRadius: '50%',
  fontSize: 11,
  fontWeight: 750,
  letterSpacing: '0.05em',
})
