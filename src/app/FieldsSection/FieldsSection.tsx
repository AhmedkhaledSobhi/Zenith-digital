'use client'

import { Box, CardContent, Grid, Typography, Button } from '@mui/material'

export default function FieldsSection() {
  const services = [
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
    {
      icon: '/image2.png',
      title: 'Custom Development & Integration',
      description:
        'We provide custom software development and integrate with systems like CRM (Customer Relationship Management), CMMS (Computerized Maintenance Management Systems), and ERP (Enterprise Resource Planning).',
    },
  ]
  return (
    <Box display="flex" sx={{ my: 7}}>
      <Box sx={{ width: '85%', mx: 'auto', textAlign: 'center'}}>
        <Typography
          variant="h5"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
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
              fill="#0000FE"
            />
          </svg>
          <span style={{ marginLeft: '15px' }}>Fields we care about</span>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            my: 3,
            width:{xs:'95%', md:'70%'},
            mx: 'auto',
            fontSize: {xs:'17px',md:'24px'},
            fontWeight: 400,
            lineHeight: '33.6px',
          }}
        >
          Zenith Digital has extensive experience in delivering high quality
          solutions across a variety of industries thanks to our team of experts
          and specialists. We cover many areas, including, but not limited to:
        </Typography>
        <Grid
          container
          // spacing={2}
          sx={{width:{xs:'90%' },spacing:{xs:2, md:9},  mx:"auto", display:'flex', justifyContent:'center', my: 2 }}
        >
          {services.map((service, i) => (
            <Grid item md={4} key={i} sx={{my:{xs:5}}} >
              <Box
                sx={{
                  position: 'relative',
                  mx:{ md:'auto'},                  
                  textAlign: 'center',
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderImageSource:
                    'linear-gradient(180deg, #8411E6 0%, #0000FE 100%)',
                  borderImageSlice: 1,
                  color: '#fff',
                  py: 3,                
                  width: {xs:'300px',  md:'350px'},
                }}
              >
                <Box height="150px" sx={{width:{xs:'300px', md:"350px"}, mx:{xs:"auto"}}}>
                  <img
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: '99',
                      width:'80%',
                      margin: 'auto',
                    }}
                    src={service.icon}
                    alt=""
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: '18px', fontWeight: 600, color: '#000' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ px: 4 }}
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
                    }}
                  >
                    Explore More
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
