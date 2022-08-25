import Image from 'next/image'
import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: 1072,
  margin: '0 auto',
  padding: '160px 0',
})

export const Title = styled('h2', {
  marginBottom: 48,

  fontWeight: 500,
  fontSize: 36,
  lineHeight: '50px',
  color: '$magenta6',
})

export const CommunitiesList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
})

export const Description = styled('span', {
  position: 'absolute',
  bottom: 20,
  left: 20,

  fontWeight: 600,
  fontSize: 20,
  lineHeight: '30px',
  color: '$white',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

export const HoverSpan = styled('p', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  bottom: 20,
  left: 20,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$white',
  textDecorationLine: 'underline',
  textUnderlineOffset: '3px',
  textDecorationColor: 'rgba($colors$whiteRgb, 0.75)',

  opacity: 0,
  transform: 'translateY(75%)',
  transformOrigin: 'bottom',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease, opacity 250ms ease',
  },
})

export const CommunityImage = styled(Image, {
  borderRadius: '8px',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'filter 250ms ease',
  },
})

export const CommunityLink = styled('a', {
  display: 'block',

  position: 'relative',

  width: 336,
  height: 229,

  borderRadius: 8,

  overflow: 'hidden',

  boxShadow: '0 0 20px rgba($colors$blackRgb, 0.2)',

  '&:hover': {
    [`& ${CommunityImage}`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: { transform: 'translateY(-28px)' },
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 4px $colors$magenta9',
    [`& ${CommunityImage}`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: { transform: 'translateY(-28px)' },
  },
  '&:active': { [`& ${CommunityImage}`]: { filter: 'brightness(0.6)' } },
})

export const ImageMask = styled('div', {
  position: 'absolute',
  inset: 0,
  borderRadius: '8px',
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
})
