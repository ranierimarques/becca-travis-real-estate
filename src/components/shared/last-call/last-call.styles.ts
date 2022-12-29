import { css, styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  padding: '64px 0 64px 64px',

  background: 'rgba($colors$tangerine10Rgb, 0.75)',
  boxShadow:
    '0px 14px 50px rgba($colors$blackRgb, 0.08), 0 0 0 1px rgba($colors$tangerine7Rgb, 0.15)',
  borderRadius: '24px',

  '@bp4': {
    padding: '32px 0 32px',
    justifyContent: 'center',

    overflow: 'hidden',
  },
  '@bp2': {
    padding: '32px 24px',
  },
})

export const Title = styled('h3', {
  maxWidth: '262px',
  marginBottom: '20px',

  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '44px',
  color: '$gray1',

  '@bp4': {
    marginBottom: 12,
    textAlign: 'center',
  },
  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },
})

export const Conversation = styled('span', {
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '44px',
  color: '$magenta1',
})

export const Paragraph = styled('p', {
  maxWidth: '308px',
  marginBottom: '32px',

  fontWeight: '300',
  fontSize: '16px',
  lineHeight: '29px',
  color: '$details1',

  '@bp4': {
    marginBottom: 22,
  },

  '@bp2': {
    marginBottom: 28,

    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '26px',
    textAlign: 'center',
  },
})

export const IconContainer = styled('div', {
  position: 'absolute',
  padding: '10px',
  filter: 'drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))',
})

export const SvgStyles = css({
  display: 'block',
})
