import Link from 'next/link'
import { styled } from 'stitches.config'

export const Page = styled('main', { color: '$gray2', background: '$white' })

export const Hero = styled('header', {
  background: '$tangerine5',
  padding: '48px 24px 42px',
  '@bp2': { padding: '32px 20px 26px' },
})
export const HeroInner = styled('div', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.92fr) minmax(0, 1.08fr)',
  alignItems: 'center',
  gap: 52,
  '@bp4': { gridTemplateColumns: '1fr', gap: 30 },
})
export const HeroCopy = styled('div', { minWidth: 0 })
export const Eyebrow = styled('p', {
  margin: '0 0 14px',
  color: '$magenta6',
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
})
export const Title = styled('h1', {
  maxWidth: 620,
  margin: 0,
  color: '$magenta6',
  fontSize: 52,
  fontWeight: 500,
  lineHeight: 1.08,
  letterSpacing: '-0.035em',
  '@bp2': { fontSize: 35 },
})
export const Lede = styled('p', {
  maxWidth: 530,
  margin: '20px 0 0',
  fontSize: 17,
  lineHeight: 1.65,
  '@bp2': { fontSize: 15 },
})
export const HeroActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 20,
  marginTop: 28,
})
export const PrimaryAction = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 46,
  padding: '11px 20px',
  borderRadius: 6,
  background: '$magenta6',
  color: '$white',
  fontSize: 14,
  fontWeight: 700,
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background 150ms ease, transform 150ms ease',
  '&:hover': { background: '$magenta7', transform: 'translateY(-1px)' },
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 3 },
})
export const TextAction = styled('a', {
  color: '$magenta6',
  fontSize: 14,
  fontWeight: 700,
  textUnderlineOffset: 4,
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 3 },
})
export const HeroPhoto = styled('figure', {
  minWidth: 0,
  margin: 0,
  '& figcaption': {
    paddingTop: 8,
    color: '$gray3',
    fontSize: 11,
    lineHeight: 1.4,
  },
  '& figcaption a': { color: '$magenta6' },
})
export const HeroImage = styled('div', {
  position: 'relative',
  width: '100%',
  height: 390,
  overflow: 'hidden',
  borderRadius: 12,
  '& img': { objectFit: 'cover', objectPosition: 'center' },
  '@bp2': { height: 252 },
})

export const JumpNav = styled('nav', {
  borderBottom: '1px solid $colors$grayW8',
  background: '$white',
})
export const JumpInner = styled('div', {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  gap: 26,
  overflowX: 'auto',
  '& a': {
    flexShrink: 0,
    padding: '16px 0',
    color: '$magenta6',
    fontSize: 13,
    fontWeight: 700,
    textDecoration: 'none',
    borderBottom: '2px solid transparent',
  },
  '& a:hover, & a:focus-visible': { borderBottomColor: '$magenta6' },
  '@bp2': { padding: '0 20px', gap: 20 },
})

export const Section = styled('section', {
  maxWidth: 1180,
  margin: '0 auto',
  padding: '72px 24px',
  scrollMarginTop: 90,
  '@bp2': { padding: '48px 20px', scrollMarginTop: 70 },
})
export const SectionTop = styled('header', { maxWidth: 700, marginBottom: 28 })
export const SectionEyebrow = styled('p', {
  margin: '0 0 8px',
  color: '$magenta6',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
})
export const SectionTitle = styled('h2', {
  margin: 0,
  color: '$magenta6',
  fontSize: 34,
  fontWeight: 500,
  lineHeight: 1.17,
  letterSpacing: '-0.02em',
  '@bp2': { fontSize: 28 },
})
export const SectionIntro = styled('p', {
  margin: '13px 0 0',
  fontSize: 16,
  lineHeight: 1.6,
  '@bp2': { fontSize: 14 },
})

export const PlaceGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 16,
  '@bp4': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  '@bp2': { gridTemplateColumns: '1fr' },
})
export const PlaceCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  padding: 24,
  border: '1px solid $colors$grayW8',
  borderRadius: 10,
  background: '$white',
  '& h3': {
    margin: '18px 0 10px',
    color: '$magenta6',
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 1.25,
  },
  '& p': { margin: 0, fontSize: 14, lineHeight: 1.65 },
  '@bp2': { padding: 20 },
})
export const Number = styled('span', {
  color: '$magenta6',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.08em',
})
export const SourceLine = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: 20,
  color: '$gray3',
  fontSize: 12,
  '& a': { color: '$magenta6', fontWeight: 600, textUnderlineOffset: 3 },
})

