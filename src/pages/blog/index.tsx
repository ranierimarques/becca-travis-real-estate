import { Hero, Latest } from '@layout/blog'
import request, { gql } from 'graphql-request'
import type { NextPage } from 'next'
import Head from 'next/head'
import getReadingTime from 'reading-time'

interface PostsProps {
  posts: {
    id: string
    slug: string
    tag: string
    postTitle: string
    postDescription: string
    postBanner: {
      url: string
    }
    postBannerAlt: string
    createdAt: string
    readingTime: string
  }[]
}

interface PostsQuery {
  posts: {
    id: string
    slug: string
    tag: string
    postTitle: string
    postDescription: string
    postBanner: {
      url: string
    }
    postBannerAlt: string
    postContent: {
      text: string
    }
    createdAt: string
  }[]
}

const Page: NextPage<PostsProps> = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero newPost={posts[0]} />
      <Latest posts={posts} />
    </main>
  )
}

const query = gql`
  query {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      tag
      postTitle
      postDescription
      postBanner {
        url
      }
      postBannerAlt
      postContent {
        text
      }
      createdAt
    }
  }
`

export async function getStaticProps() {
  const data: PostsQuery = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query
  )

  const postsData = data.posts.map(post => ({
    ...post,
    readingTime: getReadingTime(post.postContent.text).text,
  }))

  return {
    props: {
      posts: postsData,
    },
  }
}

export default Page
