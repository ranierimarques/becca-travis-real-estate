import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { MetaSEO } from '@/common'
import { AreaGuide, areaGuides } from '@/resources/community-guides/areas'
import * as S from '@/resources/community-guides/styles'

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
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Big_Spring_Park.jpg',
    alt: 'Big Spring Park in downtown Huntsville',
    credit: 'BullDawg2021',
    source: 'https://commons.wikimedia.org/wiki/File:Big_Spring_Park.jpg',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    licenseLabel: 'CC BY 4.0',
  },
  'old-town': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/600s_Holmes_Ave_Huntsville_Oct_2011.jpg',
    alt: 'Holmes Avenue in the Old Town historic district of Huntsville',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:600s_Holmes_Ave_Huntsville_Oct_2011.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
  },
  hartselle: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/100s_Main_St_Hartselle_Feb_2012_01.jpg',
    alt: 'Main Street in downtown Hartselle, Alabama',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:100s_Main_St_Hartselle_Feb_2012_01.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
  },
  'monte-sano': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Monte_Sano_State_Park_Lodge_Overlook.jpg',
    alt: 'View from the lodge overlook at Monte Sano State Park',
    credit: 'AquilaMMXI',
    source:
      'https://commons.wikimedia.org/wiki/File:Monte_Sano_State_Park_Lodge_Overlook.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
  },
  'five-points': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/703_%26_705_Ward_Ave_Huntsville_Oct_2011.jpg',
    alt: 'Houses on Ward Avenue in the Five Points Historic District',
    credit: 'Chris Pruitt',
    source:
      'https://commons.wikimedia.org/wiki/File:703_%26_705_Ward_Ave_Huntsville_Oct_2011.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    licenseLabel: 'CC BY SA 3.0',
  },
  guntersville: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Guntersville_City_and_Lake_%2835108179154%29.jpg',
    alt: 'Aerial view of Guntersville and the lake',
    credit: 'formulanone',
    source:
      'https://commons.wikimedia.org/wiki/File:Guntersville_City_and_Lake_(35108179154).jpg',
    license: 'https://creativecommons.org/licenses/by-sa/2.0/',
    licenseLabel: 'CC BY SA 2.0',
  },
  madison: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Madison_Alabama_Downtown_2024.jpg',
    alt: 'Downtown Madison, Alabama',
    credit: 'Republic of Selmaria',
    source: 'https://commons.wikimedia.org/wiki/File:Madison_Alabama_Downtown_2024.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
  },
  twickenham: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Cox_House%2C_Huntsville%2C_AL._Twickenham.jpg',
    alt: 'Cox House in Huntsville’s Twickenham Historic District',
    credit: 'Voxinferior',
    source:
      'https://commons.wikimedia.org/wiki/File:Cox_House,_Huntsville,_AL._Twickenham.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
  },
  scottsboro: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Jackson_County_Courthouse%2C_Scottsboro%2C_Alabama.jpg',
    alt: 'Jackson County Courthouse in Scottsboro, Alabama',
    credit: 'Carol M. Highsmith',
    source:
      'https://commons.wikimedia.org/wiki/File:Jackson_County_Courthouse,_Scottsboro,_Alabama.jpg',
    license: 'https://www.loc.gov/pictures/item/2010639631/',
    licenseLabel: 'Public domain',
  },
}

// Regional scenes are explicitly captioned with the place photographed, not the
// guide destination. They are used until a destination-specific photo is available.
const regionalPhotos: Record<string, Photo> = {
  park: {
    src: '/images/home-inspiration/big-spring-park-camera-roll.webp',
    alt: 'Fountain and lake at Big Spring Park in downtown Huntsville',
    credit: 'Becca Travis',
    caption:
      'Big Spring Park in Huntsville. A North Alabama regional view from Becca’s camera roll.',
  },
  bridge: {
    src: '/images/home-inspiration/big-spring-red-bridge.webp',
    alt: 'Red bridge at Big Spring Park in downtown Huntsville',
    credit: 'Becca Travis',
    caption:
      'Big Spring Park in Huntsville. A North Alabama regional view from Becca’s camera roll.',
  },
  mountain: {
    src: '/images/home-inspiration/monte-sano-overlook.webp',
    alt: 'Wooded hills seen from the Monte Sano area of Huntsville',
    credit: 'Becca Travis',
    caption:
      'Monte Sano area in Huntsville. A North Alabama regional view from Becca’s camera roll.',
  },
  hays: {
    src: '/images/real/hays-nature-preserve.webp',
    alt: 'Flint River Greenway bridge at Hays Nature Preserve in Huntsville',
    credit: 'GranCavallo',
    source:
      'https://commons.wikimedia.org/wiki/File:Hays_Nature_Preserve_-_Flint_River_Greenway_Bridge.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/4.0/',
    licenseLabel: 'CC BY SA 4.0',
    caption: 'Hays Nature Preserve in Huntsville. A North Alabama regional view.',
    changes: 'Cropped.',
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

export default function AreaPage({
  area,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const photo =
    photos[area.slug] || regionalPhotos[regionalPhotoForArea[area.slug] || 'park']
  return (
    <S.Page>
      <MetaSEO
        canonicalPath={`/areas/${area.slug}`}
        title={`${area.name}, Alabama | Becca Travis`}
        description={`Explore ${area.name}, Alabama, with local information and practical questions for your home search.`}
        image={photo.src}
        alt={photo.alt}
      />
      <S.Hero>
        <S.Wrap>
          <S.Eyebrow>North Alabama community guide</S.Eyebrow>
          <S.Title>Discover {area.name}</S.Title>
          <S.Intro>{area.introduction}</S.Intro>
        </S.Wrap>
      </S.Hero>
      <S.Content>
        <S.Photo>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
          <figcaption>
            {photo.caption && <>{photo.caption} </>}
            {photo.source && (
              <>
                Photo by <a href={photo.source}>{photo.credit}</a>
                {photo.license && (
                  <>
                    , <a href={photo.license}>{photo.licenseLabel}</a>
                  </>
                )}
                . {photo.changes || 'No changes made.'}
              </>
            )}
          </figcaption>
        </S.Photo>
        <S.Body>
          <h2>Explore the area</h2>
          <p>{area.explore}</p>
          {area.details?.map(detail => (
            <section key={detail.heading}>
              <h2>{detail.heading}</h2>
              <p>{detail.text}</p>
              <p>
                <a href={detail.source}>{detail.sourceName}</a>
              </p>
            </section>
          ))}
          <h2>Consider your home search</h2>
          <p>{area.homeSearch}</p>
          <h2>Continue your research</h2>
          <p>
            <a href={area.source}>{area.sourceName}</a> provides more local information.
            Confirm property details and school assignments with the relevant providers.
          </p>
        </S.Body>
        <S.Action
          href={`/contact-us?intent=area-help&area=${encodeURIComponent(area.name)}`}
        >
          Ask Becca to help compare {area.name}
        </S.Action>
        <br />
        <S.Action href="/areas">Explore more communities</S.Action>
      </S.Content>
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
