import { styled } from 'stitches.config'

export const Text = styled('span', {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
})

export const Link = styled('a', {})

export const PageTitle = styled('h1', {
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  marginBottom: 24,

  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Table = styled('table', {
  background: '$grayW10',
  borderRadius: 8,
  padding: 16,

  textAlign: 'left',

  marginBottom: 16,
})

export const Tr = styled('tr', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',

  '&:not(:last-child)': {
    boxShadow: 'rgba($colors$blackRgb, 0.12) 0px -1px 0px inset',
  },
})

export const Th = styled('th', {
  padding: 24,

  '@bp2': {
    '& p': {
      fontSize: 10,
      lineHeight: '14px',
    },
    '& li': {
      fontSize: 10,
      lineHeight: '14px',
    },
  },
})

export const Heading1 = styled('h1', {
  fontWeight: '500',
  fontSize: '40px',
  lineHeight: '64px',
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

export const Heading2 = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '48px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '24px',
    lineHeight: '32px',
  },
  '@bp2': {
    fontSize: '22px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Heading3 = styled('h3', {
  fontWeight: '500',
  fontSize: '28px',
  lineHeight: '44px',
  color: '$magenta6',
})

export const Heading4 = styled('h4', {
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '40px',
  color: '$magenta6',
})

export const Heading5 = styled('h5', {
  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Heading6 = styled('h6', {
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '32px',
  color: '$gray2',

  marginBottom: 16,

  '@bp4': {
    marginBottom: 24,

    fontSize: '14px',
    lineHeight: '26px',
  },
})

export const Blockquote = styled('blockquote', {
  padding: '24px',
  background: '$offWhite2',
  borderRadius: '8px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '32px',
  color: '$gray3',

  marginBottom: 48,

  '@bp4': {
    fontSize: '14px',
    lineHeight: '26px',
  },
  '@bp2': {
    marginBottom: 40,
  },
})

export const OrderedList = styled('ol', {
  paddingLeft: 17.61,
  listStyle: 'revert',

  marginBottom: 24,

  '@bp3': {
    marginBottom: 32,
  },
})

export const UnorderedList = styled('ul', {
  paddingLeft: 17.61,
  listStyleType: 'disc',

  marginBottom: 24,

  '@bp3': {
    marginBottom: 32,
  },
})

export const ListItem = styled('li', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '32px',
  color: '$gray2',

  width: 'fit-content',

  listStyle: 'initial',

  '@bp4': {
    fontSize: '14px',
    lineHeight: '26px',
  },
})
