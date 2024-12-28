import { NextResponse } from 'next/server'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://cms-zenith.treasuredeal.com/graphql',
  cache: new InMemoryCache(),
})

export async function POST(req: Request) {
  try {
    const { date } = await req.json()

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 })
    }

    const query = gql`
      query PostsFilter($date: String!) {
        posts(filter: { date_created: { _gte: $date } }) {
          id
          slug
          image {
            id
          }
          date_created
          categoryies: post_category {
            data: posts_categories_id {
              id
              translations {
                title
              }
            }
          }
        }
      }
    `

    const { data } = await client.query({
      query,
      variables: { date },
    })

    return NextResponse.json({ posts: data.posts })
  } catch (error) {
    console.error('Error in API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
