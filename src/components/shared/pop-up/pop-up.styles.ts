import { styled } from 'stitches.config'

export const Title = styled('h3', {
  marginBottom: 10,

  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '30px',
  color: '$magenta1',
})

export const Description = styled('span', {
  display: 'inline-block',
  marginBottom: 32,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$gray3',
})

export const Form = styled('form', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  width: '100%',
})

export const SecureText = styled('span', {
  display: 'block',

  maxWidth: 327,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$gray3',
})
