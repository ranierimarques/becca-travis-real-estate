import { styled } from 'stitches.config'
import { Loupe } from './svgs'

export const Suggestions = styled('div', {
  position: 'absolute',

  left: '0px',

  width: '100%',

  padding: '12px',

  background: '#F6F6F8',
  borderRadius: '8px',

  display: 'none',

  zIndex: 1,

  '&.suggestions': {
    bottom: '-256px',
  },
  '&.current': {
    bottom: '-66px',
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

export const LoupeSvg = styled(Loupe, {})

export const InputWrapper = styled('div', {
  marginTop: 32,
  paddingLeft: '24px',

  background: '$offWhite2',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,
  width: 527,

  '&:hover': {
    boxShadow: '0px 0px 0px 1px #A6AEB8',

    cursor: 'text',

    [`& ${SearchButton}`]: {
      background: 'rgba(205, 209, 214, 0.8)',
    },
  },

  '&:focus-within': {
    boxShadow: '0px 0px 0px 1px #C06D94',

    [`& ${SearchButton}`]: {
      background: 'rgba(192, 109, 148, 0.1)',
    },

    [`& ${LoupeSvg}`]: {
      '& path': {
        stroke: '#CF84A7',
      },
    },

    [`& ${Suggestions}`]: {
      display: 'block',
    },
  },
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

export const CurrentLocation = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#4E4B59',

  width: '100%',

  padding: '8px 0px 8px 8px',

  '&:hover': {
    background: 'rgba(95, 92, 107, 0.2)',
    borderRadius: '4px',
    cursor: 'pointer',
  },
})

export const Suggestion = styled('button', {
  textAlign: 'left',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#4E4B59',

  width: '100%',

  padding: '8px 0px 8px 8px',

  '&:nth-child(-n+5)': {
    marginBottom: '4px',
  },

  '&:hover': {
    background: 'rgba(95, 92, 107, 0.2)',
    borderRadius: '4px',
    cursor: 'pointer',
  },
})
