import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes, styled } from 'stitches.config'
import * as Svg from './svgs'

const VIEWPORT_PADDING = 16

export const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const slideIn = keyframes({
  from: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
})

export const swipeOut = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',

  w: 'fit-content',

  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  variants: {
    variant: {
      1: {
        position: 'absolute',

        top: -43,
        left: -44,
        padding: 0,

        '@bp4': {
          position: 'fixed',
          top: 'unset',
          left: 'unset',
          bottom: 16,
          right: 16,
        },
        '@bp2': {
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
      2: {
        bottom: 0,
        right: 0,

        '@bp2': {
          padding: 12,
          right: '50%',
          transform: 'translateX(50%)',
        },
      },
    },
  },
})

export const Root = styled(ToastPrimitive.Root, {
  backgroundColor: '$white',
  border: '1px solid rgba($colors$green1Rgb, 0.5)',
  borderRadius: 8,

  boxShadow: '0px 8px 50px rgba(33, 31, 31, 0.16)',

  padding: 12,
  height: 69,
  width: 334,

  position: 'relative',

  '@bp2': {
    width: 296,
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateY(var(--radix-toast-swipe-move-y))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateY(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },

  '&:focus-visible': { outline: 'none' },

  variants: {
    variant: {
      1: {
        position: 'relative',

        padding: '4px 12px 4px 10px',
        backgroundColor: '$green3',
        borderRadius: 5,
        width: '182px',
        height: '100%',

        '@media (prefers-reduced-motion: no-preference)': {
          '&[data-state="open"]': {
            animation: 'none',
          },
          '&[data-state="closed"]': {
            animation: 'none',
          },
          '&[data-swipe="move"]': {
            transform: 'none',
          },
          '&[data-swipe="cancel"]': {
            transform: 'none',
          },
          '&[data-swipe="end"]': {
            animation: 'none',
          },
        },
      },
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

  variants: {
    variant: {
      1: {
        gap: 4,
        marginBottom: 0,

        width: '100%',
      },
    },
  },
})

export const SpanToastTitle = styled('span', {
  minWidth: 140,
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$grayW10',
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

export const ArrowSvg = styled(Svg.Arrow, {
  position: 'absolute',
  bottom: -13,
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@bp4': {
    display: 'none',
  },
})
