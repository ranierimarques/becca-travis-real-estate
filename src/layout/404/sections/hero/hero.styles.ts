import { Section as SectionTemplate } from '@/template'
import NextLink from 'next/link'
import { styled } from 'stitches.config'
import { Arrow as ArrowSvg, House as HouseSvg } from './svgs'

export const Section = styled(SectionTemplate, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '88px 0',

  position: 'relative',

  overflowX: 'hidden',

  '@bp4': {
    flexDirection: 'column',
    gap: 80,
    padding: '40px 0',
  },
  '@bp1': {
    gap: 64,
  },
})

export const Title = styled('h1', {
  marginTop: 8,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  display: 'inline-block',

  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Description = styled('p', {
  marginTop: 16,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp2': {
    fontSize: '14px',
    lineHeight: '26px',
  },
})

export const List = styled('ul', {
  marginTop: 32,

  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  '@bp2': {
    alignItems: 'center',
  },
})

export const Arrow = styled(ArrowSvg, {
  transition: 'transform 150ms ease',

  '@bp4': {
    display: 'none',
  },
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

  '@bp4': {
    textDecoration: 'underline',
  },
})

export const Link = styled(NextLink, {
  display: 'inline-block',

  borderRadius: 5,

  '@bp4': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

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
  filter: 'drop-shadow(0 20px 40px rgba($colors$tangerine7Rgb, 0.4))',
})
