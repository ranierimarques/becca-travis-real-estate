import { keyframes, styled } from 'stitches.config'

const rise = keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const Page = styled('main', {
  color: '$gray1',
  background: '$white',
})

export const Hero = styled('header', {
  borderBottom: '1px solid $grayW9',
})

export const HeroInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(390px, 0.85fr) minmax(520px, 1.15fr)',
  alignItems: 'center',
  gap: 48,
  width: 'min(100% - 48px, 1280px)',
  margin: '0 auto',
  padding: '54px 0 52px',

  '@bp4': {
    gridTemplateColumns: '1fr',
    gap: 32,
    padding: '46px 0 42px',
  },
  '@bp2': {
    width: 'min(100% - 32px, 1200px)',
    gap: 26,
    padding: '38px 0 34px',
  },
})

export const HeroCopy = styled('div', {
  position: 'relative',
  zIndex: 1,
  animation: `${rise} 420ms ease both`,
})

export const HeroTitle = styled('h1', {
  maxWidth: 610,
  color: '$magenta6',
  fontSize: 'clamp(46px, 4.6vw, 68px)',
  fontWeight: 500,
  letterSpacing: '-0.045em',
  lineHeight: 0.98,

  '@bp2': {
    fontSize: 'clamp(40px, 12vw, 54px)',
    lineHeight: 1.02,
  },
  '@bp1': { fontSize: 38 },
})

export const HeroDescription = styled('p', {
  maxWidth: 590,
  marginTop: 18,
  color: '$gray2',
  fontSize: 18,
  lineHeight: 1.65,

  '@bp2': { marginTop: 16, fontSize: 16 },
})

export const HeroActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 28,
  marginTop: 27,

  '@bp2': { alignItems: 'flex-start', flexDirection: 'column', gap: 17 },
})

export const HeroVisual = styled('div', {
  position: 'relative',
  minHeight: 470,
  overflow: 'hidden',
  background: '$offWhite2',
  borderRadius: 16,
  boxShadow: '0 20px 54px rgba(41, 57, 74, 0.15)',
  animation: `${rise} 480ms 80ms ease both`,

  '& > img': { objectFit: 'cover', objectPosition: '53% center' },

  '@bp4': { minHeight: 410 },
  '@bp2': {
    minHeight: 300,
    margin: '0 -16px',
    borderRadius: 0,
    boxShadow: 'none',
    '& > img': { objectPosition: '58% center' },
  },
  '@bp1': { minHeight: 270 },
})

const actionBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 50,
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 720,
  lineHeight: 1.2,
  transition: 'background 150ms ease, border-color 150ms ease, transform 150ms ease',
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.48)',
    outlineOffset: 3,
  },
} as const

export const PrimaryAnchor = styled('a', {
  ...actionBase,
  minWidth: 222,
  padding: '0 22px',
  color: '$white',
  background: '$magenta1',
  border: '1px solid $magenta1',

  '&:hover': {
    background: '$magenta6',
    borderColor: '$magenta6',
    transform: 'translateY(-1px)',
  },
  '@bp2': { width: '100%' },
})

export const TextAnchor = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 2px',
  color: '$magenta1',
  borderBottom: '1px solid currentColor',
  fontSize: 15,
  fontWeight: 680,
  lineHeight: 1.2,

  '&:hover': { color: '$magenta6' },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.48)',
    outlineOffset: 4,
  },
})

export const PrivacyNote = styled('aside', {
  position: 'absolute',
  right: 20,
  bottom: 20,
  display: 'grid',
  gridTemplateColumns: '32px 1fr',
  gap: 11,
  minWidth: 218,
  padding: '14px 16px',
  background: 'rgba($colors$whiteRgb, 0.94)',
  border: '1px solid rgba($colors$whiteRgb, 0.72)',
  borderRadius: 11,
  boxShadow: '0 10px 28px rgba(41, 57, 74, 0.18)',
  backdropFilter: 'blur(10px)',

  '& svg': { width: 27, height: 27, color: '$magenta6' },
  '& strong': { display: 'block', color: '$gray1', fontSize: 15, fontWeight: 750 },
  '& p': { marginTop: 3, color: '$gray3', fontSize: 12, lineHeight: 1.45 },

  '@bp4': {
    maxWidth: 620,
  },
  '@bp2': {
    right: 14,
    bottom: 14,
    gridTemplateColumns: '30px 1fr',
    gap: 12,
    minWidth: 196,
    padding: '11px 13px',
    '& svg': { width: 27, height: 27 },
    '& strong': { fontSize: 13 },
  },
})

