import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '72px 0 124px',

  position: 'relative',
})

export const Background = styled('div', {
  backgroundColor: 'rgba($colors$tangerine5Rgb, 0.3)',
  width: '100%',
  height: '482px',

  position: 'absolute',
  top: 0,

  zIndex: -1
})


export const Title = styled('h1', {
  marginBottom: '24px',

  fontWeight: '500',
  fontSize: '40px',
  lineHeight: '64px',
  color: '$magenta6',
})

export const Description = styled('p', {
  maxWidth: '476px',
  textAlign: 'center',

  marginBottom: '44px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const LastPost = styled('div', {
  display: 'flex',

  background: '$offWhite2',

  border: '1px solid $grayW8',
  borderRadius: '8px',
  overflow: "hidden",
})


export const PostTitle = styled('h3', {
  maxWidth: '205px',
  margin: '24px 0 16px',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta1',
})

export const PostDescription = styled('p', {
  maxWidth: '368px',
  marginBottom: '24px',

  fontWeight: '300',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray2',
})

export const PostDate = styled('span', {
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray4',
})
