import { styled } from 'stitches.config'

export const TriggerButton = styled('button', {
  position: 'fixed',
  left: 24,
  bottom: 24,
  zIndex: 30,
  width: 52,
  height: 52,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  color: '$white',
  background: '$magenta1',
  boxShadow: '0 12px 30px rgba($colors$magenta6Rgb, 0.25)',
  transition: 'background 150ms ease, transform 150ms ease',
  '&:hover': { background: '$magenta9', transform: 'translateY(-2px)' },
  '&:focus-visible': { boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.25)' },
  '@bp2': { left: 16, bottom: 16 },
})

export const Panel = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto minmax(260px, 1fr) auto',
  width: '100%',
  height: 'min(680px, 80vh)',
  minHeight: 'min(500px, 80vh)',
  color: '$gray1',
  background: '$white',
  '@bp2': {
    height: '80vh',
    minHeight: 0,
  },
})

export const Header = styled('header', {
  padding: '22px 56px 18px 24px',
  borderBottom: '1px solid $grayW9',
})

export const Title = styled('h2', {
  color: '$magenta6',
  fontSize: 23,
  lineHeight: '30px',
  fontWeight: 600,
})

export const Status = styled('p', {
  marginTop: 4,
  color: '$gray3',
  fontSize: 13,
  lineHeight: '20px',
})

export const Messages = styled('div', {
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 20,
  background: '$offWhite2',
})

export const Message = styled('p', {
  width: 'fit-content',
  maxWidth: '88%',
  padding: '10px 12px',
  borderRadius: 8,
  fontSize: 14,
  lineHeight: '21px',
  whiteSpace: 'pre-wrap',
  variants: {
    tone: {
      assistant: {
        alignSelf: 'flex-start',
        color: '$gray1',
        background: '$white',
        boxShadow: 'inset 0 0 0 1px $colors$grayW9',
      },
      user: {
        alignSelf: 'flex-end',
        color: '$white',
        background: '$magenta7',
      },
      error: {
        alignSelf: 'flex-start',
        color: '$magenta6',
        background: '$tangerine5',
      },
    },
  },
})

export const Composer = styled('form', {
  display: 'grid',
  gridTemplateColumns: '1fr 44px',
  alignItems: 'end',
  gap: 10,
  padding: 16,
  borderTop: '1px solid $grayW9',
  background: '$white',
})

export const Input = styled('textarea', {
  width: '100%',
  minHeight: 44,
  maxHeight: 112,
  resize: 'none',
  padding: '10px 12px',
  borderRadius: 6,
  color: '$gray1',
  background: '$white',
  boxShadow: 'inset 0 0 0 1px $colors$grayW8',
  fontSize: 14,
  lineHeight: '22px',
  '&:focus': { boxShadow: 'inset 0 0 0 1px $colors$magenta1' },
  '&::placeholder': { color: '$gray5' },
  '&:disabled': { cursor: 'wait', opacity: 0.7 },
})

export const SendButton = styled('button', {
  width: 44,
  height: 44,
  display: 'grid',
  placeItems: 'center',
  borderRadius: 6,
  color: '$white',
  background: '$magenta1',
  '&:hover:not(:disabled)': { background: '$magenta9' },
  '&:focus-visible': { boxShadow: '0 0 0 3px rgba($colors$magenta1Rgb, 0.25)' },
  '&:disabled': { cursor: 'default', opacity: 0.4 },
})

export const SafetyNote = styled('p', {
  gridColumn: '1 / -1',
  color: '$gray4',
  fontSize: 11,
  lineHeight: '16px',
})
