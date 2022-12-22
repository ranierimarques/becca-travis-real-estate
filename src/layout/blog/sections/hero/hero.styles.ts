import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Section = styled('section', {
  background: 'rgba($colors$tangerine5Rgb, 0.3)',
  padding: '80px 0',

  position: 'relative',
  marginBottom: 40,
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  margin: '0 auto',
  maxWidth: '1072px',
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

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const KeepExploring = styled('div', {
  marginTop: 24,

  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$magenta6',

  opacity: '60%',
})

export const Overlay = styled('div', {
  transition: 'all 250ms ease',

  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(180deg, rgba($colors$gray2Rgb, 0) 50%, rgba($colors$blackRgb, 0.6) 100%)',
  borderRadius: '8px',
})

export const LastPostLink = styled(NextLink, {
  position: 'relative',

  '&:hover': {
    [`& ${Overlay}`]: {
      boxShadow:
        'inset 0 0 60px 20px rgba($colors$blackRgb, 0.2), 0 0 40px rgba($colors$blackRgb, 0.2)',
    },
  },
})

export const PostTitle = styled('h3', {
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  color: '$white',
})

export const PostDescription = styled('p', {
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '23px',
  color: '$grayW9',

  maxWidth: '400px',

  display: '-webkit-box',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const PostDate = styled('span', {
  fontWeight: '300',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$grayW9',
})

export const ReadingTime = styled('span', {
  fontWeight: '300',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$grayW9',

  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '-12px',

    width: '4px',
    height: '4px',

    borderRadius: '999px',
    background: '$grayW9',

    transform: 'translateY(-50%)',
  },
})
