import { styled } from 'stitches.config'

export const Section = styled('section', {
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

export const TestimonialsContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 32,

  position: 'relative',

  scrollMarginTop: 32,

  variants: {
    resize: {
      true: {
        height: 'fit-content',
      },
      false: {
        '& ul > li:nth-child(n+3)': {
          display: 'none',
        },
      },
    },
  },
})

export const OverlayWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  width: '100%',

  padding: '197px 0px 112px',

  position: 'absolute',
  bottom: '-48px', // Testimonial Box Shadow Spread + 8px for safe zone

  background: `linear-gradient(180deg, 
    rgba(255, 255, 255, 0) 47.4%, 
    rgba(255, 255, 255, 0.7) 75.52%,
    rgba(255, 255, 255, 1) 90%, 
    rgba(255, 255, 255, 1) 100%)`,

  pointerEvents: 'none',
})

export const TestimonialsList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
})
