import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Innovation() {
  return (
    <Box bgcolor="#010715" sx={{ p: { xs:3, md: 9 }, px: {md:10 }}}>
      <Box sx={{ width: {xs:'100%', md:'57%'} }}>
        <Box display="flex" alignItems="start">
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 4,
              fontSize: {xs:'25px', md:'33px'},
              fontWaight: 800,
            }}
          >
            <span style={{ marginRight: '10px', color: '#fff' }}>
              WHERE INNOVATION MEETS STRATEGY
            </span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
                fill="#8411E6"
              />
            </svg>
          </Typography>
          <svg
            width="20"
            height="20"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
              fill="#8411E6"
            />
          </svg>
        </Box>

        <Typography sx={{ color: '#fff' }}>
          welcome to Zenith Digital Space, where innovation and strategy
          converge. In today's rapidly evolving business landscape, having a
          strong digital presence is no longer a luxury—it's a necessity. We go
          beyond just building websites; our mission is to deliver a
          comprehensive digital experience that drives your growth and
          solidifies your market leadership.
        </Typography>

        <Box sx={{ py: 5 }}>
          <Typography variant="h4" sx={{ color: '#C078FE' }}>
            Innovating for Your Success
          </Typography>
          <Typography sx={{ color: '#fff' }}>
            At Zenith Digital Space, we believe in creating innovative solutions
            that not only support your current business but also open up new
            revenue streams. Our approach ensures that your core business
            remains profitable, while we work to enhance your revenue without
            adding extra costs to your assets. This means you can continue to
            grow and dominate your market, with the assurance that your primary
            capital is safeguarded.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{py:{ xs:2, md:5} , color: '#C078FE' }}>
            Stay Ahead with Continuous Support and Cutting-Edge Technology
          </Typography>
          <Typography sx={{ color: '#fff' }}>
            Our team of experts is committed to keeping you at the forefront of
            the digital world. We provide ongoing technical support, ensuring
            your website is always up-to-date and integrated with the latest
            technologies, including artificial intelligence. But we don’t stop
            there—our services also include optimizing your search engine
            presence and crafting targeted social media strategies, giving you a
            distinct competitive advantage.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
