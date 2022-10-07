import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes, styled } from 'stitches.config'
import { BackgroundSvg } from '../svgs'

const VIEWPORT_PADDING = 16

export const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

export const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'absolute',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const Toast = styled(ToastPrimitive.Root, {
  backgroundColor: '$white',
  border: '1px solid rgba($colors$green1Rgb, 0.5)',
  borderRadius: '8px',

  padding: 12,
  height: 69,
  width: 334,

  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  marginBottom: 4,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray2',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  marginLeft: 36,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$gray5',
})

export const Action = styled(ToastPrimitive.Action, {
  position: 'absolute',
  top: 6,
  right: 6,
})

export const CloseButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  borderRadius: '999px',

  '&:hover': { backgroundColor: 'rgba($colors$gray5Rgb, 0.15)' },
  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$gray4Rgb, 0.5)' },
})

// ************************

export const Card = styled('div', {
  position: 'relative',

  width: '366px',

  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',

  overflow: 'hidden',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F6F8 100%)',
})

export const Svg = styled(BackgroundSvg, {
  position: 'absolute',
  left: 0,
  bottom: 0,
})

export const Title = styled('h4', {
  marginBottom: 8,

  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$grayW2',
})

export const Description = styled('p', {
  marginBottom: 32,
  maxWidth: '251px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$grayW4',
})

export const Contact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const ContactTitle = styled('h4', {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$gray3',
})

export const ContactInfo = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray4',
})

export const SvgBackground = styled('div', {
  padding: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW10',
  borderRadius: '4px',
})
