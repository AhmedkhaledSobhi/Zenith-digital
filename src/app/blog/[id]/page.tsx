'use client'

// import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Typography, Box, Stack, Avatar, Button, IconButton, Link,  } from '@mui/material';
import WestIcon from '@mui/icons-material/West';

import { DateRangeIcon } from '@mui/x-date-pickers';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import RelatedTopics from '@/app/component/RelatedTopics/RelatedTopics';
import LeaveReply from '@/app/component/LeaveReply/LeaveReply';
import Contents from '@/app/component/Content/Contents';
import Footer from '@/app/component/Footer/Footer';
import Navbar from '@/app/component/Navbar/Navbar';

const BlogDetail = () => {
  const { id } = useParams()
  // const [post, setPost] = useState<any>(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<string | null>(null)

  // useEffect(() => {
  //   if (!id) return

  //   const fetchPostDetail = async () => {
  //     try {
  //       const response = await fetch(`/api/posts/${id}`)
  //       const data = await response.json()
  //       setPost(data)
  //     } catch (err) {
  //       setError('Failed to fetch post details: ')
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchPostDetail()
  // }, [id])

  // if (loading) return <Typography>Loading...</Typography>
  // if (error) return <Typography color="error">{error}</Typography>
  // if (!post) return <Typography>No post found</Typography>

  return (
    <>
      <Navbar />

      <Box sx={{ bgcolor: '#010715', color: 'white',pt:9 }}>
        <Box
          sx={{
            position: 'relative',
            height: '100vh',
            backgroundImage: 'url(/image12.png)',
            backgroundSize: 'cover',
          }}
        >
          <Box
            sx={{ position: 'absolute', bottom: 90, left: 90, color: 'white' }}
          >
            <Stack
              direction="row"
              sx={{ display: 'flex', alignItems: 'center', width: '75%' }}
            >
              <Link href={`/blog`} passHref>
                <Avatar sx={{ mr: 2 }}>
                  <WestIcon />
                </Avatar>
              </Link>
              <Typography variant="h4">
                Lorem ipsum dolor sit amet consectetur diam
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <DateRangeIcon />
                <Typography sx={{ ml: 1 }}>21-08-2024</Typography>

                <Box sx={{ my: 2 }}>
                  <Button
                    sx={{ bgcolor: '#fff', borderRadius: '25px', px: 3, mx: 2 }}
                  >
                    Investment
                  </Button>

                  <Button sx={{ bgcolor: '#fff', borderRadius: '25px', px: 3 }}>
                    Fundraising
                  </Button>
                </Box>
              </Box>

              <Stack
                direction="row"
                sx={{ alignItems: 'center' }}
                role="img"
                aria-label="like"
              >
                <IconButton size="small" color="inherit">
                  <ThumbUpIcon fontSize="small" />
                </IconButton>
                <Typography variant="body1" sx={{ pr: 2 }}>
                  like
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Contents id={id} />

        <LeaveReply />
        <RelatedTopics />
      </Box>

      {/* <Footer /> */}

      {/* ---------------------------------------------------------------------------------- */}
      {/* <Box sx={{ padding: 3 }}>
        <Typography variant="h4">{post?.translations?.[0]?.title}</Typography>
        <Typography variant="body1">
          {post?.translations?.[0]?.content}
        </Typography>
      </Box> */}
    </>
  )
}

export default BlogDetail
