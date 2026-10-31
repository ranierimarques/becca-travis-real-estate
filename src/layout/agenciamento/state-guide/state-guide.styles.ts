import Link from 'next/link'
import { styled } from 'stitches.config'

export const SkipLink = styled('a', {
  position: 'fixed',
  left: 16,
  top: -80,
  zIndex: 100,
  padding: '12px 18px',
  color: '$magenta6',
  background: '$white',
  borderRadius: 8,
  boxShadow: '0 10px 30px rgba(46, 21, 38, 0.2)',

  '&:focus': {
    top: 12,
  },
})

export const Page = styled('main', {
  color: '$gray1',
  background: '$white',
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1184,
  margin: '0 auto',
  paddingLeft: 56,
  paddingRight: 56,

  '@bp4': {
    paddingLeft: 40,
    paddingRight: 40,
  },
  '@bp3': {
    paddingLeft: 28,
    paddingRight: 28,
  },
  '@bp2': {
    paddingLeft: 20,
    paddingRight: 20,
  },
  '@bp1': {
    paddingLeft: 16,
    paddingRight: 16,
  },
})

export const Hero = styled('section', {
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  color: '$white',
  background:
    'radial-gradient(circle at 82% 18%, rgba(254, 161, 102, 0.24), transparent 28%), linear-gradient(135deg, #2c1827 0%, #5c2944 54%, #7a3657 100%)',

  '&::after': {
    content: '',
    position: 'absolute',
    zIndex: -1,
    right: '-8vw',
    bottom: '-28vw',
    width: '52vw',
    height: '52vw',
    minWidth: 460,
    minHeight: 460,
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '50%',
  },
})

export const Breadcrumbs = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: 9,
  paddingTop: 28,
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 13,

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  '& a:hover': {
    color: '$white',
    textDecoration: 'underline',
  },
  '& span[aria-hidden]': {
    color: '#FBB693',
  },
})

export const HeroGrid = styled('div', {
  minHeight: 520,
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.42fr) minmax(280px, 0.58fr)',
  alignItems: 'center',
  gap: 70,
  paddingTop: 52,
  paddingBottom: 68,

  '@bp4': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(250px, 0.52fr)',
    gap: 38,
  },
  '@bp3': {
    minHeight: 0,
    gridTemplateColumns: '1fr',
    gap: 34,
    paddingTop: 42,
    paddingBottom: 52,
  },
})

export const Eyebrow = styled('p', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  margin: 0,
  color: '#FFD9C1',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.13em',
  lineHeight: 1.4,
  textTransform: 'uppercase',

  '&::before': {
    content: '',
    width: 28,
    height: 2,
    background: '$tangerine1',
  },
})

export const Title = styled('h1', {
  maxWidth: 760,
  margin: '18px 0 0',
  fontFamily: 'inherit',
  fontSize: 'clamp(42px, 5vw, 64px)',
  fontWeight: 600,
  letterSpacing: '-0.035em',
  lineHeight: 1.04,

  '& em': {
    color: '#FFC39B',
    fontStyle: 'normal',
  },

  '@bp2': {
    fontSize: 'clamp(38px, 12vw, 50px)',
  },
})

export const HeroCopy = styled('p', {
  maxWidth: 720,
  margin: '22px 0 0',
  color: 'rgba(255, 255, 255, 0.86)',
  fontSize: 18,
  lineHeight: 1.65,

  '@bp2': {
    fontSize: 16,
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  marginTop: 28,
})

const actionStyles = {
  minHeight: 50,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 22px',
  borderRadius: 12,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1.3,
  textDecoration: 'none',
  transition: 'transform 160ms ease, box-shadow 160ms ease',

  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba(254, 161, 102, 0.65)',
    outlineOffset: 3,
  },
} as const

export const PrimaryAction = styled('a', actionStyles, {
  color: '$magenta6',
  background: '$white',
  boxShadow: '0 14px 32px rgba(15, 8, 13, 0.22)',
})

export const SecondaryAction = styled('a', actionStyles, {
  color: '$white',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  background: 'rgba(255, 255, 255, 0.06)',
})

export const StateCard = styled('aside', {
  position: 'relative',
  overflow: 'hidden',
  padding: '30px 28px',
  color: '$magenta6',
  background: 'rgba(255, 255, 255, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.75)',
  borderRadius: 22,
  boxShadow: '0 24px 60px rgba(20, 10, 17, 0.26)',

  '&::after': {
    content: '',
    position: 'absolute',
    top: -46,
    right: -38,
    width: 126,
    height: 126,
    background: '$tangerine5',
    borderRadius: '50%',
    opacity: 0.65,
  },

  '@bp3': {
    maxWidth: 540,
  },
})

export const StateCode = styled('strong', {
  position: 'relative',
  zIndex: 1,
  display: 'block',
  color: '$magenta1',
  fontSize: 56,
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 1,
})

