// 'use client'
import { Box, Link } from '@mui/material'
import VisionSection from '../VisionSection/VisionSection'
import MissionStatement from '../MissionStatement/MissionStatement'
import Leadership from '../Leadership/Leadership'

import styles from '../Header/Header.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Innovation from '../Innovation/Innovation'

export default function About() {
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
            About Us
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
