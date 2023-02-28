import NextLink from 'next/link'
import { styled } from 'stitches.config'
import { Image as ImageUnstyled } from '@/common'

export const Title = styled('h2', {
  marginBottom: 48,

  fontWeight: 500,
  fontSize: 36,
  lineHeight: '50px',
  color: '$magenta6',

  '@bp5': {
    marginBottom: 40,
  },
  '@bp4': {
    fontSize: 30,
    lineHeight: '42px',
  },
  '@bp3': {
    marginBottom: 24,
  },
  '@bp1': {
    fontSize: 28,
    lineHeight: '40px',
  },
})

export const CommunitiesList = styled('ul', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,

  '@bp5': {
    gap: 24,
  },
  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
  },
  '@bp2': {
    gap: 16,
  },
  '@bp1': {
    gap: 12,
  },
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

  '@bp2': {
    bottom: 10,
    left: 10,

    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
  },
  '@bp1': {
    fontSize: 12,
    lineHeight: '18px',
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

  transition: 'transform 250ms ease, opacity 250ms ease',

  '@bp2': {
    bottom: 10,
    left: 10,

    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 300,
  },
  '@bp1': {
    fontSize: 12,
    lineHeight: '18px',
  },
})

export const CommunityLink = styled(NextLink, {
  display: 'block',

  position: 'relative',

  aspectRatio: '336 / 229',

  borderRadius: 8,

  overflow: 'hidden',

  boxShadow: '0 0 20px rgba($colors$blackRgb, 0.2)',

  '&:hover': {
    [`& img`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: {
      transform: 'translateY(-28px)',
      '@bp2': {
        transform: 'translateY(-24px)',
      },
    },
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 4px $colors$magenta9',
    [`& img`]: { filter: 'brightness(0.7)' },
    [`& ${HoverSpan}`]: { transform: 'translateY(0)', opacity: 1 },
    [`& ${Description}`]: {
      transform: 'translateY(-28px)',
      '@bp2': {
        transform: 'translateY(-24px)',
      },
    },
  },
  '&:active': { [`& img`]: { filter: 'brightness(0.6)' } },

  '@bp2': {
    borderRadius: '4px',
  },
})

export const Image = styled(ImageUnstyled, {
  borderRadius: 'inherit',

  transition: 'opacity 150ms ease, filter 250ms ease',
  objectFit: 'cover',
})

export const ImageMask = styled('div', {
  position: 'absolute',
  inset: 0,
  borderRadius: 'inherit',
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
})
