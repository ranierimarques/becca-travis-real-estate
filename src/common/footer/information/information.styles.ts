import { styled } from 'stitches.config'

export const Link = styled('a', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW8',
})

export const Slogan = styled('span', {
  display: 'block',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.8px',
  color: '$offWhite1',

  marginTop: 32,
})

export const LinkList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const Title = styled('span', {
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '30px',
  color: '$white',
})

export const Separator = styled('div', {
  width: 32,
  height: 1,
  background: '$offWhite1',
  borderRadius: 999,

  margin: '6px 0 12px',
})

export const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW8',
})

export const AboutUsDescription = styled('p', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW8',

  maxWidth: 459,
})
