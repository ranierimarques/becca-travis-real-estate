import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { MetaSEO } from '@/common'
import * as S from '@/resources/community-guides/area-detail.styles'
import { AreaGuide, areaGuides } from '@/resources/community-guides/areas'

type Photo = {
  src: string
  alt: string
  credit: string
  source?: string
  license?: string
  licenseLabel?: string
  caption?: string
  changes?: string
}
const photos: Record<string, Photo> = {
  'downtown-huntsville': {
    src: '/images/real/big-spring-park.webp',
    alt: 'Big Spring Park in downtown Huntsville',
    credit: 'BullDawg2021',
    source: 'https://commons.wikimedia.org/wiki/File:Big_Spring_Park.jpg',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    licenseLabel: 'CC BY 4.0',
    changes: 'Resized and cropped for display.',
  },
  'old-town': {
    src: '/images/real/old-town-holmes-avenue.webp',
    alt: 'Holmes Avenue in the Old Town historic district of Huntsville',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:600s_Holmes_Ave_Huntsville_Oct_2011.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
    changes: 'Resized, converted to WebP, and cropped for display.',
  },
  hartselle: {
    src: '/images/real/hartselle-main-street.webp',
    alt: 'Main Street in downtown Hartselle, Alabama',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:100s_Main_St_Hartselle_Feb_2012_01.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
    changes: 'Resized, converted to WebP, and cropped for display.',
  },
  'monte-sano': {
    src: '/images/real/monte-sano-state-park.webp',
    alt: 'View from the lodge overlook at Monte Sano State Park',
    credit: 'AquilaMMXI',
    source:
      'https://commons.wikimedia.org/wiki/File:Monte_Sano_State_Park_Lodge_Overlook.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    changes: 'Resized and cropped for display.',
  },
  'five-points': {
    src: '/images/real/five-points-ward-avenue.webp',
    alt: 'Houses on Ward Avenue in the Five Points Historic District',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:703_%26_705_Ward_Ave_Huntsville_Oct_2011.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
    changes: 'Resized, converted to WebP, and cropped for display.',
  },
  guntersville: {
    src: '/images/real/guntersville-city-lake.webp',
    alt: 'Aerial view of Guntersville and the lake',
    credit: 'formulanone',
    source:
      'https://commons.wikimedia.org/wiki/File:Guntersville_City_and_Lake_(35108179154).jpg',
    license: 'https://creativecommons.org/licenses/by-sa/2.0/',
    licenseLabel: 'CC BY SA 2.0',
    changes: 'Resized, converted to WebP, and cropped for display.',
  },
  madison: {
    src: '/images/areas/madison-station-2024.jpg',
    alt: 'Historic Madison Station in downtown Madison, Alabama',
    credit: 'Republic of Selmaria',
    source: 'https://commons.wikimedia.org/wiki/File:Madison_Alabama_Downtown_2024.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    changes: 'Resized and cropped for display.',
  },
  twickenham: {
    src: '/images/real/twickenham-cox-house.webp',
    alt: 'Cox House in Huntsville’s Twickenham Historic District',
    credit: 'Voxinferior',
    source:
      'https://commons.wikimedia.org/wiki/File:Cox_House,_Huntsville,_AL._Twickenham.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    changes: 'Auto-oriented, resized, converted to WebP, and cropped for display.',
  },
  scottsboro: {
    src: '/images/real/scottsboro-courthouse.webp',
    alt: 'Jackson County Courthouse in Scottsboro, Alabama',
    credit: 'Carol M. Highsmith',
    source:
      'https://commons.wikimedia.org/wiki/File:Jackson_County_Courthouse,_Scottsboro,_Alabama.jpg',
    license: 'https://www.loc.gov/pictures/item/2010639631/',
    licenseLabel: 'Public domain',
    changes: 'Converted to WebP and cropped for display.',
  },
  'big-cove': {
    src: '/images/real/hays-nature-preserve.webp',
    alt: 'Footbridge over the Flint River at Hays Nature Preserve in east Huntsville',
    credit: 'GranCavallo',
    source:
      'https://commons.wikimedia.org/wiki/File:Hays_Nature_Preserve_-_Flint_River_Greenway_Bridge.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    changes: 'Resized and cropped for display.',
  },
}

