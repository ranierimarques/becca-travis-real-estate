import NextLink from 'next/link'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { css, keyframes, styled } from 'stitches.config'
import * as Svg from './svgs'

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
  zIndex: 5,
})

export const List = styled(NavigationMenuPrimitive.List, {
  display: 'flex',
  alignItems: 'center',
})

const linkStyles = css({
  padding: '8px 16px',
  userSelect: 'none',
  borderRadius: 4,

  color: '$magenta1',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '21px',

  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.2)' },
  '&:hover': { background: 'rgba($colors$magenta1Rgb, 0.04)' },
})

export const Trigger = styled(NavigationMenuPrimitive.Trigger, linkStyles, {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  cursor: 'default',
})

export const Caret = styled(Svg.ArrowDown, {
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  transition: 'transform 250ms ease',
})

export const Content = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
})

export const Link = styled(NextLink, linkStyles, {
  display: 'block',
})

export const Indicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: 'calc(100% + 18px)',
  overflow: 'hidden',
  zIndex: 5,

  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
})

export const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$white',
  width: 12,
  height: 12,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 3,
  boxShadow: '0 0 8px rgba($colors$blackRgb, 0.1)',
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
    'hsl(206 22% 7% / 40%) 0 10px 38px -10px, hsl(206 22% 7% / 20%) 0 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
})

export const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  right: '8%', // Edit this
  perspective: '2000px',
})
