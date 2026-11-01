import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Button, MetaSEO } from '@/common'
import { PaymentEstimator } from '@/layout/communities/sections/payment-estimator/payment-estimator'
import { FaqPreview } from '@/layout/faq-preview'
import { LiveMlsDrawer, LiveMlsTarget } from '@/layout/live-mls-drawer'
import { WarrantyResourceLink } from '@/layout/site-tools/arw-warranty-closing-hub/warranty-resource-link'
import { BuydownComparison } from '@/layout/site-tools/buydown-comparison/buydown-comparison'
import { InfrastructureExplorer } from '@/layout/site-tools/infrastructure-explorer/infrastructure-explorer'
import { SmartConcessionOptimizer } from '@/layout/site-tools/smart-concession-optimizer/smart-concession-optimizer'
import { Section } from '@/template'
import { huntsvilleFaq } from '../../data/huntsville-faq'
import * as S from './areas-page.styles'

type CommuteHub =
  | 'Redstone Gate 9 / Research Park'
  | 'Redstone Gate 1 & 3'
  | 'Medical District / Downtown'
  | 'Mazda-Toyota / I-65'

const TAX_ZONE_UNINCORPORATED = 'unincorporated' as const
const TAX_ZONE_CITY_SCHOOL = 'city-school' as const
const TAX_ZONE_ADDRESS_SPECIFIC = 'address-specific' as const

type AreaFocus =
  | typeof FOCUS_MOUNTAIN
  | typeof FOCUS_GOLF_GREENWAY
  | typeof FOCUS_LARGER_LOTS

type TaxZone =
  | typeof TAX_ZONE_UNINCORPORATED
  | typeof TAX_ZONE_CITY_SCHOOL
  | typeof TAX_ZONE_ADDRESS_SPECIFIC

interface AreaCardData {
  name: string
  route?: string
  detail: string
  commute: CommuteHub[]
  focus: AreaFocus[]
  sourceLabel: string
  sourceUrl: string
  listingUrl?: string
}

const FOCUS_MOUNTAIN = 'Mountain / walk-out basement' as const
const FOCUS_GOLF_GREENWAY = 'Golf & greenway' as const
const FOCUS_LARGER_LOTS = 'Half-acre+ / no HOA' as const
const HUNTSVILLE_GIS_URL =
  'https://www.huntsvilleal.gov/development/building-construction/gis/'

const lifestyleScenes = [
  {
    title: 'Big Spring Park',
    detail: 'A downtown Huntsville walk beside the water',
    src: '/images/real/big-spring-park.webp',
    alt: 'Big Spring Park lake with downtown Huntsville buildings beyond it',
    href: '/communities/huntsville',
    photoSource: 'https://commons.wikimedia.org/wiki/File:Big_Spring_Park.jpg',
    photoCredit: 'Photo by BullDawg2021, resized',
    photoLicense: 'https://creativecommons.org/licenses/by/4.0/',
    photoLicenseLabel: 'CC BY 4.0',
  },
  {
    title: 'A Huntsville welcome',
    detail: 'The downtown Welcome to Huntsville mural',
    src: '/images/real/huntsville-mural.webp',
    alt: 'Welcome to Huntsville mural in downtown Huntsville',
    href: '/communities/huntsville',
    photoSource: 'https://unsplash.com/pt-br/fotografias/6Qo5-GUXFqc',
    photoCredit: 'Photo via Unsplash',
  },
  {
    title: 'Hays Nature Preserve',
    detail: 'Flint River Greenway in southeast Huntsville',
    src: '/images/real/hays-nature-preserve.webp',
    alt: 'Footbridge over the Flint River at Hays Nature Preserve',
    href: '/communities/hampton-cove',
    photoSource:
      'https://commons.wikimedia.org/wiki/File:Hays_Nature_Preserve_-_Flint_River_Greenway_Bridge.jpg',
    photoCredit: 'Photo by GranCavallo, cropped',
    photoLicense: 'https://creativecommons.org/licenses/by-sa/4.0/',
    photoLicenseLabel: 'CC BY SA 4.0',
  },
] as const

