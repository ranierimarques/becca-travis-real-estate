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

  '@bp5': {
    marginBottom: 48,
  },
  '@bp4': {
    marginBottom: 32,
    gap: 24,
  },
  '@bp2': {
    gap: 20,
    marginBottom: 24,
    gridTemplateColumns: '1fr',
  },
})

export const Divider = styled('div', {
  width: '100%',
  height: 1,

  margin: '16px 0',

  background: '$grayW8',
})

export const SecureText = styled('span', {
  display: 'block',

  maxWidth: 327,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '22px',
  color: '$gray3',
})
