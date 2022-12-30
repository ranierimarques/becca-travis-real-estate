import { styled } from 'stitches.config'
import * as Svg from '../svgs'

export const LinkSvgHover = styled(Svg.Link, {
  transition: 'all 250ms ease',
  opacity: '0',
  transform: 'scale(0.5)',
})

export const Testimonial = styled('button', {
  padding: '24px',
  background: '$white',
  boxShadow: '0px 0px 40px rgba($colors$blackRgb, 0.08)',
  borderRadius: '8px',

  transition: 'box-shadow 250ms ease',

  '&:hover': {
    boxShadow: '0px 0px 40px rgba($colors$blackRgb, 0.15)',
    [`${LinkSvgHover}`]: { transform: 'scale(1)', opacity: '1' },
  },

  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
    boxShadow: '0px 0px 40px rgba($colors$blackRgb, 0.15)',
    [`${LinkSvgHover}`]: { transform: 'scale(1)', opacity: '1' },
  },
})

export const TestimonialItem = styled('li', {
  '& + &': {
    marginTop: 32,
  },

  '@bp5': {
    '& + &': {
      marginTop: 24,
    },
  },
  '@bp4': {
    '& + &': {
      marginTop: 32,
    },
  },
  '@bp2': {
    '& + &': {
      marginTop: 16,
    },
  },

  [`&:has(${Testimonial}:focus-visible)`]: { zIndex: '1' },
  '@supports not selector(:has(a))': { '&:focus-within': { zIndex: '1' } },
})

export const Name = styled('span', {
  marginBottom: '4px',

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW1',

  '@bp4': {
    fontSize: '14px',
    lineHeight: '20px',
  },
})

export const Source = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray3',

  '@bp4': {
    fontSize: '12px',
    lineHeight: '20px',
  },
})

export const Text = styled('blockquote', {
  textAlign: 'left',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray2',

  '& > span:nth-child(n+4)': {
    display: 'none',
  },

  '& > span:nth-child(3)': {
    display: 'inline-block',
  },

  display: '-webkit-box',
  WebkitLineClamp: '10',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',

  '@bp1': {
    fontSize: '12px',
  },
})

// Modal

export const ContentHeader = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  padding: '32px 32px 24px 32px',
  background: 'rgba($colors$magenta5Rgb, 0.2)',
  borderBottom: '2px solid rgba($colors$magenta5Rgb, 0.5)',

  '@bp3': {
    padding: '24px 20px',
  },
})

export const ModalName = styled('span', {
  display: 'block',
  marginBottom: '4px',

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW1',
})

export const ModalSource = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray3',
})

export const ModalLogo = styled(Svg.Logo, {
  position: 'absolute',
  top: 0,
  right: 36,

  height: '100%',
})

export const ModalText = styled('p', {
  padding: '24px 32px 32px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray2',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '12px',
  },

  '&::-webkit-scrollbar-track': {
    background: 'rgba($colors$blackRgb, 0.08)',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$grayW8',
    borderRadius: '6px',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba($colors$grayW7Rgb, 0.8)',
  },

  '@bp3': {
    padding: '24px 20px',
  },
})
