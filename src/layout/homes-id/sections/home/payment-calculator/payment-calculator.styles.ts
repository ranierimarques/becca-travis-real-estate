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

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#33303E',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})
