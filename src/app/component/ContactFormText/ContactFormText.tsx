import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { createDirectus, graphql } from '@directus/sdk'

interface Translations {
  languages_code: { code: string }
  contact_us_title: string
  contact_us_text: string
  contact_us_form_note: string
}

interface StaticContentTexts {
  translations: Translations[]
}

interface Schema {
  static_content_texts: StaticContentTexts[]
}

// const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
// const client = createDirectus<Schema>(BASE_URL).with(graphql())
const client = createDirectus<Schema>(
  'https://cms-zenith.treasuredeal.com'
).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      static_content_texts{ 
        translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
          contact_us_title
          contact_us_text
          contact_us_form_note
        }
      }
    }
  `)
}

export default function ContactFormText() {
  // let data = await HomeData();
  // const staticContent = data?.static_content_texts?.[0]?.translations?.[0] || {}


  return (
    <>
      <Box>
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '32px' } }}>
          Let’s Get In Touch
          {/* {staticContent.contact_us_title} */}
        </Typography>
        <Typography variant="h6" sx={{ my: { xs: 2 } }}>
          We’d love to hear from you!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: '95%', md: '88%' },
            mx: 'auto',
            px: { md: 4 },
          }}
        >
          Whether you have questions about our services, want to discuss a
          potential project, or need more information, our team at Zenith
          Digital Space is here to help.
          {/* {staticContent.contact_us_text} */}
        </Typography>
        <Typography sx={{ mb: 4 }}>
          <Link sx={{ textDecoration: 'none' }}>
            Please fill out the form below, and we’ll get back to you as soon as
            possible.
            {/* {staticContent.contact_us_form_note} */}
          </Link>
        </Typography>
      </Box>
    </>
  )
}