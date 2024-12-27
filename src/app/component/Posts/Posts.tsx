import React from 'react';
import { createDirectus, graphql } from '@directus/sdk';
import Grid from '@mui/material/Grid2';
import { Box, Button, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface Translations {
  languages_code: { code: string }
  title: string
  content: string
  excerpt: string
}

interface Posts {
  translations: Translations[]
}

interface Schema {
  posts: Posts[]
}

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      posts{ 
        translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
          title
          content
          excerpt
        }
      }
    }
  `)
}

export default async function Posts() {
  let data = await HomeData();  
  // const staticContent = data?.posts?.translations?.[0] || {}

  const posts = data?.posts.map((item) => ({
    // icon: `${BASE_URL}/assets/${item.icon?.id}`,
    title: item.translations[0]?.title,
    description: item.translations[0]?.content,
    excerpt: item.translations[0]?.excerpt
  }))


  function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ')
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + ' . . . '
      : text
  }
  return (
    <Box
      sx={{
        color: '#fff',
        backgroundColor: '#010715',
      }}
    >
      <Grid
        container
        m="auto"
        width="83%"
        sx={{ spacing: { md: 4 }, pl: { xs: 0 } }}
      >
        {posts.map((item, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ borderRadius: 10 }}
          >
            <Box
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                borderRadius: 2,
                width: '350px',
              }}
              mx="auto"
            >
              <CardMedia
                component="img"
                height="140"
                image="/image2.png"
                alt="Article Image"
              />

              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="caption" color="white">
                  20-12-2023
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'start',
                  }}
                >
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {truncateText(
                      item.excerpt,
                      22
                    )}
                  </Typography>

                  <Button>
                    <IconButton
                      sx={{
                        color: '#fff',
                        backgroundColor: '#8411E6',
                        borderRadius: '50%',
                        width: '25px',
                        height: '25px',
                        ml: 1,
                        '&:hover': {
                          backgroundColor: '#0000C7',
                        },
                      }}
                    >
                      <ArrowForwardIcon fontSize="small" />
                    </IconButton>
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
