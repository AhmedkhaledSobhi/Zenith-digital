// 'use client'
import { Box, Link } from '@mui/material'
import VisionSection from '../component/VisionSection/VisionSection'
import MissionStatement from '../component/MissionStatement/MissionStatement'
import Leadership from '../component/Leadership/Leadership'

import styles from '../Header/Header.module.css'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Innovation from '../Innovation/Innovation'

import { createDirectus, graphql } from '@directus/sdk'

interface Translations {
  languages_code: { code: string }
  title: string
}

interface Pages {
  translations: Translations[]
}

interface Schema {
  pages: Pages[]
}
const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      pages{
        translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
          title
        }
      }
    }
  `)
}

export default async function About() {
  let data = await HomeData()
  // console.log(
  //   'ahmed data data',
  //   JSON.stringify(data?.pages[2]?.translations?.[0]?.title)
  // )

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh', textAlign: 'center' }}
        className={styles.headerPage}
      >
        <Box>
          <Link
            href="/about"
            sx={{
              color: '#fff',
              fontSize: '50px',
              fontWeight: 600,
              lineHeight: '56px',
              position: 'relative',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background:
                'linear-gradient(to right, #FDFDFD, #FDFDFD, #0000FE, #0000FE )',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-5px',
                width: '100%',
                height: '2px',
                backgroundColor: '#8411E6',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            {data?.pages[2]?.translations?.[0]?.title}
            {/* About Us */}
          </Link>
        </Box>
      </Box>
      <VisionSection />
      <MissionStatement />
      <Box
        display="flex"
        justifyContent="center"
        sx={{ height: '60vh', pt: 9, textAlign: 'center' }}
      >
        <Box>
          <Link
            href="/about"
            sx={{
              color: '#000000',
              fontSize: '45px',
              fontWeight: 600,
              lineHeight: '56px',
              position: 'relative',
              textDecoration: 'none',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-5px',
                width: '100%',
                height: '2px',
                backgroundColor: '#8411E6',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            Our value
          </Link>
        </Box>
      </Box>
      <Innovation />
      <Leadership />
      <Footer />
    </>
  )
}
