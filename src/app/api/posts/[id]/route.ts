import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://cms-zenith.treasuredeal.com/graphql',
  cache: new InMemoryCache(),
})

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()

    if (!id) {
      return new Response(JSON.stringify({ message: 'Post ID is required' }), {
        status: 400,
      })
    }

    const query = gql`
      query post($id: ID!) {
        posts_by_id(id: $id) {
          id
          slug
          translations {
            title
            content
          }
        }
      }
    `

    const { data } = await client.query({
      query,
      variables: { id },
    })

    if (!data.posts_by_id) {
      return new Response(JSON.stringify({ message: 'Post not found' }), {
        status: 404,
      })
    }

    return new Response(JSON.stringify(data.posts_by_id), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to fetch post details',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
