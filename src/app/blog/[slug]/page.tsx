'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Typography, Box } from '@mui/material'

const BlogDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    const fetchPostDetail = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}`)
        const data = await response.json()
        setPost(data)
        console.log(data, 'sdsadsdasd')
      } catch (err) {
        setError('Failed to fetch post details: ')
      } finally {
        setLoading(false)
      }
    }

    fetchPostDetail()
  }, [slug])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography color="error">{error}</Typography>
  if (!post) return <Typography>No post found</Typography>

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">{post?.translations?.[0]?.title}</Typography>
      <Typography variant="body1">
        {post?.translations?.[0]?.content}
      </Typography>
    </Box>
  )
}

export default BlogDetail
