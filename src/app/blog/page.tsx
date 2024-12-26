'use client'
import Navbar from '../component/Navbar/Navbar'
import styles from '../Header/Header.module.css'
import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Box,
  Link,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Footer from '../component/Footer/Footer'

export default function Blog() {
  const [filterDate, setFilterDate] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [page, setPage] = useState(1)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  // Common styles for filter Select components
  const filterSelectSx = {
    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
    color: '#FFF',
  }

  function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ')
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + ' . . . '
      : text
  }

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          height: { xs: '30vh', md: '100vh' },
          alignItems: { xs: 'end', md: 'center' },
          textAlign: 'center',
        }}
        className={styles.headerPage}
      >
        <Box>
          <Link
            href="/about"
            sx={{
              color: '#fff',
              fontSize: { xs: '35px', md: '50px' },
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
                backgroundColor: '#DAFF23',
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
            Articles & News
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          color: '#fff',
          backgroundColor: '#010715',
          px: { xs: 1, sm: 6 },
          py: 9,
        }}
      >
        {/* Filter Section */}
        <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel sx={{ color: '#FFF' }}>Filter by Date</InputLabel>
            <Select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value as string)}
              sx={filterSelectSx}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel sx={{ color: '#FFF' }}>Filter by Category</InputLabel>
            <Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as string)}
              sx={filterSelectSx}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel sx={{ color: '#FFF' }}>Filter by Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as string)}
              sx={filterSelectSx}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="published">Published</MenuItem>
              <MenuItem value="draft">Draft</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Card Grid Section */}
        <Grid
          container
          m="auto"
          width="99%"
          sx={{ spacing: { md: 6 }, pl: { xs: 0 } }}
        >
          {[...Array(9)].map((_, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ borderRadius: 10 }}
            >
              <Box
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  borderRadius: 2,
                  width: '270px',
                }}
                mx="auto"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="/image2.png"
                  alt="Article Image"
                />

                <CardContent sx={{ px: 0 }}>
                  <Typography variant="h6">Article Title</Typography>
                  <Typography variant="caption" color="white">
                    20-12-2023
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'end',
                      justifyContent: 'start',
                    }}
                  >
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {truncateText(
                        'Lorem ipsum dolor sit amet consectetur Diam bibendum ut diam tempus sociis lectus ltus in? Lorem ipsum dolor sit amet consectetur Diam',
                        22
                      )}
                    </Typography>

                    <IconButton
                      sx={{
                        color: '#fff',
                        backgroundColor: '#8411E6',
                        borderRadius: '50%',
                        width: '25px',
                        height: '25px',
                        ml: 1,
                        '&:hover': {
                          backgroundColor: '#0000C7',
                        },
                      }}
                    >
                      <ArrowForwardIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={5}
            page={page}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#FFF',
              },
              '& .Mui-selected': {
                color: '#DAFF23',
                backgroundColor: '#0000FE',
              },
            }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  )
}
