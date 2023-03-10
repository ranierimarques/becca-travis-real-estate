import type * as Stitches from '@stitches/react'
import { styled } from 'stitches.config'

export const HomesForSale = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$magenta6',

  '@bp4': {
    lineHeight: '20px',
  },
  '@bp1': {
    fontSize: '12px',
  },
})

export const LastUpdate = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$grayW5',

  '@bp4': {
    lineHeight: '20px',
  },
  '@bp1': {
    fontSize: '12px',
  },
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

        '@bp4': {
          flexDirection: 'column',
          alignItems: 'center',
        },

        [`${HomesForSale}`]: {
          fontSize: '24px',
          lineHeight: '36px',
          letterSpacing: 'initial',
          color: '$black',

          '@bp1': {
            fontSize: '20px',
          },
        },

        [`${LastUpdate}`]: {
          position: 'absolute',
          right: '0',

          '@bp4': {
            position: 'static',

            lineHeight: '24px',
          },
          '@bp1': {
            fontSize: '14px',
          },
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
        margin: '20px 16px', // Change this height value affects card box-shadow

        '@bp4': {
          margin: '20px 0',
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

        '@bp5': {
          margin: '48px 16px',
        },

        '@bp4': {
          flexDirection: 'column',
          flexWrap: 'nowrap',
          gap: 24,

          margin: '40px 16px',
        },

        '@bp3': {
          margin: '40px 16px',
        },

        '@bp2': {
          gap: 16,
          margin: '24px 16px',
        },
        '@bp1': {
          margin: '24px 16px',
        },

        [`> ${Options}`]: {
          gap: 32,

          '@bp4': {
            justifyContent: 'space-between',
          },
          '@bp2': {
            gap: 0,
          },
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

  '@bp1': {
    fontSize: '13px',
    gap: 6,
    padding: '8px 12px',
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
