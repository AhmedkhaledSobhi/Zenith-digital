import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://cms-zenith.treasuredeal.com/graphql', // Your GraphQL endpoint
  cache: new InMemoryCache(),
})

export async function GET(request: Request) {
  try {
    // Extract the post ID from the URL
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop() // Extract the ID from URL

    if (!id) {
      return new Response(JSON.stringify({ message: 'Post ID is required' }), {
        status: 400,
      })
    }

    // GraphQL query to fetch the post details
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

    // Fetch the post data from the GraphQL API
    const { data } = await client.query({
      query,
      variables: { id },
    })

    if (!data.posts_by_id) {
      return new Response(JSON.stringify({ message: 'Post not found' }), {
        status: 404,
      })
    }

    // Return the post details as a JSON response
    return new Response(JSON.stringify(data.posts_by_id), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    // Handle errors (e.g., network issues, GraphQL errors)
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
