import type * as Stitches from '@stitches/react'
import { styled } from 'stitches.config'

export const HomesForSale = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$magenta6',
})

export const LastUpdate = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$grayW5',
})

export const HeaderInfos = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    variant: {
      2: {
        position: 'relative',
        margin: '0 16px 12px',
        alignItems: 'flex-end',

        justifyContent: 'center',

        [`${HomesForSale}`]: {
          fontSize: '24px',
          lineHeight: '36px',
          letterSpacing: 'initial',
          color: '$black',
        },

        [`${LastUpdate}`]: {
          position: 'absolute',
          right: '0',
        },
      },
    },
  },
})

export type HeaderInfosVariants = Stitches.VariantProps<typeof HeaderInfos>

export const Options = styled('div', {
  display: 'flex',
})

export const Container = styled('div', {
  variants: {
    visualization: {
      map: {
        margin: '20px 16px',

        [`> ${Options}`]: {
          justifyContent: 'space-between',
          marginTop: 16,
        },
        [`+ ${HeaderInfos}`]: {
          display: 'none',
        },
      },
      gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 48,

        margin: '32px 16px',

        [`> ${Options}`]: {
          gap: 32,
        },
        [`> ${HeaderInfos}`]: {
          display: 'none',
        },
      },
    },
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW4',

  borderRadius: '5px',
  padding: '10px 16px',
  boxShadow: 'inset 0 0 0 1px $colors$grayW4',

  transition: 'filter 150ms ease, box-shadow 150ms ease',

  '&:focus': {
    zIndex: 2,
    boxShadow: 'inset 0 0 0 1px $colors$magenta3, 0 0 0 1px $colors$magenta3',
  },

  variants: {
    active: {
      true: {
        background: '$grayW3',
        boxShadow: 'inset 0 0 0 1px $colors$grayW3',
        color: '$white',

        '&:hover': {
          filter: 'brightness(0.85)',
        },
      },
      false: {
        '&:hover': {
          background: 'rgba($grayW9Rgb, 0.5)',
        },
      },
    },
    borderDirection: {
      left: {
        borderRadius: '5px 0 0 5px',
      },
      right: {
        borderRadius: '0 5px 5px 0',
      },
    },
  },
})

export const Space = styled('span', {
  letterSpacing: '1px',
})
