import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { css, keyframes, styled } from 'stitches.config'
import { ArrowDownSvg, ArrowRightSvg } from '../svgs'

// Keyframes - Animation

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

// Components

export const Root = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100vw',
  zIndex: 1,
})

export const List = styled(NavigationMenuPrimitive.List, {
  display: 'flex',
  alignItems: 'center',
})

const linkStyles = {
  padding: '8px 16px',
  userSelect: 'none',
  borderRadius: 4,

  color: '$magenta1',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.2)',
  },
  '&:hover': { backgroundColor: 'rgba($colors$magenta1Rgb, 0.04)' },
}

export const Trigger = styled(NavigationMenuPrimitive.Trigger, {
  ...linkStyles,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

export const Caret = styled(ArrowDownSvg, {
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

export const Link = styled('a', {
  ...linkStyles,
  display: 'block',
})

export const Content = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
})

export const Indicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: 'calc(100% + 18px)',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
})

export const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$white',
  width: 12,
  height: 12,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 3,
  boxShadow: '0px 0px 8px rgba($colors$blackRgb, 0.1)',
})

export const Viewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',

  marginTop: 28,
  width: '100%',

  background: '$white',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 40%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
})

export const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 70, // Edit this
  perspective: '2000px',
})

// App start here...

export const ContentList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  padding: 16,

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 491,
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 470,
        },
      },
      three: {
        '@media only screen and (min-width: 600px)': {
          width: 524,
        },
      },
    },
  },
})

export const CardLink = styled('a', {
  display: 'block',

  padding: 12,
  userSelect: 'none',
  borderRadius: 5,

  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.2)' },
  '&:hover': { backgroundColor: 'rgba($colors$magenta1Rgb, 0.04)' },
})

export const LinkTitle = styled('div', {
  color: '$grayW4',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',

  marginBottom: 4,
})

export const LinkText = styled('p', {
  color: '$grayW5',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '18px',
})

export const CommunitiesTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '21px',
  color: '$magenta6',
})

// About Huntsville

export const ArrowRight = styled(ArrowRightSvg, {
  opacity: 0,
  transform: 'scale(0)',
  transformOrigin: 'left',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 300ms ease, opacity 300ms ease',
  },
})

export const HuntsvilleTitle = styled('h4', {
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '18px',
  color: '$gray3',
})

export const HuntsvilleDescription = styled('p', {
  marginTop: 2,

  fontWeight: 400,
  fontSize: 10,
  lineHeight: '15px',
  color: '$gray5',
})

export const SvgStyles = css({
  padding: 8,
  boxSizing: 'content-box',
  background: 'rgba($colors$grayW9Rgb, 0.5)',
  borderRadius: '5px',
})

export const HuntsvilleLink = styled('a', {
  display: 'flex',
  gap: 12,

  width: 'fit-content',
  borderRadius: 2,

  '&:focus': {
    outlineOffset: '8px',
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${HuntsvilleDescription}`]: { color: '$gray2' },
    [`${HuntsvilleTitle}`]: { color: '$gray1' },
    [`.${SvgStyles}`]: { background: 'currentColor' },
  },

  '&:hover': {
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${HuntsvilleDescription}`]: { color: '$gray2' },
    [`${HuntsvilleTitle}`]: { color: '$gray1' },
    [`.${SvgStyles}`]: { background: 'currentColor' },
  },
})

// Our communities

export const OurCommunitiesList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridAutoRows: 'auto',
  gap: 12,
})

export const OurCommunitiesListLink = styled('a', {
  display: 'block',

  position: 'relative',

  width: 154,
  height: 88,

  borderRadius: '4px',

  transition: 'filter .15s cubic-bezier(.4,0,.2,1)',

  '&:focus': { boxShadow: '0 0 0 3px $colors$magenta9' },
  '&:hover': { filter: 'brightness(0.8)' },
})

export const OurCommunitiesImageOverlay = styled('div', {
  position: 'absolute',
  inset: 0,
  borderRadius: '4px',
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.8) 100%)',
})

export const OurCommunitiesImageName = styled('span', {
  position: 'absolute',
  bottom: 10,
  left: 10,

  fontWeight: 500,
  fontSize: 11,
  lineHeight: '15px',
  color: '$white',
  zIndex: 2,
})
