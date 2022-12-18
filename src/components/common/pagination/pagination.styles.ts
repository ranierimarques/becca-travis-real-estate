import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export const Dotts = styled('span', {
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray4',

  padding: '0px 8px',
})

export const Link = styled(NextLink, {
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
