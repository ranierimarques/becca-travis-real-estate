import { styled } from 'stitches.config'
import { CirclesSvg } from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '120px 0 160px',
})
export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const Content = styled('div', {
  position: 'sticky',
  top: '120px',
  height: 'fit-content',
})

export const Title = styled('h1', {
  marginBottom: 16,

  maxWidth: '432px',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  marginBottom: 32,

  maxWidth: '430px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Reasons = styled('div', {
  position: 'relative',

  padding: '150px 32px 32px 32px',

  border: '1px solid rgba($colors$magenta2Rgb, 0.3)',
  boxShadow: '0px 40px 80px -20px rgba(81, 92, 107, 0.12)',
  borderRadius: '8px',
})

export const ReasonTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '#9D446E',
})

export const ReasonParagraph = styled('p', {
  maxWidth: '456px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '30px',
  color: '#5F5C6B',
})

export const Svg = styled(CirclesSvg, {
  position: 'absolute',
  top: 0,
  right: 0,
})
