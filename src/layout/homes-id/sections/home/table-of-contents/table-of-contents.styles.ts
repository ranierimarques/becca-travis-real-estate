import { styled } from 'stitches.config'

export const Container = styled('div', {
  margin: '32px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  position: 'relative',
})

export const PageIndex = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',
})

export const ActiveHr = styled('div', {
  width: '10px',
  height: '3px',
  boxShadow: '0 0 0 1px $gray5',
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
        boxShadow: '0 0 0 1px $magenta1',
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
