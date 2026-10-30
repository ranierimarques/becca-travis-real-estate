import Link from 'next/link'
import { styled } from 'stitches.config'

export const Page = styled('main', { color: '$gray2' })
export const Hero = styled('section', {
  background: 'rgba($colors$tangerine5Rgb, 0.2)',
  padding: '80px 24px 64px',
  '@bp2': { padding: '52px 20px 44px' },
})
export const Wrap = styled('div', { maxWidth: 1120, margin: '0 auto', width: '100%' })
export const Eyebrow = styled('p', {
  color: '$magenta6',
  fontSize: 13,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontWeight: 600,
  marginBottom: 16,
})
export const Title = styled('h1', {
  color: '$magenta6',
  fontSize: 48,
  fontWeight: 500,
  lineHeight: 1.2,
  maxWidth: 800,
  '@bp2': { fontSize: 34 },
})
export const Intro = styled('p', {
  maxWidth: 740,
  fontSize: 18,
  lineHeight: '30px',
  marginTop: 22,
})
export const Content = styled('section', {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '64px 24px 88px',
  '@bp2': { padding: '40px 20px 64px' },
})
export const Grid = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '0 36px',
  listStyle: 'none',
  padding: 0,
  '@bp3': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  '@bp1': { gridTemplateColumns: '1fr' },
})
export const AreaLink = styled(Link, {
  display: 'block',
  padding: '22px 0',
  borderBottom: '1px solid rgba(90, 39, 60, 0.22)',
  color: '$magenta6',
  textDecoration: 'none',
  fontSize: 19,
  fontWeight: 500,
  '&:hover': { textDecoration: 'underline' },
  '&:focus-visible': { outline: '2px solid $magenta6', outlineOffset: 4 },
})
export const Body = styled('div', {
  maxWidth: 790,
  fontSize: 17,
  lineHeight: '30px',
  '& h2': {
    color: '$magenta6',
    fontWeight: 500,
    fontSize: 26,
    margin: '38px 0 12px',
    lineHeight: 1.3,
  },
  '& a': { color: '$magenta6' },
})
export const Photo = styled('figure', {
  maxWidth: 790,
  margin: '36px 0 0',
  '& img': {
    display: 'block',
    maxWidth: '100%',
    maxHeight: 360,
    width: 'auto',
    height: 'auto',
    borderRadius: 8,
  },
  '& figcaption': { fontSize: 13, lineHeight: '20px', marginTop: 10 },
  '& a': { color: '$magenta6' },
})
export const Action = styled(Link, {
  display: 'inline-block',
  marginTop: 30,
  color: '$magenta6',
  fontWeight: 600,
  fontSize: 16,
  textDecoration: 'underline',
  textUnderlineOffset: 4,
})
