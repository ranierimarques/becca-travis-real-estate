import { styled } from 'stitches.config'

export const NavigationWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '704px',
  borderRadius: '8px',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },
})

export const SkipOverlay = styled('div', {
  position: 'absolute',

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

  zIndex: '1',

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
        left: '32px',
      },
      right: {
        right: '32px',
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
})
