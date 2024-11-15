import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Twitter,
} from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: '',
        bottom: '0',
        left: 0,
        right: 0,
        backgroundColor: '#0c00ff',
        color: '#fff',
        px: 0,
      }}
    >
      <Box sx={{ maxWidth: '100%', px: 0 }}>
        <Box sx={{ py: 3 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Box fontWeight="bold" sx={{ mb: 1 }}>
              <img
                src="/ZENITHLEMONBLUE.png"
                alt="Zenith Digital Space Logo"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Typography variant="h5" sx={{fontSize:{xs:'17px'}}} textAlign="center">
              Providing Creative Ideas For Your Business
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
            <IconButton aria-label="Twitter" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton aria-label="Facebook" color="inherit">
              <Facebook />
            </IconButton>
          </Stack>

          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <Phone />
              <Typography>+13-000-0000</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} my={2}>
              <Mail />
              <Typography>support@zenithdigitalspace.com</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderTop="1px solid #fff"
          py={3}
          flexDirection={{ xs: 'column', md: 'row' }} 
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography variant="body2" sx={{ px: 3, mb: { xs: 2, md: 0 } }}>
            Copyright &copy; 2024 Zenith Digital Space
          </Typography>

          <Typography
            sx={{
              borderLeft: {md:'0.1px solid rgba(255, 255, 255, 1)'},
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Terms & Conditions
            </Link>
          </Typography>

          <Typography
            sx={{
              borderLeft: {md:'0.1px solid rgba(255, 255, 255, 1)'},
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Privacy Policies
            </Link>
          </Typography>

          <Typography
            sx={{
              borderLeft: {md:'0.1px solid rgba(255, 255, 255, 1)'},
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Cookies Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
