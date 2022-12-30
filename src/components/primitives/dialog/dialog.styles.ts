import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translateY(0%) scale(1)' },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba($colors$blackRgb, 0.6)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Content = styled(DialogPrimitive.Content, {
  position: 'relative',

  background: '$white',
  borderRadius: 8,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },

  margin: '0 auto',

  variants: {
    variant: {
      '1': {
        maxWidth: 'fit-content',
        maxHeight: '85vh',
        padding: 32,
      },
      '2': {
        display: 'flex',
        flexDirection: 'column',

        overflow: 'hidden',

        width: '100%',
        maxWidth: '536px',
        maxHeight: 'min(80vh, 700px)',
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})

export const ContentWrapper = styled('div', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '100%',

  px: '56px',

  '@bp4': {
    px: '40px',
  },
  '@bp3': {
    px: '32px',
  },
  '@bp2': {
    px: '24px',
  },
  '@bp1': {
    px: '16px',
  },
})

export const Close = styled(DialogPrimitive.Close, {
  borderRadius: '999px',
  position: 'absolute',
  top: 10,
  right: 10,

  variants: {
    variant: {
      '1': {
        color: '$magenta2',
        '&:hover': { background: 'rgba($colors$magenta2Rgb, 0.15)' },
        '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.4)' },
      },
      '2': {
        color: '$grayW5',
        '&:hover': { background: 'rgba($colors$gray5Rgb, 0.15)' },
        '&:focus': { boxShadow: '0 0 0 2px rgba($colors$gray4Rgb, 0.5)' },
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})
