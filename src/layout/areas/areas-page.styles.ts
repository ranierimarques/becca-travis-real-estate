import { styled } from 'stitches.config'

export const Hero = styled('header', {
  padding: '56px 24px 52px',
  background: '$tangerine5',
  textAlign: 'left',
  '@bp2': { padding: '34px 20px 32px' },
})

export const Eyebrow = styled('p', {
  margin: '0 0 10px',
  color: '$magenta6',
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const HeroTitle = styled('h1', {
  width: '100%',
  maxWidth: 560,
  margin: 0,
  color: '$magenta6',
  fontSize: 53,
  fontWeight: 500,
  lineHeight: 1.08,
  letterSpacing: '-0.035em',
  '@bp2': { maxWidth: '100%', fontSize: 34, lineHeight: 1.12 },
})

export const HeroCopy = styled('p', {
  width: '100%',
  maxWidth: 540,
  margin: '18px 0 0',
  color: '$gray2',
  fontSize: 16,
  lineHeight: 1.7,
  '@bp2': { maxWidth: '100%', fontSize: 14 },
})

export const StickyNav = styled('nav', {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  gap: 4,
  padding: '8px max(18px, calc((100vw - 1180px) / 2))',
  overflowX: 'auto',
  borderBottom: '1px solid $colors$grayW8',
  background: 'rgba(255, 255, 255, 0.97)',
  backdropFilter: 'blur(10px)',
  '& a': {
    flex: '0 0 auto',
    padding: '10px 12px',
    borderRadius: 999,
    color: '$magenta6',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
  },
  '& a:hover, & a:focus-visible': { background: '$tangerine5' },
  '@bp4': { top: 70, justifyContent: 'flex-start' },
})

export const SectionHeader = styled('header', {
  maxWidth: 760,
  margin: '0 0 28px',
  textAlign: 'left',
})

export const SectionTitle = styled('h2', {
  margin: '0 0 10px',
  color: '$magenta6',
  fontSize: 30,
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.018em',
  '@bp2': { fontSize: 25 },
})

export const Note = styled('p', {
  margin: 0,
  color: '$gray2',
  fontSize: 14,
  lineHeight: 1.6,
})

export const Filters = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  alignItems: 'start',
  gap: 20,
  minWidth: 0,
  margin: '0 0 20px',
  padding: '20px 0',
  borderTop: '1px solid $colors$grayW8',
  borderBottom: '1px solid $colors$grayW8',
  '@bp4': { gridTemplateColumns: '1fr 1fr' },
  '@bp2': {
    width: 'calc(100vw - 48px)',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: 18,
    padding: '16px 0',
  },
})
export const FilterGroup = styled('div', { display: 'grid', gap: 10, minWidth: 0 })
export const FilterLabel = styled('h3', {
  margin: 0,
  color: '$gray1',
  fontSize: 14,
  fontWeight: 600,
})
export const Pills = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 7,
  minWidth: 0,
})
export const Pill = styled('button', {
  minHeight: 36,
  padding: '7px 11px',
  border: '1px solid $colors$grayW7',
  borderRadius: 999,
  background: '$white',
  color: '$gray2',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 12,
  transition: 'background 150ms ease, border-color 150ms ease, color 150ms ease',
  variants: {
    active: {
      true: { borderColor: '$magenta6', background: '$magenta6', color: '$white' },
    },
  },
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 2 },
})

export const ResultCount = styled('p', {
  margin: '0 0 16px',
  color: '$gray3',
  fontSize: 13,
})
export const FilterNote = styled('p', {
  margin: '-6px 0 12px',
  color: '$gray3',
  fontSize: 12,
  lineHeight: 1.5,
})
export const EmptyState = styled('div', {
  gridColumn: '1 / -1',
  display: 'grid',
  gap: 6,
  padding: '28px 0',
  color: '$gray2',
  fontSize: 14,
  lineHeight: 1.5,
  '& strong': { color: '$gray1', fontWeight: 600 },
})

export const AreaGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: 40,
  rowGap: 0,
  '@bp4': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  '@bp2': { gridTemplateColumns: '1fr' },
})

