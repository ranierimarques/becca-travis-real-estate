import type * as Stitches from '@stitches/react'
import { css, styled } from 'stitches.config'

const sharedStyles = css({
  width: 'fit-content',

  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '21px',

  padding: '10px 16px',
  borderRadius: '6px',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  background: '$$primaryColor',
  color: '$$secondaryColor',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&:active': {
    filter: 'brightness(0.8)',
  },

  variants: {
    color: {
      magenta: {
        $$primaryColor: '$colors$magenta9',
        $$secondaryColor: '$colors$offWhite1',
      },
      magentaLight: {
        $$primaryColor: '$colors$magenta1',
        $$secondaryColor: '$colors$white',
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
