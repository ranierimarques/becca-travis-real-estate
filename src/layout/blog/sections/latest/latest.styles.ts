import { styled } from 'stitches.config'

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
  paddingBottom: 120,
})

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const InputWrapper = styled('div', {
  background: '$grayW10',

  display: 'flex',
  alignItems: 'center',

  borderRadius: 8,
  boxShadow: '0 0 0 1px $colors$grayW9',

  transition: 'box-shadow 150ms ease',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$magenta6, 0 0 0px 4px rgba($colors$magenta2Rgb, 0.5)',
  },
  '&:focus-within': {
    boxShadow: '0 0 0 1px $colors$magenta6, 0 0 0 4px $colors$magenta2',
  },
})

export const Input = styled('input', {
  flex: 1,

  width: 280,
  height: 48,

  padding: '0 16px 0 20px',

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray1',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$gray3',
  },
})

export const SearchButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',

  padding: '12px 15px',

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
})
