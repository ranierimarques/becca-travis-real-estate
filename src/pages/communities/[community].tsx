import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { About, Hero, Yelp } from '@/layout/communities/sections'
import {
  getYelpSearchParams,
  isAlabamaBusiness,
} from '@/resources/community-guides/yelp-search'
import { getCommunityHero } from '@/layout/communities/sections/hero/hero'
import { LocalPhotoGallery } from '@/layout/communities/sections/local-photo-gallery'
import { capitalizeEveryWord } from '@/resources/utils/text'
import { LastCall } from '@/shared'
import { ReplaceAll } from '@/types/helpers'

type PageWithStaticProps = NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Page: PageWithStaticProps = ({ data, community }) => {
  const hero = getCommunityHero(community)
  return (
    <main>
      <MetaSEO
        canonicalPath={`/communities/${community.replace(/ /g, '-')}`}
        title={`${capitalizeEveryWord(community)} Community | Becca Travis`}
        description={`Explore ${capitalizeEveryWord(
          community
        )} in North Alabama, including local information and community highlights.`}
        image={
          community === 'huntsville'
            ? '/images/areas/downtown-huntsville.webp'
            : typeof hero.image === 'string'
            ? hero.image
            : hero.image.src
        }
        alt={
          community === 'huntsville'
            ? 'Downtown Huntsville skyline beside Big Spring Park'
            : hero.imageAlt
        }
      />

      <Hero communityName={community} />
      {community === 'huntsville' && <LocalPhotoGallery />}
      <About communityName={community} />
      {/* <MarketTrends communityName={community} /> */}
      {data.length > 0 && <Yelp data={data} communityName={community} />}
      <LastCall />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { community: 'huntsville' } },
      { params: { community: 'athens' } },
      { params: { community: 'harvest' } },
      { params: { community: 'hampton-cove' } },
      { params: { community: 'decatur' } },
      { params: { community: 'meridianville' } },
    ],
    fallback: false,
  }
}

interface FetchTypes {
  businesses: {
    id: string
    alias: string
    name: string
    image_url: string
    is_closed: boolean
    url: string
    review_count: number
    categories: Category[]
    rating: 0 | 1 | 2 | 1.5 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
    transactions: string[]
    price: string
    location: Location
    phone: string
    display_phone: string
    distance: number
  }[]
}

interface Category {
  alias: string
  title: string
}

interface Location {
  address1: string
  address2: string
  address3: string
  city: string
  zip_code: string
  country: string
  state: string
  display_address: string[]
}

interface SchoolsFormatted {
  schoolid: string
  schoolName: string
  url: string
  lowGrade: string
  highGrade: string
  schoolLevel: string
  rankStars: string
  numberOfStudents: string
}

export interface SchoolList {
  High: SchoolsFormatted[]
  Elementary: SchoolsFormatted[]
  Middle: SchoolsFormatted[]
}

const endpoint = 'https://api.yelp.com/v3/businesses'

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
} as RequestInit

type CommunityNameParams =
  | 'harvest'
  | 'huntsville'
  | 'hampton-cove'
  | 'decatur'
  | 'athens'
  | 'meridianville'

export type CommunityName = ReplaceAll<CommunityNameParams, '-', ' '>

type Params = {
  params: {
    community: CommunityNameParams
  }
}

async function fetchBusinesses(
  community: CommunityName
): Promise<FetchTypes['businesses']> {
  if (!process.env.YELP_API_KEY) return []
  try {
    const params = getYelpSearchParams(community, 'dining')
    if (!params) return []
    const response = await fetch(`${endpoint}/search?${params.toString()}`, options)
    if (!response.ok) return []
    const data: FetchTypes = await response.json()
    return Array.isArray(data.businesses) ? data.businesses.filter(isAlabamaBusiness) : []
  } catch (error) {
    console.error('Unable to load local businesses', error)
    return []
  }
}

export async function getStaticProps({ params }: Params) {
  const community = params.community.replace('-', ' ') as CommunityName
  const businesses = await fetchBusinesses(community)

  return {
    props: {
      community: community,
      data: businesses,
    },
  }
}

export default Page
