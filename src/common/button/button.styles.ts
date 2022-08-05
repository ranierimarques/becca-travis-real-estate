import type * as Stitches from '@stitches/react'
import { css, styled } from 'stitches.config'

const sharedStyles = css({
  width: 'fit-content',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  background: '$$primaryColor',
  color: '$$secondaryColor',

  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&:active': {
    filter: 'brightness(0.8)',
  },

  variants: {
    size: {
      '1': {
        padding: '10px 16px',
        borderRadius: '5px',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '300',
      },
      '2': {
        padding: '12px 24px',
        borderRadius: '5px',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '400',
      },
    },
    color: {
      magenta: {
        $$primaryColor: '$colors$magenta1',
        $$secondaryColor: '$colors$white',
        '&:focus:not(&:active)': {
          boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
        },
      },
    },
    outlined: {
      true: {
        fontWeight: '500',
        color: '$$primaryColor',

        padding: '10px 20px',

        background: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$primaryColor',

        '&:hover': {
          background: '$$primaryColor',
          color: '$$secondaryColor',

          filter: 'none',
        },
      },
    },
  },

  defaultVariants: {
    color: 'magenta',
    size: '1',
  },
})

export const Link = styled('a', sharedStyles, {
  display: 'inline-block',
})

export const Span = styled('span', sharedStyles, {
  display: 'inline-block',
})

export const Button = styled('button', sharedStyles, {
  cursor: 'pointer',
})

export type ButtonVariants = Stitches.VariantProps<typeof sharedStyles>
