import request, { gql } from 'graphql-request'

const query = gql`
  query TermsBySlug($slug: String!) {
    utils(where: { slug: $slug }) {
      content {
        raw
      }
      pageTitle
    }
  }
`

type GetTermsSlugs =
  | 'fair-housing-statement'
  | 'accessibility-statement'
  | 'fraud-alert'
  | 'privacy-notice'
  | 'terms-of-service'
  | 'dmca'

export async function getTerms(slug: GetTermsSlugs) {
  return await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query,
    {
      slug,
    }
  )
}
