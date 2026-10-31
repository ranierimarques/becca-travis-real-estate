import { styled } from 'stitches.config'

export const SkipLink = styled('a', {
  position: 'fixed',
  left: 16,
  top: -80,
  zIndex: 100,
  padding: '12px 18px',
  background: '$white',
  color: '$magenta1',
  borderRadius: 5,
  boxShadow: '0 8px 24px rgba(61, 26, 44, 0.18)',

  '&:focus': {
    top: 12,
  },
})

export const Hero = styled('section', {
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  color: '$white',
  backgroundPosition: 'center 55%',
  backgroundSize: 'cover',
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
    paddingLeft: 32,
    paddingRight: 32,
  },
  '@bp2': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '@bp1': {
    paddingLeft: 16,
    paddingRight: 16,
  },
})

export const HeroGrid = styled('div', {
  minHeight: 520,
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  justifyItems: 'center',
  paddingTop: 62,
  paddingBottom: 64,

  '@bp4': {
    minHeight: 500,
    paddingTop: 56,
    paddingBottom: 58,
  },
  '@bp2': {
    minHeight: 0,
    paddingTop: 48,
    paddingBottom: 52,
  },
})

export const HeroContent = styled('div', {
  width: '100%',
  maxWidth: 900,
  textAlign: 'center',
})

export const Eyebrow = styled('p', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 18,
  color: '#FFD8BD',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.14em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
  justifyContent: 'center',

  '&::before': {
    content: '',
    width: 32,
    height: 2,
    flexShrink: 0,
    background: '$tangerine1',
  },
})

export const HeroTitle = styled('h1', {
  maxWidth: 900,
  margin: '0 auto',
  fontFamily: 'inherit',
  fontSize: 'clamp(40px, 4.5vw, 58px)',
  fontWeight: 600,
  lineHeight: 1.08,
  letterSpacing: '-0.03em',

  '& em': {
    color: '#FFC29A',
    fontStyle: 'normal',
  },

  '@bp2': {
    fontSize: 'clamp(36px, 10.5vw, 48px)',
  },
})

export const HeroLede = styled('p', {
  maxWidth: 760,
  margin: '18px auto 0',
  color: 'rgba($colors$whiteRgb, 0.86)',
  fontSize: 'clamp(16px, 1.5vw, 18px)',
  lineHeight: 1.6,
})

export const BuyerPrompt = styled('a', {
  width: 'min(760px, 100%)',
  minHeight: 66,
  display: 'grid',
  gridTemplateColumns: '42px 1fr auto',
  alignItems: 'center',
  gap: 12,
  margin: '26px auto 0',
  padding: '8px 9px 8px 16px',
  color: '$gray1',
  background: 'rgba($colors$whiteRgb, 0.98)',
  border: '1px solid rgba($colors$whiteRgb, 0.72)',
  borderRadius: 18,
  boxShadow: '0 16px 44px rgba(16, 10, 16, 0.28)',
  textAlign: 'left',
  transition: 'transform 160ms ease, box-shadow 160ms ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 20px 52px rgba(16, 10, 16, 0.34)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.7)',
    outlineOffset: 3,
  },

  '@bp2': {
    gridTemplateColumns: '34px 1fr auto',
    gap: 8,
    paddingLeft: 12,
    borderRadius: 14,
  },
})

export const PromptIcon = styled('span', {
  width: 38,
  height: 38,
  display: 'grid',
  placeItems: 'center',
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.52)',
  borderRadius: '50%',
  fontSize: 19,

  '@bp2': {
    width: 32,
    height: 32,
  },
})

export const PromptText = styled('span', {
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',

  '& small': {
    color: '$gray4',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.08em',
    lineHeight: 1.3,
    textTransform: 'uppercase',
  },
  '& strong': {
    color: '$magenta6',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 1.35,
  },

  '@bp2': {
    '& small': {
      display: 'none',
    },
    '& strong': {
      fontSize: 14,
    },
  },
})

export const PromptButton = styled('span', {
  minHeight: 48,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 22px',
  color: '$white',
  background: '$magenta1',
  borderRadius: 12,
  fontSize: 13,
  fontWeight: 700,
  whiteSpace: 'nowrap',

  '@bp2': {
    minHeight: 42,
    padding: '0 13px',
    borderRadius: 10,
    fontSize: 12,
  },
})

