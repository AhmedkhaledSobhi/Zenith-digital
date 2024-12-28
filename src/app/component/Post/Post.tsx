'use client'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'

import dayjs, { Dayjs } from 'dayjs'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string

export default function Posts() {
  const [filterDate, setFilterDate] = useState<Dayjs | null>(null)
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDateChange = async (newValue: Dayjs | null) => {
    setFilterDate(newValue)

    if (newValue) {
      const formattedDate = dayjs(newValue.toISOString()).format('YYYY-MM-DD')
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/getPosts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date: formattedDate }),
        })

        const data = await res.json()

        if (res.ok) {
          setPosts(data.posts)
          console.log('ahmedss data', data)
        } else {
          setError(data.message || 'Error fetching posts')
        }
      } catch (err) {
      } finally {
        setLoading(false)
      }
    }
  }

  function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ')
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + ' . . . '
      : text
  }

  return (
    <Box
      sx={{
        color: '#fff',
        px: { xs: 1, sm: 6 },
        py: 9,
        backgroundColor: '#010715',
      }}
    >
      {/* Filter Section */}
      <Box
        sx={{
          display: 'flex',
          width: '80%',
          mx: 'auto',
          gap: { xs: 1, md: 1 },
          mb: 4,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select a date"
            value={filterDate}
            onChange={handleDateChange}
            sx={{
              width: '30%',
              '.MuiInputBase-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'gray', 
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'gray',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'gray',
                },
                '& .MuiInputBase-input': {
                  color: 'gray', 
                },
              },
              '& .MuiInputLabel-root': {
                color: 'gray', 
              },
              '& .Mui-focused .MuiInputLabel-root': {
                color: 'gray', 
              },
              '& .MuiSvgIcon-root': {
                color: 'gray', 
              },
              '&:hover .MuiSvgIcon-root': {
                color: 'blue',
              },
            }}
          />
        </LocalizationProvider>
      </Box>

      {/* Card Grid Section */}
      <Grid
        container
        m="auto"
        width="83%"
        sx={{ spacing: { md: 4 }, pl: { xs: 0 } }}
      >
        {loading && <Typography variant="h6">Loading...</Typography>}
        {error && (
          <Typography variant="h6" color="error">
            Error: {error}
          </Typography>
        )}
        {posts.map((item, index) => (
          <>
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
                  width: '350px',
                }}
                mx="auto"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://cms-zenith.treasuredeal.com/assets/${item.image?.id}`}
                  alt="Article Image"
                />
                <CardContent sx={{ px: 0 }}>
                  <Typography variant="h6">{item.slug}</Typography>
                  <Typography variant="caption" color="white">
                    {formatDate(item.date_created)}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'end',
                      justifyContent: 'start',
                    }}
                  >
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {/* {truncateText(item.excerpt, 22)} */}
                      {item.excerpt}

                      {truncateText(
                        'Lorem ipsum dolor sit amet consectetu Diam bibendum ut diam tempus sociis lectus ltus in? Lorem ipsum dolor sit amet consectetur Diam',
                        22
                      )}
                    </Typography>

                    <Link href={`/blog/${item.id}`} passHref>
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
                    </Link>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  )
}
function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}