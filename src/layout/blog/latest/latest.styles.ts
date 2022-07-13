import { styled } from 'stitches.config'

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
  paddingBottom: 120
})

export const LatestArticle = styled('h2', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Articles = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 32,
})

export const Article = styled('li', {
  maxWidth: '336px',

  background: '$offWhite2',

  border: '1px solid $grayW8',
  borderRadius: '8px',
  overflow: "hidden",
})

export const MissOut = styled('li', {
  order: -10,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '336px',
  maxHeight: '404px',

  position: 'relative',

  height: '409px',

  background: '$offWhite2',

  overflow: "hidden",

  border: '1px solid $grayW8',
  borderRadius: '8px',
})

export const MissTitle = styled('h4', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',

  zIndex: 2
})

export const MissDescription = styled('p', {
  marginBottom: 40,
  maxWidth: '254px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '$gray5',

  zIndex: 2
})

export const ArticleTitle = styled('h4', {
  maxWidth: '171px',

  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '26px',
  color: '$magenta1',
})

export const ArticleDate = styled('span', {
  fontWeight: '300',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray4',
})
