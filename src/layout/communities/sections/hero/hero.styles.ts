import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: 48,

  paddingTop: 80,

  '@bp5': {
    flexDirection: 'column',
    gap: 48,
  },

  '@bp4': {
    paddingTop: 64,
  },
  '@bp2': {
    paddingTop: 40,
  },
})

export const Background = styled('div', {
  position: 'absolute',
  top: '0px',

  width: '100%',
  height: '460px',

  background: 'rgba($colors$tangerine5Rgb, 0.3)',
  zIndex: -1,
})

export const Title = styled('h2', {
  margin: '8px 0 16px',

  fontWeight: 500,
  fontSize: '40px',
  lineHeight: '64px',

  textAlign: 'center',

  color: '$magenta6',

  '@bp4': {
    fontSize: '36px',
    lineHeight: '50px',
  },

  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },

  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Description = styled('span', {
  maxWidth: '584px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '$gray2',

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const ImageSource = styled('span', {
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  color: '$gray2',
})

export const Banner = styled('div', {
  width: '704px',
  height: '396px',
  backgroundColor: '$gray2',
  borderRadius: '8px',

  marginTop: '48px',
})