export const SchoolGrid = styled(AreaGrid, {
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
})
export const ResourceGrid = styled(AreaGrid, {
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  '@bp2': { gridTemplateColumns: '1fr' },
})

export const AreaCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 11,
  minWidth: 0,
  padding: '24px 0',
  borderBottom: '1px solid $colors$grayW8',
  background: '$white',
  transition: 'border-color 160ms ease',
  '&:hover': { borderColor: '$magenta6' },
})
export const ResourceCard = styled(AreaCard, {
  padding: 24,
  border: '1px solid $colors$grayW8',
  borderRadius: 8,
})
export const AreaName = styled('h3', {
  margin: 0,
  color: '$magenta6',
  fontSize: 19,
  fontWeight: 600,
  lineHeight: 1.3,
})
export const AreaDetail = styled('p', {
  margin: 0,
  color: '$gray2',
  fontSize: 14,
  lineHeight: 1.7,
})
export const TaxZoneTag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 24,
  padding: '4px 9px',
  borderRadius: 999,
  background: '$offWhite2',
  color: '$gray2',
  fontSize: 11,
  lineHeight: 1.3,
})

export const SourceLink = styled('a', {
  color: '$gray3',
  fontSize: 13,
  lineHeight: 1.45,
  textDecoration: 'underline',
})
export const ListingLink = styled('a', {
  display: 'inline-block',
  color: '$magenta6',
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1.5,
  textDecoration: 'underline',
})
export const CardActions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '10px 18px',
  marginTop: 'auto',
})
export const InlineNote = styled('p', {
  maxWidth: 900,
  margin: '20px auto 0',
  color: '$gray2',
  fontSize: 13,
  lineHeight: 1.55,
  textAlign: 'center',
})

export const SearchGroup = styled('div', {
  display: 'grid',
  alignContent: 'start',
  gap: 10,
  minWidth: 0,
  '& label': { color: '$gray1', fontSize: 14, fontWeight: 600 },
})
export const SearchInput = styled('input', {
  boxSizing: 'border-box',
  width: '100%',
  minHeight: 42,
  padding: '0 12px',
  border: '1px solid $colors$grayW7',
  borderRadius: 6,
  background: '$white',
  color: '$gray1',
  fontFamily: 'inherit',
  fontSize: 14,
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 2 },
})

export const CommutePanel = styled('div', {
  display: 'grid',
  gap: 18,
  margin: '0 0 12px',
  padding: 24,
  border: '1px solid $colors$grayW8',
  borderRadius: 10,
  background: '$offWhite1',
  '@bp2': { padding: 18 },
})

export const RouteFields = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 16,
  '@bp2': { gridTemplateColumns: '1fr' },
})

export const RouteField = styled('label', {
  display: 'grid',
  gap: 8,
  color: '$gray1',
  fontSize: 13,
  fontWeight: 600,
})

export const RouteInput = styled('input', {
  boxSizing: 'border-box',
  width: '100%',
  minHeight: 44,
  padding: '0 12px',
  border: '1px solid $colors$grayW7',
  borderRadius: 6,
  background: '$white',
  color: '$gray1',
  fontFamily: 'inherit',
  fontSize: 14,
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 2 },
})

export const RouteLink = styled('a', {
  justifySelf: 'start',
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 42,
  padding: '0 16px',
  borderRadius: 6,
  background: '$magenta6',
  color: '$white',
  fontSize: 13,
  fontWeight: 600,
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 3 },
})
export const ResetButton = styled('button', {
  justifySelf: 'start',
  border: 0,
  padding: 0,
  background: 'transparent',
  color: '$magenta6',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 12,
  fontWeight: 600,
  textDecoration: 'underline',
})

