import { NextResponse } from 'next/server'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://cms-zenith.treasuredeal.com/graphql',
  cache: new InMemoryCache(),
})

export async function POST(req: Request) {
  try {
    const { date } = await req.json() // Parse JSON request body

    if (!date) {
      return NextResponse.json(
        { error: 'Date is required' },
        { status: 400 } // Bad Request
      )
    }

    const query = gql`
      query PostsFilter($date: String!) {
        posts(filter: { date_created: { _gte: $date } }) {
          slug
          image {
            id
          }
          date_created
        }
      }
    `

    const { data } = await client.query({
      query,
      variables: { date },
    })

    return NextResponse.json({ posts: data.posts }) // Send posts as response
  } catch (error) {
    console.error('Error in API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 } // Internal Server Error
    )
  }
}
