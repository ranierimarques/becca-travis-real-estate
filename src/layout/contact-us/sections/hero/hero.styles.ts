import { styled } from 'stitches.config'

export const Section = styled('section', {
  background: 'rgba($colors$tangerine5Rgb, 0.3)',

  padding: '72px 0',
})

export const Container = styled('div', {
  maxWidth: '1072px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Title = styled('h1', {
  marginBottom: 24,
  maxWidth: '322px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  marginBottom: 28,
  maxWidth: '359px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Card = styled('div', {
  maxWidth: '285px',

  display: 'flex',
  alignItems: 'center',
  gap: 20,

  padding: '16px 24px 16px 16px',
  border: '1px solid $grayW7',
  borderRadius: '8px',
})

export const CardTitle = styled('h4', {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$grayW1',
})

export const CardInfo = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})

export const SvgBackground = styled('div', {
  padding: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'rgba($colors$tangerine1Rgb, 0.3)',
  borderRadius: '8px',
})

// ============== Form ====================

export const Form = styled('form', {
  maxWidth: '552px',

  padding: '24px 32px 33px',

  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  background: '$offWhite2',
  border: '1px solid $grayW8',
  borderRadius: '8px',
})

export const Input = styled('input', {
  background: '$offWhite2',
  border: '1px solid $grayW7',
  borderRadius: '8px',

  '&[type="text"]': {
    width: '220px',
    height: '48px',
  },
  '&[type="email"]': {
    width: '220px',
    height: '48px',
  },
  '&[type="tel"]': {
    width: '220px',
    height: '48px',
  },
})

export const TextArea = styled('textarea', {
  background: '$offWhite2',
  border: '1px solid $grayW7',
  borderRadius: '8px',

  marginBottom: 7,

  resize: 'none',
})

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray2',
})

export const CheckboxLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray5',
})
