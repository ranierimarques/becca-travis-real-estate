import NextLink from 'next/link'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { css } from '@stitches/react'
import { keyframes, styled } from 'stitches.config'
import * as Svg from '../svgs'

export const Nav = styled('nav', {
  display: 'none',

  position: 'fixed',
  background: '$white',
  top: 70,
  left: 0,

  width: '100%',
  height: 'calc(100% - 70px)',

  padding: '0 40px 32px',

  '@bp3': {
    padding: '0 32px 32px',
  },

  '@bp2': {
    padding: '0 24px 32px',
  },

  '@bp1': {
    padding: '0 16px 32px',
  },

  overflow: 'auto',
  // zIndex: 9999, Don't needed use z-Index because of isolation: 'isolate' CSS property in #__next div

  variants: {
    isVisible: {
      true: {
        '@bp4': {
          display: 'block',
        },
      },
    },
  },
})

// Radix Accordion

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const linkStyles = css({
  padding: '16px 0',
  userSelect: 'none',

  color: '$magenta1',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
})

export const Root = styled(AccordionPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  marginBottom: 4,
})

export const Item = styled(AccordionPrimitive.Item, {
  boxShadow: '0 1px 0 0 rgba($colors$magenta1Rgb, 0.15)',
})

export const Trigger = styled(AccordionPrimitive.Trigger, linkStyles, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
})

export const Chevron = styled(Svg.ArrowDown, {
  transition: 'transform 250ms ease',
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
})

export const Content = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} 600ms cubic-bezier(.25,1,.5,1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 600ms cubic-bezier(.25,1,.5,1)`,
  },
})

// Accordion end

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

export const Link = styled(NextLink, linkStyles, {
  display: 'block',

  boxShadow: '0 1px 0 0 rgba($colors$magenta1Rgb, 0.15)',
})

export const DisabledLink = styled('div', {
  display: 'block',

  boxShadow: '0 1px 0 0 rgba($colors$magenta1Rgb, 0.15)',

  padding: '16px 0',
  userSelect: 'none',

  color: '$magenta1',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',

  opacity: 0.33,
})

export const CategoryTitle = styled('span', {
  display: 'block',

  fontWeight: 500,
  fontSize: 12,
  lineHeight: '18px',
  color: '$grayW5',

  marginBottom: 10,

  '@bp1': {
    fontSize: 10,
    lineHeight: '18px',

    marginBottom: 8,
  },
})

export const CardListItem = styled('li', {
  '& + &': {
    marginTop: 10,
  },
})

export const CardTitle = styled('div', {
  color: '$grayW4',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '18px',

  transition: 'color 300ms ease',

  '@bp1': {
    fontSize: 14,
  },
})

export const CardDescription = styled('p', {
  color: '$grayW5',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '18px',

  transition: 'color 300ms ease',

  '@bp1': {
    fontSize: 12,
  },
})

export const ArrowRight = styled(Svg.ArrowRight, {
  opacity: 0,
  transform: 'scale(0)',
  transformOrigin: 'left',

  color: 'rgba($$color, 1)', // Provides by HunstsvilleLink component or currentColor

  transition: 'transform 300ms ease, opacity 300ms ease',
})

export const CardLink = styled(NextLink, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 8,

  padding: '8px 10px 8px 0',
  userSelect: 'none',
  borderRadius: 5,

  color: '$grayW6',
  transition: 'color 300ms ease',

  '&:hover': {
    color: '$magenta1',
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${CardTitle}`]: { color: '$magenta1' },
    [`${CardDescription}`]: { color: '$grayW3' },
  },
})

export const DisabledCardLink = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 12,

  padding: '8px 10px 8px 0',
  userSelect: 'none',
  borderRadius: 5,

  color: '$grayW6',
  transition: 'color 300ms ease',

  opacity: 0.33,
})

// Community guides

export const CommunitiesTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: 500,
  fontSize: 12,
  lineHeight: '18px',
  color: '$grayW5',

  textTransform: 'uppercase',

  '@bp2': {
    marginBottom: 10,
  },

  '@bp1': {
    fontSize: 10,
    lineHeight: '18px',

    marginBottom: 8,
  },
})

export const CommunitiesList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: '16px 56px',

  '@bp2': {
    gridTemplateColumns: 'auto',
  },

  '@bp1': {
    gap: '12px 56px',
  },
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
  fontSize: 14,
  lineHeight: '18px',
  color: '$grayW4',

  '@bp1': {
    fontSize: 12,
  },
})

export const HuntsvilleDescription = styled('p', {
  marginTop: 4,

  fontWeight: 400,
  fontSize: 12,
  lineHeight: '18px',
  color: '$grayW5',
})

export const HuntsvilleLink = styled(NextLink, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 12,

  padding: '4px 0',

  color: 'rgba($$color, 0.15)', // Locally scoped tokens provides dynamically

  borderRadius: 2,

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  '&:hover': {
    [`${ArrowRight}`]: { transform: 'scale(1)', opacity: 1 },
    [`${HuntsvilleDescription}`]: { color: '$gray2' },
    [`${HuntsvilleTitle}`]: { color: '$gray1' },
    [`.${SvgStyles}`]: { background: 'currentColor' },
  },
})

export const DisableHuntsvilleLink = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: 12,

  padding: '4px 0',

  color: 'rgba($$color, 0.15)', // Locally scoped tokens provides dynamically

  width: 'fit-content',
  borderRadius: 2,

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  opacity: 0.33,
  userSelect: 'none',
})

// Our communities

export const OurCommunitiesList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'auto',
  gap: 12,
})

export const OurCommunitiesListLink = styled(NextLink, {
  display: 'block',

  position: 'relative',

  aspectRatio: '16 / 9',
  borderRadius: '4px',

  transition: 'filter .15s cubic-bezier(.4,0,.2,1)',

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

  fontWeight: 600,
  fontSize: 20,
  lineHeight: '30px',
  color: '$white',

  '@bp2': {
    fontSize: 12,
    lineHeight: '15px',
  },

  '@bp1': {
    fontSize: 11,
  },
})
