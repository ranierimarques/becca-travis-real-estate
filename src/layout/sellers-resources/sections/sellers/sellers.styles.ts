import { Section as TemplateSection } from '@/template'
import { styled } from 'stitches.config'
import { Circles, HomebotBackgroundSvg } from './svgs'

export const Section = styled(TemplateSection, {
  pt: 160,
  pb: 120,

  '@bp5': {
    pt: 120,
    pb: 120,
  },
  '@bp4': {
    pt: 80,
    pb: 80,
  },
})

export const PoweredBy = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  padding: '8px 8px 14px 8px',

  position: 'absolute',
  top: 0,
  left: 44,

  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '23px',
  color: '$white',

  whiteSpace: 'nowrap',

  zIndex: 1,

  '@bp4': {
    left: '50%',
    transform: 'translateX(-50%)',

    lineHeight: '18px',
  },
  '@bp1': {
    fontSize: '10px',
  },
})

export const BackgroundPoweredBy = styled(HomebotBackgroundSvg, {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: -1,
})

export const HomeWorth = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  width: '100%',
  height: '100%',

  padding: '56px 0',

  border: '1px solid rgba($colors$tangerine7Rgb, 0.15)',
  boxShadow: '0px 14px 50px rgba($colors$blackRgb, 0.08)',

  background: '$tangerine10',
  borderRadius: '24px',

  '@bp4': {
    padding: '44px 0 32px',
  },
  '@bp2': {
    padding: '60px 24px 32px',
  },
})

export const Title = styled('h3', {
  marginBottom: 8,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '48px',
  color: '$gray1',
  zIndex: 1,

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp2': {
    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '24px',
    lineHeight: '32px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 32,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$magenta1',
  zIndex: 1,

  '@bp4': {
    fontSize: '14px',
    lineHeight: '24px',

    maxWidth: 279,
    textAlign: 'center',
  },

  '@bp1': {
    fontSize: '13px',
  },
})

export const SecuredData = styled('span', {
  marginTop: 24,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray3',
  zIndex: 1,

  '@bp4': {
    maxWidth: 279,
    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '13px',
  },
})

export const BackgroundSvg = styled(Circles, {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
})
