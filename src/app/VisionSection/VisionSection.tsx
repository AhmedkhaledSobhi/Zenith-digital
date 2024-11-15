import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import VisionCard from '../VisionCard/VisionCard'
// import VisionCard from './VisionCard';

const visions = [
  {
    title: 'Lead the Digital Revolution',
    description:
      'To be the foremost partner for businesses striving for success in the digital era by providing comprehensive and innovative digital marketing and programming solutions.',
  },
  {
    title: 'Empower with Excellence',
    description:
      'To equip our clients with advanced technologies and strategies that foster sustainable growth, boost market presence, and ensure a competitive advantage.',
  },
  {
    title: 'Foster a Thriving Digita Ecosystem',
    description:
      'To create a digital environment where businesses of all sizes can flourish through ongoing innovation, strategic collaboration, and a steadfast commitment to excellence.',
  },
]

export default function VisionSection() {
  return (
    <Box
      sx={{
        width: '100%',
        height: {md:'95vh'},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: {xs:4, md:6},
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
              fill="#8411E6"
            />
          </svg>
          <span style={{ margin: '0px 10px' }}>Our Vision</span>
        </Typography>

        <Grid container spacing={5}>
          {visions.map((vision, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <VisionCard
                title={vision.title}
                description={vision.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button
        sx={{
          backgroundColor: 'rgba(132, 17, 230, 1)',
          color: '#fff',
          padding: '15px 25px',
          fontWeight: 600,
          lineHeight: '22.4px',
          borderRadius: '0px',
          px: 5,
          my: 5,
        }}
      >
        About Zenith
      </Button>
    </Box>
  )
}
