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
})

export const Link = styled('a', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '$gray3',

  '&:hover': {
    textDecoration: 'underline',
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

export const LogoLink = styled('a', {
  justifySelf: 'center',
})

export const Copyright = styled('span', {
  textAlign: 'right',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '$gray3',
})
