import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import styles from '../Header/Header.module.css'
export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        pt: {xs:5},
        height: '100vh',
        textAlign: 'center',
        alignItems: { sx: 'end', md: 'center' },
      }}
      className={styles.headerPage}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            mt: { xs: 9 },
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: { xs: '2.0rem', md: '4rem' },
            background:
              'linear-gradient(to right, #FDFDFD, #FDFDFD, #0000FE, #0000FE )',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Zenith digital space
        </Typography>

        <Typography
          variant="h6"
          sx={{
            my: 3,
            color: '#fff',
            fontSize: { xs: '25px', md: '35px' },
            fontWeight: 600,
            lineHeight: '56px',
          }}
        >
          We Make Brands Shine
        </Typography>

        <Typography
          variant="body2"
          sx={{
            width: { sx: '80%', md: '70%' },
            mx: 'auto',
            color: 'rgba(179,185,198,1)',
            fontSize: { sx: '20px', md: '24px' },
            fontWeight: 400,
            lineHeight: '33.6px',
          }}
        >
          Zenith Digital Space is your key to thriving in today’s business
          world. With essential digital strategies, continuous support, and
          innovative solutions, Zenith Digital Space enhances your online
          presence, targets your ideal audience, and unlocks new growth
          opportunities, giving you a distinct competitive advantage.
        </Typography>

        <Button
          sx={{
            backgroundColor: 'rgba(132, 17, 230, 1)',
            color: '#fff',
            padding: { sx:'15px 25px', md: '15px 25px' },
            fontWeight: { sx: '600', md: '600' },
            lineHeight: '22.4px',
            my: 5,
          }}
        >
          Get Started Now!
        </Button>
      </Box>
    </Box>
  )
}
