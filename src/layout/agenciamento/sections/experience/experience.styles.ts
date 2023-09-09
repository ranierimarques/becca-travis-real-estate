import { styled } from 'stitches.config'

export const Title = styled('h2', {
  marginTop: '8px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp5': {
    fontSize: '32px',
    lineHeight: '44px',
  },
  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },
})

export const Description = styled('p', {
  margin: '16px 0 48px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    '& > br': {
      display: 'none',
    },
    mx: '32px',
  },
  '@bp2': {
    fontSize: '14px',
    lineHeight: '26px',
    mx: '8px',
  },
  '@bp1': {
    mx: '0',
  },
})

export const Cards = styled('div', {
  display: 'grid',
  gridTemplateAreas: `
    'card1 card2 banner'
    'cardXL cardXL banner'
  `,
  gap: 32,

  '@bp5': {
    gridTemplateAreas: `
    'card1 card2'
    'banner banner'
    'cardXL cardXL'
  `,
  },
  '@bp4': {
    gap: '24px 16px',
  },
  '@bp3': {
    gap: 32,
  },
  '@bp2': {
    gridTemplateAreas: `
    'card1'
    'card2'
    'banner'
    'cardXL'
  `,
    gap: 24,
  },
})

export const SvgContainer = styled('div', {
  // width: '100%',
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  gap: 10,

  padding: '14px 24px 24px',
})

export const Card = styled('div', {
  borderRadius: 14,
  background: '$white',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    inset: 0,
    padding: 1,
    borderRadius: 'inherit',

    pointerEvents: 'none',

    background:
      'linear-gradient(180deg, rgba($colors$grayW9Rgb, 0.32) 0%, rgba($colors$grayW9Rgb, 0.56) 100%)',

    '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    '-webkit-mask-composite': 'destination-out',
    maskComposite: 'exclude',
  },

  variants: {
    cardXL: {
      true: {
        gridArea: 'cardXL',

        display: 'flex',
        justifyContent: 'space-between',

        position: 'relative',

        '@bp2': {
          flexDirection: 'column',

          [`& ${CardContent}`]: {
            order: 2,
          },
        },
      },
    },
    banner: {
      true: {
        gridArea: 'banner',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 58,

        '@bp5': {
          flexDirection: 'row',
          alignItems: 'normal',

          [`& ${SvgContainer}`]: {
            order: 2,
          },
        },

        '@bp3': {
          gap: 0,
        },
        '@bp2': {
          flexDirection: 'column',

          [`& ${SvgContainer}`]: {
            order: 0,
          },
        },
      },
    },
  },
})

export const CardTitle = styled('span', {
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  color: '$gray2',

  '@bp4': {
    fontSize: '20px',
    lineHeight: '28px',
  },
})

export const CardDescription = styled('span', {
  textAlign: 'left',
  maxWidth: 288,

  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',

  '@bp3': {
    fontSize: '14px',
  },

  variants: {
    cardXL: {
      true: {
        maxWidth: 313,
        '@bp3': {
          maxWidth: 257,
        },
      },
    },
  },
})
