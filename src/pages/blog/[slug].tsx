import { gql } from '@apollo/client'
import { Post } from '@layout/blog'
import client from '@resources/services/apollo-client'
import getReadingTime from 'reading-time'

export default function PostPage({ data }: any) {
  return <Post data={data} />
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  })

  const paths = data.posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: 'blocking' }
}

const query = gql`
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      postTitle
      postDescription
      postBanner {
        url
      }
      postContent {
        raw
        text
      }
      createdAt
      updatedAt
      slug
      tag
    }
  }
`

export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query,
    variables: {
      slug: params.slug,
    },
  })

  const readingTime = getReadingTime(data.post.postContent.text).text

  return {
    props: {
      data: {
        ...data,
        readingTime,
      },
    },
  }
}
