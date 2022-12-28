import NextLink from 'next/link'
import { keyframes, styled } from 'stitches.config'
import * as Svg from './svgs'

const scaleIn = keyframes({
  from: {
    transform: 'scale(1)',
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',
  },
  to: {
    transform: 'scale(1.02)',
    boxShadow: '0 0 0 1px $colors$grayW8, 0 0 25px rgba($colors$blackRgb, 0.15)',
  },
})

const scaleOut = keyframes({
  from: {
    transform: 'scale(1.02)',
    boxShadow: '0 0 0 1px $colors$grayW8, 0 0 25px rgba($colors$blackRgb, 0.15)',
  },
  to: {
    transform: 'scale(1)',
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',
  },
})

const sharedAnimation = {
  animation: `${scaleIn} 250ms ease forwards`,
}

export const Badge = styled('span', {
  display: 'block',
  padding: '2px 8px',

  background: 'rgba($colors$details1Rgb, 0.6)',
  borderRadius: '8px 0',

  boxShadow: '0px 2px 15px rgba($colors$blackRgb, 0.05)',

  position: 'absolute',
  top: '0',
  left: '0',

  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$white',
})

const favoriteFalse = {
  color: '$white',
  background: '$grayW2',
  boxShadow: 'inset 0 0 0 1px $colors$grayW2, 0 0 15px 5px rgba($colors$blackRgb, 0.15)',
}

const favoriteTrue = {
  color: 'rgba($red3Rgb, 0.8)',
  background: '$white',
  boxShadow:
    'inset 0 0 0 1px rgba($colors$magenta5Rgb, 0.4), 0 0 15px 5px rgba($colors$blackRgb, 0.2)',
}

export const Favorite = styled(Svg.Favorite, {
  boxSizing: 'content-box',
  padding: '4px 3px 2px',
  borderRadius: 'inherit',
})

export const FavoriteButton = styled('button', {
  position: 'absolute',
  top: '8px',
  right: '8px',

  fontSize: 0,
  borderRadius: '50%',

  color: 'rgba($whiteRgb, 0.8)',
  background: 'rgba($colors$grayW3Rgb, 0.8)',
  boxShadow:
    'inset 0 0 0 1px rgba($colors$grayW2Rgb, 0.8), 0 0 15px rgba($colors$blackRgb, 0.15)',

  transition: 'color 250ms ease, background 250ms ease, box-shadow 250ms ease',

  variants: {
    favorite: {
      true: {
        color: '$red2',
        background: 'rgba($whiteRgb, 0.8)',
        boxShadow:
          'inset 0 0 0 1px rgba($colors$magenta5Rgb, 0.4), 0 0 15px 5px rgba($colors$blackRgb, 0.15)',
        [`& ${Favorite}`]: {
          background: 'rgba($colors$magenta9Rgb, 0.2)',
        },
        '&:hover:not(:disabled)': {
          ...favoriteTrue,
        },
        '&:focus': {
          outline: '2px solid $colors$magenta1',
          outlineOffset: 2,
          ...favoriteTrue,
        },
      },
      false: {
        '&:hover:not(:disabled)': {
          ...favoriteFalse,
        },
        '&:focus': {
          outline: '2px solid $colors$magenta1',
          outlineOffset: 2,
          ...favoriteFalse,
        },
      },
    },
  },

  defaultVariants: {
    favorite: 'false',
  },
})

export const HouseInfo = styled('div', {
  padding: '6px 16px 16px',
})

export const Status = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  marginBottom: 2,

  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$green3',
})

export const Value = styled('h4', {
  marginBottom: 4,

  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  color: '$gray1',

  '@bp3': {
    fontSize: '18px',
  },
  '@bp2': {
    fontSize: '22px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Address = styled('p', {
  marginBottom: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray3',

  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',

  '@bp3': {
    fontSize: '12px',
    lineHeight: '20px',
  },
  '@bp2': {
    fontSize: '14px',
    lineHeight: '24px',
  },
  '@bp1': {
    fontSize: '12px',
    lineHeight: '20px',
  },
})

export const Details = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray4',

  '@bp5': {
    fontSize: '12px',
    lineHeight: '16px',

    '> svg': {
      width: 16,
      height: 16,
    },
  },
  '@bp4': {
    fontSize: '14px',
    lineHeight: '20px',

    '> svg': {
      width: 20,
      height: 20,
    },
  },
  '@bp3': {
    fontSize: '12px',
    lineHeight: '16px',

    '> svg': {
      width: 16,
      height: 16,
    },
  },
  '@bp2': {
    fontSize: '14px',
    lineHeight: '20px',

    '> svg': {
      width: 20,
      height: 20,
    },
  },
  '@bp1': {
    fontSize: '12px',
    lineHeight: '16px',

    '> svg': {
      width: 16,
      height: 16,
    },
  },
})

export const VAMLS = styled('span', {
  display: 'block',

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '14px',
  color: '$gray4',
  opacity: '0.8',
})

export const Link = styled(NextLink, {
  display: 'block',
  position: 'relative',

  overflow: 'hidden',
  background: '$white',
  zIndex: 1,

  height: '100%',

  borderRadius: '8px',
  boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',

  animation: `${scaleOut} 250ms ease forwards`,

  '&:hover': {
    ...sharedAnimation,
  },
  '&:focus-within:not(:focus)': {
    ...sharedAnimation,
  },
  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
    ...sharedAnimation,
  },

  variants: {
    variant: {
      small: {
        [`& ${Details}`]: {
          fontSize: '12px',
          lineHeight: '14px',

          '> svg': {
            width: 14,
            height: 14,
          },
        },
        [`& ${Address}`]: {
          fontSize: '12px',
          lineHeight: '20px',
        },
        [`& ${Value}`]: {
          fontSize: '18px',
          lineHeight: '27px',
        },
        [`& ${Status}`]: {
          fontSize: '10px',
          lineHeight: '16px',
        },
      },
    },
  },
})
