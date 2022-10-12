import { css, styled } from 'stitches.config'
import * as Svg from '../svgs'

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

export const ArrowRight = styled(Svg.ArrowRight, {
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
