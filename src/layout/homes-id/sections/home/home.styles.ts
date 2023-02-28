import { Section as SectionTemplate } from '@/template'
import { styled } from 'stitches.config'

export const Section = styled(SectionTemplate, {
  paddingTop: 32,

  display: 'grid',
  gridTemplateColumns: '1fr 1fr minmax(288px, 336px)',
  columnGap: 32,
  gridTemplateAreas: `
    "header header header"
    "slider slider propertyDetails"
    "table table table"
    "description description contact"
    "features features calculator"
    "form form ."
    "properties properties properties"
  `,

  '@bp5': {
    columnGap: 24,
  },

  '@bp4': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
    "slider"
    "header"
    "contact"
    "propertyDetails"
    "table"
    "description"
    "features"
    "calculator"
    "form"
    "properties"
  `,
  },
})
