import { gql } from "@apollo/client"
import { Post } from "@layout/blog"
import client from "apolloClient"

export default function PostPage({ posts }: any) {
  return <Post posts={posts} />
}

export async function getStaticPaths() {
  const { data: posts } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  })

  const paths = posts.posts.map((post: { slug: string }) => ({
    params: { slug: [post.slug] },
  }))

  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug[0]
  console.log(slug)
  const { data: posts } = await client.query({
    query: gql`
      query PostsBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          id
          title
          postDescription
          postBanner {
            url
          }
          postContent {
            raw
          }
          datePublished
          slug
          tag
        }
      }
    `,
    variables: { slug },
  })
  console.log(posts.posts[0])

  return { props: { posts } }
}
