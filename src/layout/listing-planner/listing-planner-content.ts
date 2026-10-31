export type PlannerValues = {
  cityZip: string
  timing: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  squareFeet: string
  squareFeetSource: string
  yearBuilt: string
  features: string
  updates: string
  updateYears: string
  updateVerification: string
  parking: string
  parkingSpaces: string
  outdoorSpace: string
  lotSize: string
  includedItems: string
  accessDetail: string
}

export type ReviewWarning = {
  field: keyof PlannerValues
  label: string
  reason: string
}

export const initialPlannerValues: PlannerValues = {
  cityZip: '',
  timing: 'Just exploring',
  propertyType: '',
  bedrooms: '',
  bathrooms: '',
  squareFeet: '',
  squareFeetSource: '',
  yearBuilt: '',
  features: '',
  updates: '',
  updateYears: '',
  updateVerification: '',
  parking: '',
  parkingSpaces: '',
  outdoorSpace: '',
  lotSize: '',
  includedItems: '',
  accessDetail: '',
}

export const preparationItems = [
  {
    id: 'facts',
    title: 'Property facts',
    description:
      'Check public records, measurements, room counts, parcel details, and system ages.',
  },
  {
    id: 'improvements',
    title: 'Repairs and improvements',
    description:
      'Gather dates, receipts, permits, warranties, manuals, and service records you have.',
  },
  {
    id: 'photos',
    title: 'Photos and showing readiness',
    description:
      'List cleaning, decluttering, repair, privacy, pet, and scheduling decisions to discuss.',
  },
  {
    id: 'questions',
    title: 'Questions for your listing plan',
    description:
      'Write down pricing, timing, marketing, showing, offer, and move questions for your agent.',
  },
] as const

export const listingPlannerFaq = [
  {
    question: 'Is this a home valuation or pricing tool?',
    answer:
      'No. The planner does not estimate value, compare sales, or recommend a listing price. It organizes property facts you enter into a working description draft.',
  },
  {
    question: 'Does the planner send my property information?',
    answer:
      'No. Entries are saved only in local browser storage on the device you are using. The planner has no submit action and does not ask for a name, email address, phone number, or street address.',
  },
  {
    question: 'Can I create a listing description without MLS access?',
    answer:
      'Yes. You can create a working factual draft from your own verified details without MLS access. An agent should still review the final copy, MLS field limits, and local requirements before publication.',
  },
  {
    question: 'What should I verify before publishing a property description?',
    answer:
      'Confirm room counts, measurements and sources, dates, permits, warranties, included items, neutral wording, and any location or proximity statement. Remove anything you cannot support.',
  },
] as const

const freeTextLabels: Partial<Record<keyof PlannerValues, string>> = {
  features: 'Verified features',
  updates: 'Updates',
  updateVerification: 'Update verification',
  outdoorSpace: 'Outdoor space',
  includedItems: 'What stays',
  accessDetail: 'Access or proximity detail',
}

