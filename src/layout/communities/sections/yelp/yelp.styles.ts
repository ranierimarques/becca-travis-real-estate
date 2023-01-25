import { styled } from 'stitches.config'
import * as Svg from './svgs'

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '48px',
  color: '$magenta6',

  marginBottom: 12,

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp2': {
    fontSize: '22px',
    lineHeight: '32px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Description = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '32px',
  textAlign: 'center',

  color: '$gray2',

  marginBottom: 24,

  '@bp4': {
    textAlign: 'center',
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const Options = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  '@bp4': {
    display: 'none',
  },
})

export const CardsGrid = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,

  paddingTop: 24,

  width: '100%',

  '@bp5': {
    gap: 24,
  },
  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },
})

export const YelpLogo = styled(Svg.Yelp, {
  alignSelf: 'flex-end',
})

export const Card = styled('li', {
  background:
    'linear-gradient(180deg, rgba($colors$blackRgb, 0) 0%, rgba($colors$blackRgb, 0.8) 100%)',
  overflow: 'hidden',
  borderRadius: '8px',
  backgroundColor: '$grey2',

  aspectRatio: '336 / 244',

  position: 'relative',
})

export const BusinessName = styled('span', {
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '24px',

  color: '$white',

  position: 'absolute',
  left: 16,
  bottom: 44,
})

export const BusinessRating = styled('div', {
  position: 'absolute',
  left: 16,
  bottom: 16,
})

export const ReviewsCount = styled('span', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',

  textAlign: 'right',

  color: '$white',

  position: 'absolute',
  right: 16,
  bottom: 16,
})
