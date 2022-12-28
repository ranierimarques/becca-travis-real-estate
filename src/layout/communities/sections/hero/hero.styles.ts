import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '80px 0 56px',
  position: 'relative',
})

export const Background = styled('div', {
  position: 'absolute',
  top: '0px',

  width: '100%',
  height: '460px',

  background: 'rgba(250, 220, 208, 0.3)',
  zIndex: -1,
})

export const Title = styled('h2', {
  margin: '8px 0 16px',

  fontWeight: 500,
  fontSize: '40px',
  lineHeight: '64px',

  textAlign: 'center',

  color: '#58243C',
})

export const Description = styled('span', {
  maxWidth: '584px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#4E4B59',

  marginBottom: 48,
})

export const ImageSource = styled('span', {
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  color: '#4E4B59',
})

export const Banner = styled('div', {
  width: '704px',
  height: '396px',
  backgroundColor: '#4E4B59',
  borderRadius: '8px',

  marginTop: '48px',
})
