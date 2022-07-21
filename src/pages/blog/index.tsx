import { gql } from '@apollo/client'
import { Hero, Latest } from '@layout/blog'
import client from '@resources/services/apollo-client'
import type { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = ({ posts }: any) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero graphcms={posts} />
      <Latest />
    </main>
  )
}

export default Blog

const query = gql`
  query {
    posts {
      postTitle
      postDescription
      postBanner {
        url
      }
      createdAt
      slug
    }
  }
`

export async function getStaticProps() {
  const { data: posts } = await client.query({ query })

  return {
    props: {
      posts,
    },
  }
}