export const RouteLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 8,
  marginTop: 14,

  '& a': {
    padding: '7px 12px',
    color: 'rgba($colors$whiteRgb, 0.86)',
    background: 'rgba($colors$whiteRgb, 0.1)',
    border: '1px solid rgba($colors$whiteRgb, 0.2)',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 500,
  },
  '& a:hover': {
    color: '$white',
    background: 'rgba($colors$whiteRgb, 0.17)',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  marginTop: 32,

  '@bp2': {
    flexDirection: 'column',
  },

  variants: {
    centered: {
      true: {
        justifyContent: 'center',
      },
    },
  },
})

const actionStyles = {
  minHeight: 52,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 9,
  padding: '0 24px',
  borderRadius: 5,
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: 'center' as const,
  transition: 'transform 160ms ease, background 160ms ease, border-color 160ms ease',

  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.55)',
    outlineOffset: 3,
  },
  '@bp2': {
    width: '100%',
  },
}

export const PrimaryAction = styled('a', actionStyles, {
  background: '$magenta1',
  color: '$white',
  boxShadow: '0 10px 24px rgba($colors$magenta1Rgb, 0.28)',

  '&:hover': {
    background: '$magenta9',
  },
})

export const SecondaryAction = styled('a', actionStyles, {
  color: '$white',
  background: 'rgba($colors$whiteRgb, 0.06)',
  border: '1px solid rgba($colors$whiteRgb, 0.38)',

  '&:hover': {
    background: 'rgba($colors$whiteRgb, 0.12)',
  },
})

export const LightAction = styled('a', actionStyles, {
  color: '$magenta6',
  background: '$white',

  '&:hover': {
    background: '$offWhite1',
  },
})

export const ProofList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 22px',
  justifyContent: 'center',
  marginTop: 18,
  color: 'rgba($colors$whiteRgb, 0.76)',
  fontSize: 13,

  '& span::before': {
    content: '✓',
    marginRight: 7,
    color: '#FFC29A',
    fontWeight: 700,
  },

  '@bp2': {
    display: 'none',
  },
})

export const HeroCard = styled('aside', {
  position: 'relative',
  padding: 34,
  overflow: 'hidden',
  color: '$gray1',
  background: 'rgba($colors$whiteRgb, 0.97)',
  borderTop: '5px solid $tangerine1',
  borderRadius: 6,
  boxShadow: '0 24px 70px rgba(61, 26, 44, 0.2)',

  '&::before': {
    content: '"50"',
    position: 'absolute',
    right: 18,
    top: 10,
    color: 'rgba($colors$magenta1Rgb, 0.08)',
    fontSize: 90,
    fontWeight: 600,
    lineHeight: 1,
  },

  '@bp4': {
    maxWidth: 620,
  },
  '@bp2': {
    padding: '28px 24px',
  },
})

export const HeroCardLabel = styled('span', {
  position: 'relative',
  color: '$magenta1',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
})

export const HeroCardTitle = styled('h2', {
  position: 'relative',
  marginTop: 13,
  marginBottom: 20,
  color: '$magenta6',
  fontSize: 30,
  fontWeight: 500,
  lineHeight: 1.18,

  '@bp2': {
    fontSize: 27,
  },
})

export const MiniStep = styled('div', {
  display: 'grid',
  gridTemplateColumns: '34px 1fr',
  alignItems: 'start',
  gap: 13,
  padding: '14px 0',
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.17)',

  '& strong': {
    display: 'block',
    color: '$magenta6',
    fontSize: 14,
  },
  '& p': {
    marginTop: 2,
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.45,
  },
})

export const MiniNumber = styled('span', {
  width: 30,
  height: 30,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.65)',
  fontSize: 12,
  fontWeight: 700,
})

export const TrustStrip = styled('div', {
  background: '$white',
  borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.17)',
})

export const TrustGrid = styled('div', {
  minHeight: 84,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  alignItems: 'stretch',

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const TrustItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '13px 20px',
  textAlign: 'center',
  borderRight: '1px solid rgba($colors$magenta1Rgb, 0.17)',

  '&:last-child': {
    borderRight: 0,
  },
  '& strong': {
    display: 'block',
    color: '$magenta6',
    fontSize: 17,
    fontWeight: 500,
  },
  '& span': {
    color: '$gray4',
    fontSize: 11,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },

  '@bp2': {
    minHeight: 92,
    padding: '14px 10px',

    '&:nth-child(2)': {
      borderRight: 0,
    },
    '&:nth-child(-n+2)': {
      borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.17)',
    },
  },
})

