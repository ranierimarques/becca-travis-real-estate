import { styled } from 'stitches.config'
import { Loupe } from './svgs'

export const Suggestions = styled('div', {
  position: 'absolute',

  left: '0px',
  top: '100%',

  marginTop: 8,

  width: '100%',

  padding: '12px',

  background: '$offWhite2',
  borderRadius: '8px',

  display: 'none',

  zIndex: 1,
})

export const SearchButton = styled('button', {
  padding: '20px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',
})

export const LoupeSvg = styled(Loupe, {})

export const InputWrapper = styled('div', {
  marginTop: 32,

  background: '$offWhite2',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,

  '&:hover': {
    boxShadow: '0 0 0 2px $colors$grayW7',

    cursor: 'text',

    [`& ${SearchButton}`]: {
      background: 'rgba($colors$grayW8Rgb, 0.8)',
    },
  },

  '&:focus-within': {
    boxShadow: '0 0 0 2px $colors$magenta2',

    [`& ${SearchButton}`]: {
      background: 'rgba($colors$magenta2Rgb, 0.1)',
    },

    [`& ${LoupeSvg}`]: {
      '& path': {
        stroke: '$magenta3',
      },
    },

    [`& ${Suggestions}`]: {
      display: 'block',
    },
  },
})

export const SearchInput = styled('input', {
  flex: 1,

  width: 457,
  height: 64,
  paddingLeft: '24px',

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

export const CurrentLocation = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',

  width: '100%',

  padding: '8px 0px 8px 8px',

  '&:hover': {
    background: 'rgba($colors$gray3Rgb, 0.2)',
    borderRadius: '4px',
    cursor: 'pointer',
  },
})

export const Suggestion = styled('button', {
  textAlign: 'left',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',

  width: '100%',

  padding: '8px 0px 8px 8px',

  '&:nth-child(-n+5)': {
    marginBottom: '4px',
  },

  '&:hover': {
    background: 'rgba($colors$gray3Rgb, 0.2)',
    borderRadius: '4px',
    cursor: 'pointer',
  },
})
