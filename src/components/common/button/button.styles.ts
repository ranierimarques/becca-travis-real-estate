import type * as Stitches from '@stitches/react'
import NextLinkUnstyled from 'next/link'
import { css, styled } from 'stitches.config'
import { Loader } from '../loader/loader.styles'

const sharedStyles = css({
  width: 'fit-content',

  position: 'relative',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  background: '$$primaryColor',
  color: '$$secondaryColor',

  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&:disabled': {
    $$primaryColor: 'rgba($colors$magenta1Rgb, 0.33)',
    $$secondaryColor: 'transparent',
  },

  '&:not(:disabled)': {
    '&:hover': {
      filter: 'brightness(0.9)',
    },

    '&:active': {
      filter: 'brightness(0.8)',
    },
  },

  [`& ${Loader}`]: {
    display: 'block',

    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
      '3': {
        padding: '14px 24px',
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

        background: 'transparent',
        boxShadow: 'inset 0 0 0 1px $$primaryColor',

        '&:hover': {
          background: 'rgba($colors$magenta5Rgb, 0.2)',
          filter: 'none',
        },
        '&:active': {
          background: 'rgba($colors$magenta5Rgb, 0.4)',
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

export const NextLink = styled(NextLinkUnstyled, sharedStyles, {
  display: 'inline-block',
})

export const Link = styled('a', sharedStyles, {
  display: 'inline-block',
})

export const Span = styled('span', sharedStyles, {
  display: 'inline-block',

  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        opacity: '.33',

        '&:hover': {
          cursor: 'default',
          background: 'transparent',
        },
        '&:active': {
          background: 'transparent',
        },
      },
    },
  },
})

export const Button = styled('button', sharedStyles)

export type ButtonVariants = Stitches.VariantProps<typeof sharedStyles>
