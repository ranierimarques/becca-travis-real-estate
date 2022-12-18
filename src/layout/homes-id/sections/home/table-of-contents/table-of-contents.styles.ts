import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Container = styled('div', {
  paddingTop: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  position: 'sticky',
  top: 0,

  zIndex: 2,

  maxWidth: 1072,
  margin: '0 auto',

  '&::before': {
    content: '',
    background: '$white',
    position: 'absolute',
    top: 0,
    left: '50%',
    height: '100%',
    transform: 'translateX(-50%)',

    width: '100vw',
  },
})

export const PageIndex = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',

  zIndex: 2,

  borderBottom: '2px solid rgba($colors$gray5Rgb, 0.3)',
})

export const ActiveHr = styled('div', {
  width: '25%',
  height: '3px',
  background: '$gray5',
  borderRadius: '999px',

  position: 'absolute',
  bottom: -2,

  opacity: 0,
  pointerEvents: 'none',

  transition: '150ms ease-out',
})

export const Content = styled(NextLink, {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',

  paddingBottom: 24,

  transition: '150ms ease-out',
})

export const Li = styled('li', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&:hover': {
    [`& ${ActiveHr}`]: {
      opacity: 1,
    },
  },

  variants: {
    active: {
      true: {
        [`& ${ActiveHr}`]: {
          width: '100%',
          background: '$magenta1',

          opacity: 1,
        },
        [`& ${Content}`]: {
          color: '$magenta1',
        },
      },
    },
  },
})
