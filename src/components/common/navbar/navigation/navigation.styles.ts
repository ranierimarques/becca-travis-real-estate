import { NavigationMenu } from '@primitives'
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

export const Root = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100vw',
  zIndex: 5,
})

export const List = styled(NavigationMenu.List, {
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

  '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.2)' },
  '&:hover': { background: 'rgba($colors$magenta1Rgb, 0.04)' },
}

export const Trigger = styled(NavigationMenu.Trigger, linkStyles, {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  cursor: 'default',
})

export const Caret = styled(ArrowDownSvg, {
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  transition: 'transform 250ms ease',
})

export const Link = styled('a', linkStyles, {
  display: 'block',
})

export const Content = styled(NavigationMenu.Content, {
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

export const Indicator = styled(NavigationMenu.Indicator, {
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

export const Viewport = styled(NavigationMenu.Viewport, {
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
  left: 70, // Edit this
  perspective: '2000px',
})

// App start here...

export const CategoryTitle = styled('span', {
  display: 'block',

  fontWeight: 500,
  fontSize: 12,
  lineHeight: '18px',
  color: '$grayW3',

  marginBottom: 16,
})

export const CardListItem = styled('li', {
  maxWidth: 190,

  '& + &': {
    marginTop: 16,
  },
})

export const CardTitle = styled('div', {
  color: '$grayW4',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',

  transition: 'color 300ms ease',
})

export const CardDescription = styled('p', {
  color: '$grayW5',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '18px',

  transition: 'color 300ms ease',
})

export const ArrowRight = styled(ArrowRightSvg, {
  opacity: 0,
  transform: 'scale(0)',
  transformOrigin: 'left',

  color: 'rgba($$color, 1)', // Provides by HunstsvilleLink component or currentColor

  transition: 'transform 300ms ease, opacity 300ms ease',
})

export const CardLink = styled('a', {
  display: 'flex',
  gap: 12,

  padding: '8px 10px 8px 0',
  userSelect: 'none',
  borderRadius: 5,

  color: '$grayW6',
  transition: 'color 300ms ease',

  '&:focus': {
    outline: '2px solid rgba($colors$magenta1Rgb, 0.2)',
    outlineOffset: '4px',
    color: '$magenta1',
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${CardTitle}`]: { color: '$magenta1' },
    [`${CardDescription}`]: { color: '$grayW3' },
  },
  '&:hover': {
    color: '$magenta1',
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${CardTitle}`]: { color: '$magenta1' },
    [`${CardDescription}`]: { color: '$grayW3' },
  },
})

// Community guides

export const CommunitiesTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '21px',
  color: '$magenta6',
})

export const CommunitiesList = styled('ul', {
  display: 'grid',
  width: 'fit-content',
  gridTemplateColumns: 'auto auto',
  gap: '24px 56px',
})

// About Huntsville

export const SvgStyles = css({
  padding: 8,
  boxSizing: 'content-box',
  background: 'rgba($colors$grayW9Rgb, 0.5)',
  borderRadius: '5px',
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

export const HuntsvilleLink = styled('a', {
  display: 'flex',
  gap: 12,

  color: 'rgba($$color, 0.15)', // Locally scoped tokens provides dynamically

  width: 'fit-content',
  borderRadius: 2,

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  '&:focus': {
    outline: '2px solid rgba($$color, 0.3)',
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
})