export const ServiceLabel = styled('span', {
  display: 'inline-flex',
  marginTop: 22,
  padding: '7px 10px',
  color: '$magenta7',
  background: '$offWhite1',
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.07em',
  textTransform: 'uppercase',
})

export const StateCardTitle = styled('h2', {
  margin: '14px 0 0',
  fontFamily: 'inherit',
  fontSize: 23,
  fontWeight: 650,
  lineHeight: 1.25,
})

export const StateCardCopy = styled('p', {
  margin: '11px 0 0',
  color: '$gray3',
  fontSize: 14,
  lineHeight: 1.6,
})

export const AnchorNav = styled('nav', {
  position: 'relative',
  zIndex: 2,
  marginTop: -28,

  '& > div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    background: '$white',
    border: '1px solid rgba(88, 36, 60, 0.1)',
    borderRadius: 16,
    boxShadow: '0 14px 42px rgba(64, 34, 52, 0.11)',
  },
  '& a': {
    minHeight: 58,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 14px',
    color: '$magenta6',
    borderRight: '1px solid rgba(88, 36, 60, 0.1)',
    fontSize: 13,
    fontWeight: 700,
    textAlign: 'center',
    textDecoration: 'none',
  },
  '& a:last-child': {
    borderRight: 0,
  },
  '& a:hover': {
    color: '$magenta1',
    background: '$offWhite1',
  },

  '@bp2': {
    marginTop: -18,

    '& > div': {
      gridTemplateColumns: '1fr 1fr',
    },
    '& a': {
      minHeight: 52,
      borderBottom: '1px solid rgba(88, 36, 60, 0.1)',
    },
    '& a:nth-child(2)': {
      borderRight: 0,
    },
    '& a:nth-child(n+3)': {
      borderBottom: 0,
    },
  },
})

export const Section = styled('section', {
  paddingTop: 88,
  paddingBottom: 88,

  variants: {
    tone: {
      white: { background: '$white' },
      blush: { background: '$offWhite1' },
      soft: { background: '$offWhite2' },
    },
  },
  defaultVariants: {
    tone: 'white',
  },

  '@bp3': {
    paddingTop: 68,
    paddingBottom: 68,
  },
})

export const IntroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 0.72fr) minmax(0, 1.28fr)',
  gap: 72,
  alignItems: 'start',

  '@bp3': {
    gridTemplateColumns: '1fr',
    gap: 28,
  },
})

export const Tag = styled('span', {
  display: 'inline-flex',
  color: '$magenta1',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
})

export const Heading = styled('h2', {
  maxWidth: 780,
  margin: '10px 0 0',
  color: '$magenta6',
  fontFamily: 'inherit',
  fontSize: 'clamp(31px, 3.3vw, 44px)',
  fontWeight: 600,
  letterSpacing: '-0.025em',
  lineHeight: 1.12,
})

export const LeadCopy = styled('div', {
  color: '$gray2',
  fontSize: 17,
  lineHeight: 1.75,

  '& p': {
    margin: 0,
  },
  '& p + p': {
    marginTop: 18,
  },
})

export const SectionHeader = styled('div', {
  maxWidth: 760,
  marginBottom: 38,

  '& p': {
    maxWidth: 680,
    margin: '14px 0 0',
    color: '$gray3',
    fontSize: 16,
    lineHeight: 1.7,
  },
})

export const RegionGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 16,

  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const RegionCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 180,
  padding: 26,
  background: '$white',
  border: '1px solid rgba(88, 36, 60, 0.11)',
  borderRadius: 16,
  boxShadow: '0 10px 28px rgba(74, 44, 61, 0.06)',

  '& span': {
    display: 'block',
    color: '$tangerine8',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.09em',
  },
  '& h3': {
    margin: '12px 0 0',
    color: '$magenta6',
    fontFamily: 'inherit',
    fontSize: 22,
    fontWeight: 650,
    lineHeight: 1.25,
  },
  '& p': {
    margin: '10px 0 0',
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.65,
  },
})

export const RegionAction = styled(Link, {
  color: '$magenta1',
  display: 'inline-flex',
  fontSize: 12,
  fontWeight: 750,
  marginTop: 'auto',
  paddingTop: 18,
  textDecoration: 'none',

  '&:hover, &:focus-visible': {
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
})

export const InlineCta = styled('div', {
  alignItems: 'center',
  background: '$magenta6',
  borderRadius: 16,
  color: '$white',
  display: 'flex',
  gap: 30,
  justifyContent: 'space-between',
  marginTop: 28,
  padding: '25px 28px',

  '& strong': {
    display: 'block',
    fontSize: 18,
    lineHeight: 1.3,
  },

  '& span': {
    color: 'rgba(255, 255, 255, 0.76)',
    display: 'block',
    fontSize: 13,
    lineHeight: 1.55,
    marginTop: 5,
  },

  '@bp2': {
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: 18,
    padding: 24,
  },
})

export const InlineCtaAction = styled(Link, {
  background: '$white',
  borderRadius: 9,
  color: '$magenta6',
  flexShrink: 0,
  fontSize: 13,
  fontWeight: 750,
  padding: '13px 16px',
  textAlign: 'center',
  textDecoration: 'none',
})

export const TopicGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 16,

  '@bp3': {
    gridTemplateColumns: '1fr',
  },
})

