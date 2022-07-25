import { Flex } from '@common'
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
}

export function Latest({ posts }: PostsProps) {
  return (
    <S.Section>
      <Flex align="center" justify="between" css={{ mb: 64 }}>
        <S.Title>Latest articles</S.Title>
        <S.InputWrapper>
          <S.SearchInput type="text" placeholder="What do you want to search?" />
          <LoupeSvg />
        </S.InputWrapper>
      </Flex>

      <Flex css={{ gap: 64 }}>
        <Sidebar />
        <Articles posts={posts} />
      </Flex>
    </S.Section>
  )
}
