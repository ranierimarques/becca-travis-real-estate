import { Flex, Pagination } from '@common'
import request, { gql } from 'graphql-request'
import { useEffect, useState } from 'react'
import getReadingTime from 'reading-time'
import { Articles, Sidebar } from '.'
import * as S from './latest.styles'
import { LoupeSvg } from './svgs'

const baseURL = 'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master'

type PostsProps = {
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

interface LatestProps {
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
  perPage: number
  uniqueTags: string[]
  mostPopularTags: string[]
}

const query = gql`
  query PostByPagination($tag: String!) {
    posts(where: { tag: $tag }) {
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

const viewAll = 'View all'

export function Latest({
  uniqueTags,
  mostPopularTags,
  posts,
  currentPage,
  totalItems,
  perPage,
}: LatestProps) {
  const [activeCategory, setActiveCategory] = useState(viewAll)
  const [filteredPosts, setFilteredPosts] = useState<PostsProps>([])

  useEffect(() => {
    async function fetchData() {
      const data: PostsQuery = await request(baseURL, query, { tag: activeCategory })

      const postsData = data.posts.map(post => ({
        ...post,
        readingTime: getReadingTime(post.postContent.text).text,
      }))

      setFilteredPosts(postsData)
    }

    // Clean filteredPosts
    if (activeCategory === viewAll) {
      setFilteredPosts([])
    } else {
      fetchData()
    }
  }, [activeCategory])

  return (
    <S.Section>
      <Flex align="center" justify="between" css={{ mb: 64 }}>
        <S.Title>Latest articles</S.Title>
        <S.InputWrapper>
          <S.SearchInput type="text" placeholder="What do you want to search?" />
          <LoupeSvg />
        </S.InputWrapper>
      </Flex>

      <Flex css={{ gap: 40 }}>
        <Sidebar
          uniqueTags={uniqueTags}
          mostPopularTags={mostPopularTags}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Flex direction="column" align="center" css={{ gap: 40, width: '100%' }}>
          <Articles posts={filteredPosts.length > 0 ? filteredPosts : posts} />
          {activeCategory === viewAll && (
            <Pagination
              totalItems={totalItems}
              currentPage={currentPage}
              itemsPerPage={perPage}
              renderPageLink={page => `/blog/${page}`}
            />
          )}
        </Flex>
      </Flex>
    </S.Section>
  )
}
