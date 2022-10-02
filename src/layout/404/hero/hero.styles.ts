import { styled } from 'stitches.config'
import { Arrow as ArrowSvg, House as HouseSvg } from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '88px 0',

  position: 'relative',
})

export const Title = styled('h1', {
  marginTop: 8,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  display: 'inline-block',
})

export const Description = styled('p', {
  marginTop: 16,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const List = styled('ul', {
  marginTop: 32,

  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Arrow = styled(ArrowSvg, {
  transition: 'transform 150ms ease',
})

export const LinkHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21px',
  color: '$magenta2',

  marginBottom: 4,

  transition: 'all 250ms ease',
})

export const Link = styled('a', {
  display: 'inline-block',

  borderRadius: 5,

  '&:hover': {
    [`${Arrow}`]: {
      transform: 'translateX(4px)',
    },
    [`${LinkHeader}`]: {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      color: '$magenta1',
    },
  },
  '&:focus-visible': {
    outline: '2px solid rgba($colors$magenta1Rgb, 0.2)',
    outlineOffset: '8px',
    color: '$magenta1',
  },
})

export const LinkDescription = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',

  color: '$gray4',
})

export const House = styled(HouseSvg, {
  transform: 'scale(1.15)',
  maxWidth: '100%',
  minWidth: 'auto',
})