export const Section = styled('section', {
  paddingTop: 76,
  paddingBottom: 76,
  scrollMarginTop: 32,

  '@bp4': {
    paddingTop: 68,
    paddingBottom: 68,
  },
  '@bp2': {
    paddingTop: 58,
    paddingBottom: 58,
  },

  variants: {
    tone: {
      blush: {
        background: '#FFF8F4',
      },
      white: {
        background: '$white',
      },
    },
  },
})

export const SectionTag = styled('span', {
  minHeight: 34,
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 16px',
  borderRadius: 999,
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.62)',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
})

export const SectionHeading = styled('h2', {
  maxWidth: 760,
  marginTop: 14,
  color: '$magenta6',
  fontSize: 'clamp(32px, 3.5vw, 44px)',
  fontWeight: 500,
  lineHeight: 1.1,
  letterSpacing: '-0.025em',

  '@bp2': {
    fontSize: 34,
  },
})

export const SectionCopy = styled('p', {
  maxWidth: 720,
  marginTop: 16,
  color: '$gray3',
  fontSize: 16,
  lineHeight: 1.7,
})

export const Centered = styled('div', {
  textAlign: 'center',

  [`& ${SectionHeading}, & ${SectionCopy}`]: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export const RelationshipGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.82fr 1.18fr',
  alignItems: 'center',
  gap: 64,

  '@bp4': {
    gridTemplateColumns: '1fr',
    gap: 60,
  },
  '@bp2': {
    gap: 48,
  },
})

export const PortraitWrap = styled('div', {
  position: 'relative',
  minHeight: 450,

  '&::before': {
    content: '',
    position: 'absolute',
    left: -24,
    top: -24,
    zIndex: -1,
    width: '64%',
    height: '64%',
    background: 'rgba($colors$tangerine5Rgb, 0.55)',
  },

  '@bp4': {
    maxWidth: 610,
  },
  '@bp2': {
    minHeight: 430,
  },
})

export const PortraitMedia = styled('div', {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  background: '$offWhite2',
  boxShadow: '0 24px 70px rgba(61, 26, 44, 0.14)',
})

export const PortraitNote = styled('p', {
  position: 'absolute',
  right: -28,
  bottom: 24,
  maxWidth: 270,
  padding: '17px 18px',
  color: '$magenta6',
  background: '$white',
  borderLeft: '4px solid $tangerine1',
  boxShadow: '0 16px 45px rgba(61, 26, 44, 0.18)',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1.45,

  '@bp2': {
    right: 14,
    bottom: 18,
    maxWidth: 'calc(100% - 28px)',
  },
})

export const RelationshipCopy = styled('div', {
  '& p': {
    marginTop: 14,
    color: '$gray3',
    fontSize: 16,
    lineHeight: 1.7,
  },
  '& p:first-of-type': {
    color: '$magenta6',
    fontSize: 19,
    fontWeight: 500,
    lineHeight: 1.45,
  },
})

export const Signature = styled('div', {
  marginTop: 20,
  color: '$magenta1',
  fontSize: 22,
  fontStyle: 'italic',
  fontWeight: 500,
})

export const CardGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 16,
  marginTop: 36,

  '@bp4': {
    gridTemplateColumns: '1fr',
  },
})

export const FeatureCard = styled('article', {
  position: 'relative',
  minHeight: 230,
  padding: '28px 26px',
  overflow: 'hidden',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.17)',

  '&::after': {
    content: 'attr(data-number)',
    position: 'absolute',
    right: 14,
    bottom: -22,
    color: 'rgba($colors$magenta1Rgb, 0.07)',
    fontSize: 106,
    fontWeight: 600,
    lineHeight: 1,
  },
  '& h3': {
    marginTop: 18,
    color: '$magenta6',
    fontSize: 22,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  '& p': {
    position: 'relative',
    zIndex: 1,
    marginTop: 12,
    color: '$gray3',
    lineHeight: 1.65,
  },

  '@bp4': {
    minHeight: 0,
  },
})

export const IconCircle = styled('div', {
  width: 46,
  height: 46,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.62)',
  fontSize: 20,
})

