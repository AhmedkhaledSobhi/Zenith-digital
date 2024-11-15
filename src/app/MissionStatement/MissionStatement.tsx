import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import MissionCard from '../MissionCardProps/MissionCardProps';

const missions = [
  {
    title: 'Deliver Comprehensive Services',
    description:
      'Provide digital marketing and programming solutions that ensure businesses maintain a robust online presence, adapt to technological changes, and meet evolving customer demands.',
  },
  {
    title: 'Foster Continuous Innovation',
    description:
      'Offer customized solutions that enhance core business operations and create new revenue streams without incurring additional costs.',
  },
  {
    title: 'Build Sustainable Partnerships',
    description:
      'Develop long-term relationships by delivering exceptional value, technical support, and strategic guidance to ensure clients’ market dominance and financial success.',
  },
]

export default function MissionStatement() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#010715',
        textAlign: 'center',
        height: {md:'75vh'},
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ mx: 'auto', px:{xs:0 }  }}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontSize:{xs:'25px'}, fontWeight: 'bold', mx: 'auto', color: '#fff' }}
          >
            OUR MISSION STATEMENT
          </Typography>
          <Grid
            container
            justifyContent="center"
            sx={{ display: 'flex', mt: 4 }}
          >
            {missions.map((mission, index) => (
              <Grid item xs={12} sm={6} md={4} sx={{ px:{ md:5} }} key={index}>
                <MissionCard
                  title={mission.title}
                  description={mission.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
