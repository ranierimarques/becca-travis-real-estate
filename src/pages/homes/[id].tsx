import { Home } from '@layout/homes-id/sections'
import { getDate } from '@resources/utils/date'
import { convertSquareFeets } from '@utils/convert'
import { formatToDollar } from '@utils/currency'
import InferNextPropsType from 'infer-next-props-type'
import { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage<InferNextPropsType<typeof getStaticProps>> = ({ listing }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Home listing={listing} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

type Params = {
  params: {
    id: string
  }
}

type FetchTypes = {
  success: boolean
  status: number
  bundle: {
    LotSizeSquareFeet: number
    BedroomsTotal: number
    BridgeModificationTimestamp: string
    MlsStatus:
      | 'ACTIVE'
      | 'Active – Non Compliance'
      | 'Cancelled'
      | 'Coming Soon'
      | 'Contingent'
      | 'Expired'
      | 'Expired Provisional'
      | 'Leased'
      | 'Office Exclusive'
      | 'Pending'
      | 'Provisional'
      | 'Sold'
      | 'Temporarily Off Market'
    Media: {
      MediaURL: string
    }[]
    ListingId: string
    ListPrice: number
    BathroomsTotalInteger: number
    UnparsedAddress: string
    ListingKey: string
    FeedTypes: []
    PropertySubType: string
    CountyOrParish: string
    SubdivisionName: string
    CityRegion: string | null
    FoundationDetails: string
    Levels: string
    BuildingAreaTotal: string
    NewConstructionYN: string
    PropertyCondition: string
    PropertyType: string
    Sewer: string
    WaterSource: string
    ElementarySchool: string
    MiddleOrJuniorSchool: string
    HighSchool: string
    url: string
  }
}

const endpoint = 'https://api.bridgedataoutput.com/api/v2/valleymls/listings/'

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.BRIDGE_API_KEY}` },
} as RequestInit

export const getStaticProps = async ({ params }: Params) => {
  const response = await fetch(endpoint + params.id, options)
  const data = (await response.json()) as FetchTypes

  if (!data.success) return { notFound: true }

  const listing = {
    price: formatToDollar(data.bundle.ListPrice),
    address: data.bundle.UnparsedAddress,
    status: data.bundle.MlsStatus,
    lastUpdated: data.bundle.BridgeModificationTimestamp,
    lastUpdatedTitle: getDate(data.bundle.BridgeModificationTimestamp, 'en-US', 'full'),
    media: data.bundle.Media.map(media => media.MediaURL),
    bathroomsTotal: data.bundle.BathroomsTotalInteger,
    bedroomsTotal: data.bundle.BedroomsTotal,
    lotSizeSquareFeet: convertSquareFeets(data.bundle.LotSizeSquareFeet),
    subdivisionName: data.bundle.SubdivisionName,
    propertySubType: data.bundle.PropertySubType,
    countyOrParish: data.bundle.CountyOrParish,
    cityRegion: data.bundle.CityRegion,
    foundationDetails: data.bundle.FoundationDetails,
    levels: data.bundle.Levels,
    buildingTotalArea: data.bundle.BuildingAreaTotal,
    newConstruction: data.bundle.NewConstructionYN,
    propertyCondition: data.bundle.PropertyCondition,
    propertyType: data.bundle.PropertyType,
    sewer: data.bundle.Sewer,
    waterSource: data.bundle.WaterSource,
    elementarySchool: data.bundle.ElementarySchool,
    middleSchool: data.bundle.MiddleOrJuniorSchool,
    highSchool: data.bundle.HighSchool,
  }

  return {
    props: {
      listing,
    },
    revalidate: false,
  }
}

export default Page
