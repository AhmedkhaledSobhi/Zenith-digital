import { Box, Typography } from '@mui/material'
import React from 'react'
import { createDirectus, graphql } from '@directus/sdk'

interface Translations {
  languages_code: { code: string }
  what_we_do_fields_content_title: string
  what_we_do_fields_content_text: string
}

interface StaticContentTexts {
  translations: Translations[]
}

interface Schema {
  static_content_texts: StaticContentTexts[]
}

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      static_content_texts{ 
        translations(filter: {languages_code: {code: {_eq: "ar"}}}){
          what_we_do_fields_content_title
          what_we_do_fields_content_text
        }
      }
    }
  `)
}

export default async function MakesDifferent() {
  let data = await HomeData();
  const staticContent = data?.static_content_texts?.translations?.[0] || {}


  return (
    <Box
      display="flex"
      bgcolor="#010715"
      justifyContent="center"
      alignItems="center"
      sx={{ height: { xs: 'auto', md: '80vh' }, textAlign: 'center' }}
    >
      <Box>
        <Typography
          variant="h6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            my: 4,
            color: '#fff',
            fontSize: '35px',
            fontWeight: 600,
            lineHeight: '56px',
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
              fill="#DAFF23"
            />
          </svg>
          <Box sx={{ margin: { xs: '0px 5px', md: '0px 10px' } }}>
            {staticContent.what_we_do_fields_content_title}
            {/* What Makes Us Different */}
          </Box>
          <svg
            width="48"
            height="48"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
              fill="#DAFF23"
            />
          </svg>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            width: { xs: '95%', md: '70%' },
            mx: 'auto',
            my: 4,
            color: 'rgba(179,185,198,1)',
            fontSize: { xs: '18px', md: '24px' },
            fontWeight: 400,
            lineHeight: '33.6px',
          }}
        >
          {staticContent.what_we_do_fields_content_text}
          At Zenith Digital Space, we bring together the best in technical
          expertise and a deep understanding of business needs. What sets us
          apart is our ability to not only deliver exceptional solutions, but
          also to tailor our expertise to your unique project requirements.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            width: { xs: '95%', md: '70%' },
            mx: 'auto',
            color: 'rgba(179,185,198,1)',
            fontSize: { xs: '18px', md: '24px' },
            fontWeight: 400,
            lineHeight: '33.6px',
          }}
        >
          We pride ourselves on being partners in your success. From
          conceptualization to execution, we are with you every step of the way.
          Whether it’s a complex AI project or a simple CRM integration, we use
          our skills to ensure you receive a customized, functional, and
          future-proof solution.
        </Typography>
      </Box>
    </Box>
  )
}
