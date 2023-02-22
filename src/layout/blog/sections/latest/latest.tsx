import { ChangeEvent, useEffect, useRef, useState } from 'react'
import request, { gql } from 'graphql-request'
import getReadingTime from 'reading-time'
import { Flex, Pagination } from '@/common'
import useDebounce from '@/resources/hooks/useDebounce'
import { Articles, Sidebar } from '.'
import * as S from './latest.styles'
import * as Svg from './svgs'

function removeWhiteSpaces(string: string) {
  return string.replace(/\s+/g, '')
}

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
  query ($tag: String!) {
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

const query2 = gql`
  query ($search: String!) {
    posts(where: { _search: $search }) {
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
  const skipFetch = useRef(true)
  const [activeCategory, setActiveCategory] = useState(viewAll)
  const [filteredPosts, setFilteredPosts] = useState<PostsProps>([])
  const [searchValue, setSearchValue] = useState('')
  const [hasResults, setHasResults] = useState(true)
  const debouncedValue = useDebounce<string>(searchValue, 500)

  useEffect(() => {
    if (activeCategory === searchValue) return

    async function fetchData() {
      const data: PostsQuery = await request(baseURL, query, { tag: activeCategory })

      const postsData = data.posts.map(post => ({
        ...post,
        readingTime: getReadingTime(post.postContent.text).text,
      }))

      setFilteredPosts(postsData)
      setHasResults(true)
    }

    // Clean filteredPosts
    if (activeCategory === viewAll) {
      setFilteredPosts([])
      setHasResults(true)
    } else {
      fetchData()
    }
  }, [activeCategory, searchValue])

  useEffect(() => {
    if (skipFetch.current) return

    async function fetchData() {
      const data: PostsQuery = await request(baseURL, query2, { search: debouncedValue })

      const postsData = data.posts.map(post => ({
        ...post,
        readingTime: getReadingTime(post.postContent.text).text,
      }))

      if (skipFetch.current) return
      if (postsData.length === 0) setHasResults(false)

      setFilteredPosts(postsData)
    }

    fetchData()
  }, [debouncedValue])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value

    skipFetch.current = removeWhiteSpaces(searchValue) === removeWhiteSpaces(newValue)
    setSearchValue(newValue)
    setActiveCategory(newValue)

    if (newValue.trim().length === 0) {
      skipFetch.current = true
      setFilteredPosts([])
      setActiveCategory(viewAll)
      setHasResults(true)
    }
  }

  return (
    <S.Section>
      <Flex align="center" justify="between" css={{ mb: 64 }}>
        <S.Title>Latest articles</S.Title>
        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="What do you want to search?"
            value={searchValue}
            onChange={onChange}
          />
          <S.SearchButton aria-label="Search">
            <Svg.Loupe />
          </S.SearchButton>
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
          <Articles
            searchValue={searchValue}
            hasResults={hasResults}
            posts={filteredPosts.length > 0 ? filteredPosts : posts}
          />
          {activeCategory === viewAll && hasResults && (
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
