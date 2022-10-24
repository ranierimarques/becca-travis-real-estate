import { css, styled } from 'stitches.config'

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
  padding: '159px 0 120px',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  padding: '64px 0 64px 64px',

  background: 'rgba($colors$tangerine10Rgb, 0.75)',
  boxShadow:
    '0px 14px 50px rgba($colors$blackRgb, 0.08), 0 0 0 1px rgba($colors$tangerine7Rgb, 0.15)',
  borderRadius: '24px',
})

export const Title = styled('h3', {
  maxWidth: '262px',
  marginBottom: '20px',

  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '44px',
  color: '$gray1',
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
})

export const IconContainer = styled('div', {
  position: 'absolute',
  padding: '10px',
  filter: 'drop-shadow(0px 12px 15px rgba($colors$tangerine8Rgb, 0.2))',
})

export const SvgStyles = css({
  display: 'block',
})
