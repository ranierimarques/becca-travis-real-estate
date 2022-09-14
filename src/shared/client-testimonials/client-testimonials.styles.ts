import { styled } from 'stitches.config'

export const Section = styled('section', {
  paddingBottom: '120px',
  margin: '0 auto',
  maxWidth: '1072px',
})

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Description = styled('p', {
  maxWidth: '428px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const ViewAll = styled('a', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$magenta9',

  '&:hover': {
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  '&:focus': {
    textDecoration: 'none',
    outline: '2px solid rgba($colors$magenta9Rgb, 0.5)',
    outlineOffset: 2,
  },
})

export const Testimonials = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,

  '&:not(&.resize) > li:nth-child(n+3)': {
    display: 'none',
  },

  '&.resize': {
    maxHeight: 'fit-content',
  },
})

export const TestimonialsContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 32,

  position: 'relative',

  scrollMarginTop: 32,
})

export const TestimonialsOverlay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '237px 0px 64px',

  position: 'absolute',
  bottom: '0px',
  width: '100%',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0) 47.4%, rgba(255, 255, 255, 0.7) 75.52%, rgba(255, 255, 255, 0.7) 100%)',

  pointerEvents: 'none',
})