export const ProgressBand = styled('nav', {
  background: '$offWhite2',
  borderBottom: '1px solid $grayW9',
})

export const Progress = styled('ol', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',
  padding: '21px 0 18px',

  '@bp2': { width: 'min(100% - 32px, 1200px)', padding: '18px 0 15px' },
})

export const ProgressLink = styled('a', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '28px 1fr',
  alignItems: 'center',
  gap: 9,
  color: '$gray3',
  fontSize: 13,
  fontWeight: 680,

  '&::after': {
    content: '',
    position: 'absolute',
    top: 14,
    right: 14,
    left: 42,
    height: 1,
    background: '$grayW8',
  },
  '&[data-last="true"]::after': { display: 'none' },
  '&[data-active="true"]': { color: '$magenta6' },
  '&[data-active="true"] > span:first-child': {
    color: '$white',
    background: '$magenta1',
    borderColor: '$magenta1',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.44)',
    outlineOffset: 3,
  },

  '@bp2': {
    gridTemplateColumns: '24px 1fr',
    gap: 7,
    fontSize: 11,
    '&::after': { top: 12, right: 8, left: 34 },
  },
})

export const ProgressNumber = styled('span', {
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
  color: '$gray4',
  background: '$offWhite2',
  border: '1px solid $grayW7',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 750,

  '@bp2': { width: 24, height: 24, fontSize: 11 },
})

export const WorkspaceBand = styled('section', {
  padding: '48px 0 58px',
  background: '$offWhite2',
  scrollMarginTop: 90,

  '@bp2': { padding: '34px 0 42px' },
})

export const Workspace = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.22fr) minmax(360px, 0.88fr)',
  alignItems: 'start',
  gap: 42,
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',

  '@bp4': { gridTemplateColumns: '1fr', gap: 32 },
  '@bp2': { width: 'min(100% - 32px, 1200px)' },
})

export const FormColumn = styled('div', {
  display: 'grid',
  gap: 42,
})

export const FormSection = styled('section', {
  scrollMarginTop: 88,
})

export const SectionHeading = styled('h2', {
  color: '$magenta6',
  fontSize: 32,
  fontWeight: 550,
  letterSpacing: '-0.025em',
  lineHeight: 1.15,

  '@bp2': { fontSize: 28 },
})

export const SectionDescription = styled('p', {
  maxWidth: 680,
  marginTop: 7,
  color: '$gray3',
  fontSize: 14,
  lineHeight: 1.6,
})

export const FieldGroupHeading = styled('h3', {
  marginTop: 31,
  paddingBottom: 10,
  color: '$magenta6',
  borderBottom: '1px solid $grayW8',
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.3,
})

export const FieldGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '19px 22px',
  marginTop: 21,

  '@bp2': { gridTemplateColumns: '1fr', gap: 17 },
})

export const Field = styled('label', {
  display: 'grid',
  alignContent: 'start',
  gap: 7,
  color: '$gray1',
  fontSize: 13,
  fontWeight: 700,

  variants: {
    wide: { true: { gridColumn: '1 / -1' } },
  },
})

export const Hint = styled('small', {
  color: '$gray4',
  fontSize: 11,
  fontWeight: 450,
  lineHeight: 1.45,
})

const controlBase = {
  width: '100%',
  minHeight: 48,
  padding: '0 13px',
  color: '$gray1',
  background: '$white',
  border: '1px solid $grayW7',
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 470,
  lineHeight: 1.4,
  transition: 'border-color 130ms ease, box-shadow 130ms ease, background 130ms ease',
  '&::placeholder': { color: '$grayW5' },
  '&:hover': { borderColor: '$grayW5' },
  '&:focus': {
    borderColor: '$magenta1',
    boxShadow: '0 0 0 3px rgba($colors$magenta3Rgb, 0.2)',
  },
} as const

export const Input = styled('input', controlBase)

export const Select = styled('select', {
  ...controlBase,
  appearance: 'none',
  paddingRight: 40,
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23515C6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
})

export const Textarea = styled('textarea', {
  ...controlBase,
  minHeight: 92,
  padding: '11px 13px',
  resize: 'vertical',
})

export const FieldWarning = styled('span', {
  display: 'block',
  padding: '8px 10px',
  color: '$red3',
  background: 'rgba($colors$red1Rgb, 0.1)',
  borderLeft: '3px solid $red3',
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 600,
  lineHeight: 1.45,
})

export const DraftColumn = styled('aside', {
  position: 'sticky',
  top: 22,

  '@bp4': { position: 'static' },
})

