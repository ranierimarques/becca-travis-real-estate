import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100%',

  padding: '138px 300px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Title = styled('h3', {
  color: '$gray2',
  fontSize: '22px',
  fontWeight: 600,
  lineHeight: '32px',

  marginBottom: 8,
})

export const Paragraph = styled('p', {
  color: '$gray4',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '22px',

  textAlign: 'center',
  maxWidth: 385,

  marginBottom: 42,
})

export const SvgBackground = styled('div', {
  padding: 22,
  borderRadius: 999,
  background:
    'linear-gradient(180deg, rgba($colors$grayW9Rgb, 0.70) 0%, rgba($colors$grayW9Rgb, 0.00) 100%)',
})

export const Button = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,

  padding: '24px 60px',
  borderRadius: 16,
  border: '1px solid $grayW9',

  color: '$gray5',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  whiteSpace: 'nowrap',

  transition: 'all 200ms ease-in',

  '& path': {
    transition: 'stroke 200ms ease-in',
  },

  [`& ${SvgBackground}`]: {
    transition: 'background 200ms ease-in',
  },

  '&:hover': {
    borderColor: '$magenta4',
    color: '$gray2',

    '& path': {
      stroke: '$magenta2',
    },

    [`& ${SvgBackground}`]: {
      background:
        'linear-gradient(180deg, rgba($colors$magenta5Rgb, 0.30) 0%, rgba($colors$magenta5Rgb, 0.00) 100%)',
    },
  },
})
