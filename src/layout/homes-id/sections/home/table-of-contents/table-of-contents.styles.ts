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

  paddingBottom: 24,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',

  zIndex: 2,

  borderBottom: '2px solid rgba($colors$gray5Rgb, 0.3)',
})

export const ActiveHr = styled('div', {
  width: '10px',
  height: '3px',
  backgroundColor: '$gray5',
  borderRadius: '999px',

  position: 'absolute',
  bottom: 0,

  display: 'none',

  animationTimingFunction: 'linear',
  animationDuration: '300ms',

  variants: {
    active: {
      true: {
        width: '88px',
        backgroundColor: '$magenta1',

        display: 'block',
      },
    },
  },
})

export const Li = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&:hover': {
    [`& ${ActiveHr}`]: {
      display: 'block',
    },
  },
})

export const Content = styled('a', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',

  variants: {
    active: {
      true: {
        color: '$magenta1',
      },
    },
  },
})
