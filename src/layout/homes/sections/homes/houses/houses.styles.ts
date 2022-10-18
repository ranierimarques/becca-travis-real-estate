import { styled } from 'stitches.config'

export const Houses = styled('ul', {
  // display: 'grid',
  // gridTemplateColumns: 'repeat(2, minmax(255px, 336px))',
  // gridAutoColumns: 'minmax(200px, 240px)',

  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',

  padding: '28px 16px 48px',

  '& > li': {
    flex: '1 1 255px',
    // maxWidth: '336px',
  },
})
