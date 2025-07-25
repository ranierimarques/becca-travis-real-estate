import NextLink from 'next/link'
import { keyframes, styled } from 'stitches.config'
import { Heart as HeartSvg } from '../svgs'

const scaleIn = keyframes({
  from: {
    transform: 'rotateX(0deg) scale(1)',
    filter: 'drop-shadow(0px 0px 15px rgba($colors$tangerine1Rgb, 0.8))',
  },
  to: {
    transform: 'rotateX(-15deg) scale(0.85)',
    filter: 'drop-shadow(0px 0px 10px rgba($colors$tangerine1Rgb, 0.5))',
  },
})

export const MadeBy = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '$gray3',

  '@bp4': {
    order: 3,
  },
})

export const Link = styled('a', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray3',

  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    textDecorationColor: '$gray5',
  },
  '&:focus': {
    textDecoration: 'none',
    outline: '2px solid rgba($colors$gray5Rgb, 0.5)',
    outlineOffset: 2,
  },
})

export const Heart = styled(HeartSvg, {
  filter: 'drop-shadow(0px 0px 10px rgba($colors$tangerine1Rgb, 0.5))',
  margin: '0 4px',
  '&:hover': {
    animation: `${scaleIn} 800ms ease infinite alternate`,
  },

  variants: {
    active: {
      true: {
        animation: `${scaleIn} 800ms ease infinite alternate`,
      },
    },
  },
})

export const Logos = styled('div', {
  display: 'flex',
  gap: 16,

  justifySelf: 'center',

  '@bp4': {
    order: '0',
    marginBottom: 12,

    flexDirection: 'column',
    gap: 32,
  },
})

export const LogoLink = styled(NextLink, {
  '&:focus-visible': {
    borderRadius: 1,
    outline: '2px auto rgba($colors$magenta1Rgb, 0.2)',
    outlineOffset: '6px',
  },
})

export const ColdLink = styled('a', LogoLink)

export const Divider = styled('div', {
  display: 'none',

  height: '1px',
  width: '100%',

  margin: '32px 0',

  background: '$grayW9',

  '@bp4': {
    display: 'block',
  },

  variants: {
    vertical: {
      true: {
        height: 24,
        width: 1,
        background: '$grayW6',
        margin: 0,
        display: 'block',

        '@bp4': {
          display: 'none',
        },
      },
    },
  },
})

export const Copyright = styled('span', {
  textAlign: 'right',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '$gray3',
})
