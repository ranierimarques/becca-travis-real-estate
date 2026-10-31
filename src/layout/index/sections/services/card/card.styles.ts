import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const TopWrapper = styled('div', {
  position: 'relative',
  background: '$offWhite2',
  overflow: 'hidden',
  height: 190,
  '& img': { transition: 'transform 300ms ease' },
})

export const Link = styled(NextLink, {
  boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',
  borderRadius: '8px',
  overflow: 'hidden',
  flexGrow: 1,
  flexBasis: 0,

  display: 'flex',
  flexDirection: 'column',

  span: {
    transition: 'all 300ms ease',
  },

  '@bp4': {
    flexGrow: 0,
    flexBasis: '328px',
  },
  '@bp3': {
    flexBasis: '272px',
  },
  '@bp2': {
    flexBasis: 'auto',
    maxWidth: '327px',
  },

  '&:hover': {
    [`& ${TopWrapper} img`]: { transform: 'scale(1.035)' },
    span: { background: '$$primaryColor', color: '$$secondaryColor' },
  },
  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
    [`& ${TopWrapper} img`]: { transform: 'scale(1.035)' },
    span: { background: '$$primaryColor', color: '$$secondaryColor' },
  },
})

export const BottomWrapper = styled('div', {
  background: '$white',
  filter: 'drop-shadow(0px -8px 15px rgba(0, 0, 0, 0.1))',
  padding: '24px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
})

export const Title = styled('h3', {
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '24px',
  color: '$gray2',
})

export const Description = styled('p', {
  marginTop: '8px',

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$gray4',

  flex: 1,
})
