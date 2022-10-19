import { Flex, Pagination } from '@common'
import { Articles, Sidebar } from '.'
import * as S from './latest.styles'
import { LoupeSvg } from './svgs'

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
  perPage: number
  uniqueTags: string[]
  mostPopularTags: string[]
}

export function Latest({
  uniqueTags,
  mostPopularTags,
  posts,
  currentPage,
  totalItems,
  perPage,
}: PostsProps) {
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
        <Sidebar uniqueTags={uniqueTags} mostPopularTags={mostPopularTags} />
        <Flex direction="column" align="center" css={{ gap: 40, width: '100%' }}>
          <Articles posts={posts} />
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            itemsPerPage={perPage}
            renderPageLink={page => `/blog/${page}`}
          />
        </Flex>
      </Flex>
    </S.Section>
  )
}
