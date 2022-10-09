import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba($colors$blackRgb, 0.6)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Content = styled(DialogPrimitive.Content, {
  background: '$white',
  borderRadius: 8,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },

  variants: {
    variant: {
      '1': {
        maxWidth: '450px',
        maxHeight: '85vh',
        padding: 32,
      },
      '2': {
        display: 'flex',
        flexDirection: 'column',

        overflow: 'hidden',

        width: '536px',
        maxHeight: '90vh',
      },
    },
  },

  defaultVariants: {
    variant: '1',
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
