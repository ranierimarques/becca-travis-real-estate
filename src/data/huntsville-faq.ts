export interface FaqSource {
  label: string
  url: string
}

export interface FaqItem {
  question: string
  answer: string
  sources: FaqSource[]
  topics: string[]
}

export const huntsvilleFaq: FaqItem[] = [
  {
    question: 'Do homes in Huntsville have basements?',
    answer:
      'You can find homes with basements, crawlspaces, and slab foundations in the Huntsville area. The foundation depends on the specific lot, design, and construction. Ask about the foundation and drainage for the exact home, then have an independent inspector evaluate moisture, grading, and any crawlspace or basement before you commit.',
    sources: [
      {
        label: 'Huntsville GIS maps and property data',
        url: 'https://www.huntsvilleal.gov/development/building-construction/gis/',
      },
    ],
    topics: ['homes', 'foundation', 'inspection', 'basements'],
  },
  {
    question: 'How should I compare home builders around Huntsville?',
    answer:
      'Compare the written price, lot premium, included features, allowances, estimated completion, warranty, association costs, and inspection terms. Ask for any financing or closing-cost incentive in writing and read its conditions. If you want representation, talk with your agent before registering at a model home. Builder inventory and incentives change, so confirm current terms directly.',
    sources: [
      {
        label: 'Alabama Real Estate Commission consumer information',
        url: 'https://arec.alabama.gov/pages/consumer/information/consumerinformation.aspx',
      },
      {
        label: 'Consumer Financial Protection Bureau home buying tools',
        url: 'https://www.consumerfinance.gov/owning-a-home/',
      },
    ],
    topics: ['builders', 'new construction', 'representation'],
  },
  {
    question: 'Which county is a Huntsville address in?',
    answer:
      'The Huntsville area includes addresses in Madison, Limestone, and Morgan counties. City limits, county lines, school districts, and utility service areas do not always match. Check the parcel and confirm the county, taxing district, school assignment, and service providers for the exact address before making a decision.',
    sources: [
      {
        label: 'City of Huntsville GIS and boundary maps',
        url: 'https://www.huntsvilleal.gov/development/building-construction/gis/',
      },
      {
        label: 'Madison County school zone lookup',
        url: 'https://www.mcssk12.org/our-schools/school-zones',
      },
      {
        label: 'Madison City Schools attendance zones',
        url: 'https://www.madisoncity.k12.al.us/school-zones-2',
      },
    ],
    topics: ['county', 'school', 'utilities', 'property tax'],
  },
  {
    question: 'When are Alabama property taxes due, and how do I estimate them?',
    answer:
      'Alabama property taxes are due October 1 and become delinquent January 1. Your bill may differ from the current owner’s because assessed value, tax district, classification, millage, and exemptions can differ. Check the parcel with the applicable county revenue office and ask about homestead eligibility.',
    sources: [
      {
        label: 'Alabama Department of Revenue property tax timetable',
        url: 'https://www.revenue.alabama.gov/faqs/what-is-the-timetable-for-property-taxes/',
      },
      {
        label: 'Madison County tax estimator and parcel information',
        url: 'https://www.madisoncountyal.gov/departments/tax-assessor/estimate-taxes',
      },
      {
        label: 'Alabama Department of Revenue homestead exemptions',
        url: 'https://www.revenue.alabama.gov/property-tax/homestead-exemptions/',
      },
    ],
    topics: ['tax', 'homestead', 'closing', 'property tax'],
  },
  {
    question: 'Does Huntsville get tornadoes, and should I look for a storm shelter?',
    answer:
      'North Alabama can experience severe thunderstorms and tornado warnings. Shelter options differ by home. Ask whether a storm shelter or safe room is present, where it is, and whether its installation and condition can be documented. Review the local warning and shelter guidance, and do not treat a neighborhood-wide statement as proof that a particular home has a shelter.',
    sources: [
      {
        label: 'National Weather Service Huntsville severe weather safety',
        url: 'https://www.weather.gov/hun/svrwx_safety',
      },
      {
        label: 'FEMA safe room guidance',
        url: 'https://www.fema.gov/emergency-managers/risk-management/safe-rooms',
      },
    ],
    topics: ['weather', 'tornado', 'storm shelter', 'safety'],
  },
  {
    question:
      'How should I compare Huntsville with Birmingham, Atlanta, Nashville, or Chattanooga?',
    answer:
      'Start with the places you expect to visit, your work location, and how often you will travel. Compare routes from the actual home address at the times you expect to drive. A general city-to-city estimate cannot predict traffic, road work, or the time from a particular neighborhood.',
    sources: [
      {
        label: 'City of Huntsville transportation and GIS resources',
        url: 'https://www.huntsvilleal.gov/development/building-construction/gis/',
      },
    ],
    topics: ['commute', 'relocation', 'regional comparison'],
  },
  {
    question: 'What does Alabama caveat emptor mean for a home buyer?',
    answer:
      'Alabama generally applies caveat emptor to resale homes, and state law does not generally require a standard seller disclosure form for an existing home. Courts recognize limited exceptions, including a direct inquiry about a material condition and certain known, non-obvious health or safety defects. Contract language and the facts matter. I help buyers ask for available written property information and insurance-claim records, then arrange independent inspections such as roof, crawlspace, and radon checks when appropriate. A seller disclosure form does not replace your own due diligence.',
    sources: [
      {
        label: 'Alabama Real Estate Commission caveat emptor guidance',
        url: 'https://arec.alabama.gov/pages/consumer/information/consumerinformation.aspx',
      },
    ],
    topics: ['buyer beware', 'caveat emptor', 'inspection', 'disclosure'],
  },
  {
    question:
      'How do a purchase agreement and walk-through handle utilities and attached items?',
    answer:
      'The exact signed purchase agreement and any addenda control which fixtures remain and who must keep utilities on through the walk-through and closing. List any expected exclusions in writing. The form version and negotiated terms matter, so ask your agent or an attorney to explain unclear language before signing.',
    sources: [
      {
        label: 'Alabama Real Estate Commission consumer information',
        url: 'https://arec.alabama.gov/pages/consumer/information/consumerinformation.aspx',
      },
    ],
    topics: ['contract', 'seller', 'utilities', 'fixtures'],
  },
  {
    question:
      'Can a VA disability rating waive the VA loan funding fee, and what is a loan recast?',
    answer:
      'Some borrowers are exempt from the VA funding fee, including veterans receiving compensation for a service-connected disability and other qualifying borrowers. Ask your lender to verify the funding-fee status shown on your Certificate of Eligibility. If your servicer allows a recast, a qualifying lump-sum principal payment may lower the payment on your existing loan without refinancing. Minimum amounts and fees vary. Closing near month-end can reduce prepaid-interest days, but it does not necessarily reduce total closing costs. Ask the lender for written estimates for the dates you are considering. The Census Bureau estimated 17,932 veterans lived in Huntsville city during 2020 to 2024.',
    sources: [
      {
        label: 'VA funding fee rules and exemptions',
        url: 'https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/',
      },
      {
        label: 'U.S. Census Bureau Huntsville QuickFacts, 2020 to 2024',
        url: 'https://www.census.gov/quickfacts/fact/table/huntsvillecityalabama/VET605223',
      },
    ],
    topics: ['VA loan', 'funding fee', 'veterans', 'recast', 'closing costs'],
  },
  {
    question: 'Which tax and water utility offices should I check after closing?',
    answer:
      'Alabama property taxes are due October 1 and become delinquent January 1. Start with the county revenue office for the parcel record and homestead process. Water, sewer, electric, and gas may be handled by different providers. Madison Utilities provides water and wastewater; Huntsville Utilities provides water, electric, and gas, while Huntsville sewer service is separate. Harvest-Monrovia, Owens Cross Roads, Triana, and Gurley also publish local service information. Confirm each provider for the exact address rather than relying on the mailing city.',
    sources: [
      {
        label: 'Madison County property tax and homestead information',
        url: 'https://www.madisoncountyal.gov/departments/tax-assessor/homestead-exemptions',
      },
      {
        label: 'Limestone County Revenue Commission',
        url: 'https://www.limestonecounty-al.gov/Departments/Revenue-Commission',
      },
      {
        label: 'Morgan County Revenue Commissioner',
        url: 'https://www.morgancountyrevenue.com/',
      },
      {
        label: 'Harvest-Monrovia Water and Sewer Authority',
        url: 'https://hmwater.org/',
      },
      {
        label: 'Owens Cross Roads Water Authority',
        url: 'https://www.owenscrossroadswater.com/',
      },
      {
        label: 'Town of Triana water and sewer services',
        url: 'https://townoftrianaal.gov/PublicWorks.aspx',
      },
      {
        label: 'Madison Utilities',
        url: 'https://www.madisonutilities.org/',
      },
      {
        label: 'Huntsville Utilities',
        url: 'https://www.hsvutil.org/',
      },
      {
        label: 'Town of Gurley services',
        url: 'https://www.townofgurleyal.com/',
      },
    ],
    topics: ['utilities', 'water', 'property tax', 'homestead', 'after closing'],
  },
]

export const faqSearchText = (item: FaqItem) =>
  `${item.question} ${item.answer} ${item.topics.join(' ')}`.toLowerCase()
