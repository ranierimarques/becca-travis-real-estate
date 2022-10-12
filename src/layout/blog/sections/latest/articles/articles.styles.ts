import { styled } from 'stitches.config'

export const Articles = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'auto',
  gap: 32,
})

export const Link = styled('a', {
  display: 'block',
})

export const Overlay = styled('div', {
  position: 'absolute',
  boxShadow:
    'inset 0px 0px 20px rgba($colors$grayW1Rgb, 0.2), 0 4px 20px rgba($colors$grayW1Rgb, 0.2)',
  inset: 0,
  borderRadius: 8,
})

export const ArticleTag = styled('span', {
  display: 'inline-block',

  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '20px',
  textTransform: 'capitalize',
  color: '$magenta1',
})

export const ReadingTime = styled('span', {
  display: 'inline-block',

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  textTransform: 'capitalize',
  color: '$gray5',

  marginLeft: 20,

  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '-12px',

    width: '4px',
    height: '4px',

    borderRadius: '999px',
    background: '$gray5',

    transform: 'translateY(-50%)',
  },
})

export const ArticleDate = styled('span', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$gray5',
})

export const ArticleTitle = styled('h4', {
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray2',

  marginTop: 12,
})

export const ArticleDescription = styled('p', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '23px',
  color: '$gray3',

  marginTop: 8,
})
