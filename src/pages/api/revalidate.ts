import { NextApiRequest, NextApiResponse } from 'next'
import request, { gql } from 'graphql-request'

const query2 = gql`
  query {
    posts() {
      id
    }
  }
`

interface TotalPostsQuery {
  posts: {
    id: string
  }[]
}

const baseURL = 'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_API_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (req.headers.type === 'post') {
    const totalPosts: TotalPostsQuery = await request(baseURL, query2)

    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      const paths = Array.from({ length: Math.ceil(totalPosts.posts.length / 6) }).map(
        (_, i) => `/blog/${i + 2}`
      )
      await Promise.all([
        ...paths.map(path => res.revalidate(path)),
        `/post/${req.body.data.slug}`,
      ])
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }

  if (req.headers.type === 'utils') {
    try {
      await res.revalidate(`/${req.body.data.slug}`)
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }

  return res.status(500).send('Error revalidating')
}
