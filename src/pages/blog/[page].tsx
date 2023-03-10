import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next'
import request, { gql } from 'graphql-request'
import getReadingTime from 'reading-time'
import { MetaSEO } from '@/common'
import { Hero, Latest } from '@/layout/blog/sections'

const baseURL = 'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master'

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
  uniqueTags: string[]
  mostPopularTags: string[]
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

interface AllPostsTagsQuery {
  posts: {
    tag: string
  }[]
}

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: 'https://beccatravis.com/sharing-cards/og-image.jpg',
  alt: `Feel at home before finding the perfect property.`,
  url: 'https://beccatravis.com/',
}

const Page: NextPage<PostsProps> = ({
  uniqueTags,
  mostPopularTags,
  posts,
  newPost,
  currentPage,
  totalItems,
}) => {
  return (
    <main>
      <MetaSEO
        title={meta.title}
        description={meta.description}
        image={meta.image}
        alt={meta.alt}
        url={meta.url}
      />

      <Hero newPost={newPost} />
      <Latest
        uniqueTags={uniqueTags}
        mostPopularTags={mostPopularTags}
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

const query4 = gql`
  query {
    posts {
      tag
    }
  }
`

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const page = Number(params?.page) || 1
  const data: PostsQuery = await request(baseURL, query, { skip: (page - 1) * 6 })
  const totalPosts: TotalPostsQuery = await request(baseURL, query2)
  const newPost: PostsQuery = await request(baseURL, query3)
  const allPostsTags: AllPostsTagsQuery = await request(baseURL, query4)

  const onlyPostsTags = allPostsTags.posts.map(post => post.tag)

  const uniqueTags = [...new Set(onlyPostsTags)]
  const countedTags = onlyPostsTags.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] ?? 0) + 1 }
  }, {} as Record<string, number>)

  const mostPopularTags = Object.keys(countedTags).sort(
    (a, b) => countedTags[b] - countedTags[a]
  )

  const postsData = data.posts.map(post => ({
    ...post,
    readingTime: getReadingTime(post.postContent.text).text,
  }))

  const newPostData = newPost.posts.map(post => ({
    ...post,
    readingTime: getReadingTime(post.postContent.text).text,
  }))

  if (postsData.length === 0) {
    return {
      redirect: {
        destination: '/blog/1',
        permanent: false,
      },
    }
  }

  return {
    props: {
      uniqueTags,
      mostPopularTags,
      newPost: newPostData[0],
      posts: postsData,
      totalItems: totalPosts.posts.length,
      currentPage: page,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPosts: TotalPostsQuery = await request(baseURL, query2)

  return {
    paths: Array.from({ length: Math.ceil(totalPosts.posts.length / 6) }).map(
      (_, i) => `/blog/${i + 1}`
    ),
    fallback: 'blocking',
  }
}

export default Page
