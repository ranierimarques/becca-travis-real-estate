import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
})

export const FormTitle = styled('h4', {
  marginBottom: 24,

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW3',
})

export const TextInput = styled('input', {
  boxShadow: '0 0 0 1px $colors$grayW7',
  borderRadius: '4px',
  width: '288px',
  height: '40px',

  padding: '8px 16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',

  '&::placeholder': {
    color: '$grayW6',
  },
})
