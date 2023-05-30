import type { InferGetStaticPropsType, NextPage } from 'next'
import request, { gql } from 'graphql-request'
import getReadingTime from 'reading-time'
import { MetaSEO } from '@/common'
import { Post } from '@/layout/post-slug/sections'

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        title={`${data.post.postTitle} | Becca Travis`}
        description={`${data.post.postDescription} | Becca Travis`}
        image={data.post.postBanner.url}
        alt={data.post.postBannerAlt}
      />

      <Post data={data} />
    </main>
  )
}

export default PostPage

export async function getStaticPaths() {
  const data = await request(
    'https://us-east-1.cdn.hygraph.com/content/cl5jvxz1t27ha01ujh7na0fn3/master',
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
      postBannerAlt
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
    'https://us-east-1.cdn.hygraph.com/content/cl5jvxz1t27ha01ujh7na0fn3/master',
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
