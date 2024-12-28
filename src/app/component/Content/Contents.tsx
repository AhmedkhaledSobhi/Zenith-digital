'use client'
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface ContentsProps {
  id: string;
}
export default function Contents({id}: ContentsProps ) {
// export default function Contents( ) {

  // const { id } = useParams()
  const [post, setPost] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
      if (!id) return
  
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
    <>
      {/* <h1>id : { id }</h1> */}
      <Box sx={{ width: '85%', mx: 'auto', px: 4, my: 3 }}>
        <Typography variant="body1">
          {/* Lorem ipsum dolor sit amet consectetu Diam bibendum ut diam tempus
          sociis lectus luctus in? Lorem ipsum dolor sit amet consectetur Diam
          bibendum ut diam tempus sociis lectus luctus in?Lorem ipsum dolor
          sit amet consectetu Diam bibendum ut diam tempus sociis lectus
          luctus in? Lorem ipsum dolor sit amet consectetur Diam bibendum ut
          diam tempus sociis lectus luctus in?Lorem ipsum dolor sit amet
          consectetu Diam bibendum ut diam tempus sociis lectus luctus in? rem
          ipsum dolor sit amet consectetur Diam bibendum ut diam tempus sociis
          lectus luctus in?Lorem ipsum dolor sit amet consectetu Diam bibendum
          ut diam tempus sociis lectus luctus in? Lorem ipsum dolor sit amet
          consectetur Dibibendum ut diam tempus sociis lectus luctus in?Lorem
          ipsum dolor sit amet consectetu Diam bibendum ut diam tempus sociis
          lectus luctus in? Lorem ipsum dolor sit amet consectetur Diam
          bibendum ut diam tempus sociis lectus luctus in?Lorem ipsum dolor
          sit amet coctetu Diam bibendum ut diam tempus sociis lectus luctus
          in? Lorem ipsum dolor sit amet consectetur Diam bibendum ut diam
          tempus sociis lectus luctus in?Lorem ipsum dolor sit amet consectetu
          Diam bibendum ut diam tempus sociis lectus luctus in? Lorem ipsum
          dolor sit amet consectetur Diam bibendum ut diam tempus sociis
          lectus luctus in?Lorem ipsum dolor sit amet consectetu Diam bibendum
          ut diam tempus sociis lectus luctus in? Lorem ipsum dolor sit amet
          consectetur Diam bibendum ut diam tempus sociis lectus luctus
          in?Lorem ipsum dolor sit amet consectetu Diam bibendum ut diam
          tempus sociis lectus luctus in? Lorem ipsum dolor sit amet
          consectetur Diam bibendum ut diam tempus sociis lectus luctus in? */}

          {post?.translations?.[0]?.content}
        </Typography>
      </Box>
    </>
  )
}
