import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function HeroSection() {
  return (
    <Box sx={{ padding: { xs: '50px 20px', md: '50px 100px' } }}>
      <Grid
        container
        columnSpacing={12}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6} md={6} sx={{ px: 2 }}>
          <Typography
            display="flex"
            alignItems="center"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
                fill="#0000FE"
              />
            </svg>
            <Typography variant='h4' style={{ paddingLeft: '10px' }}>
              Why Choose Zenith
            </Typography>
          </Typography>
          <Typography sx={{ my: 3 }}>
            At Zenith Digital Space, we focus on business development and
            delivering cutting-edge technology solutions in digital marketing
            and programming, to build your project as you envision it and
            more. apart is our commitment to understand your needs and craft
            solutions that match your aspirations and work with you step by step
            to ensure the success of your project.
          </Typography>
          <Typography variant="h5" component="h5">
            Let’s be your partner in success, find out how we can help you
            today.
          </Typography>
          <Button
            endIcon={<ArrowRightAltIcon />}
            variant="text"
            sx={{ py: 2 }}
            href="#contact"
          >
            Contact Us Now
          </Button>
        </Grid>

        <Grid item sm={6} md={5}>
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="grey.300"
            sx={{ height: { xs: 300, md: 500 }, width: { xs: 300, md:500 } }}
          >
            <Button color="secondary" style={{ fontSize: '2rem' }}>
              ▶
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
