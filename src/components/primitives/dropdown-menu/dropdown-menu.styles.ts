import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { keyframes, styled } from 'stitches.config'
import * as Svg from './svgs'

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

export const Trigger = styled(DropdownMenuPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      1: {
        gap: 6,

        padding: '6px 8px',

        color: '$magenta1',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 400,

        '&:focus': {
          outline: '2px solid rgba($colors$tangerine8Rgb, 0.5)',
          outlineOffset: 0,
        },
        '&:hover': { background: 'rgba($colors$tangerine9Rgb, 0.15)' },
      },
      2: {
        gap: 8,

        padding: '8px 10px',

        boxShadow: '0 0 0 1px $colors$magenta1',

        borderRadius: '5px',

        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        color: '$magenta1',

        '&:hover': {
          backgroundColor: 'rgba($colors$magenta5Rgb, 0.2)',
          cursor: 'pointer',
        },
      },
    },
  },
})

export const Content = styled(DropdownMenuPrimitive.Content, {
  borderRadius: 8,
  padding: 8,
  background: '$white',
  boxShadow:
    'hsl(206 22% 7% / 40%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  animationDuration: '300ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const Group = styled(DropdownMenuPrimitive.Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const Item = styled(DropdownMenuPrimitive.Item, {
  display: 'flex',
  alignItems: 'center',

  width: '100%',

  borderRadius: 4,
  padding: '10px 8px',

  outline: 'none',

  '&[data-highlighted]': {
    background: 'rgba(246, 246, 248, 0.8)',
  },

  '&:not([data-disabled])': { cursor: 'pointer' },
  '&[data-disabled]': { opacity: 0.32, cursor: 'default' },
})

export const RadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const RadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  display: 'flex',
  alignItems: 'center',

  width: '100%',

  borderRadius: 4,
  padding: 8,

  '&:focus': { outline: '1px solid $green1' },
  '&:not([data-disabled])': { cursor: 'pointer' },
  '&[data-disabled]': { opacity: 0.32, cursor: 'default' },
  '&[data-state="checked"]': { background: 'rgba($colors$green1Rgb, 0.1)' },
})

export const Arrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$white',
})

export const CheckMark = styled(Svg.CheckMark, {
  marginLeft: 16,
})
