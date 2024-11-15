import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Leadership() {
  return (
    <Box display="flex" sx={{ p: {xs:2, md:9} }}>
      <Box sx={{ width: '80%', mx:{xs:"auto"} }}>
        <Typography
          variant="h5"
          sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}
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
          <span style={{ marginLeft: '15px' }}>LEADERSHIP TEAM</span>
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
          {[
            {
              name: 'NOURA ALI',
              title: 'CEO',
              image: '/image10.png',
              color: '#DAFF23',
            },
            {
              name: 'NOURA ALI',
              title: 'CEO',
              image: '/image11.png',
              color: '#8411E6',
            },
            {
              name: 'RAMI HASSAN',
              title: 'Managing Partner',
              image: '/image12.png',
              color: '#0000FE',
            },

            {
              name: 'RAMI HASSAN',
              title: 'Managing Partner',
              image: '/image12.png',
              color: '#0000FE',
            },
            {
              name: 'NOURA ALI',
              title: 'CEO',
              image: '/image11.png',
              color: '#8411E6',
            },
            {
              name: 'NOURA ALI',
              title: 'CEO',
              image: '/image10.png',
              color: '#DAFF23',
            },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ color: 'red' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={member.name}
                    // height="350"
                    sx={{ width: '250px' }}
                  />
                  <Box
                    sx={{
                      width: '250px',
                      height: '250px',
                      bgcolor: member.color,
                      position: 'absolute',
                      left: '-15px',
                      bottom: '-15px',
                      zIndex: '-1',
                    }}
                  ></Box>
                </Box>

                <Box sx={{ mt: 5 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: '#000' }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {member.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