export const PathsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 18,
  marginTop: 36,

  '@bp3': {
    gridTemplateColumns: '1fr',
  },
})

export const PathCard = styled('article', {
  position: 'relative',
  padding: 34,
  overflow: 'hidden',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.17)',

  '& h3': {
    position: 'relative',
    marginTop: 16,
    color: '$magenta6',
    fontSize: 29,
    fontWeight: 500,
    lineHeight: 1.13,
  },
  '& p': {
    position: 'relative',
    maxWidth: 500,
    marginTop: 16,
    color: '$gray3',
    lineHeight: 1.7,
  },

  variants: {
    featured: {
      true: {
        color: '$white',
        background: '$magenta6',
        borderColor: '$magenta6',

        '& h3': {
          color: '$white',
        },
        '& p': {
          color: 'rgba($colors$whiteRgb, 0.78)',
        },
      },
    },
  },

  '@bp2': {
    padding: '34px 28px',
  },
})

export const ReferralNote = styled('small', {
  color: 'rgba($colors$whiteRgb, 0.74)',
  display: 'block',
  fontSize: 11,
  lineHeight: 1.5,
  marginTop: 14,
})

export const StateCount = styled('span', {
  position: 'absolute',
  right: 22,
  top: 12,
  color: 'rgba($colors$magenta1Rgb, 0.08)',
  fontSize: 96,
  fontWeight: 600,
  lineHeight: 1,

  variants: {
    light: {
      true: {
        color: 'rgba($colors$whiteRgb, 0.07)',
      },
    },
  },
})

export const PathLabel = styled('span', {
  position: 'relative',
  color: '$tangerine1',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
})

export const TextLink = styled('a', {
  position: 'relative',
  display: 'inline-flex',
  marginTop: 20,
  color: '$magenta1',
  fontWeight: 700,

  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    light: {
      true: {
        color: '#FFC29A',
      },
    },
  },
})

export const ProcessHeader = styled('div', {
  marginTop: 62,

  '@bp2': {
    marginTop: 48,
  },
})

export const ProcessList = styled('div', {
  marginTop: 30,
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.17)',
})

export const ProcessRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '90px minmax(220px, 0.72fr) 1.28fr',
  alignItems: 'start',
  gap: 32,
  padding: '24px 12px',
  borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.17)',

  '& h3': {
    color: '$magenta6',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.3,
  },
  '& p': {
    color: '$gray3',
    lineHeight: 1.7,
  },

  '@bp3': {
    gridTemplateColumns: '58px 1fr',
    gap: 18,

    '& p': {
      gridColumn: 2,
    },
  },
})

export const ProcessNumber = styled('div', {
  color: '$magenta1',
  fontSize: 28,
  fontWeight: 500,
  lineHeight: 1,
})

export const AudienceGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 12,
  marginTop: 44,

  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const AudienceItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 13,
  padding: 21,
  background: '#FFF8F4',
  borderLeft: '3px solid $tangerine1',

  '& span': {
    color: '$magenta1',
    fontWeight: 700,
  },
  '& p': {
    color: '$gray2',
    fontSize: 14,
    lineHeight: 1.55,
  },
})

export const FaqGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.72fr 1.28fr',
  alignItems: 'start',
  gap: 60,

  '@bp4': {
    gridTemplateColumns: '1fr',
    gap: 48,
  },
})

export const Details = styled('details', {
  borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.22)',

  '& summary': {
    position: 'relative',
    padding: '20px 42px 20px 0',
    color: '$magenta6',
    cursor: 'pointer',
    listStyle: 'none',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.35,
  },
  '& summary::-webkit-details-marker': {
    display: 'none',
  },
  '& summary::after': {
    content: '+',
    position: 'absolute',
    right: 4,
    top: 15,
    color: '$magenta1',
    fontSize: 30,
    fontWeight: 400,
    lineHeight: 1,
  },
  '&[open] summary::after': {
    content: '−',
  },
  '& p': {
    marginTop: -6,
    paddingRight: 42,
    paddingBottom: 20,
    color: '$gray3',
    lineHeight: 1.7,
  },
})