export const DraftCard = styled('div', {
  padding: 25,
  background: '$white',
  border: '1px solid $grayW9',
  borderRadius: 14,
  boxShadow: '0 16px 38px rgba(41, 57, 74, 0.08)',

  '@bp2': { padding: 18, borderRadius: 12 },
})

export const DraftHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 16,

  '& h2': {
    color: '$magenta6',
    fontSize: 27,
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },

  '@bp2': { flexDirection: 'column', gap: 10 },
})

export const Status = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
  gap: 7,
  minHeight: 30,
  padding: '0 10px',
  color: '$tangerine6',
  background: 'rgba($colors$tangerine3Rgb, 0.38)',
  borderRadius: 7,
  fontSize: 11,
  fontWeight: 740,

  variants: {
    ready: {
      true: { color: '$green4', background: 'rgba($colors$green1Rgb, 0.2)' },
    },
  },

  '&::before': {
    content: '',
    width: 7,
    height: 7,
    background: '$tangerine1',
    borderRadius: 999,
  },
  '&[data-ready="true"]::before': { background: '$green2' },
})

export const DraftBody = styled('div', {
  minHeight: 270,
  marginTop: 20,
  padding: 24,
  background: '$offWhite2',
  border: '1px solid $grayW9',
  borderRadius: 10,

  '@bp2': { minHeight: 230, padding: 19 },
})

export const EmptyState = styled('div', {
  minHeight: 220,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  color: '$gray4',
  textAlign: 'center',

  '& svg': { width: 48, height: 48, color: '$grayW6' },
  '& p': { maxWidth: 280, fontSize: 14, lineHeight: 1.55 },
})

export const DraftText = styled('div', {
  '& p': { color: '$gray2', fontSize: 15, lineHeight: 1.78 },
  '& strong': { display: 'block', marginBottom: 10, color: '$magenta6', fontSize: 13 },
})

export const ButtonRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 12,
  marginTop: 18,

  '@bp2': { gridTemplateColumns: '1fr' },
})

export const Button = styled('button', {
  ...actionBase,
  gap: 9,
  padding: '0 15px',
  color: '$magenta1',
  background: '$white',
  border: '1px solid $magenta1',

  '& svg': { width: 17, height: 17 },
  '&:hover:not(:disabled)': { color: '$white', background: '$magenta1' },
  '&:disabled': {
    cursor: 'not-allowed',
    color: '$grayW6',
    background: '$grayW9',
    borderColor: '$grayW9',
  },
  variants: {
    primary: {
      true: {
        color: '$white',
        background: '$magenta1',
        '&:hover:not(:disabled)': { background: '$magenta6' },
      },
    },
  },
})

export const LiveMessage = styled('p', {
  minHeight: 18,
  marginTop: 9,
  color: '$green4',
  fontSize: 11,
  fontWeight: 650,
  textAlign: 'center',
})

export const Verification = styled('div', {
  marginTop: 22,
  paddingTop: 20,
  borderTop: '1px solid $grayW9',

  '& h3': { color: '$magenta6', fontSize: 17, fontWeight: 600 },
  '& p': { marginTop: 6, color: '$gray4', fontSize: 12, lineHeight: 1.5 },
  '& ul': { display: 'grid', gap: 9, marginTop: 14 },
  '& li': {
    position: 'relative',
    paddingLeft: 18,
    color: '$gray3',
    fontSize: 12,
    lineHeight: 1.5,
    '&::before': {
      content: '',
      position: 'absolute',
      top: '0.58em',
      left: 1,
      width: 6,
      height: 6,
      background: '$tangerine1',
      borderRadius: 999,
    },
  },
})

export const ReviewBand = styled('section', {
  padding: '43px 0',
  background: 'rgba($colors$grayW9Rgb, 0.55)',
  borderTop: '1px solid $grayW9',
  borderBottom: '1px solid $grayW9',
  scrollMarginTop: 88,
})

export const ReviewInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.7fr 1.3fr',
  alignItems: 'start',
  gap: 54,
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',

  '@bp3': { gridTemplateColumns: '1fr', gap: 25 },
  '@bp2': { width: 'min(100% - 32px, 1200px)' },
})

export const ReviewChecks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '16px 30px',

  '@bp2': { gridTemplateColumns: '1fr' },
})

export const ReviewCheck = styled('label', {
  display: 'grid',
  gridTemplateColumns: '22px 1fr',
  alignItems: 'start',
  gap: 11,
  color: '$gray2',
  fontSize: 13,
  lineHeight: 1.5,

  '& input': { width: 18, height: 18, marginTop: 1, accentColor: '$magenta1' },
})