const commuteHubs: { destination: CommuteHub }[] = [
  { destination: 'Redstone Gate 9 / Research Park' },
  { destination: 'Redstone Gate 1 & 3' },
  { destination: 'Medical District / Downtown' },
  { destination: 'Mazda-Toyota / I-65' },
]

const areas: AreaCardData[] = [
  {
    name: 'Huntsville',
    route: '/communities/huntsville',
    detail:
      'Compare Five Points, Blossomwood, Jones Valley, South Huntsville, and Providence by home style, setting, and the exact route you need.',
    commute: [
      'Redstone Gate 1 & 3',
      'Medical District / Downtown',
      'Redstone Gate 9 / Research Park',
    ],
    focus: [FOCUS_MOUNTAIN],
    sourceLabel: 'Huntsville GIS, zoning, and city maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=51647',
  },
  {
    name: 'Madison',
    detail:
      'Clift Farm, Town Madison, West Highlands, and established subdivisions offer different access to shopping, schools, and daily routes.',
    commute: ['Redstone Gate 9 / Research Park'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'City of Madison services and maps',
    sourceUrl: 'https://www.madisonal.gov/',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Madison',
  },
  {
    name: 'Hampton Cove and Big Cove',
    route: '/communities/hampton-cove',
    detail:
      'Compare golf-area neighborhoods, McMullen Cove, and nearby greenway access. Confirm school assignment, utilities, and slope conditions by address.',
    commute: ['Redstone Gate 1 & 3', 'Medical District / Downtown'],
    focus: [FOCUS_MOUNTAIN, FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Huntsville GIS and city maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52270',
  },
  {
    name: 'Harvest and Monrovia',
    route: '/communities/harvest',
    detail:
      'The Jeff Road and northwest county area includes established subdivisions and larger-lot properties. Check utilities, septic or sewer, and school assignment for the parcel.',
    commute: ['Redstone Gate 9 / Research Park'],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Harvest-Monrovia Water and Sewer Authority',
    sourceUrl: 'https://hmwater.org/',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Harvest',
  },
  {
    name: 'Meridianville',
    route: '/communities/meridianville',
    detail:
      'A north Madison County search area with established subdivisions, newer construction, and acreage options. Verify the county, school district, and water provider by address.',
    commute: [],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Madison County school zones',
    sourceUrl: 'https://www.mcssk12.org/our-schools/school-zones',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Meridianville',
  },
  {
    name: 'Athens and East Limestone',
    route: '/communities/athens',
    detail:
      'Compare historic Athens with East Limestone subdivisions and newer homes. The city and county school systems serve different addresses, so confirm the parcel before choosing a school area.',
    commute: ['Mazda-Toyota / I-65'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Limestone County school zone information',
    sourceUrl: 'https://www.lcsk12.org/page/school-zone-map',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Athens',
  },
  {
    name: 'Decatur and Priceville',
    route: '/communities/decatur',
    detail:
      'Decatur offers historic districts, river-area neighborhoods, and access to parks. Priceville is a separate municipality. Confirm city limits, school assignment, and flood information by address.',
    commute: ['Mazda-Toyota / I-65'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Morgan County parcel and tax records',
    sourceUrl: 'https://www.morgancountyrevenue.com/',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Decatur',
  },
  {
    name: 'Jones Valley',
    detail:
      'A southeast Huntsville area where street, slope, drainage, and foundation details are important parts of a property review.',
    commute: ['Redstone Gate 1 & 3', 'Medical District / Downtown'],
    focus: [FOCUS_MOUNTAIN],
    sourceLabel: 'Huntsville GIS',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52551',
  },
  {
    name: 'Blossomwood',
    detail:
      'An established Huntsville neighborhood near Monte Sano. Compare home age, drainage, retaining walls, and access to the specific schools you are considering.',
    commute: ['Medical District / Downtown', 'Redstone Gate 1 & 3'],
    focus: [FOCUS_MOUNTAIN],
    sourceLabel: 'Huntsville GIS and maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=51903',
  },
  {
    name: 'South Huntsville',
    detail:
      'Compare South Huntsville subdivisions, greenway access, and routes toward Redstone. Use parcel-level maps for school, flood, and utility questions.',
    commute: ['Redstone Gate 1 & 3'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Huntsville GIS and park maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52478',
  },
  {
    name: 'Haysland',
    detail:
      'A South Huntsville search area. Review the actual lot, drainage, nearby services, and assigned schools before comparing homes.',
    commute: ['Redstone Gate 1 & 3'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Huntsville GIS and park maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52594',
  },
  {
    name: 'Village of Providence',
    detail:
      'A planned mixed-use Huntsville area with homes, shops, and restaurants. Check the exact street for school assignment and travel times.',
    commute: ['Redstone Gate 9 / Research Park'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Huntsville GIS and city maps',
    sourceUrl: HUNTSVILLE_GIS_URL,
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=51977',
  },
  {
    name: 'Twickenham',
    detail:
      'A historic Huntsville district where buyers should review historic-district rules, renovation records, and the condition of older systems.',
    commute: ['Medical District / Downtown'],
    focus: [FOCUS_MOUNTAIN],
    sourceLabel: 'Huntsville historic preservation resources',
    sourceUrl:
      'https://www.huntsvilleal.gov/development/building-construction/planning/historic-preservation/',
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52441',
  },
  {
    name: 'Wheeler and the River Area',
    detail:
      'Compare river access and downtown routes. Check a parcel’s flood zone with FEMA, then ask the relevant agency about shoreline rights and insurance requirements.',
    commute: ['Medical District / Downtown'],
    focus: [],
    sourceLabel: 'FEMA Flood Map Service Center',
    sourceUrl: 'https://msc.fema.gov/portal/search',
    listingUrl:
      'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=52696',
  },
  {
    name: 'New Market',
    detail:
      'A northeast Madison County search area with rural roads and larger parcels. Review access, drainage, water, sewer or septic, and school assignment by property.',
    commute: [],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Madison County school zones',
    sourceUrl: 'https://www.mcssk12.org/our-schools/school-zones',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/New-Market',
  },
  {
    name: 'Hazel Green',
    detail:
      'A north Madison County search area with established homes, new construction, and rural parcels. Confirm the assigned school, water source, septic status, and road access at the property.',
    commute: [],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Madison County school-zone information',
    sourceUrl: 'https://www.mcssk12.org/our-schools/school-zones',
    listingUrl: 'https://beccatravis.valleymls.com/homes-for-sale/AL/Hazel-Green',
  },
  {
    name: 'Toney',
    detail:
      'A northwest Madison County area with a mix of subdivision homes and larger lots. Confirm road access, water service, and whether the property uses septic.',
    commute: ['Redstone Gate 9 / Research Park'],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Madison County parcel and school resources',
    sourceUrl: 'https://www.madisoncountyal.gov/',
  },
  {
    name: 'Gurley and Brownsboro',
    detail:
      'An east Madison County search area with foothill settings and properties outside the main city grid. Check slope, drainage, road access, and service providers.',
    commute: ['Medical District / Downtown'],
    focus: [FOCUS_MOUNTAIN, FOCUS_LARGER_LOTS],
    sourceLabel: 'Town of Gurley services',
    sourceUrl: 'https://www.townofgurleyal.com/',
  },
  {
    name: 'Triana',
    detail:
      'A town in southwest Madison County near the Tennessee River. The town operates water and sewer services, so verify the provider and billing for the exact home.',
    commute: ['Redstone Gate 1 & 3'],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Town of Triana public works and utilities',
    sourceUrl: 'https://townoftrianaal.gov/PublicWorks.aspx',
  },
  {
    name: 'Guntersville and Lake Guntersville',
    detail:
      'A lake-oriented search in Marshall County. Ask about shoreline rules, flood exposure, dock rights, and which public access applies to a specific property.',
    commute: [],
    focus: [FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Lake Guntersville State Park',
    sourceUrl: 'https://www.alapark.com/parks/lake-guntersville-state-park',
  },
  {
    name: 'Hartselle',
    detail:
      'A Morgan County city with established residential streets and a downtown core. Review the specific school zone, parcel tax record, and commute route.',
    commute: ['Mazda-Toyota / I-65'],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Morgan County Revenue Commissioner',
    sourceUrl: 'https://www.morgancountyrevenue.com/',
  },
  {
    name: 'Scottsboro',
    detail:
      'A Jackson County city near the Tennessee River and mountain recreation. Verify lake access, flood information, and school assignment for each parcel.',
    commute: [],
    focus: [FOCUS_MOUNTAIN, FOCUS_GOLF_GREENWAY],
    sourceLabel: 'City of Scottsboro',
    sourceUrl: 'https://www.scottsboro.org/',
  },
  {
    name: 'Arab and Albertville',
    detail:
      'Two Marshall County search areas with distinct local services and school systems. Compare each address separately for tax districts, schools, water, and access to work.',
    commute: [],
    focus: [FOCUS_LARGER_LOTS],
    sourceLabel: 'Marshall County parcel and tax resources',
    sourceUrl: 'https://www.marshallco.org/',
  },
  {
    name: 'Cullman and Smith Lake',
    detail:
      'A Cullman County search that can include in-town homes, rural parcels, and lake-area property. Confirm shoreline rights, access, septic, and county tax details by parcel.',
    commute: ['Mazda-Toyota / I-65'],
    focus: [FOCUS_LARGER_LOTS, FOCUS_GOLF_GREENWAY],
    sourceLabel: 'Cullman County official website',
    sourceUrl: 'https://cullmancounty.gov/',
  },
]

const taxZoneByArea: Partial<Record<string, TaxZone>> = {
  'Harvest and Monrovia': TAX_ZONE_UNINCORPORATED,
  Meridianville: TAX_ZONE_UNINCORPORATED,
  'New Market': TAX_ZONE_UNINCORPORATED,
  'Hazel Green': TAX_ZONE_UNINCORPORATED,
  Toney: TAX_ZONE_UNINCORPORATED,
  Madison: TAX_ZONE_CITY_SCHOOL,
  'Jones Valley': TAX_ZONE_CITY_SCHOOL,
  Blossomwood: TAX_ZONE_CITY_SCHOOL,
  'South Huntsville': TAX_ZONE_CITY_SCHOOL,
  Haysland: TAX_ZONE_CITY_SCHOOL,
  'Village of Providence': TAX_ZONE_CITY_SCHOOL,
  Twickenham: TAX_ZONE_CITY_SCHOOL,
  Hartselle: TAX_ZONE_CITY_SCHOOL,
  Scottsboro: TAX_ZONE_CITY_SCHOOL,
}

const taxZoneLabels: Record<TaxZone, string> = {
  [TAX_ZONE_UNINCORPORATED]: 'Unincorporated / county-tax context',
  [TAX_ZONE_CITY_SCHOOL]: 'City / school-district context',
  [TAX_ZONE_ADDRESS_SPECIFIC]: 'Mixed or verify by address',
}

function areaTaxZone(areaName: string): TaxZone {
  return taxZoneByArea[areaName] ?? TAX_ZONE_ADDRESS_SPECIFIC
}

const schoolLinks = [
  {
    name: 'Bob Jones High School zone',
    district: 'Madison City Schools',
    url: 'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=61011',
    map: 'https://www.madisoncity.k12.al.us/school-zones-2',
  },
  {
    name: 'Huntsville High School zone',
    district: 'Huntsville City Schools',
    url: 'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=61008',
    map: 'https://huntsvilleal.gisllcmaps.com/',
  },
  {
    name: 'James Clemens High School zone',
    district: 'Madison City Schools',
    url: 'https://beccatravis.valleymls.com/Listing/ProcessJumpSearch.aspx?JumpSearch=61013',
    map: 'https://www.madisoncity.k12.al.us/school-zones-2',
  },
]

const commuteOptions: Array<'All' | CommuteHub> = [
  'All',
  'Redstone Gate 9 / Research Park',
  'Redstone Gate 1 & 3',
  'Medical District / Downtown',
  'Mazda-Toyota / I-65',
]
const focusOptions: Array<'All' | AreaFocus> = [
  'All',
  FOCUS_MOUNTAIN,
  FOCUS_GOLF_GREENWAY,
  FOCUS_LARGER_LOTS,
]
const taxZoneOptions: Array<'All' | TaxZone> = [
  'All',
  TAX_ZONE_UNINCORPORATED,
  TAX_ZONE_CITY_SCHOOL,
  TAX_ZONE_ADDRESS_SPECIFIC,
]
const commuteDestinations = [
  'Redstone Arsenal Gate 9, Huntsville, Alabama',
  'Redstone Arsenal Gate 1, Huntsville, Alabama',
  'Redstone Arsenal Gate 3, Huntsville, Alabama',
  'Huntsville Hospital, Huntsville, Alabama',
  'Downtown Huntsville, Alabama',
  'Mazda Toyota Manufacturing, Huntsville, Alabama',
]

export default function AreasPage() {
  const [commute, setCommute] = useState<'All' | CommuteHub>('All')
  const [focus, setFocus] = useState<'All' | AreaFocus>('All')
  const [taxZone, setTaxZone] = useState<'All' | TaxZone>('All')
  const [query, setQuery] = useState('')
  const [listing, setListing] = useState<LiveMlsTarget | null>(null)
  const [commuteFrom, setCommuteFrom] = useState('')
  const [commuteTo, setCommuteTo] = useState('')
  const directionsUrl =
    commuteFrom.trim() && commuteTo.trim()
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
          commuteFrom.trim()
        )}&destination=${encodeURIComponent(commuteTo.trim())}`
      : ''
  const filteredAreas = useMemo(
    () =>
      areas.filter(
        area =>
          (commute === 'All' || area.commute.includes(commute)) &&
          (focus === 'All' || area.focus.includes(focus)) &&
          (taxZone === 'All' || areaTaxZone(area.name) === taxZone) &&
          (!query ||
            `${area.name} ${area.detail}`
              .toLowerCase()
              .includes(query.toLowerCase().trim()))
      ),
    [commute, focus, query, taxZone]
  )

  return (
    <main>
      <MetaSEO
        canonicalPath="/areas"
        locale="en_US"
        title="North Alabama Areas and Neighborhoods | Becca Travis"
        description="Compare North Alabama communities, infrastructure, seller-credit options, warranty resources, school zones, and neighborhood listing searches."
        image="/images/areas/downtown-huntsville.webp"
        alt="Downtown Huntsville skyline and park pond"
      />
      <S.Hero>
        <S.HeroInner>
          <S.HeroCopyBlock>
            <S.Eyebrow>North Alabama</S.Eyebrow>
            <S.HeroTitle>Find the area that fits your life</S.HeroTitle>
            <S.HeroCopy>
              Compare local settings, then narrow the search by commute, schools, taxes,
              and the details that change from one address to the next.
            </S.HeroCopy>
            <S.HeroActions>
              <Button href="#neighborhoods" size="2">
                Explore area guides
              </Button>
              <S.HeroTextLink href="#commute-overview">
                Compare commute hubs <span aria-hidden="true">→</span>
              </S.HeroTextLink>
              <S.HeroTextLink href="/north-alabama-property-research">
                Research a property address <span aria-hidden="true">→</span>
              </S.HeroTextLink>
            </S.HeroActions>
          </S.HeroCopyBlock>
          <S.HeroFigure>
            <S.HeroImage>
              <Image
                src="/images/areas/downtown-huntsville.webp"
                alt="Downtown Huntsville skyline beside a landscaped park pond"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </S.HeroImage>
            <S.ImageCaption>Downtown Huntsville, Alabama</S.ImageCaption>
          </S.HeroFigure>
        </S.HeroInner>
      </S.Hero>
      <S.StickyNav aria-label="Areas page navigation">
        <a href="#neighborhoods">Neighborhoods</a>
        <a href="#infrastructure-explorer">Infrastructure</a>
        <a href="#commute-tax-calculator">Commute &amp; tax calculator</a>
        <a href="#smart-concession-optimizer">Seller credits</a>
        <a href="/alabama-home-warranty">Home warranty</a>
        <a href="#school-zones">School zones</a>
        <a href="#local-picks">Dog parks and Purple Cup districts</a>
        <a href="#huntsville-qa">Huntsville Q&amp;A</a>
      </S.StickyNav>

      <Section hasMaxWidth id="lifestyle-settings">
        <S.SectionHeader>
          <S.SectionTitle>See the real places behind the search</S.SectionTitle>
          <S.Note>
            A few views of Huntsville to help you get oriented. Open an area guide for the
            details to check before choosing an address.
          </S.Note>
        </S.SectionHeader>
        <S.SceneGrid>
          {lifestyleScenes.map(scene => (
            <S.SceneCard key={scene.title}>
              <S.SceneFrame>
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <S.ScenePhotoLabel href={scene.href}>{scene.title}</S.ScenePhotoLabel>
              </S.SceneFrame>
              <S.SceneDetail>{scene.detail}</S.SceneDetail>
              {'photoSource' in scene && (
                <>
                  <S.SceneCredit
                    href={scene.photoSource}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {scene.photoCredit}
                  </S.SceneCredit>
                  {'photoLicense' in scene && (
                    <S.SceneCredit
                      href={scene.photoLicense}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {' '}
                      · {scene.photoLicenseLabel}
                    </S.SceneCredit>
                  )}
                </>
              )}
            </S.SceneCard>
          ))}
        </S.SceneGrid>
      </Section>

      <InfrastructureExplorer />

      <Section hasMaxWidth id="commute-overview">
        <S.CommuteOverview>
          <S.CommuteIntro>
            <S.SectionTitle>Begin with the drive that shapes your week</S.SectionTitle>
            <S.Note>
              Choose the work hub or corridor you use most. The area list below will
              narrow to places tagged for that search context.
            </S.Note>
            <S.CommuteDisclaimer>
              Downtown Huntsville photograph. These choices filter area guides; check the
              actual route from any home address.
            </S.CommuteDisclaimer>
          </S.CommuteIntro>
          <S.CommuteMap role="group" aria-label="Filter areas by commute destination">
            {commuteHubs.map(hub => (
              <S.CommuteHubButton
                key={hub.destination}
                type="button"
                active={commute === hub.destination}
                aria-pressed={commute === hub.destination}
                onClick={() => {
                  setCommute(hub.destination)
                  document
                    .getElementById('neighborhoods')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <span>{hub.destination}</span>
                <small>Filter area guide</small>
              </S.CommuteHubButton>
            ))}
          </S.CommuteMap>
        </S.CommuteOverview>
      </Section>

      <Section hasMaxWidth id="neighborhoods">
        <S.SectionHeader>
          <S.SectionTitle>Explore North Alabama areas</S.SectionTitle>
          <S.Note>
            Start with places and priorities. Then verify the property, school zone,
            taxes, utilities, and route at the exact address.
          </S.Note>
        </S.SectionHeader>
        <S.Filters>
          <S.FilterGroup>
            <S.FilterLabel>Destination to compare</S.FilterLabel>
            <S.Pills>
              {commuteOptions.map(option => (
                <S.Pill
                  key={option}
                  type="button"
                  aria-pressed={commute === option}
                  active={commute === option}
                  onClick={() => setCommute(option)}
                >
                  {option}
                </S.Pill>
              ))}
            </S.Pills>
          </S.FilterGroup>
          <S.FilterGroup>
            <S.FilterLabel>Lot style</S.FilterLabel>
            <S.Pills>
              {focusOptions.map(option => (
                <S.Pill
                  key={option}
                  type="button"
                  aria-pressed={focus === option}
                  active={focus === option}
                  onClick={() => setFocus(option)}
                >
                  {option}
                </S.Pill>
              ))}
            </S.Pills>
          </S.FilterGroup>
          <S.FilterGroup>
            <S.FilterLabel>Tax zone and school context</S.FilterLabel>
            <S.Pills>
              {taxZoneOptions.map(option => (
                <S.Pill
                  key={option}
                  type="button"
                  aria-pressed={taxZone === option}
                  active={taxZone === option}
                  onClick={() => setTaxZone(option)}
                >
                  {option === 'All' ? 'All' : taxZoneLabels[option]}
                </S.Pill>
              ))}
            </S.Pills>
          </S.FilterGroup>
          <S.SearchGroup>
            <label htmlFor="area-search">Find a place</label>
            <S.SearchInput
              id="area-search"
              type="search"
              placeholder="Try Madison or Jones Valley"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            {(query || commute !== 'All' || focus !== 'All' || taxZone !== 'All') && (
              <S.ResetButton
                type="button"
                onClick={() => {
                  setQuery('')
                  setCommute('All')
                  setFocus('All')
                  setTaxZone('All')
                }}
              >
                Clear filters
              </S.ResetButton>
            )}
          </S.SearchGroup>
        </S.Filters>
        <S.FilterNote>
          These filters describe broad search contexts, not a guarantee for any home.
          Confirm city limits, school assignment, tax district, lot features, and services
          by parcel.
        </S.FilterNote>
        <S.ResultCount aria-live="polite">
          {filteredAreas.length} {filteredAreas.length === 1 ? 'area' : 'areas'} shown
        </S.ResultCount>
        <S.AreaGrid>
          {filteredAreas.map(area => (
            <S.AreaCard key={area.name}>
              <S.AreaName>{area.name}</S.AreaName>
              <S.AreaDetail>{area.detail}</S.AreaDetail>
              <S.TaxZoneTag>{taxZoneLabels[areaTaxZone(area.name)]}</S.TaxZoneTag>
              <S.SourceLink
                href={area.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {area.sourceLabel}
              </S.SourceLink>
              <S.CardActions>
                {area.route && (
                  <Button href={area.route} size="2">
                    Read the area guide
                  </Button>
                )}
                {area.listingUrl && (
                  <>
                    <S.ListingLink
                      href={area.listingUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Browse Live ValleyMLS Listings <span aria-hidden="true">→</span>
                    </S.ListingLink>
                    <S.ResetButton
                      type="button"
                      onClick={() => {
                        if (area.listingUrl) {
                          setListing({ label: area.name, url: area.listingUrl })
                        }
                      }}
                    >
                      Ask Becca about {area.name}
                    </S.ResetButton>
                  </>
                )}
              </S.CardActions>
            </S.AreaCard>
          ))}
          {filteredAreas.length === 0 && (
            <S.EmptyState>
              <strong>No areas match those filters.</strong>
              <span>Clear a filter or try a broader search.</span>
            </S.EmptyState>
          )}
        </S.AreaGrid>
      </Section>

      <Section hasMaxWidth id="commute-tax-calculator">
        <S.SectionHeader>
          <S.SectionTitle>Plan the route and monthly housing costs</S.SectionTitle>
          <S.Note>
            Start with an exact property address and destination. Google Maps can show a
            route and may let you adjust departure time. Tax amounts must come from the
            parcel record.
          </S.Note>
        </S.SectionHeader>
        <S.CommutePanel>
          <S.RouteFields>
            <S.RouteField>
              Home address or starting point
              <S.RouteInput
                autoComplete="street-address"
                onChange={event => setCommuteFrom(event.target.value)}
                placeholder="Enter an address or neighborhood"
                value={commuteFrom}
              />
            </S.RouteField>
            <S.RouteField>
              Work or commute destination
              <S.RouteInput
                list="commute-destination-options"
                onChange={event => setCommuteTo(event.target.value)}
                placeholder="Choose or enter a destination"
                value={commuteTo}
              />
            </S.RouteField>
          </S.RouteFields>
          <datalist id="commute-destination-options">
            {commuteDestinations.map(destination => (
              <option key={destination} value={destination} />
            ))}
          </datalist>
          {directionsUrl && (
            <S.RouteLink href={directionsUrl} target="_blank" rel="noreferrer noopener">
              Compare this route in Google Maps <span aria-hidden="true">↗</span>
            </S.RouteLink>
          )}
          <S.Note>
            Google Maps supplies route information after you open it and may let you
            adjust departure time. Traffic changes, so use this as a planning aid rather
            than a guaranteed commute estimate.
          </S.Note>
        </S.CommutePanel>
        <PaymentEstimator communityName="North Alabama" />
      </Section>

      <BuydownComparison />
      <SmartConcessionOptimizer />
      <WarrantyResourceLink audience="areas" />

      <Section hasMaxWidth id="school-zones">
        <S.SectionHeader>
          <S.SectionTitle>School-zone resources and matching listings</S.SectionTitle>
          <S.Note>
            These are live ValleyMLS searches. A listing result does not verify school
            assignment. Confirm the parcel with the school district.
          </S.Note>
        </S.SectionHeader>
        <S.SchoolGrid>
          {schoolLinks.map(school => (
            <S.AreaCard key={school.name}>
              <S.AreaName>{school.name}</S.AreaName>
              <S.AreaDetail>
                {school.district}. Verify attendance by property address.
              </S.AreaDetail>
              <S.SourceLink href={school.map} target="_blank" rel="noreferrer noopener">
                Open official school-zone information
              </S.SourceLink>
              <S.ListingLink href={school.url} target="_blank" rel="noreferrer noopener">
                Browse Live ValleyMLS Listings →
              </S.ListingLink>
              <S.ResetButton
                type="button"
                onClick={() => setListing({ label: school.name, url: school.url })}
              >
                Ask Becca about this school area
              </S.ResetButton>
            </S.AreaCard>
          ))}
        </S.SchoolGrid>
      </Section>

      <Section hasMaxWidth id="local-picks">
        <S.SectionHeader>
          <S.SectionTitle>Dog parks and Purple Cup districts</S.SectionTitle>
          <S.Note>
            Check current hours, boundaries, and rules before you go. Purple Cup
            privileges apply only within designated Arts and Entertainment district
            boundaries.
          </S.Note>
        </S.SectionHeader>
        <S.ResourceGrid>
          <S.ResourceCard>
            <S.AreaName>Huntsville Dog Spots</S.AreaName>
            <S.AreaDetail>
              Browse the city’s off-leash dog areas, locations, hours, and park rules.
            </S.AreaDetail>
            <S.SourceLink
              href="https://www.huntsvilleal.gov/environment/parks-recreation/parks-and-nature/dog-parks/"
              target="_blank"
              rel="noreferrer noopener"
            >
              City of Huntsville dog parks
            </S.SourceLink>
          </S.ResourceCard>
          <S.ResourceCard>
            <S.AreaName>Arts and Entertainment districts</S.AreaName>
            <S.AreaDetail>
              See current district maps, hours, participating businesses, and rules for
              carrying a beverage outdoors.
            </S.AreaDetail>
            <S.SourceLink
              href="https://www.huntsvilleal.gov/development/building-construction/planning/zoning/arts-entertainment-districts/"
              target="_blank"
              rel="noreferrer noopener"
            >
              City of Huntsville district maps and rules
            </S.SourceLink>
          </S.ResourceCard>
        </S.ResourceGrid>
      </Section>

      <FaqPreview
        id="huntsville-qa"
        title="Huntsville questions buyers ask first"
        items={[huntsvilleFaq[0], huntsvilleFaq[2], huntsvilleFaq[4], huntsvilleFaq[5]]}
      />
      <LiveMlsDrawer target={listing} onClose={() => setListing(null)} />
    </main>
  )
}
