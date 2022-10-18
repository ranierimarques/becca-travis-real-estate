import { styled } from 'stitches.config'

export const Container = styled('div', {})

export const Dotts = styled('span', {})

export const Link = styled('a', {
  display: 'inline-block',

  padding: '4px 8px',
  borderRadius: '4px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray4',

  variants: {
    active: {
      true: {
        background: 'rgba($colors$magenta5Rgb, 0.3)',
        color: '$magenta1',
      },
    },
  },
})
