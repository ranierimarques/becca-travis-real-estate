import { styled } from 'stitches.config'

export const Form = styled('form', {
  marginRight: 'auto',

  paddingTop: 24,

  display: 'flex',
  flexDirection: 'column',
})

export const FormTitle = styled('h4', {
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
    color: '#9CA8B7',
  },
})

export const DisclaimerText = styled('span', {
  maxWidth: '327px',

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '16px',
  color: '$gray3',
})

export const Disclaimer = styled('strong', {
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '16px',
  color: '$gray1',
})

export const CheckboxLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray5',
})
