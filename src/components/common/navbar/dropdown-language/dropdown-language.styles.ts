import { DropdownMenu } from '@primitives'
import { keyframes, styled } from 'stitches.config'
import * as Svg from '../svgs'

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

export const Trigger = styled(DropdownMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  color: '$magenta1',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400,

  padding: '6px 8px',

  '&:focus': { outline: '2px solid rgba($colors$tangerine8Rgb, 0.5)', outlineOffset: 0 },
  '&:hover': { background: 'rgba($colors$tangerine9Rgb, 0.15)' },
})

export const Content = styled(DropdownMenu.Content, {
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

export const RadioGroup = styled(DropdownMenu.RadioGroup, {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const RadioItem = styled(DropdownMenu.RadioItem, {
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

export const LanguageText = styled('span', {
  display: 'block',
  marginLeft: 8,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$gray2',
})

export const CheckMark = styled(Svg.CheckMark, {
  marginLeft: 16,
})

export const Arrow = styled(DropdownMenu.Arrow, {
  fill: '$white',
})
