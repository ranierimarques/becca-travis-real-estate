import NextLink from 'next/link'
import { css, styled } from 'stitches.config'

const Breakpoints = css({
  maxWidth: '1184px',
  margin: '0 auto',
  px: '56px',

  '@bp4': {
    px: '40px',
  },
  '@bp3': {
    px: '32px',
  },
  '@bp2': {
    px: '24px',
  },
  '@bp1': {
    px: '16px',
  },
})

export const Wrapper = styled('div', Breakpoints, {
  '@bp3': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',
  },
})

export const ReviewSpan = styled('span', {
  display: 'block',
  '& + &': {
    marginTop: 16,
  },
})

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
})

export const Description = styled('p', {
  maxWidth: '428px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    fontSize: '14px',
  },
})

export const ViewAll = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: 'rgba($colors$magenta9Rgb, .5)',

  cursor: 'default',

  '@bp3': {
    display: 'none',
  },
})

export const ViewAllLink = styled(NextLink, {
  display: 'none',
  gap: 8,

  padding: '14px 24px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21px',
  color: '$magenta2',

  marginTop: 16,

  '@bp3': {
    display: 'flex',
  },
})

export const TestimonialsContainer = styled('div', Breakpoints, {
  position: 'relative',
  overflow: 'hidden',

  paddingTop: 48,

  '@bp4': {
    paddingTop: 40,
  },
  '@bp3': {
    paddingTop: 32,
  },
  '@bp2': {
    paddingTop: 24,
  },

  variants: {
    resize: {
      false: {
        height: 676,
      },
    },
  },
})

export const TestimonialsList = styled('ul', {
  scrollMarginTop: 32,

  columnCount: 3,
  columnGap: 32,

  '@bp5': {
    columnGap: 24,
  },
  '@bp4': {
    columnGap: 32,
    columnCount: 2,
  },
  '@bp2': {
    columnCount: 1,
  },
})

export const Overlay = styled('div', {
  width: '100vw',
  height: '300px',

  position: 'absolute',
  bottom: 0,
  left: '50%',

  transform: 'translate(-50%)',

  pointerEvents: 'none',

  background: `linear-gradient(180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.7) 85%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%)`,
})
