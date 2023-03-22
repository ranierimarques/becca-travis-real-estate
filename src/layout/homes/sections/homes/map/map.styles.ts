import { css, keyframes, styled } from 'stitches.config'

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

export const containerStyle = css({
  width: '100%',
  // height: 'calc(100vh - 110px)',

  '@bp4': {
    height: 500,
  },

  variants: {
    variant: {
      1: {
        height: 500,
        borderRadius: 8,
      },
    },
  },
})

export const Skeleton = styled('div', containerStyle, {
  animation: `${backgroundPulse} 1s linear infinite alternate`,
})

export const CountOverlay = styled('div', {
  position: 'absolute',
  top: 10,
  left: 10,

  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  color: '$white',

  background: 'rgba($gray1Rgb, 0.8)',
  padding: '8px 12px',
  borderRadius: 4,

  '@bp2': {
    top: 'auto',
    bottom: 24,

    '> span': {
      display: 'none',
    },
  },
})

export const Wrapper = styled('div', {
  position: 'relative',

  color: '$red2',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  cursor: 'pointer',

  variants: {
    active: {
      true: {
        color: '$blue1',
      },
    },
  },
})
