
'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material'

type Service = {
  icon: string
  title: string
  description: string
}

// Define the props for the Sliders component using `type`
type SlidersProps = {
  services: Service[]
}

const Sliders: React.FC<SlidersProps> = ({ services }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 slides on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and up (default: 3 slides)
        settings: {
          slidesToShow: 2, // 2 slides on tablets
        },
      },
      {
        breakpoint: 600, // Small screens (mobile)
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          arrows: false, // Hide arrows on small screens
          dots: true, // Show dots for navigation on mobile
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        width: {xs:'90%', md:'75%'},
        margin: 'auto',
        overflow: 'hidden',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Slider {...settings}>
        {services.map((service, i) => (
          <Grid item xs={11} md={11} key={i}>
            <Card
              sx={{
                bgcolor: 'transparent',
                border: '1px solid',
                borderImageSource:
                  'linear-gradient(180deg, #8411E6 0%, #0000FE 100%)',
                borderImageSlice: 1,
                color: '#fff',
                py: {xs:0, md:3},
                boxSizing: 'border-box',
              }}
            >
              <Box>
                <img
                  style={{
                    width: '25%',
                    margin: '8px auto',
                  }}
                  src={service.icon}
                  alt=""
                />
              </Box>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontSize: '16px' }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ px: 2 }}
                  color="gray"
                  gutterBottom
                >
                  {service.description}
                </Typography>
                <Button
                  sx={{
                    bgcolor: '#0000EF',
                    color: '#fff',
                    px: 3,
                    py: 1,
                    my: 3,
                    textTransform: 'none',
                  }}
                >
                  Explore More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Slider>
    </Box>
  )
}

export default Sliders