export const PhotoBand = styled('section', {
  padding: '56px 24px',
  background: 'rgba($colors$tangerine5Rgb, 0.28)',
  '@bp2': { padding: '40px 20px' },
})
export const PhotoBandInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
  alignItems: 'center',
  gap: 56,
  maxWidth: 1180,
  margin: '0 auto',
  '@bp4': { gridTemplateColumns: '1fr', gap: 28 },
})
export const FieldPhoto = styled('figure', {
  margin: 0,
  minWidth: 0,
  '& figcaption': { paddingTop: 8, color: '$gray3', fontSize: 11, lineHeight: 1.4 },
  '& figcaption a': { color: '$magenta6' },
})
export const FieldImage = styled('div', {
  position: 'relative',
  width: '100%',
  height: 340,
  overflow: 'hidden',
  borderRadius: 10,
  '& img': { objectFit: 'cover', objectPosition: 'center' },
  '@bp2': { height: 230 },
})
export const PhotoBandCopy = styled('div', {
  '& > p:not(:first-child)': { maxWidth: 450, fontSize: 16, lineHeight: 1.65 },
  '& > a': { color: '$magenta6', fontSize: 14, fontWeight: 700 },
})

export const AreaGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 16,
  '@bp4': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  '@bp2': { gridTemplateColumns: '1fr' },
})
export const AreaCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  padding: 24,
  borderRadius: 10,
  background: 'rgba($colors$tangerine5Rgb, 0.28)',
  '& h3': { margin: '0 0 12px', color: '$magenta6', fontSize: 21, lineHeight: 1.25 },
  '& p': { margin: 0, fontSize: 14, lineHeight: 1.65 },
  '& a': {
    marginTop: 'auto',
    paddingTop: 18,
    color: '$magenta6',
    fontSize: 12,
    fontWeight: 700,
  },
  '@bp2': { padding: 20 },
})

export const ChecklistSection = styled('section', {
  background: '$magenta6',
  color: '$white',
  scrollMarginTop: 90,
})
export const ChecklistInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)',
  gap: 64,
  alignItems: 'start',
  maxWidth: 1180,
  margin: '0 auto',
  padding: '64px 24px',
  '@bp4': { gridTemplateColumns: '1fr', gap: 32 },
  '@bp2': { padding: '48px 20px' },
})
export const ChecklistHeader = styled('div', {
  '& h2, & > p:first-child': { color: '$white' },
  '& > p:not(:first-child)': { fontSize: 15, lineHeight: 1.6 },
  '& > a': {
    marginTop: 14,
    background: '$white',
    color: '$magenta6',
    '&:hover': { background: '$tangerine5' },
  },
})
export const Checklist = styled('ol', {
  display: 'grid',
  gap: 0,
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '& li': {
    display: 'flex',
    gap: 18,
    padding: '17px 0',
    borderBottom: '1px solid rgba(255,255,255,0.25)',
  },
  '& li:first-child': { paddingTop: 0 },
  '& li > span': { fontSize: 13, fontWeight: 700, opacity: 0.8 },
  '& h3': { margin: '0 0 6px', fontSize: 18, lineHeight: 1.25 },
  '& p': { margin: 0, fontSize: 14, lineHeight: 1.6 },
  '& a': {
    display: 'inline-block',
    marginTop: 8,
    color: '$white',
    fontSize: 13,
    fontWeight: 700,
  },
})

export const FaqGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '22px 40px',
  '@bp2': { gridTemplateColumns: '1fr' },
})
export const FaqItem = styled('article', {
  paddingTop: 18,
  borderTop: '1px solid $colors$grayW8',
  '& h3': { margin: '0 0 9px', color: '$magenta6', fontSize: 19, lineHeight: 1.3 },
  '& p': { margin: 0, fontSize: 14, lineHeight: 1.65 },
  '& a': { color: '$magenta6', fontWeight: 600 },
})
export const EndAction = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 24,
  marginTop: 64,
  padding: '28px 32px',
  borderRadius: 10,
  background: '$tangerine5',
  '& h2': { margin: '0 0 6px', color: '$magenta6', fontSize: 25, lineHeight: 1.2 },
  '& p': { margin: 0, fontSize: 14, lineHeight: 1.5 },
  '@bp3': { flexDirection: 'column', alignItems: 'flex-start' },
  '@bp2': { marginTop: 42, padding: 22 },
})