export const FinalCta = styled('section', {
  position: 'relative',
  isolation: 'isolate',
  paddingTop: 76,
  paddingBottom: 76,
  color: '$white',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  '& h2': {
    maxWidth: 800,
    margin: '22px auto 0',
    fontSize: 'clamp(38px, 4.5vw, 52px)',
    fontWeight: 500,
    lineHeight: 1.08,
  },
  '& p': {
    maxWidth: 720,
    margin: '22px auto 0',
    color: 'rgba($colors$whiteRgb, 0.8)',
    fontSize: 16,
    lineHeight: 1.65,
  },

  '@bp2': {
    paddingTop: 62,
    paddingBottom: 62,
  },
})

export const DarkTag = styled(SectionTag, {
  color: '#FFD8BD',
  background: 'rgba($colors$whiteRgb, 0.1)',
})

export const ContactAnchor = styled('div', {
  scrollMarginTop: 32,
})

export const MobileCta = styled('a', {
  position: 'fixed',
  left: 12,
  right: 12,
  bottom: 12,
  zIndex: 60,
  minHeight: 52,
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 18px',
  color: '$white',
  background: '$magenta1',
  borderRadius: 5,
  boxShadow: '0 12px 36px rgba(61, 26, 44, 0.35)',
  fontSize: 14,
  fontWeight: 700,
  textAlign: 'center',

  variants: {
    visible: {
      true: {
        '@bp2': {
          display: 'flex',
        },
      },
    },
  },
})

export const PlannerSection = styled('section', {
  paddingTop: 76,
  paddingBottom: 76,
  background: '#FFF8F4',
  scrollMarginTop: 24,

  '@bp4': {
    paddingTop: 68,
    paddingBottom: 68,
  },
  '@bp2': {
    paddingTop: 56,
    paddingBottom: 56,
  },
})

export const PlannerHeading = styled('div', {
  textAlign: 'center',

  '& h2': {
    maxWidth: 880,
    margin: '0 auto',
    color: '$magenta6',
    fontSize: 'clamp(34px, 4vw, 50px)',
    fontWeight: 500,
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
  },
  '& p': {
    marginTop: 14,
    color: '$gray3',
    fontSize: 17,
    lineHeight: 1.55,
  },

  '@bp2': {
    textAlign: 'left',

    '& h2': {
      fontSize: 34,
    },
    '& p': {
      fontSize: 15,
    },
  },
})

export const SelectedDestination = styled('span', {
  alignItems: 'center',
  background: '#f8e7e1',
  borderRadius: 999,
  color: '#694252',
  display: 'inline-flex',
  flexWrap: 'wrap',
  fontSize: 13,
  gap: 4,
  marginTop: 14,
  padding: '8px 12px',

  '& a': {
    color: '$magenta1',
    fontWeight: 800,
    marginLeft: 6,
  },
})

export const PlannerShell = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.35fr 0.9fr',
  marginTop: 36,
  overflow: 'hidden',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.18)',
  borderRadius: 16,
  boxShadow: '0 20px 56px rgba(61, 26, 44, 0.08)',

  '@bp4': {
    gridTemplateColumns: '1fr',
  },
  '@bp2': {
    marginTop: 28,
    borderRadius: 12,
  },
})

export const PlannerQuestions = styled('div', {
  padding: 34,

  '@bp2': {
    padding: 22,
  },
})

export const PlannerSteps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
  gap: 6,

  '& button': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: 0,
    color: '$gray4',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 13,
    fontWeight: 600,
    textAlign: 'center',
  },
  '& button b': {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.2,
  },
  '& button span': {
    width: 32,
    height: 32,
    display: 'grid',
    placeItems: 'center',
    flexShrink: 0,
    color: '$gray3',
    background: 'rgba($colors$tangerine5Rgb, 0.45)',
    borderRadius: '50%',
    fontSize: 12,
  },
  '& button[aria-current="step"]': {
    color: '$magenta6',
  },
  '& button[aria-current="step"] span': {
    color: '$white',
    background: '$tangerine1',
  },
  '& button:focus-visible': {
    outline: '2px solid rgba($colors$magenta1Rgb, 0.55)',
    outlineOffset: 4,
    borderRadius: 4,
  },

  '@bp2': {
    gap: 4,

    '& button': {
      gap: 4,
    },
    '& button span': {
      width: 26,
      height: 26,
    },
    '& button b': {
      display: 'none',
    },
  },
})

export const PlannerProgress = styled('div', {
  width: '100%',
  height: 3,
  marginTop: 16,
  overflow: 'hidden',
  background: 'rgba($colors$magenta1Rgb, 0.1)',
  borderRadius: 999,

  '& span': {
    height: '100%',
    display: 'block',
    background: '$tangerine1',
    borderRadius: 'inherit',
    transition: 'width 180ms ease',
  },
})

