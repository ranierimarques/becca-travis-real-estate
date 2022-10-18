import { Post } from '@layout/post-slug/sections'
import request, { gql } from 'graphql-request'
import Head from 'next/head'
import getReadingTime from 'reading-time'

export default function PostPage({ data }: any) {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Post data={data} />
    </main>
  )
}

export async function getStaticPaths() {
  const data = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    gql`
      query {
        posts {
          slug
        }
      }
    `
  )

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
  const data = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query,
    {
      slug: params.slug,
    }
  )

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
