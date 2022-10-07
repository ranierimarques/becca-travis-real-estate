import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, styled } from 'stitches.config'
import { TipSvg } from '../svgs'

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

export const PropertyDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '20px 0 23px',

  borderRadius: '8px',

  background: '$offWhite2',
})

export const Title = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0 20px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',
  color: '$gray1',
})

export const Hr = styled('div', {
  width: '336px',
  height: '1px',
  backgroundColor: '$grayW9',

  margin: '20px 0 19px',
})

export const DetailItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
})

export const DetailText = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray2',
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  position: 'relative',

  padding: '4px 14px',

  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$offWhite2',

  background: '$gray3',
  borderRadius: '5px',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipButton = styled('button', {
  lineHeight: 0,
})

export const Tip = styled(TipSvg, {
  position: 'absolute',
  bottom: '-8px',
  left: '50%',
  transform: 'translateX(-50%)',
})

export const MoreDetail = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const DetailTitle = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})

export const DetailDescription = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})
