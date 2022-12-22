import { Image as ImageUnstyled } from '@/common'
import NextLink from 'next/link'
import { styled } from 'stitches.config'

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

  transition: 'transform 250ms ease',
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

  transition: 'transform 250ms ease, opacity 250ms ease',
})

export const CommunityLink = styled(NextLink, {
  display: 'block',

  position: 'relative',

  width: 336,
  height: 229,

  borderRadius: 8,

  overflow: 'hidden',

  boxShadow: '0 0 20px rgba($colors$blackRgb, 0.2)',

  '&:hover': {
    [`& img`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: { transform: 'translateY(-28px)' },
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 4px $colors$magenta9',
    [`& img`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: { transform: 'translateY(-28px)' },
  },
  '&:active': { [`& img`]: { filter: 'brightness(0.6)' } },
})

export const Image = styled(ImageUnstyled, {
  borderRadius: '8px',

  transition: 'opacity 150ms ease, filter 250ms ease',
  objectFit: 'cover',
})

export const ImageMask = styled('div', {
  position: 'absolute',
  inset: 0,
  borderRadius: '8px',
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
})