const wordingRules = [
  {
    pattern:
      /\b(perfect|ideal|great)\s+(for|home for)|\bfamily[ -]?friendly\b|\byoung professionals?\b|\bempty nesters?\b|\bretirees?\b|\bseniors?\b|\bbachelors?\b|\bsingles?\b/gi,
    reason: 'Describe the property, not the kind of person who should live there.',
  },
  {
    pattern:
      /\b(safe|low crime|crime[ -]?free|good neighborhood|desirable neighborhood|exclusive neighborhood|prestigious neighborhood)\b/gi,
    reason: 'Remove safety, exclusivity, or neighborhood quality claims.',
  },
  {
    pattern:
      /\b(christian|jewish|muslim|catholic|church|synagogue|mosque|white neighborhood|black neighborhood|hispanic neighborhood|asian neighborhood|no children|no kids|adults only)\b/gi,
    reason:
      'Remove wording that can signal a preference based on a protected characteristic.',
  },
  {
    pattern:
      /\b(best schools?|top[ -]?rated schools?|great schools?|good schools?|excellent schools?)\b/gi,
    reason: 'Use a neutral, verified location fact instead of a school quality claim.',
  },
  {
    pattern:
      /\b(must[ -]?see|won't last|will not last|guaranteed|perfect|best|stunning|gorgeous|amazing|rare find|dream home|luxurious?)\b/gi,
    reason: 'Replace superlatives or urgency with a specific property fact.',
  },
  {
    pattern:
      /\b(income potential|investment opportunity|guaranteed return|tax benefit|legal apartment|mother[ -]?in[ -]?law suite)\b/gi,
    reason:
      'Remove financial or legal conclusions unless the correct professional verifies them.',
  },
]

function normalize(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function cleanList(value: string) {
  return normalize(value)
    .split(/[,;\n]+/)
    .map(item => item.trim().replace(/[.!]+$/, ''))
    .filter(Boolean)
    .join(', ')
}

function plural(value: string, singular: string, pluralWord = `${singular}s`) {
  return Number(value) === 1 ? singular : pluralWord
}

function formatNumber(value: string) {
  const parsed = Number(value.replace(/,/g, ''))
  return Number.isFinite(parsed) && parsed > 0
    ? new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(parsed)
    : normalize(value)
}

export function findReviewWarnings(values: PlannerValues): ReviewWarning[] {
  const warnings: ReviewWarning[] = []

  Object.entries(freeTextLabels).forEach(([field, label]) => {
    const value = values[field as keyof PlannerValues]
    if (!value.trim()) return

    const reasons = wordingRules
      .filter(rule => {
        rule.pattern.lastIndex = 0
        return rule.pattern.test(value)
      })
      .map(rule => rule.reason)

    Array.from(new Set(reasons)).forEach(reason => {
      warnings.push({
        field: field as keyof PlannerValues,
        label: label || field,
        reason,
      })
    })
  })

  return warnings
}

// Each independent fact group maps to one sentence so the generator never infers content.
// eslint-disable-next-line sonarjs/cognitive-complexity
export function buildListingDraft(values: PlannerValues, warnings: ReviewWarning[]) {
  const blocked = new Set(warnings.map(warning => warning.field))
  const sentences: string[] = []
  const propertyType = normalize(values.propertyType)
  const cityZip = normalize(values.cityZip)

  if (propertyType && cityZip) {
    sentences.push(`This ${propertyType.toLowerCase()} is located in ${cityZip}.`)
  } else if (cityZip) {
    sentences.push(`The property is located in ${cityZip}.`)
  } else if (propertyType) {
    sentences.push(`The property type entered is ${propertyType.toLowerCase()}.`)
  }

  const roomFacts: string[] = []
  if (values.bedrooms) {
    roomFacts.push(`${values.bedrooms} ${plural(values.bedrooms, 'bedroom')}`)
  }
  if (values.bathrooms) {
    roomFacts.push(`${values.bathrooms} ${plural(values.bathrooms, 'bathroom')}`)
  }
  if (roomFacts.length) sentences.push(`The property has ${roomFacts.join(' and ')}.`)

  if (values.squareFeet && values.squareFeetSource) {
    sentences.push(
      `Finished interior area is entered as ${formatNumber(
        values.squareFeet
      )} square feet, based on ${values.squareFeetSource.toLowerCase()}.`
    )
  }
  if (values.yearBuilt) {
    sentences.push(`The year built is entered as ${normalize(values.yearBuilt)}.`)
  }
  if (values.features && !blocked.has('features')) {
    sentences.push(`Property features include ${cleanList(values.features)}.`)
  }
  if (values.updates && !blocked.has('updates')) {
    const updateYears = normalize(values.updateYears)
    sentences.push(
      `Updates entered for review include ${cleanList(values.updates)}${
        updateYears ? `, with dates entered as ${updateYears}` : ''
      }.`
    )
  }

  const parkingParts: string[] = []
  if (values.parking) parkingParts.push(values.parking.toLowerCase())
  if (values.parkingSpaces) {
    parkingParts.push(`${values.parkingSpaces} ${plural(values.parkingSpaces, 'space')}`)
  }
  if (parkingParts.length)
    sentences.push(`Parking details entered: ${parkingParts.join(', ')}.`)

  const outdoorParts: string[] = []
  if (values.outdoorSpace && !blocked.has('outdoorSpace')) {
    outdoorParts.push(cleanList(values.outdoorSpace))
  }
  if (values.lotSize)
    outdoorParts.push(`${formatNumber(values.lotSize)} acres entered for lot size`)
  if (outdoorParts.length)
    sentences.push(`Outdoor details include ${outdoorParts.join(', ')}.`)

  if (values.includedItems && !blocked.has('includedItems')) {
    sentences.push(
      `Items entered as remaining with the property include ${cleanList(
        values.includedItems
      )}.`
    )
  }
  if (values.accessDetail && !blocked.has('accessDetail')) {
    sentences.push(
      `Verified access or proximity detail: ${normalize(values.accessDetail)}.`
    )
  }

  return sentences.join(' ')
}

export function buildVerificationList(values: PlannerValues, warnings: ReviewWarning[]) {
  const items: string[] = []
  if (!values.cityZip)
    items.push('Add a city or ZIP. Do not enter a full street address here.')
  if (!values.propertyType) items.push('Confirm the property type.')
  if (!values.bedrooms || !values.bathrooms)
    items.push('Confirm the bedroom and bathroom counts.')
  if (!values.squareFeet)
    items.push('Add finished square feet only if you have a source.')
  if (values.squareFeet && !values.squareFeetSource) {
    items.push(
      'Select the source for the finished square feet before it enters the draft.'
    )
  }
  if (!values.yearBuilt) items.push('Confirm the year built from a record you trust.')
  if (values.updates && !values.updateYears)
    items.push('Add the year or years for the updates entered.')
  if (values.updates && !values.updateVerification) {
    items.push(
      'Record what supports each update, such as a receipt, permit, warranty, or service record.'
    )
  }
  if (!values.features && !values.updates && !values.parking && !values.outdoorSpace) {
    items.push(
      'Add at least one specific physical feature, update, parking fact, or outdoor detail.'
    )
  }
  warnings.forEach(warning => items.push(`${warning.label}: ${warning.reason}`))

  return Array.from(new Set(items))
}

export function countDraftFacts(values: PlannerValues, warnings: ReviewWarning[]) {
  const blocked = new Set(warnings.map(warning => warning.field))
  return [
    Boolean(values.cityZip || values.propertyType),
    Boolean(values.bedrooms || values.bathrooms),
    Boolean(values.squareFeet && values.squareFeetSource),
    Boolean(values.yearBuilt),
    Boolean(values.features && !blocked.has('features')),
    Boolean(values.updates && !blocked.has('updates')),
    Boolean(values.parking || values.parkingSpaces),
    Boolean(values.outdoorSpace && !blocked.has('outdoorSpace')),
    Boolean(values.lotSize),
    Boolean(values.includedItems && !blocked.has('includedItems')),
    Boolean(values.accessDetail && !blocked.has('accessDetail')),
  ].filter(Boolean).length
}
