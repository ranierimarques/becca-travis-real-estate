import { gql } from "@apollo/client"
import client from "apolloClient"
import type { NextPage } from "next"
import Head from "next/head"

import { Hero, Latest } from "@layout/blog"

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

export async function getStaticProps() {
  const { data: posts } = await client.query({
    query: gql`
      query {
        posts {
          id
          title
          postDescription
          postBanner {
            url
          }
          postContent {
            html
          }
          datePublished
          slug
        }
      }
    `,
  })
<<<<<<< HEAD
=======

>>>>>>> 5a59be0ef963efc5446ba0a5def5084ccc2cd41d
  return {
    props: {
      posts,
    },
  }
}
