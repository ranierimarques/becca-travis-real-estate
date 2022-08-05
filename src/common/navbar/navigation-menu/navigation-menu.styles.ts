import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { keyframes, styled } from 'stitches.config'
import { ArrowDownSvg, HomeSvg } from '../svgs'

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
  top: '100%',
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
  width: 14,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 3,
  boxShadow: `0px 0px 8px rgba($colors$blackRgb, 0.1)`,
})

export const Viewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: '$white',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 75%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
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
  left: -5, // Edit this
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
          width: 337,
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 312,
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

export const Communities = styled('div', {
  padding: 24,

  '@media only screen and (min-width: 600px)': {
    width: 560,
  },
})

export const CommunitiesTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '21px',
  color: '$magenta6',
})

// About Huntsville

export const HuntsvilleLink = styled('a', {
  display: 'inline-block',

  padding: 16,

  background: 'rgba($colors$gray3Rgb, 0.08)',
  borderRadius: '8px',

  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.2)' },
})

export const HuntsvilleHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export const HomeIcon = styled(HomeSvg, {
  boxSizing: 'content-box',
  padding: 5,

  background: '$tangerine2',
  borderRadius: 5,
})

export const HuntsvilleTitle = styled('h4', {
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '22px',
  color: '$magenta8',
})

export const HuntsvilleDescription = styled('p', {
  marginTop: 16,

  maxWidth: 200,

  fontWeight: 400,
  fontSize: 10,
  lineHeight: '15px',
  color: '$magenta9',
})

export const Separator = styled('div', {
  margin: '24px 0',

  width: '100%',
  height: 1,
  background: '$gray5',
  opacity: 0.4,
  borderRadius: 9999,
})

// Our communities

export const OurCommunitiesList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
})

export const OurCommunitiesListLink = styled('a', {
  display: 'block',

  position: 'relative',

  width: '164px',
  height: '80px',

  borderRadius: '4px',

  transition: 'filter .15s cubic-bezier(.4,0,.2,1)',

  '&:focus': { boxShadow: '0 0 0 3px $colors$magenta9' },
  '&:hover': { filter: 'brightness(0.8)' },
})

export const OurCommunitiesImageOverlay = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
})

export const OurCommunitiesImageName = styled('span', {
  position: 'absolute',
  bottom: 10,
  left: 10,

  fontWeight: 600,
  fontSize: 10,
  lineHeight: '15px',
  color: '$white',
  zIndex: 2,
})
