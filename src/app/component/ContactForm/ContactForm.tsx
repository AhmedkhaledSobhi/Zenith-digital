'use client'
// import { GetServerSideProps } from 'next'
import { Box, Button, TextField, Typography } from '@mui/material'
// import { createDirectus, graphql } from '@directus/sdk'
import { useState } from 'react';
import Grid from '@mui/material/Grid2';

// interface Post {
//   contact_us_text: string
//   contact_us_title: string
//   contact_us_form_note: string
// }

// interface ContactPageProps {
//   contactUsText: string
//   contactUsTitle: string
//   contactUsFormNote: string
//   response: string
// }

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = {
      email,
      message,
      first_name: firstName,
      last_name: lastName,
    }

    try {
      const res = await fetch('/api/sendContactMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setError('')
      } else {
        setError(data.errorMessage)
        setSuccess(false)
      }
    } catch (error) {
      setError('An error occurred while sending the message')
      setSuccess(false)
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6}}>
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <TextField
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: '#DAFF23', color: 'black', px: 4 }}
        >
          Submit
        </Button>
      </form>

      {success && (
        <Typography sx={{ mt: 2, color: 'green' }}>
          Message sent successfully!
        </Typography>
      )}
      {error && (
        <Typography sx={{ mt: 2, color: 'red' }}>Error: {error}</Typography>
      )}
    </Box>
  )
}
