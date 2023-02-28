import { Section as SectionTemplate } from '@/template'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'

export const Section = styled(SectionTemplate, {
  paddingTop: 40,
  paddingBottom: 120,

  '@bp5': {
    paddingTop: 80,
    paddingBottom: 120,
  },

  '@bp4': {
    paddingTop: 0,
    paddingBottom: 80,
  },
})

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '22px',
    lineHeight: '32px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const InputWrapper = styled('div', {
  background: '$grayW10',

  display: 'flex',
  alignItems: 'center',

  borderRadius: 8,
  boxShadow: '0 0 0 1px $colors$grayW9',

  transition: 'box-shadow 150ms ease',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 0px 4px rgba($colors$magenta2Rgb, 0.5)',
  },
  '&:focus-within': {
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 0 4px $colors$magenta2',
  },
})

export const Input = styled('input', {
  flex: 1,

  width: 280,
  height: 48,

  padding: '0 16px 0 20px',

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray1',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$gray3',
  },
})

export const SearchButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',

  padding: '12px 15px',

  transition: 'all 150ms ease',

  color: '$grayW5',

  '&:hover': {
    background: 'rgba($colors$grayW8Rgb, 0.8)',
    color: '$grayW4',
  },
  '&:focus-visible': {
    background: 'rgba($colors$magenta2Rgb, 0.1)',
    boxShadow: '-1px 0 0 $colors$magenta2',
    color: '$magenta3',
  },
  '&:active': {
    background: 'rgba($colors$magenta2Rgb, 0.1)',
    color: '$magenta3',
  },
})

export const Filter = styled('button', {
  display: 'none',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$magenta1',

  borderRadius: '5px',
  padding: '6px 12px',
  boxShadow: 'inset 0 0 0 1px $colors$magenta1',

  transition: 'filter 150ms ease, box-shadow 150ms ease',

  '&:hover': {
    backgroundColor: 'rgba($colors$magenta5Rgb, 0.2)',
  },

  '@bp4': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
})

// Dialog Radix

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba($colors$blackRgb, 0.6)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  display: 'none',

  '@bp4': {
    display: 'block',
  },
})

export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  maxHeight: 350,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  display: 'none',

  '@bp4': {
    display: 'block',
  },

  '@bp1': {
    width: 280,
  },

  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(DialogPrimitive.Title, {
  padding: '8px 10px 8px 16px',

  background: '$offWhite2',
  borderRadius: '8px 8px 0px 0px',

  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',
})

export const Close = styled(DialogPrimitive.Close, {
  borderRadius: '999px',
  position: 'absolute',
  top: 8,
  right: 10,

  variants: {
    variant: {
      '1': {
        color: '$magenta2',
        '&:hover': { background: 'rgba($colors$magenta2Rgb, 0.15)' },
        '&:focus': { boxShadow: '0 0 0 2px rgba($colors$magenta1Rgb, 0.4)' },
      },
      '2': {
        color: '$grayW5',
        '&:hover': { background: 'rgba($colors$gray5Rgb, 0.15)' },
        '&:focus': { boxShadow: '0 0 0 2px rgba($colors$gray4Rgb, 0.5)' },
      },
      '3': {
        color: '$grayW5',
        '&:hover': { background: 'rgba($colors$gray5Rgb, 0.15)' },
        '&:focus': { boxShadow: '0 0 0 2px rgba($colors$gray4Rgb, 0.5)' },

        top: 8,
        right: 10,
      },
    },
  },

  defaultVariants: {
    variant: '2',
  },
})

export const ListItem = styled('li', {
  '& + &': {
    marginTop: 8,

    '@bp1': {
      marginTop: 6,
    },
  },
})

export const CategoryButton = styled('button', {
  width: '100%',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray5',
  textAlign: 'start',

  padding: '12px 16px',

  borderRadius: '8px',

  variants: {
    active: {
      true: {
        color: '$magenta1',
        background: 'rgba($colors$tangerine5Rgb, 0.6)',
        cursor: 'initial',
      },
    },
  },
})
