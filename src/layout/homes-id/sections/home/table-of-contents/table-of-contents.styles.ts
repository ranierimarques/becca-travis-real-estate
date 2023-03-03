import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'table',

  paddingTop: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  position: 'sticky',
  top: 0,

  zIndex: 2,

  width: '100%',
  maxWidth: 1072,
  // margin: '0 auto',

  '@bp5': {
    paddingTop: 40,
  },
  '@bp4': {
    top: 70,
    paddingTop: 16,

    overflowX: 'hidden',
  },
  '@bp3': {
    paddingTop: 32,
  },
  '@bp2': {
    px: 24,
  },
  '@bp1': {
    paddingTop: 24,
    px: 16,
  },

  background: '$colors$white',
  boxShadow: '64px 0 0 0 $colors$white, -64px 0 0 0 $colors$white',

  // '&::before': {
  //   content: '',
  //   background: '$white',
  //   position: 'absolute',
  //   top: 0,
  //   left: '50%',
  //   height: '100%',
  //   transform: 'translateX(-50%)',

  //   width: '100vw',

  //   '@bp4': {},
  // },
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
  boxShadow: 'inset 0 -2px 0 rgba($colors$gray5Rgb, 0.3)',

  '@bp4': {
    overflow: 'auto hidden',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const ActiveHr = styled('div', {
  width: '25%',
  height: '3px',
  background: '$gray5',
  borderRadius: '999px',

  position: 'absolute',
  bottom: 0,

  opacity: 0,
  pointerEvents: 'none',

  transition: '150ms ease-out',
})

export const Content = styled(NextLink, {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray5',

  paddingBottom: 26, // 24px design + 2px borders...

  transition: '150ms ease-out',

  '@bp1': {
    fontSize: '14px',
  },
})

export const Li = styled('li', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  whiteSpace: 'nowrap',

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
