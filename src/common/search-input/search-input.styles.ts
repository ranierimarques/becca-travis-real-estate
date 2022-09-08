import { styled } from 'stitches.config'

export const InputWrapper = styled('div', {
  marginTop: 32,
  paddingLeft: '24px',

  background: '$offWhite2',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,
  width: 527,
})

export const SearchInput = styled('input', {
  flex: 1,

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray5',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$grayW5',
  },
})

export const SearchButton = styled('button', {
  padding: '20px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',
})
