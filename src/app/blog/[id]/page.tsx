'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Typography, Box } from '@mui/material'

const BlogDetail = () => {
  const { id } = useParams() // Get the post ID from the URL params
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return // If no id, do nothing

    const fetchPostDetail = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError('Failed to fetch post details: ')
      } finally {
        setLoading(false)
      }
    }

    fetchPostDetail()
  }, [id])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography color="error">{error}</Typography>
  if (!post) return <Typography>No post found</Typography>

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">{post.translations?.[0]?.title}</Typography>
      <Typography variant="body1">{post.translations?.[0]?.content}</Typography>
    </Box>
  )
}

export default BlogDetail
