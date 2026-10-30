import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { MetaSEO } from '@/common'
import { AreaGuide, areaGuides } from '@/resources/community-guides/areas'
import * as S from '@/resources/community-guides/styles'

type Photo = {
  src: string
  alt: string
  credit: string
  source: string
  license: string
  licenseLabel: string
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
}

export default function AreaPage({
  area,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const photo = photos[area.slug]
  return (
    <S.Page>
      <MetaSEO
        canonicalPath={`/areas/${area.slug}`}
        title={`${area.name}, Alabama | Becca Travis`}
        description={`Explore ${area.name}, Alabama, with local information and practical questions for your home search.`}
        image={photo?.src || '/sharing-cards/og-index.jpg'}
        alt={photo?.alt || 'Becca Travis Real Estate'}
      />
      <S.Hero>
        <S.Wrap>
          <S.Eyebrow>North Alabama community guide</S.Eyebrow>
          <S.Title>Discover {area.name}</S.Title>
          <S.Intro>{area.introduction}</S.Intro>
        </S.Wrap>
      </S.Hero>
      <S.Content>
        {photo && (
          <S.Photo>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>
              Photo by <a href={photo.source}>{photo.credit}</a>,{' '}
              <a href={photo.license}>{photo.licenseLabel}</a>. No changes made.
            </figcaption>
          </S.Photo>
        )}
        <S.Body>
          <h2>Explore the area</h2>
          <p>{area.explore}</p>
          <h2>Consider your home search</h2>
          <p>{area.homeSearch}</p>
          <h2>Continue your research</h2>
          <p>
            <a href={area.source}>{area.sourceName}</a> provides more local information.
            Confirm property details and school assignments with the relevant providers.
          </p>
        </S.Body>
        <S.Action href="/contact-us">Talk with Becca about {area.name}</S.Action>
        <br />
        <S.Action href="/areas">Explore more communities</S.Action>
      </S.Content>
    </S.Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: areaGuides.map(area => ({ params: { slug: area.slug } })),
  fallback: false,
})
export const getStaticProps: GetStaticProps<{ area: AreaGuide }> = async ({ params }) => {
  const area = areaGuides.find(item => item.slug === params?.slug)
  return area ? { props: { area } } : { notFound: true }
}
