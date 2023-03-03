import NextLink from 'next/link'
import { styled } from 'stitches.config'
import { Section as SectionTemplate } from '@/template'

export const Section = styled(SectionTemplate, {
  position: 'relative',
  pt: 80,
  pb: 80,

  '@bp4': {
    pt: 64,
    pb: 0,
  },

  '@bp2': {
    pt: 40,
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column',
    gap: 48,
  },
  '@bp3': {
    gap: 56,
  },
  '@bp2': {
    gap: 40,
  },
})

export const Title = styled('h1', {
  marginTop: 8,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

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

  '@bp4': {
    textAlign: 'center',
  },

  '@bp1': {
    fontSize: '14px',
    lineHeight: '26px',
  },
})

export const KeepExploring = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 8,

  padding: 0,
  marginTop: 24,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$magenta6',

  opacity: '60%',

  backgroundColor: 'transparent',

  transition: 'opacity .15s cubic-bezier(.4,0,.2,1)',

  '&:hover': {
    opacity: '100%',
    cursor: 'pointer',
  },
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

  '@bp2': {
    fontSize: '14px',
    lineHeight: '24px',
  },
  '@bp1': {
    fontSize: '12px',
  },
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

  '@bp2': {
    display: 'none',
  },
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
