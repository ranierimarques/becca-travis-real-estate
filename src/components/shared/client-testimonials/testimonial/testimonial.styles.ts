import { styled } from 'stitches.config'
import { LinkSvg, LogoSvg } from '../svgs'

export const LinkSvgHover = styled(LinkSvg, {
  transition: 'all 250ms ease',
  opacity: '0',
  transform: 'scale(0.5)',
})

export const Testimonial = styled('button', {
  padding: '24px',
  maxWidth: '336px',
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
  [`&:has(${Testimonial}:focus-visible)`]: { zIndex: '1' },
  '@supports not selector(:has(a))': { '&:focus-within': { zIndex: '1' } },
})

export const Name = styled('span', {
  marginBottom: '4px',

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW1',
})

export const Source = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray3',
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
})

// Modal

export const ContentHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',

  position: 'relative',
  padding: '32px 32px 24px 32px',
  background: 'rgba($colors$magenta5Rgb, 0.2)',
  borderBottom: '2px solid rgba($colors$magenta5Rgb, 0.5)',
  gap: 16,
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

export const ModalLogo = styled(LogoSvg, {
  position: 'absolute',
  top: 0,
  right: 36,
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
})
