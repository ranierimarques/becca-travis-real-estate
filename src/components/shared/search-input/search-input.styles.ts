import { styled } from 'stitches.config'

export const InputWrapper = styled('div', {
  background: '$offWhite2',

  display: 'flex',
  alignItems: 'center',

  borderRadius: 8,
  boxShadow: '0 0 25px rgba($colors$blackRgb, 0.2)',

  transition: 'box-shadow 150ms ease',

  '&:hover': {
    boxShadow:
      '0 0 0 1px $colors$magenta6, 0 0 0 4px rgba($colors$magenta2Rgb, 0.5), 0 0 25px rgba($colors$blackRgb, 0.4)',
  },
  '&:focus-within': {
    boxShadow:
      '0 0 0 1px $colors$magenta6, 0 0 0 4px $colors$magenta2, 0 0 25px rgba($colors$blackRgb, 0.4)',
  },
})

export const Input = styled('input', {
  flex: 1,

  width: 474,
  height: 64,

  padding: '0 16px 0 24px',

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray1',
  caretColor: '$magenta8',

  textOverflow: 'ellipsis',

  '&::placeholder': {
    fontWeight: 400,
    color: '$grayW5',
  },

  '@bp2': {
    width: 'calc(100vw - 102px)',
    height: 60,

    padding: '0 16px',
  },
  '@bp1': {
    width: 'calc(100vw - 86px)',
    height: 56,

    padding: '0 16px',

    fontSize: 12,
  },
})

export const SearchButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',

  padding: '20px 15px',

  transition: 'all 150ms ease',

  color: '$grayW5',

  '&:hover': {
    background: 'rgba($colors$grayW8Rgb, 0.8)',
    color: '$grayW4',
  },
  '&:focus-visible': {
    background: 'rgba($colors$magenta2Rgb, 0.1)',
    boxShadow: '-1px 0 0 $colors$magenta2',
    color: '$magenta3',
  },
  '&:active': {
    background: 'rgba($colors$magenta2Rgb, 0.1)',
    color: '$magenta3',
  },

  '@bp2': {
    padding: '18px 15px',
  },
  '@bp1': {
    padding: '16px 15px',
  },
})

export const Suggestions = styled('ul', {
  position: 'absolute',

  top: '100%',
  marginTop: 8,
  width: '100%',

  background: '$offWhite2',
  borderRadius: '8px',

  zIndex: 2,

  boxShadow: '0 0 25px rgba($colors$blackRgb, 0.2)',

  variants: {
    open: {
      true: {
        padding: '12px',
      },
    },
  },
})

export const Suggestion = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',

  borderRadius: '4px',

  padding: '8px',

  cursor: 'pointer',

  '& + &': {
    marginTop: '4px',
  },

  variants: {
    active: {
      true: {
        background: 'rgba($colors$grayW7Rgb, 0.15)',

        '&:active': {
          background: 'rgba($colors$grayW7Rgb, 0.35)',
        },
      },
    },
  },
})

export const Empty = styled('li', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
  textAlign: 'center',

  padding: '8px',

  cursor: 'default',
})

export const Form = styled('form', {
  position: 'relative',
  marginTop: 32,

  '@bp2': {
    marginTop: 24,
  },

  variants: {
    variant: {
      houses: {
        [`${InputWrapper}`]: {
          boxShadow: 'none',
          background: '$grayW10',

          '&:hover': {
            boxShadow: '0 0 0 1px $colors$grayW6',
          },
          '&:focus-within': {
            boxShadow: '0 0 0 2px $colors$magenta3',
          },
        },
        [`${Input}`]: {
          height: 48,
          padding: '0 16px 0 20px',
        },
        [`${SearchButton}`]: {
          padding: '12px 15px',
        },
      },
    },
    visualization: {
      map: {
        marginTop: 16,
      },
      gallery: {
        marginTop: 0,
        flex: 1,
      },
    },
  },
})
