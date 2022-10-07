import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'

export const overlayShow = keyframes({
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
  backgroundColor: '$white',
  borderRadius: '8px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 32,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

export const Title = styled(DialogPrimitive.Title, {
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta1',
})

export const Description = styled(DialogPrimitive.Description, {
  margin: '8px 0 24px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW4',
})

export const Close = styled(DialogPrimitive.Close, {
  borderRadius: '999px',
  color: '$gray2',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'rgba($colors$magenta2Rgb, 0.15)' },
  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.4)' },
})

export const ContactList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 8,
})

export const ContactLink = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,

  padding: '12px 16px',

  background: '$grayW10',
  boxShadow: '0 0 0 1px $colors$grayW9',
  borderRadius: '8px',

  color: '$grayW3',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$magenta1',
    color: '$magenta1',
  },
  '&:focus': {
    background: 'rgba($colors$magenta2Rgb, 0.05)',
    boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
    '&:hover': {
      boxShadow: '0 0 0 1px $colors$magenta1, 0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
    },
  },
})

export const ContactText = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
})