export const QuestionHeader = styled('div', {
  marginTop: 32,

  '& h3': {
    color: '$magenta6',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  '& p': {
    marginTop: 7,
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.55,
  },

  '@bp2': {
    marginTop: 26,

    '& h3': {
      fontSize: 23,
    },
  },
})

export const OptionList = styled('div', {
  display: 'grid',
  gap: 10,
  marginTop: 22,
})

export const OptionButton = styled('button', {
  minHeight: 54,
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  width: '100%',
  padding: '10px 16px',
  color: '$magenta6',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.18)',
  borderRadius: 9,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 15,
  fontWeight: 500,
  textAlign: 'left',
  transition: 'border-color 150ms ease, background 150ms ease, transform 150ms ease',

  '& > span': {
    width: 22,
    height: 22,
    position: 'relative',
    flexShrink: 0,
    background: '$white',
    border: '2px solid rgba($colors$magenta1Rgb, 0.32)',
    borderRadius: '50%',
  },
  '&:hover': {
    borderColor: 'rgba($colors$magenta1Rgb, 0.48)',
    transform: 'translateY(-1px)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.35)',
    outlineOffset: 2,
  },

  variants: {
    selected: {
      true: {
        background: 'rgba($colors$tangerine5Rgb, 0.25)',
        borderColor: '$tangerine1',

        '& > span': {
          borderColor: '$tangerine1',
        },
        '& > span::after': {
          content: '',
          position: 'absolute',
          inset: 4,
          background: '$tangerine1',
          borderRadius: '50%',
        },
      },
    },
  },
})

export const PlanResult = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  padding: 34,
  background: 'rgba($colors$tangerine5Rgb, 0.18)',
  borderLeft: '1px solid rgba($colors$magenta1Rgb, 0.14)',

  '& > h3': {
    color: '$magenta6',
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 1.15,
  },
  '& > p': {
    marginTop: 8,
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.55,
  },

  '@bp4': {
    borderLeft: 0,
    borderTop: '1px solid rgba($colors$magenta1Rgb, 0.14)',
  },
  '@bp2': {
    padding: 22,

    '& > h3': {
      fontSize: 27,
    },
  },
})

export const GuidanceList = styled('ul', {
  display: 'grid',
  gap: 18,
  marginTop: 24,

  '& li': {
    display: 'grid',
    gridTemplateColumns: '42px 1fr',
    alignItems: 'start',
    gap: 12,
  },
  '& strong': {
    display: 'block',
    color: '$magenta6',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.35,
  },
  '& li div > span': {
    display: 'block',
    marginTop: 3,
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.5,
  },
})

export const GuidanceIcon = styled('span', {
  width: 42,
  height: 42,
  display: 'grid',
  placeItems: 'center',
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.72)',
  borderRadius: '50%',

  '& svg': {
    width: 20,
    height: 20,
  },
})

export const PlanFacts = styled('ul', {
  display: 'grid',
  gap: 7,
  gridTemplateColumns: '1fr 1fr',
  marginTop: 20,

  '& li': {
    background: 'rgba($colors$whiteRgb, 0.72)',
    border: '1px solid rgba($colors$magenta1Rgb, 0.11)',
    borderRadius: 6,
    padding: '9px 10px',
  },

  '& span': {
    color: '$gray4',
    display: 'block',
    fontSize: 9,
    fontWeight: 750,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },

  '& strong': {
    color: '$magenta6',
    display: 'block',
    fontSize: 11,
    lineHeight: 1.35,
    marginTop: 3,
  },

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})

export const PlannerButton = styled('button', {
  minHeight: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  marginTop: 'auto',
  padding: '0 20px',
  color: '$white',
  background: '$magenta1',
  border: 0,
  borderRadius: 7,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 700,

  '&:hover:not(:disabled)': {
    background: '$magenta9',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.45)',
    outlineOffset: 3,
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.45,
  },
  '& svg': {
    width: 18,
    height: 18,
  },

  '@bp4': {
    marginTop: 28,
  },
})

export const PlannerTextLink = styled('a', {
  alignSelf: 'center',
  marginTop: 14,
  color: '$magenta1',
  fontSize: 13,
  fontWeight: 600,

  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
})

