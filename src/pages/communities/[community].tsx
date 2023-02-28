import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import {
  About,
  CommunityMap,
  Demographics,
  Hero,
  Homes,
  MarketTrends,
  Schools,
  Yelp,
} from '@/layout/communities/sections'
import { getHouseListing } from '@/services/house-listings'
import { LastCall } from '@/shared'

type PageWithStaticProps = NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Page: PageWithStaticProps = ({ data, listings, community, schools }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero communityName={community} />
      <About communityName={community} />
      <Demographics communityName={community} />
      {/* <MarketTrends communityName={community} /> */}
      <Schools communityName={community} schools={schools} />
      <CommunityMap communityName={community} />
      <Homes listings={listings} communityName={community} />
      <Yelp data={data} communityName={community} />
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

interface SchoolData {
  schoolList: {
    schoolid: string
    schoolName: string
    url: string
    lowGrade: string
    highGrade: string
    schoolLevel: 'High' | 'Elementary' | 'Middle'
    rankHistory: {
      rankStars: string
    }[]
    schoolYearlyDetails: {
      numberOfStudents: string
    }[]
  }[]
}

const endpoint = 'https://api.yelp.com/v3/businesses'

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
} as RequestInit

type Params = {
  params: {
    community: string
  }
}

export async function getStaticProps({ params }: Params) {
  const isAthens = params.community === 'athens'
  const community = params.community.replace('-', ' ')

  const response = await fetch(
    endpoint +
      `/search?location=${
        isAthens ? 'athens, alabama' : community
      }&sort_by=review_count&limit=6`,
    options
  )

  const schoolsResponse = await fetch(
    'https://api.schooldigger.com/v2.0/schools?st=AL&sortBy=rank&includeUnrankedSchoolsInRankSort=false&appID=d85b40ba&appKey=a7817ba93111d8421a1c0d8d46ccb2ae'
  )
  const schoolsData: SchoolData = await schoolsResponse.json()

  const schools = schoolsData.schoolList.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.schoolLevel]: [
        ...(accumulator[currentValue.schoolLevel] ?? []),
        {
          schoolid: currentValue.schoolid,
          schoolName: currentValue.schoolName,
          url: currentValue.url,
          lowGrade: currentValue.lowGrade,
          highGrade: currentValue.highGrade,
          schoolLevel: currentValue.schoolLevel,
          rankStars: currentValue.rankHistory[0].rankStars,
          numberOfStudents: currentValue.schoolYearlyDetails[0].numberOfStudents,
        },
      ],
    }),
    {} as SchoolList
  )

  const data = (await response.json()) as FetchTypes

  const listings = await getHouseListing({
    type: 'card',
    params: { 'City.in': community, limit: '6' },
  })

  return {
    props: {
      community: community,
      data: data.businesses,
      schools,
      listings,
    },
  }
}

export default Page
