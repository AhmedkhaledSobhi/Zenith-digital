import { NextResponse } from 'next/server'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://cms-zenith.treasuredeal.com/graphql',
  cache: new InMemoryCache(),
})

export async function POST(req: Request) {
  try {
    const { date, categoryId } = await req.json()

    const querys = gql`
      query PostsFilter($gte: String, $lte: String, $id: String) {
        posts_aggregated(
          filter: {
            date_created: { _gte: $gte, _lte: $lte }
            post_category: { posts_categories_id: { id: { _eq: $id } } }
          }
        ) {
          count {
            id
          }
        }

        posts(
          page: 1
          limit: 1
          filter: {
            date_created: { _gte: $gte, _lte: $lte }
            post_category: { posts_categories_id: { id: { _eq: $id } } }
          }
        ) {
          id
          slug
          translations(filter: { languages_code: { code: { _eq: "ar" } } }) {
            title
            content
            excerpt
          }
          image {
            id
          }
          date_created
          categoryies: post_category {
            data: posts_categories_id {
              id
              translations(
                filter: { languages_code: { code: { _eq: "ar" } } }
              ) {
                title
              }
            }
          }
        }
      }
    `

    const filterQuery = gql`
      query PostsFilter {
        posts(page: 1) {
          id
          slug
          translations {
            title
            content
            excerpt
          }
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

    let query = filterQuery
    let variables = {}

    if (date && categoryId) {
      query = querys
      variables = {
        gte: `${date}T00:00:00Z`,
        lte: `${date}T23:59:59Z`,
        id: categoryId,
      }
    } else if (date) {
      query = querys
      variables = {
        gte: `${date}T00:00:00Z`,
        lte: `${date}T23:59:59Z`,
        id: null,
      }
    } else if (categoryId) {
      query = querys
      variables = {
        gte: null,
        lte: null,
        id: categoryId,
      }
    }

    const { data } = await client.query({
      query,
      variables,
    })

    return NextResponse.json({
      posts: data.posts,
      aggregatedCount: data.posts_aggregated?.[0]?.count?.id || 0,
    })
  } catch (error) {
    console.error('Error in API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
