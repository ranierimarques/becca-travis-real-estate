import { css, styled } from 'stitches.config'

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
  padding: '120px 0',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  padding: '64px 0 64px 64px',
  
  background: 'rgba($colors$tangerine10Rgb, 0.75)',
  border: '1px solid rgba($colors$tangerine7Rgb, 0.15)',
  boxShadow: '0px 14px 50px rgba($colors$blackRgb, 0.08)',
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

export const BeccaTravis = styled('h3', {
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '44px',
  color: '$magenta1'
})

export const Paragraph = styled('p', {
  maxWidth: '237px',
  marginBottom: '32px',

  fontWeight: '300',
  fontSize: '16px',
  lineHeight: '29px',
  color: '$details1',
})

export const SvgStyles = css({
  display: 'block',
})