export const QuickLeadForm = styled('form', {
  marginTop: 24,
  paddingTop: 22,
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.16)',

  '& h4': {
    color: '$magenta6',
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  '& > p': {
    marginTop: 6,
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.5,
  },
})

export const ContactChoice = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
  marginTop: 16,
  padding: 4,
  background: 'rgba($colors$magenta1Rgb, 0.07)',
  borderRadius: 9,

  '& button': {
    minHeight: 40,
    padding: '8px 10px',
    color: '$magenta6',
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: 7,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: 650,
  },
  '& button[data-selected="true"]': {
    background: '$white',
    borderColor: 'rgba($colors$magenta1Rgb, 0.18)',
    boxShadow: '0 3px 12px rgba($colors$magenta1Rgb, 0.08)',
  },
  '& button:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.35)',
    outlineOffset: 1,
  },

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})

export const QuickLeadGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  marginTop: 16,

  '& label': {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  '& label span': {
    color: '$magenta6',
    fontSize: 11,
    fontWeight: 600,
  },
  '& input, & textarea': {
    width: '100%',
    minHeight: 42,
    padding: '10px 11px',
    color: '$gray1',
    background: '$white',
    border: '1px solid rgba($colors$magenta1Rgb, 0.2)',
    borderRadius: 6,
    fontFamily: 'inherit',
    fontSize: 13,
    resize: 'vertical',
  },
  '& input:focus, & textarea:focus': {
    borderColor: '$magenta1',
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.22)',
  },

  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const QuickLeadWide = styled('label', {
  gridColumn: '1 / -1',
})

export const QuickLeadConsent = styled('p', {
  marginTop: 12,
  color: '$gray4',
  fontSize: 10,
  lineHeight: 1.45,

  '& a': {
    color: '$magenta1',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  },
})

export const FieldError = styled('small', {
  color: '#9d1f45',
  display: 'block',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1.35,
  marginTop: 6,
})

export const QuickLeadSubmit = styled('button', {
  width: '100%',
  minHeight: 48,
  marginTop: 14,
  padding: '0 18px',
  color: '$white',
  background: '$magenta1',
  border: 0,
  borderRadius: 7,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 13,
  fontWeight: 700,

  '&:hover:not(:disabled)': {
    background: '$magenta9',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.45)',
    outlineOffset: 3,
  },
  '&:disabled': {
    cursor: 'wait',
    opacity: 0.65,
  },
})

export const LeadError = styled('p', {
  marginTop: 10,
  color: '$red1',
  fontSize: 12,
  lineHeight: 1.45,

  '& a': {
    color: 'inherit',
    fontWeight: 700,
    textDecoration: 'underline',
  },
})

export const LeadSuccess = styled('div', {
  display: 'grid',
  gridTemplateColumns: '38px 1fr',
  alignItems: 'start',
  gap: 12,
  marginTop: 24,
  padding: 18,
  color: '$magenta6',
  background: '$white',
  border: '1px solid rgba($colors$magenta1Rgb, 0.18)',
  borderRadius: 8,

  '& > svg': {
    width: 32,
    height: 32,
    color: '$magenta1',
  },
  '& strong': {
    display: 'block',
    fontSize: 16,
  },
  '& span': {
    display: 'block',
    marginTop: 4,
    color: '$gray3',
    fontSize: 12,
    lineHeight: 1.5,
  },
  '& a': {
    display: 'inline-block',
    marginTop: 8,
    color: '$magenta1',
    fontSize: 12,
    fontWeight: 700,
  },
})

export const ValueSection = styled('section', {
  paddingTop: 78,
  paddingBottom: 78,
  background: '$white',
  scrollMarginTop: 24,

  '@bp4': {
    paddingTop: 68,
    paddingBottom: 68,
  },
  '@bp2': {
    paddingTop: 56,
    paddingBottom: 56,
  },
})

export const ValueHeading = styled('div', {
  textAlign: 'center',

  '& h2': {
    maxWidth: 760,
    margin: '0 auto',
    color: '$magenta6',
    fontSize: 'clamp(34px, 4vw, 50px)',
    fontWeight: 500,
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
  },
  '& p': {
    marginTop: 14,
    color: '$gray3',
    fontSize: 17,
    lineHeight: 1.55,
  },

  '@bp2': {
    textAlign: 'left',

    '& h2': {
      fontSize: 34,
    },
    '& p': {
      fontSize: 15,
    },
  },
})

