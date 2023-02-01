import { Section as TemplateSection } from '@/template'
import { css, styled } from 'stitches.config'
import { Circles } from './svgs'

export const Section = styled(TemplateSection, {
  pt: 120,

  '@bp5': {
    pt: 148,
  },
  '@bp4': {
    pt: 208,
  },
  '@bp3': {
    pt: 168,
  },
  '@bp2': {
    pt: 158,
  },
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@bp4': {
    alignItems: 'center',
    flexDirection: 'column',

    gap: 88,
  },

  '@bp3': {
    gap: 104,
  },

  '@bp2': {
    gap: 86,
  },
  '@bp1': {
    gap: 78,
  },
})

export const Content = styled('div', {
  position: 'sticky',
  top: '120px',
  height: 'fit-content',

  '@bp4': {
    position: 'static',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Title = styled('h1', {
  marginBottom: 16,

  maxWidth: '432px',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',

  '@bp4': {
    lineHeight: '32px',
  },
  '@bp2': {
    fontSize: '22px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 32,

  maxWidth: '430px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    lineHeight: '26px',

    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const Reason = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  position: 'relative',

  border: '1px solid rgba($colors$magenta2Rgb, 0.3)',
  boxShadow: '0px 40px 80px -20px rgba($grayW3, 0.12)',
  borderRadius: '8px',

  padding: '0 32px 32px',
  maxWidth: 520,

  '@bp5': {
    padding: '0 172px 24px 24px',
    maxWidth: 444,
  },
  '@bp4': {
    padding: '0 25% 24px 24px',
  },

  '@bp1': {
    padding: '0 20% 20px 20px',
  },
})

export const ReasonContent = styled('div', {})

export const ReasonTitle = styled('h3', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta1',

  '@bp5': {
    fontSize: '18px',
    lineHeight: '22px',
  },
})

export const ReasonParagraph = styled('p', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '30px',
  color: '$gray3',

  '@bp5': {
    fontSize: '13px',
    lineHeight: '22px',
  },
})

export const CirclesSvg = styled(Circles, {
  position: 'absolute',
  top: 0,
  right: 0,

  '@bp5': {
    width: 150,
    height: 150,
  },
})

export const SvgStyles = css({
  maxHeight: '100%',
})
