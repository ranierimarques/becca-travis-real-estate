import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '72px 0 120px',

  position: 'relative',
})

export const Background = styled('div', {
  backgroundColor: 'rgba($colors$tangerine5Rgb, 0.3)',
  width: '100%',
  height: '416px',

  position: 'absolute',
  top: 0,

  zIndex: -1,
})

export const Title = styled('h1', {
  marginTop: 8,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Description = styled('p', {
  marginTop: 16,

  maxWidth: '476px',
  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const LastPostLink = styled('a', {
  marginTop: 32,

  background: '$offWhite2',

  display: 'flex',

  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',
})

export const PostDate = styled('span', {
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray4',
})

export const PostTitle = styled('h3', {
  margin: '20px 0',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta1',
})

export const PostDescription = styled('p', {
  fontWeight: '300',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray2',

  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
