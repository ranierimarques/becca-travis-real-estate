import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,

  width: '336px',
  padding: '24px 22px',
  border: '1px solid #CDD1D6',
  borderRadius: '8px',
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#33303E',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 24,
})

export const Input = styled('input', {
  width: '100%',
  height: '100%',

  padding: '0 32px 0 16px',

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
  width: '288px',
  height: '40px',

  position: 'relative',

  overflow: 'hidden',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$gray5',

    cursor: 'text',
  },

  '&:focus-within': {
    boxShadow: '0 0 0 2px $colors$gray5',
  },
})
