import { styled } from 'stitches.config'
import { PathSvg } from './svgs'

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',

  '@bp4': {
    lineHeight: '32px',
  },
  '@bp2': {
    fontSize: '22px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Paragraph = styled('p', {
  maxWidth: '458px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp5': {
    maxWidth: '363px',
  },
  '@bp4': {
    maxWidth: '688px',
    textAlign: 'center',
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column',
    gap: 32,
  },

  '@bp2': {
    gap: 40,
  },

  variants: {
    mid: {
      true: {
        position: 'relative',
        padding: '160px 0 160px',

        '@bp4': {
          padding: '80px 0 80px',
        },
        '@bp2': {
          padding: '64px 0 64px',
        },
      },
    },
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@bp4': {
    alignItems: 'center',
  },
})

export const Path = styled(PathSvg, {
  position: 'absolute',
  top: -16,
  left: 60,

  zIndex: 1,

  '@bp4': {
    display: 'none',
  },

  variants: {
    inverted: {
      true: {
        top: 'initial',
        left: 'initial',
        bottom: -9,
        right: 60,
        transform: 'scaleX(-1)',
      },
    },
  },
})
