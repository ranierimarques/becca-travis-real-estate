import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: 1072,
  margin: '0 auto',
  padding: '160px 0',

  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('h2', {
  marginBottom: 48,

  fontWeight: 500,
  fontSize: 36,
  lineHeight: '50px',
  color: '$magenta6',
})

export const Heading = styled('div', {
  width: 'fit-content',

  marginBottom: 8,
  padding: '8px 16px',

  background: 'rgba($colors$magenta1Rgb, 0.1)',
  borderRadius: 999,

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '24px',
  color: '$magenta3',
})

export const CommunitiesList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
})

export const HoverSpan = styled('p', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  bottom: 20,
  left: 20,

  opacity: 0,
  visibility: 'hidden',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$white',
  zIndex: 5,

  transition: 'all ease-out 200ms',
})

export const Description = styled('span', {
  position: 'absolute',
  bottom: 20,
  left: 20,

  fontWeight: 600,
  fontSize: 20,
  lineHeight: '30px',
  color: '$white',
  zIndex: 3,

  transition: 'all ease-out 200ms',
})

export const Community = styled('li', {
  position: 'relative',
  width: '336px',
  height: '229px',
  borderRadius: 8,
  overflow: 'hidden',

  '&:hover': {
    [`& ${HoverSpan}`]: {
      opacity: 1,
      visibility: 'visible',
    },

    [`& ${Description}`]: {
      bottom: 48,
    },
  },
})

export const ImageMask = styled('div', {
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
})
