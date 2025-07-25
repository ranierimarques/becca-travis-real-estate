import { styled } from 'stitches.config'

export const NavigationWrapper = styled('div', {
  gridArea: 'slider',

  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  cursor: 'grab',

  minWidth: 600,

  '@bp4': {
    minWidth: 'unset',
  },
  '@bp2': {
    borderRadius: 'unset',
  },

  '&:active': {
    cursor: 'grabbing',
  },
})

export const SkipOverlay = styled('div', {
  position: 'absolute',
  top: 0,

  zIndex: '1',

  height: '100%',
  width: '120px',

  borderRadius: '8px',
  opacity: '0',
  background:
    'linear-gradient(90deg, rgba($colors$blackRgb, 0) 0%, rgba($colors$blackRgb, 0.4) 88.02%)',

  cursor: 'pointer',

  transition: 'opacity 300ms ease',

  '&:hover': {
    opacity: '1',
  },

  '@bp2': {
    borderRadius: 'unset',
    display: 'none',
  },

  variants: {
    direction: {
      left: {
        left: '0',
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
      },
      right: {
        right: '0',
      },
    },
  },
})

export const Skip = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  width: 'fit-content',

  zIndex: '2',

  '&:hover': {
    [`& + ${SkipOverlay}`]: {
      opacity: '1',
    },
  },

  '&:disabled': {
    opacity: '.5',
    [`& + ${SkipOverlay}`]: {
      opacity: '0',
    },
  },

  variants: {
    direction: {
      left: {
        left: '24px',

        '@bp4': {
          left: '16px',
        },

        '@bp2': {
          left: '4px',
          padding: '12px',
        },
      },
      right: {
        right: '24px',

        '@bp4': {
          right: '16px',
        },

        '@bp2': {
          right: '4px',
          padding: '12px',
        },
      },
    },
  },
})

export const Index = styled('div', {
  padding: '4px 10px',
  background:
    'linear-gradient(101.17deg, rgba(15, 20, 26, 0.5) 0%, rgba(15, 20, 26, 0.5) 100%)',
  borderRadius: '999px',

  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',

  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$white',

  '@bp2': {
    pointerEvents: 'none',
  },
})
