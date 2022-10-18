import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,

  padding: '24px',
  boxShadow: '0 0 0 1px #CDD1D6',
  borderRadius: '8px',
})

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
})

export const Value = styled('span', {
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '26px',
  color: '#33303E',

  borderBottom: '1px solid #8C8A97',
})

export const Divisor = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  color: '#33303E',
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#33303E',
})
