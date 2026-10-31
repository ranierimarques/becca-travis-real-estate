import NextImage from 'next/image'
import { keyframes, styled } from 'stitches.config'

const shimmer = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',

  width: '100%',
  height: '100%',

  variants: {
    loading: {
      true: {
        background: '$$background',
        borderRadius: 'inherit',

        '&::before': {
          content: '',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            90deg,
            rgba($colors$whiteRgb, 0) 0,
            rgba($colors$whiteRgb, 0.2) 20%,
            rgba($colors$whiteRgb, 0.5) 60%,
            rgba($colors$whiteRgb, 0)
          )`,
          animation: `${shimmer} 2s infinite ease-out`,
        },
      },
    },
  },
})

export const Image = styled(NextImage, {
  transition: 'opacity 150ms ease',
  opacity: 0,

  variants: {
    loaded: {
      true: {
        opacity: 1,
      },
    },
  },
})

export const Fallback = styled('div', {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  padding: 24,
  background: 'linear-gradient(145deg, $tangerine5 0%, $magenta5 100%)',
  color: '$magenta6',
  textAlign: 'center',
  fontSize: 14,
  lineHeight: 1.5,

  '& span': {
    maxWidth: 320,
    borderRadius: 999,
    padding: '8px 14px',
    background: 'rgba($colors$whiteRgb, 0.86)',
  },
})
