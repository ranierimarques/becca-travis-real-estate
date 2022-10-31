import { styled } from 'stitches.config'
import { Circles as CirclesSvg } from '../svgs'

export const TopWrapper = styled('div', {
  position: 'relative',
  background: 'rgba($colors$magenta5Rgb, 0.2)',
  overflow: 'hidden',

  padding: '20px 28px 0',
  maxHeight: '231px',

  transition: 'background 300ms ease',
})

export const ImageWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  top: 8,

  transition: 'transform 300ms ease',
})

export const Link = styled('a', {
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

  '&:hover': {
    [`& ${ImageWrapper}`]: { transform: 'translateY(-8px)' },
    [`& ${TopWrapper}`]: { background: 'rgba($colors$magenta5Rgb, 0.6)' },
    span: { background: '$$primaryColor', color: '$$secondaryColor' },
  },
  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
    [`& ${ImageWrapper}`]: { transform: 'translateY(-8px)' },
    [`& ${TopWrapper}`]: { background: 'rgba($colors$magenta5Rgb, 0.6)' },
    span: { background: '$$primaryColor', color: '$$secondaryColor' },
  },
})

export const Circles = styled(CirclesSvg, {
  position: 'absolute',
  inset: 0,
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