export const OrganizeSection = styled('section', {
  padding: '68px 0 72px',
  scrollMarginTop: 88,

  '@bp2': { padding: '50px 0 56px' },
})

export const OrganizeInner = styled('div', {
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',
  '@bp2': { width: 'min(100% - 32px, 1200px)' },
})

export const OrganizeHeader = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.75fr 1.25fr',
  gap: 54,
  alignItems: 'end',

  '& p': { color: '$gray3', fontSize: 14, lineHeight: 1.65 },
  '@bp3': { gridTemplateColumns: '1fr', gap: 12 },
})

export const PreparationList = styled('div', {
  marginTop: 32,
  borderTop: '1px solid $grayW8',
})

export const PreparationRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '30px minmax(220px, 0.8fr) minmax(280px, 1.2fr)',
  alignItems: 'start',
  gap: 18,
  padding: '19px 0',
  borderBottom: '1px solid $grayW8',

  '& input[type="checkbox"]': {
    width: 19,
    height: 19,
    marginTop: 2,
    accentColor: '$magenta1',
  },
  '& h3': { color: '$magenta6', fontSize: 16, fontWeight: 650, lineHeight: 1.35 },
  '& p': { marginTop: 4, color: '$gray4', fontSize: 12, lineHeight: 1.5 },

  '@bp3': { gridTemplateColumns: '28px 1fr', '& textarea': { gridColumn: '2' } },
})

export const Notes = styled('textarea', {
  minHeight: 54,
  padding: '9px 0',
  color: '$gray2',
  background: '$white',
  borderTop: 0,
  borderRight: 0,
  borderBottom: '1px solid $grayW8',
  borderLeft: 0,
  borderRadius: 0,
  fontSize: 13,
  lineHeight: 1.45,
  resize: 'vertical',

  '&::placeholder': { color: '$grayW6' },
  '&:focus': { borderColor: '$magenta1', boxShadow: '0 2px 0 $colors$magenta1' },
})

export const FooterUtility = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  alignItems: 'center',
  gap: 28,
  marginTop: 34,
  paddingTop: 24,
  borderTop: '1px solid $grayW9',

  '& p': { color: '$gray4', fontSize: 12, lineHeight: 1.6 },
  '@bp3': { gridTemplateColumns: '1fr', alignItems: 'start', gap: 18 },
})

export const ResetButton = styled('button', {
  padding: '8px 2px',
  color: '$magenta1',
  borderBottom: '1px solid currentColor',
  fontSize: 13,
  fontWeight: 680,
  '&:hover': { color: '$magenta6' },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.48)',
    outlineOffset: 4,
  },
})

export const SellerLink = styled('a', {
  ...actionBase,
  gap: 8,
  minWidth: 168,
  padding: '0 18px',
  color: '$white',
  background: '$magenta1',
  border: '1px solid $magenta1',
  '&:hover': { background: '$magenta6', borderColor: '$magenta6' },
  '@bp3': { width: '100%' },
})

export const SeoSection = styled('section', {
  padding: '54px 0 62px',
  color: '$gray2',
  background: '$offWhite2',
  borderTop: '1px solid $grayW9',
})

export const SeoInner = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.7fr 1.3fr',
  gap: 54,
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',

  '& h2': { color: '$magenta6', fontSize: 28, fontWeight: 600, lineHeight: 1.2 },
  '& div': { display: 'grid', gap: 14 },
  '& p': { fontSize: 14, lineHeight: 1.7 },
  '& a': {
    color: '$magenta1',
    fontWeight: 680,
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },

  '@bp3': { gridTemplateColumns: '1fr', gap: 18 },
  '@bp2': { width: 'min(100% - 32px, 1200px)' },
})

export const FaqSection = styled('section', {
  padding: '62px 0 70px',
  background: '$white',
})

export const FaqInner = styled('div', {
  width: 'min(100% - 48px, 1200px)',
  margin: '0 auto',
  '@bp2': { width: 'min(100% - 32px, 1200px)' },
})

export const FaqGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: 54,
  marginTop: 27,
  borderTop: '1px solid $grayW8',

  '@bp3': { gridTemplateColumns: '1fr' },
})

export const FaqItem = styled('article', {
  padding: '24px 0 26px',
  borderBottom: '1px solid $grayW8',

  '& h3': {
    color: '$magenta6',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.35,
  },
  '& p': {
    marginTop: 8,
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.68,
  },
})

export const PrintOnly = styled('div', {
  display: 'none',
})
