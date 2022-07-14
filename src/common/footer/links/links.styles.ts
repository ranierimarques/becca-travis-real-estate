import { styled } from 'stitches.config'

export const Link = styled('a', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray1',

  '&:hover': {
    color: '$magenta1',
    textDecoration: 'underline',
  },
})

export const Title = styled('span', {
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '30px',
  letterSpacing: '0.4px',

  color: '$gray1',
})

export const Separator = styled('div', {
  width: 32,
  height: 1,
  background: '$magenta2',
  borderRadius: 999,

  margin: '6px 0 12px',
})

export const LinkList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const ContactLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray1',

  '&:hover': {
    color: '$magenta1',
    textDecoration: 'underline',
  },
})

export const SocialLink = styled('a', {
  display: 'block',
  lineHeight: '0',

  filter: 'drop-shadow(0px 2px 10px rgba($colors$blackRgb, 0.04))',
  color: '$gray2',

  '&:hover': {
    color: '$magenta1',
    filter: 'drop-shadow(0px 2px 8px rgba($colors$magenta1Rgb, 0.25))',
  },
})
