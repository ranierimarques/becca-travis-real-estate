import { styled } from 'stitches.config'

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  flexGrow: 1,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$gray2',
})

export const Input = styled('input', {
  width: '100%',
  height: '100%',

  paddingLeft: '16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',

  '&::placeholder': {
    color: '$grayW6',
  },
})

export const InputWrapper = styled('div', {
  boxShadow: '0 0 0 1px $colors$grayW7',
  borderRadius: '4px',
  width: '100%',
  height: '40px',

  position: 'relative',

  overflow: 'hidden',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$gray5, inset 0px 0px 5px rgba(0, 0, 0, 0.1)',

    cursor: 'text',
  },

  '&:focus-within': {
    boxShadow: '0 0 0 2px $colors$gray5',
  },
})
