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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,

  padding: '8px 20px',

  width: 332,

  background: '$grayW10',
  borderRadius: 8,
  boxShadow: '0 0 0 1px $colors$grayW9',
})

// TODO: Interactive, font color and states...
export const SearchInput = styled('input', {
  flex: 1,

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '30px',
  color: '$gray5',
  caretColor: '$magenta8',
  letterSpacing: '-2%',

  '&::placeholder': {
    fontWeight: 500,
    color: '$grayW5',
  },
})
