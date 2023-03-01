import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'calculator',

  height: 'fit-content',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,

  padding: '24px',
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',

  marginTop: 32,
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray1',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})
