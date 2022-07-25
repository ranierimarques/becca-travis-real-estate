import { gql } from '@apollo/client'
import { Hero, Latest } from '@layout/blog'
import client from '@resources/services/apollo-client'
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
  const { data } = await client.query<PostsQuery>({ query })

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
