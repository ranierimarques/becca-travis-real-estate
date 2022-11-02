import { styled } from 'stitches.config'

export const HeaderInfos = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    variant: {
      2: {
        margin: '0 16px 12px',
        alignItems: 'flex-end',
      },
    },
  },
})

export const HomesForSale = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$magenta6',

  variants: {
    variant: {
      1: {
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '-0.02em',
        color: '$magenta6',
      },
      2: {
        fontSize: '24px',
        lineHeight: '36px',
        color: '$black',
      },
    },
  },

  defaultVariants: {
    variant: '1',
  },
})

export const LastUpdate = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$grayW5',
})

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

  variants: {
    active: {
      true: {
        background: '$grayW3',
        boxShadow: 'inset 0 0 0 1px $colors$grayW3',
        color: '$white',
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
