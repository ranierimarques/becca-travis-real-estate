import { styled } from 'stitches.config'
import * as Svg from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
})

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '48px',
  color: '#58243C',

  marginBottom: 12,
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Description = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '32px',
  textAlign: 'center',

  color: '#4E4B59',

  marginBottom: 24,
})

export const Options = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
})

export const CardsGrid = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,

  paddingTop: 48,

  position: 'relative',
})

export const YelpLogo = styled(Svg.Yelp, {
  position: 'absolute',
  top: 0,
  right: 0,
})

export const Card = styled('li', {
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
  overflow: 'hidden',
  borderRadius: '8px',
  backgroundColor: '$grey2',

  width: '336px',
  height: '244px',

  position: 'relative',
})

export const BusinessName = styled('span', {
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '24px',

  color: '#FFFFFF',

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

  color: '#FFFFFF',

  position: 'absolute',
  right: 16,
  bottom: 16,
})
