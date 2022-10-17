import { Hero, Latest } from '@layout/blog/sections'
import request, { gql } from 'graphql-request'
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next'
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
  currentPage: number
  totalItems: number
  newPost: {
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
  }
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

interface TotalPostsQuery {
  posts: {
    id: string
  }[]
}

const Page: NextPage<PostsProps> = ({ posts, newPost, currentPage, totalItems }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero newPost={newPost} />
      <Latest
        posts={posts}
        currentPage={currentPage}
        totalItems={totalItems}
        perPage={6}
      />
    </main>
  )
}

const query = gql`
  query PostByPagination($skip: Int!) {
    posts(first: 6, skip: $skip, orderBy: createdAt_DESC) {
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

const query2 = gql`
  query {
    posts() {
      id
    }
  }
`

const query3 = gql`
  query {
    posts(first: 1, orderBy: createdAt_DESC) {
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

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const page = Number(params?.page) || 1
  const data: PostsQuery = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query,
    {
      skip: (page - 1) * 6,
    }
  )
  const totalPosts: TotalPostsQuery = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query2
  )
  const newPost: PostsQuery = await request(
    'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
    query3
  )

  const postsData = data.posts.map(post => ({
    ...post,
    readingTime: getReadingTime(post.postContent.text).text,
  }))

  const newPostData = newPost.posts.map(post => ({
    ...post,
    readingTime: getReadingTime(post.postContent.text).text,
  }))

  if (page === 1 || postsData.length === 0) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  return {
    props: {
      newPost: newPostData[0],
      posts: postsData,
      totalItems: totalPosts.posts.length,
      currentPage: page,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    // paths: Array.from({ length: 5 }).map((_, i) => `/blog/${i + 2}`),
    paths: [],
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}

export default Page
