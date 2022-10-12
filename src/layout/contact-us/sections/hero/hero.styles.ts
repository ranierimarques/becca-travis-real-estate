import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '72px 0 160px',

  position: 'relative',
})

export const Background = styled('div', {
  height: '330px',
  width: '100%',
  background: 'rgba($colors$tangerine5Rgb, 0.3)',
  position: 'absolute',
  top: 0,
  zIndex: -2,
})

export const Container = styled('div', {
  maxWidth: '1072px',
  margin: '0 auto',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const FormContainer = styled('div', {
  padding: '16px 40px 16px 16px',

  display: 'flex',
  alignItems: 'stretch',
  gap: 40,

  position: 'relative',

  background: '$white',

  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '16px',
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  marginBottom: 40,
  maxWidth: '359px',

  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})
