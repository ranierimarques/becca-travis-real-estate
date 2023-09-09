import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '80px 0',

  '@bp5': {
    paddingTop: 24,
    paddingBottom: 0,
  },

  '@bp4': {
    paddingTop: 64,
  },
  '@bp2': {
    paddingTop: 40,
  },
})

export const SectionTitle = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp5': {
    fontSize: '32px',
    lineHeight: '44px',
  },
  '@bp4': {
    marginBottom: 14,
  },
  '@bp2': {
    textAlign: 'center',

    marginBottom: 16,

    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const SectionParagraph = styled('p', {
  marginBottom: 48,

  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp5': {
    marginBottom: 32,
  },
  '@bp2': {
    lineHeight: '26px',

    marginBottom: 24,

    maxWidth: 'initial',
  },
  '@bp1': {
    fontSize: '14px',

    marginBottom: 32,

    maxWidth: '288px',
  },
})

export const SwitchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  padding: 6,

  borderRadius: 999,

  background: '$grayW10',
})

export const SwitchButton = styled('button', {
  padding: '8px 16px',
  borderRadius: 999,
  color: '$gray5',

  fontSize: 16,
  lineHeight: '28px',

  whiteSpace: 'nowrap',

  variants: {
    active: {
      true: {
        background: '$magenta2',
        color: '$grayW10',
      },
    },
  },
})

export const Divider = styled('div', {
  width: '100%',
  height: 1,

  background: '$grayW7',

  position: 'relative',

  margin: '40px 0',

  '&::before': {
    content: '',
    position: 'absolute',

    top: '50%',

    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',

    borderTop: '5px solid $colors$grayW7',

    transform: 'translate(-0.5px, -50%) rotate(-90deg)',
  },
  '&::after': {
    content: '',
    position: 'absolute',

    top: '50%',
    right: 0,

    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',

    borderTop: '5px solid $colors$grayW7',

    transform: 'translate(0.5px, -50%) rotate(90deg)',
  },
})

export const Title = styled('span', {
  maxWidth: 336,

  color: '$gray2',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '34px',

  '& em': {
    color: '$magenta1',
    fontStyle: 'normal',
  },

  '@bp2': {
    textAlign: 'center',
  },
})

export const Avatar = styled('div', {
  overflow: 'hidden',
  borderRadius: 32,
})

export const TalkWithBecca = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  whiteSpace: 'nowrap',

  color: '$gray3',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '28px',
  textDecoration: 'underline rgba($colors$magenta1Rgb, 0)',
  textUnderlineOffset: 6,

  transition: 'all 0.8s',

  '&:hover': {
    color: '$magenta1',
    textDecorationColor: 'rgba($colors$magenta1Rgb, 1)',

    '& img': {
      transform: 'scale(1.2)',
    },
  },
})

export const Paragraph = styled('p', {
  maxWidth: 612,

  color: '$gray3',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '28px',

  '@bp2': {
    textAlign: 'center',
  },

  variants: {
    bold: {
      true: {
        fontWeight: '500',
      },
    },
  },
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  position: 'relative',

  padding: 24,

  borderRadius: 14,

  maxWidth: 336,

  '&:after': {
    content: '',
    position: 'absolute',
    inset: 0,
    padding: 1,
    borderRadius: 'inherit',

    pointerEvents: 'none',

    background:
      'linear-gradient(rgba($colors$grayW9Rgb, 0.32), rgba($colors$grayW9Rgb, 0.56))',

    '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    '-webkit-mask-composite': 'destination-out',
    maskComposite: 'exclude',
  },

  '@bp5': {
    maxWidth: 288,
  },
  '@bp4': {
    maxWidth: 'none',
    width: '100%',
  },
})

export const CardTitle = styled('span', {
  margin: '16px 0 10px',

  color: '$gray2',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '30px',

  '@bp5': {
    fontSize: '16px',
  },
})

export const CardParagraph = styled('p', {
  color: '$gray4',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '28px',

  '@bp5': {
    maxWidth: 240,
  },
  '@bp4': {
    maxWidth: 'none',
  },
})