// Regional scenes are explicitly captioned with the place photographed, not the
// guide destination. They are used until a destination-specific photo is available.
const regionalPhotos: Record<string, Photo> = {
  park: {
    src: '/images/real/big-spring-park.webp',
    alt: 'Big Spring Park in downtown Huntsville',
    credit: 'BullDawg2021',
    source: 'https://commons.wikimedia.org/wiki/File:Big_Spring_Park.jpg',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    licenseLabel: 'CC BY 4.0',
    caption: 'Regional photo: Big Spring Park in downtown Huntsville.',
    changes: 'Resized and cropped for display.',
  },
  bridge: {
    src: '/images/real/hays-nature-preserve.webp',
    alt: 'Footbridge over the Flint River at Hays Nature Preserve in east Huntsville',
    credit: 'GranCavallo',
    source:
      'https://commons.wikimedia.org/wiki/File:Hays_Nature_Preserve_-_Flint_River_Greenway_Bridge.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    caption: 'Regional photo: Hays Nature Preserve in east Huntsville.',
    changes: 'Resized and cropped for display.',
  },
  mountain: {
    src: '/images/real/monte-sano-state-park.webp',
    alt: 'View from the lodge overlook at Monte Sano State Park',
    credit: 'AquilaMMXI',
    source:
      'https://commons.wikimedia.org/wiki/File:Monte_Sano_State_Park_Lodge_Overlook.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    caption: 'Regional photo: Monte Sano State Park overlook in Huntsville.',
    changes: 'Resized and cropped for display.',
  },
  hays: {
    src: '/images/real/hays-nature-preserve.webp',
    alt: 'Flint River Greenway bridge at Hays Nature Preserve in Huntsville',
    credit: 'GranCavallo',
    source:
      'https://commons.wikimedia.org/wiki/File:Hays_Nature_Preserve_-_Flint_River_Greenway_Bridge.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    caption: 'Regional photo: Hays Nature Preserve in east Huntsville.',
    changes: 'Resized and cropped for display.',
  },
}

const regionalPhotoForArea: Record<string, keyof typeof regionalPhotos> = {
  'lincoln-mill': 'bridge',
  blossomwood: 'mountain',
  'jones-valley': 'mountain',
  'village-of-providence': 'park',
  midcity: 'bridge',
  'west-huntsville': 'park',
  'south-huntsville': 'mountain',
  'big-cove': 'hays',
  'mcmullen-cove': 'hays',
  'owens-cross-roads': 'hays',
  'town-madison': 'bridge',
  'clift-farm': 'park',
  'hazel-green': 'mountain',
  toney: 'bridge',
  'new-market': 'mountain',
  gurley: 'hays',
}

const relatedBySlug: Record<string, string[]> = {
  'downtown-huntsville': ['twickenham', 'old-town', 'five-points'],
  twickenham: ['downtown-huntsville', 'old-town', 'five-points'],
  'old-town': ['downtown-huntsville', 'twickenham', 'five-points'],
  'five-points': ['downtown-huntsville', 'twickenham', 'old-town'],
  'monte-sano': ['big-cove', 'downtown-huntsville', 'madison'],
  'big-cove': ['monte-sano', 'downtown-huntsville', 'madison'],
}

function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <>
      {photo.caption && <>{photo.caption} </>}
      Photo by {photo.source ? <a href={photo.source}>{photo.credit}</a> : photo.credit}
      {photo.license && (
        <>
          , <a href={photo.license}>{photo.licenseLabel}</a>
        </>
      )}
      . {photo.source && (photo.changes || 'Cropped for display.')}
    </>
  )
}

