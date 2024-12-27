import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import MissionCard from '../../MissionCardProps/MissionCardProps'

import { createDirectus, graphql } from '@directus/sdk'

interface Translations {
  languages_code: { code: string }
  title: string
  text: string
}

interface Mission {
  translations: Translations[]
}

interface Schema {
  mission: Mission[]
}
const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      mission {
        translations(filter: {languages_code: {code: {_eq: "en"}}}) {
          title
          text
        }
      }
    }
  `)
}

async function HomeDatas() {
  return await client.query(`
    query{
      static_content_texts {
        translations(filter: {languages_code: {code: {_eq: "en"}}}) {
          contact_us_text
          contact_us_title
          contact_us_form_note
        }
      }
    }
  `)
}

export default async function MissionStatement() {
  // console.log("ahmed", JSON.stringify(await HomeData(), null,2) );
  let data = await HomeData()
  let datas = await HomeDatas()
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#010715',
        textAlign: 'center',
        maxHeight: { md: '75vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ width: '95%', mx: 'auto', px: { xs: 0 } }}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              fontSize: { xs: '25px' },
              fontWeight: 'bold',
              mx: 'auto',
              color: '#fff',
            }}
          >
            {datas.static_content_texts?.translations[0].contact_us_text}
            OUR MISSION STATEMENT
          </Typography>
          <Grid
            container
            justifyContent="center"
            sx={{ display: 'flex', mt: 4 }}
          >
            {data.mission.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ px: { md: 5 } }}
                key={index}
              >
                <MissionCard
                  title={item.translations[0]?.title}
                  description={item.translations[0]?.text}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