export const TopicCard = styled('article', {
  padding: 28,
  color: '$gray2',
  background: '$white',
  borderTop: '4px solid $magenta2',
  borderRadius: '0 0 16px 16px',
  boxShadow: '0 12px 34px rgba(74, 44, 61, 0.08)',

  '& strong': {
    display: 'grid',
    width: 34,
    height: 34,
    placeItems: 'center',
    color: '$magenta1',
    background: '$offWhite1',
    borderRadius: '50%',
    fontSize: 13,
  },
  '& h3': {
    margin: '18px 0 0',
    color: '$magenta6',
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 650,
    lineHeight: 1.28,
  },
  '& p': {
    margin: '10px 0 0',
    fontSize: 14,
    lineHeight: 1.68,
  },
})

export const VisitPlan = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, 1fr)',
  gap: 28,
  alignItems: 'start',
  padding: 36,
  color: '$white',
  background: '$magenta6',
  borderRadius: 20,

  '& > strong': {
    display: 'grid',
    width: 58,
    height: 58,
    placeItems: 'center',
    color: '$magenta6',
    background: '$tangerine3',
    borderRadius: 16,
    fontSize: 24,
  },
  '& h3': {
    margin: 0,
    fontFamily: 'inherit',
    fontSize: 26,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  '& p': {
    margin: '11px 0 0',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 15,
    lineHeight: 1.7,
  },

  '@bp2': {
    gridTemplateColumns: '1fr',
    gap: 18,
    padding: 26,
  },
})

export const ProcessGrid = styled('ol', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 14,
  margin: 0,
  padding: 0,
  listStyle: 'none',

  '@bp4': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const ProcessStep = styled('li', {
  padding: 24,
  background: '$white',
  border: '1px solid rgba(88, 36, 60, 0.1)',
  borderRadius: 15,

  '& > span': {
    display: 'block',
    color: '$tangerine8',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
  },
  '& h3': {
    margin: '13px 0 0',
    color: '$magenta6',
    fontFamily: 'inherit',
    fontSize: 18,
    fontWeight: 650,
    lineHeight: 1.3,
  },
  '& p': {
    margin: '9px 0 0',
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.65,
  },
})

export const FaqGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(260px, 0.6fr) minmax(0, 1.4fr)',
  gap: 72,

  '@bp3': {
    gridTemplateColumns: '1fr',
    gap: 28,
  },
})

export const Details = styled('details', {
  borderTop: '1px solid rgba(88, 36, 60, 0.16)',

  '&:last-child': {
    borderBottom: '1px solid rgba(88, 36, 60, 0.16)',
  },
  '& summary': {
    position: 'relative',
    padding: '22px 42px 22px 0',
    color: '$magenta6',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 650,
    lineHeight: 1.45,
    listStyle: 'none',
  },
  '& summary::-webkit-details-marker': {
    display: 'none',
  },
  '& summary::after': {
    content: '+',
    position: 'absolute',
    top: 19,
    right: 4,
    color: '$magenta1',
    fontSize: 25,
    fontWeight: 400,
  },
  '&[open] summary::after': {
    content: '−',
  },
  '& p': {
    margin: 0,
    padding: '0 42px 22px 0',
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.7,
  },
})

export const RelatedGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 14,

  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const RelatedLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  padding: '22px 24px',
  color: '$magenta6',
  background: '$white',
  border: '1px solid rgba(88, 36, 60, 0.11)',
  borderRadius: 14,
  fontSize: 16,
  fontWeight: 650,
  textDecoration: 'none',
  transition: 'transform 160ms ease, border-color 160ms ease',

  '& span': {
    color: '$magenta1',
    fontSize: 20,
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: '$magenta3',
  },
})

export const FinalCta = styled('section', {
  paddingTop: 76,
  paddingBottom: 76,
  color: '$white',
  background: 'linear-gradient(120deg, $magenta6, $magenta8)',
  textAlign: 'center',

  '& h2': {
    maxWidth: 720,
    margin: '0 auto',
    fontFamily: 'inherit',
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 600,
    letterSpacing: '-0.025em',
    lineHeight: 1.12,
  },
  '& p': {
    maxWidth: 680,
    margin: '16px auto 0',
    color: 'rgba(255, 255, 255, 0.82)',
    fontSize: 16,
    lineHeight: 1.7,
  },
  '& > div > div': {
    justifyContent: 'center',
  },
})

export const Disclaimer = styled('p', {
  maxWidth: 850,
  margin: '30px auto 0',
  color: 'rgba(255, 255, 255, 0.66) !important',
  fontSize: '12px !important',
  lineHeight: '1.6 !important',
})