export default function AreaPage({
  area,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const photo =
    photos[area.slug] || regionalPhotos[regionalPhotoForArea[area.slug] || 'park']
  const huntsvilleNeighborhoods = [
    'lincoln-mill',
    'downtown-huntsville',
    'twickenham',
    'old-town',
    'five-points',
    'blossomwood',
    'jones-valley',
    'village-of-providence',
    'midcity',
    'west-huntsville',
    'south-huntsville',
    'monte-sano',
    'big-cove',
  ]
  const seoPlace =
    huntsvilleNeighborhoods.includes(area.slug) && !area.name.includes('Huntsville')
      ? `${area.name}, Huntsville, Alabama`
      : `${area.name}, Alabama`
  const seoTitle =
    area.slug === 'village-of-providence'
      ? `${seoPlace} | Becca Travis`
      : huntsvilleNeighborhoods.includes(area.slug)
      ? `${seoPlace} Home Guide | Becca Travis`
      : `${seoPlace} Home Search Guide | Becca Travis`
  const metaDescription =
    area.introduction.length < 100
      ? `${area.introduction} Plan your home search with Becca Travis.`
      : area.introduction
  const contactHref = `/contact-us?intent=area-help&area=${encodeURIComponent(area.name)}`
  const relatedSlugs = relatedBySlug[area.slug] || [
    'downtown-huntsville',
    'madison',
    'monte-sano',
  ]
  const related = relatedSlugs
    .filter(slug => slug !== area.slug && photos[slug])
    .map(slug => areaGuides.find(guide => guide.slug === slug))
    .filter((guide): guide is AreaGuide => Boolean(guide))
    .slice(0, 3)

  return (
    <S.Page>
      <MetaSEO
        canonicalPath={`/areas/${area.slug}`}
        title={seoTitle}
        description={metaDescription}
        image={photo.src}
        alt={photo.alt}
      />
      <S.Hero>
        <S.Wrap>
          <S.Breadcrumb aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/areas">Areas</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{area.name}</span>
          </S.Breadcrumb>
          <S.HeroGrid>
            <S.HeroCopy>
              <S.Eyebrow>North Alabama area guide</S.Eyebrow>
              <S.Title>Explore {area.name}</S.Title>
              <S.Intro>{area.introduction}</S.Intro>
              <S.Actions>
                <S.PrimaryAction href={contactHref}>
                  Ask Becca about {area.name}
                </S.PrimaryAction>
                <S.TextAction href="#explore">Explore the area</S.TextAction>
              </S.Actions>
            </S.HeroCopy>
            <S.HeroPhoto>
              <img src={photo.src} alt={photo.alt} width="1200" height="800" />
              <figcaption>
                <PhotoCredit photo={photo} />
              </figcaption>
            </S.HeroPhoto>
          </S.HeroGrid>
        </S.Wrap>
      </S.Hero>

      <S.Section id="explore">
        <S.Wrap>
          <S.SectionHeading>Get oriented in {area.name}</S.SectionHeading>
          <S.StoryGrid>
            <S.Story>
              <p>{area.explore}</p>
              {area.details?.map(detail => (
                <section key={detail.heading}>
                  <h3>{detail.heading}</h3>
                  <p>{detail.text}</p>
                  <p>
                    <a href={detail.source}>{detail.sourceName}</a>
                  </p>
                </section>
              ))}
              <p>
                <a href={area.source}>{area.sourceName}</a> has more local information.
              </p>
            </S.Story>
            <S.Sidebar>
              <h2>For your home search</h2>
              <p>{area.homeSearch}</p>
            </S.Sidebar>
          </S.StoryGrid>
          {area.visitPlan && (
            <S.Visit>
              <h2>Plan a first visit</h2>
              <p>{area.visitPlan}</p>
            </S.Visit>
          )}
        </S.Wrap>
      </S.Section>

      {area.buyerQuestions && (
        <S.Section css={{ paddingTop: 0 }}>
          <S.Wrap>
            <S.SectionHeading>Questions to take on a tour</S.SectionHeading>
            <S.Lead>
              Use these questions for an individual address. Verify property facts, school
              assignments and costs with the relevant providers before making a decision.
            </S.Lead>
            <S.QuestionGrid>
              {area.buyerQuestions.map(question => (
                <li key={question}>{question}</li>
              ))}
            </S.QuestionGrid>
          </S.Wrap>
        </S.Section>
      )}

      <S.RelatedSection>
        <S.Wrap>
          <S.SectionHeading>Explore more North Alabama guides</S.SectionHeading>
          <S.Lead>
            Compare places you can visit, then narrow your search by address.
          </S.Lead>
          <S.RelatedGrid>
            {related.map(guide => {
              const relatedPhoto = photos[guide.slug]
              return (
                <S.RelatedCard key={guide.slug}>
                  <img
                    src={relatedPhoto.src}
                    alt={relatedPhoto.alt}
                    width="480"
                    height="320"
                    loading="lazy"
                  />
                  <S.RelatedCopy>
                    <h3>{guide.name}</h3>
                    <p>{guide.introduction}</p>
                    <S.RelatedLink href={`/areas/${guide.slug}`}>
                      Read {guide.name} guide
                    </S.RelatedLink>
                  </S.RelatedCopy>
                  <S.PhotoCredit>
                    <PhotoCredit photo={relatedPhoto} />
                  </S.PhotoCredit>
                </S.RelatedCard>
              )
            })}
          </S.RelatedGrid>
        </S.Wrap>
      </S.RelatedSection>

      <S.Contact>
        <S.Wrap>
          <h2>Compare homes with a real plan.</h2>
          <p>
            Tell Becca which parts of {area.name} interest you and what matters most in a
            home. She can help you choose useful next steps and check the details that
            differ by address.
          </p>
          <Link href={contactHref}>Ask Becca for help</Link>
        </S.Wrap>
      </S.Contact>
    </S.Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: areaGuides
    .filter(area => area.slug !== 'madison')
    .map(area => ({ params: { slug: area.slug } })),
  fallback: false,
})
export const getStaticProps: GetStaticProps<{ area: AreaGuide }> = async ({ params }) => {
  const area = areaGuides.find(item => item.slug === params?.slug)
  return area ? { props: { area } } : { notFound: true }
}