export const Deliverables = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: 22,
  marginTop: 42,

  '@bp4': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
    gap: 0,
    marginTop: 30,
  },
})

export const Deliverable = styled('article', {
  minWidth: 0,

  '& h3': {
    marginTop: 18,
    color: '$magenta6',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  '& p': {
    marginTop: 8,
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.6,
  },

  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '54px 1fr',
    columnGap: 14,
    padding: '20px 0',
    borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.16)',

    '& h3': {
      marginTop: 1,
    },
    '& p': {
      gridColumn: 2,
    },
  },
})

export const DeliverableTop = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  '& > span': {
    color: 'rgba($colors$tangerine1Rgb, 0.82)',
    fontSize: 31,
    fontWeight: 500,
    lineHeight: 1,
  },

  '@bp2': {
    gridRow: '1 / span 2',
    alignItems: 'flex-start',

    '& > span': {
      display: 'none',
    },
  },
})

export const DeliverableIcon = styled('span', {
  width: 50,
  height: 50,
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
  color: '$magenta1',
  background: 'rgba($colors$tangerine5Rgb, 0.62)',
  borderRadius: '50%',

  '& svg': {
    width: 23,
    height: 23,
  },
})

export const TimelineHeader = styled('div', {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  gap: 32,
  marginTop: 58,
  paddingTop: 44,
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.16)',

  '& h3': {
    color: '$magenta6',
    fontSize: 'clamp(28px, 3vw, 38px)',
    fontWeight: 500,
    lineHeight: 1.15,
  },
  '& p': {
    maxWidth: 680,
    marginTop: 9,
    color: '$gray3',
    fontSize: 14,
    lineHeight: 1.6,
  },
  '& > a': {
    flexShrink: 0,
    color: '$magenta1',
    fontSize: 13,
    fontWeight: 700,
  },
  '& > a:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },

  '@bp3': {
    alignItems: 'start',
    flexDirection: 'column',
    gap: 14,
  },
})

export const MoveTimeline = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: 26,
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.18)',
  borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.18)',

  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
  },
})

export const TimelinePhase = styled('article', {
  padding: '26px 24px 28px',
  borderRight: '1px solid rgba($colors$magenta1Rgb, 0.16)',

  '&:last-child': {
    borderRight: 0,
  },
  '& > span': {
    color: '$tangerine1',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  '& h4': {
    marginTop: 8,
    color: '$magenta6',
    fontSize: 19,
    fontWeight: 500,
    lineHeight: 1.3,
  },
  '& ul': {
    display: 'grid',
    gap: 9,
    marginTop: 14,
  },
  '& li': {
    position: 'relative',
    paddingLeft: 17,
    color: '$gray3',
    fontSize: 13,
    lineHeight: 1.5,
  },
  '& li::before': {
    content: '✓',
    position: 'absolute',
    left: 0,
    color: '$magenta1',
    fontWeight: 700,
  },

  '@bp4': {
    '&:nth-child(2)': {
      borderRight: 0,
    },
    '&:nth-child(-n+2)': {
      borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.16)',
    },
  },
  '@bp2': {
    borderRight: 0,
    borderBottom: '1px solid rgba($colors$magenta1Rgb, 0.16)',

    '&:last-child': {
      borderBottom: 0,
    },
  },
})

export const ValueCallout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: 54,
  marginTop: 54,
  padding: '34px 42px',
  background: 'rgba($colors$tangerine5Rgb, 0.34)',
  borderRadius: 12,

  '& h3': {
    color: '$magenta6',
    fontSize: 'clamp(29px, 3vw, 40px)',
    fontWeight: 500,
    lineHeight: 1.15,
  },
  '& p': {
    color: '$gray3',
    fontSize: 15,
    lineHeight: 1.6,
  },

  '@bp3': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },
  '@bp2': {
    marginTop: 34,
    padding: '28px 22px',
  },
})

export const ValueAction = styled('a', {
  minHeight: 50,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: 18,
  padding: '0 22px',
  color: '$white',
  background: '$magenta1',
  borderRadius: 7,
  fontSize: 14,
  fontWeight: 700,
  textAlign: 'center',

  '&:hover': {
    background: '$magenta9',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.45)',
    outlineOffset: 3,
  },
})
