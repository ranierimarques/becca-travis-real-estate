import Link from 'next/link'
import { styled } from 'stitches.config'

export const Page = styled('main', { color: '$gray2', background: '#fff' })

export const Wrap = styled('div', {
  width: 'min(100% - 48px, 1160px)',
  margin: '0 auto',
  '@bp2': { width: 'min(100% - 32px, 1160px)' },
})

export const Breadcrumb = styled('nav', {
  padding: '24px 0 0',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 10,
  fontSize: 13,
  color: '$gray2',
  '& a': { color: '$magenta6', textUnderlineOffset: 3 },
})

export const Hero = styled('section', {
  padding: '28px 0 54px',
  background: 'linear-gradient(125deg, #fff8f4 0%, #f7e6dd 100%)',
  '@bp2': { padding: '20px 0 36px' },
})

export const HeroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.95fr) minmax(0, 1.05fr)',
  gap: 42,
  alignItems: 'center',
  paddingTop: 32,
  '@bp4': { gap: 24 },
  '@bp3': { gridTemplateColumns: '1fr', paddingTop: 22 },
})

export const HeroCopy = styled('div', { maxWidth: 550 })

export const Eyebrow = styled('p', {
  color: '$magenta6',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  margin: 0,
})

export const Title = styled('h1', {
  color: '$magenta6',
  fontSize: 'clamp(36px, 4.1vw, 62px)',
  fontWeight: 500,
  lineHeight: 1.07,
  margin: '16px 0 18px',
})

export const Intro = styled('p', {
  fontSize: 18,
  lineHeight: 1.65,
  maxWidth: 560,
  margin: 0,
  '@bp2': { fontSize: 16 },
})

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12,
  marginTop: 26,
})

export const PrimaryAction = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 46,
  padding: '10px 20px',
  borderRadius: 6,
  background: '$magenta6',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  '&:hover': { background: '#682341' },
  '&:focus-visible': { outline: '3px solid #2d1b27', outlineOffset: 3 },
})

export const TextAction = styled('a', {
  color: '$magenta6',
  fontWeight: 600,
  textUnderlineOffset: 4,
  padding: '10px 2px',
  '&:focus-visible': { outline: '3px solid #2d1b27', outlineOffset: 3 },
})

export const HeroPhoto = styled('figure', {
  margin: 0,
  minWidth: 0,
  '& img': {
    display: 'block',
    width: '100%',
    height: 380,
    objectFit: 'cover',
    borderRadius: 12,
    boxShadow: '0 16px 36px rgba(63, 35, 49, 0.15)',
  },
  '& figcaption': {
    fontSize: 12,
    lineHeight: 1.45,
    marginTop: 8,
    color: '#5f5158',
  },
  '& a': { color: '$magenta6' },
  '@bp2': { '& img': { height: 250 } },
})

export const Section = styled('section', {
  padding: '58px 0',
  '@bp2': { padding: '38px 0' },
})

export const SectionHeading = styled('h2', {
  color: '$magenta6',
  fontSize: 'clamp(27px, 3vw, 38px)',
  fontWeight: 500,
  lineHeight: 1.2,
  margin: '0 0 16px',
})

export const Lead = styled('p', {
  fontSize: 17,
  lineHeight: 1.7,
  maxWidth: 790,
  margin: '0 0 30px',
})

export const StoryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.7fr)',
  gap: 48,
  alignItems: 'start',
  '@bp3': { gridTemplateColumns: '1fr', gap: 28 },
})

export const Story = styled('div', {
  maxWidth: 750,
  fontSize: 16,
  lineHeight: 1.75,
  '& h3': {
    color: '$magenta6',
    fontSize: 23,
    fontWeight: 500,
    lineHeight: 1.3,
    margin: '30px 0 8px',
  },
  '& p': { margin: '0 0 14px' },
  '& a': { color: '$magenta6', textUnderlineOffset: 3 },
})

export const Sidebar = styled('aside', {
  border: '1px solid #e3d5d9',
  borderRadius: 10,
  padding: 26,
  background: '#fffbf9',
  '& h2': { color: '$magenta6', fontSize: 24, fontWeight: 500, margin: '0 0 12px' },
  '& p': { lineHeight: 1.65, margin: 0 },
})

export const Visit = styled('section', {
  marginTop: 34,
  borderLeft: '4px solid #f3a675',
  padding: '4px 0 4px 22px',
  maxWidth: 840,
  '& h2': { color: '$magenta6', fontSize: 24, fontWeight: 500, margin: '0 0 8px' },
  '& p': { lineHeight: 1.7, margin: 0 },
})

export const QuestionGrid = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 15,
  padding: 0,
  margin: '22px 0 0',
  listStyle: 'none',
  '& li': {
    background: '#fff8f4',
    border: '1px solid #efdcd6',
    borderRadius: 8,
    padding: '19px 20px',
    lineHeight: 1.55,
  },
  '@bp3': { gridTemplateColumns: '1fr' },
})

export const RelatedSection = styled('section', {
  padding: '54px 0 68px',
  background: '#faf7f7',
  '@bp2': { padding: '40px 0 52px' },
})

export const RelatedGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 20,
  marginTop: 26,
  '@bp3': { gridTemplateColumns: '1fr' },
})

export const RelatedCard = styled('article', {
  minWidth: 0,
  background: '#fff',
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: '0 4px 22px rgba(63, 35, 49, 0.08)',
  '& img': { width: '100%', height: 180, display: 'block', objectFit: 'cover' },
  '& h3': { color: '$magenta6', fontSize: 22, fontWeight: 500, margin: '0 0 8px' },
  '& p': { fontSize: 14, lineHeight: 1.5, margin: 0 },
})

export const RelatedCopy = styled('div', { padding: '18px 20px 22px' })

export const RelatedLink = styled(Link, {
  color: '$magenta6',
  display: 'inline-block',
  fontWeight: 600,
  marginTop: 12,
  textUnderlineOffset: 3,
})

export const PhotoCredit = styled('p', {
  fontSize: 11,
  lineHeight: 1.4,
  color: '#5f5158',
  margin: '8px 20px 18px',
  '& a': { color: '$magenta6' },
})

export const Contact = styled('section', {
  background: '$magenta6',
  color: '#fff',
  padding: '46px 0',
  '& h2': { color: '#fff', fontSize: 31, fontWeight: 500, margin: '0 0 8px' },
  '& p': { maxWidth: 670, lineHeight: 1.6, margin: '0 0 24px' },
  '& a': {
    background: '#fff',
    color: '$magenta6',
    display: 'inline-flex',
    minHeight: 46,
    alignItems: 'center',
    borderRadius: 6,
    padding: '10px 20px',
    fontWeight: 600,
    textDecoration: 'none',
  },
})
