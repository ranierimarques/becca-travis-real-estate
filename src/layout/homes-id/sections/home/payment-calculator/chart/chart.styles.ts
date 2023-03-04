import { styled } from 'stitches.config'

export const Graphic = styled('div', {
  position: 'relative',
  height: '224px',
  width: '224px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp4': {
    height: '200px',
    width: '200px',
  },
  '@bp2': {
    height: '204px',
    width: '204px',
  },
})

export const CenterText = styled('div', {
  position: 'absolute',

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
