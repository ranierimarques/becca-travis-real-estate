import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'
import { LinkSvg, LogoSvg } from '../svgs'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba($colors$blackRgb, 0.4)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '536px',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

export const ContentHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',

  position: 'relative',
  padding: '32px 32px 24px 32px',
  background: 'rgba($colors$magenta5Rgb, 0.2)',
  borderBottom: '2px solid rgba($colors$magenta5Rgb, 0.5)',
  gap: 16,
})

export const IconButton = styled('button', {
  all: 'unset',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': {
    background: 'rgba($colors$gray5Rgb, 0.15)',
    cursor: 'pointer',
  },
  '&:focus': { boxShadow: `0 0 0 2px rgba($colors$gray4Rgb, 0.5)` },
})

export const LinkSvgHover = styled(LinkSvg, {
  opacity: '0',
})

export const TestimonialCard = styled(DialogPrimitive.Trigger, {
  padding: '24px',
  maxWidth: '336px',
  background: '$white',
  boxShadow: '0px 0px 40px rgba($colors$blackRgb, 0.08)',
  borderRadius: '8px',

  '&:hover': {
    cursor: 'pointer',
    [`${LinkSvgHover}`]: {
      opacity: '1',
    },
  },

  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
  },
})

export const Photo = styled('div', {
  width: '48px',
  padding: '12px 0',
  background: 'rgba($colors$grayW8Rgb, .3)',
  borderRadius: '999px',

  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '$grayW2',
})

export const Name = styled('span', {
  marginBottom: '4px',

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW1',
})

export const Source = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray3',
})

export const Text = styled('p', {
  textAlign: 'left',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray2',
})

export const ModalPhoto = styled('div', {
  width: '48px',
  padding: '12px 0',
  background: 'rgba($colors$magenta5Rgb, 0.5)',
  borderRadius: '999px',

  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '$magenta1',
})

export const ModalName = styled('span', {
  display: 'block',
  marginBottom: '4px',

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW1',
})

export const ModalSource = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray3',
})

export const ModalText = styled('p', {
  padding: '24px 32px 32px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray2',
})

export const ModalLogo = styled(LogoSvg, {
  position: 'absolute',
  top: 0,
  right: 36,
})