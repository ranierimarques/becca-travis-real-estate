import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, styled } from 'stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const Content = styled(TooltipPrimitive.Content, {
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  variants: {
    variant: {
      '1': {
        padding: '8px 16px',

        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px',
        color: '$magenta2',

        background: 'rgba($colors$magenta1Rgb, 0.12)',
        borderRadius: '999px',
      },
      '2': {
        padding: '4px 14px',

        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '22px',
        color: '$offWhite2',

        background: '$gray3',
        borderRadius: '5px',
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})

export const Arrow = styled(TooltipPrimitive.Arrow, {
  variants: {
    variant: {
      '1': {
        fill: 'rgba($colors$magenta1Rgb, 0.12)',
      },
      '2': {
        fill: '$colors$gray3',
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})
