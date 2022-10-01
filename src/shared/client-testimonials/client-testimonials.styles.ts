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

export const ReviewSpan = styled('span', {
  display: 'block',
  '& + &': {
    marginTop: 16,
  },
})

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
})

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Description = styled('p', {
  maxWidth: '428px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  position: 'relative',

  padding: '8px 16px',

  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$magenta2',

  background: 'rgba($colors$magenta1Rgb, 0.12)',
  borderRadius: '999px',

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

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'rgba($colors$magenta1Rgb, 0.12)',
})

export const ViewAll = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: 'rgba($colors$magenta9Rgb, .5)',

  cursor: 'default',
})

export const TestimonialsContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 32,

  position: 'relative',

  scrollMarginTop: 32,

  variants: {
    resize: {
      false: {
        '& ul > li:nth-child(n+3)': {
          display: 'none',
        },
      },
    },
  },
})

export const OverlayWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  width: '100%',

  padding: '197px 0px 112px',

  position: 'absolute',
  bottom: '-48px', // Testimonial Box Shadow Spread + 8px for safe zone

  background: `linear-gradient(180deg, 
    rgba(255, 255, 255, 0) 47.4%, 
    rgba(255, 255, 255, 0.7) 75.52%,
    rgba(255, 255, 255, 1) 90%, 
    rgba(255, 255, 255, 1) 100%)`,

  pointerEvents: 'none',
})

export const TestimonialsList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
})
