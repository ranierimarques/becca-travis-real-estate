import { styled } from 'stitches.config'

export const Graphic = styled('div', {
  position: 'relative',
  padding: '0 32px',
})

export const CenterText = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,

  zIndex: '-1',
})

export const Value = styled('span', {
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: '$gray1',

  borderBottom: '1px solid $colors$gray5',
})

export const Divisor = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  color: '$gray1',
})