export const HeroInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.92fr) minmax(0, 1.08fr)',
  alignItems: 'center',
  gap: 52,
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  '@bp4': { gap: 32 },
  '@bp2': { gridTemplateColumns: '1fr', gap: 26 },
})
export const HeroCopyBlock = styled('div', { minWidth: 0 })
export const HeroActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '12px 22px',
  marginTop: 24,
})
export const HeroTextLink = styled('a', {
  color: '$magenta6',
  fontSize: 13,
  fontWeight: 600,
  textDecoration: 'none',
  '&:hover, &:focus-visible': { textDecoration: 'underline' },
})
export const HeroFigure = styled('figure', { minWidth: 0, margin: 0 })
export const HeroImage = styled('div', {
  position: 'relative',
  width: '100%',
  aspectRatio: '1.48',
  overflow: 'hidden',
  borderRadius: 10,
  background: '$offWhite2',
  '& img': { objectFit: 'cover' },
  '@bp2': { aspectRatio: '1.45' },
})
export const ImageCaption = styled('figcaption', {
  marginTop: 9,
  color: '$gray3',
  fontSize: 12,
  lineHeight: 1.4,
})
export const SceneGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 22,
  '@bp4': { gap: 18 },
  '@bp2': { gridTemplateColumns: '1fr', gap: 18 },
})
export const SceneCard = styled('article', { minWidth: 0 })
export const SceneFrame = styled('div', {
  position: 'relative',
  width: '100%',
  aspectRatio: '1.42',
  overflow: 'hidden',
  borderRadius: 8,
  background: '$offWhite2',
  '& img': { objectFit: 'cover', transition: 'transform 220ms ease' },
  '&:hover img': { transform: 'scale(1.025)' },
})
export const ScenePhotoLabel = styled('a', {
  position: 'absolute',
  inset: 'auto 0 0',
  padding: '36px 16px 14px',
  background: 'linear-gradient(transparent, rgba(24, 25, 33, 0.78))',
  color: 'white',
  fontSize: 17,
  fontWeight: 600,
  lineHeight: 1.3,
  textDecoration: 'none',
  '&:hover, &:focus-visible': { textDecoration: 'underline' },
  '&:focus-visible': { outline: '3px solid white', outlineOffset: -4 },
})
export const SceneDetail = styled('p', {
  margin: '10px 0 2px',
  color: '$gray2',
  fontSize: 13,
  lineHeight: 1.5,
})
export const SceneCredit = styled('a', {
  color: '$gray3',
  fontSize: 11,
  lineHeight: 1.4,
  textDecoration: 'underline',
})
export const CommuteOverview = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(250px, 0.8fr) minmax(0, 1.2fr)',
  alignItems: 'center',
  gap: 44,
  padding: '34px 36px',
  borderRadius: 12,
  background: '$offWhite1',
  '@bp4': { gridTemplateColumns: '1fr', gap: 24, padding: 28 },
  '@bp2': { padding: '22px 16px', gap: 20 },
})
export const CommuteIntro = styled('div', { display: 'grid', gap: 10 })
export const CommuteDisclaimer = styled('p', {
  margin: '4px 0 0',
  color: '$gray3',
  fontSize: 12,
  lineHeight: 1.5,
})
export const CommuteMap = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  alignContent: 'center',
  gap: 12,
  minHeight: 276,
  padding: 24,
  borderRadius: 14,
  background:
    'linear-gradient(rgba(27, 30, 43, 0.58), rgba(27, 30, 43, 0.58)), url("/images/areas/downtown-huntsville.webp") center / cover',
  '@bp2': {
    gridTemplateColumns: '1fr',
    minHeight: 0,
    padding: 16,
  },
})
export const CommuteHubButton = styled('button', {
  display: 'grid',
  alignContent: 'center',
  gap: 4,
  minWidth: 0,
  minHeight: 74,
  padding: '12px 14px',
  border: '1px solid $colors$grayW7',
  borderRadius: 9,
  background: 'rgba(255, 255, 255, 0.96)',
  color: '$gray1',
  cursor: 'pointer',
  fontFamily: 'inherit',
  textAlign: 'left',
  transition: 'background 150ms ease, border-color 150ms ease, transform 150ms ease',
  '& span': { fontSize: 13, fontWeight: 600, lineHeight: 1.35 },
  '& small': { color: '$gray3', fontSize: 11, lineHeight: 1.3 },
  '&:hover': { borderColor: '$magenta6', transform: 'translateY(-1px)' },
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 2 },
  variants: {
    active: { true: { borderColor: '$magenta6', background: '$tangerine5' } },
  },
})
