import { styled } from 'stitches.config'

export const Hat = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  textTransform: 'uppercase',

  variants: {
    capitalize: {
      true: {
        textTransform: 'capitalize',
      },
    },
    variant: {
      '1': {
        display: 'inline-block',

        background: 'rgba($magenta1Rgb, 0.1)',
        padding: '8px 16px',
        borderRadius: '9999px',

        color: '$magenta3',
      },
      '2': {
        display: 'flex',
        alignItems: 'center',
        gap: 8,

        marginBottom: 8,

        letterSpacing: '0.03em',
        color: '$magenta1',
      },
      '3': {
        display: 'inline-block',

        background: '$magenta2',
        padding: '4px 6px',
        borderRadius: '4px',

        fontSize: '12px',
        lineHeight: '20px',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})

export const Line = styled('div', {
  width: '16px',
  height: '1px',
  background: '$magenta1',
})