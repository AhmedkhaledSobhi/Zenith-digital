'use client'

import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Link } from '@mui/material'

export default function ContactForm() {
  // State for the form fields and submission status
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errors, setErrors] = useState({})

  // Handle input changes and clear specific errors on valid input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for the specific field as the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
    }
  }

  // Validate the form data
  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {}
    if (!formData.firstName)
      validationErrors.firstName = 'First Name is required'
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required'
    if (!formData.email) {
      validationErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid'
    }
    if (!formData.message) validationErrors.message = 'Message is required'
    return validationErrors
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Simulate successful submission
    console.log(formData)
    setSuccessMessage(
      'Thank you for your message! We will get back to you soon.',
    )
    setFormData({ firstName: '', lastName: '', email: '', message: '' }) // Reset form fields
    setErrors({}) // Clear any existing errors
  }

  return (
    <Box sx={{ width: {md:'60%'}, mx: 'auto' }} padding={4} textAlign="center">
      <Typography variant="h3" gutterBottom sx={{fontSize:{xs:'32px'}}}>
        Let’s Get In Touch
      </Typography>
      <Typography variant="h6" sx={{my:{xs:2}}}>We’d love to hear from you!</Typography>
      <Typography variant="body1" sx={{ width:{xs:'95%', md:'88%'}, mx: 'auto', px: {md:4} }}>
        Whether you have questions about our services, want to discuss a
        potential project, or need more information, our team at Zenith Digital
        Space is here to help.
      </Typography>
      <Typography sx={{ mb: 4 }}>
        <Link sx={{ textDecoration: 'none' }}>
          Please fill out the form below, and we’ll get back to you as soon as
          possible.
        </Link>
      </Typography>
      {successMessage && (
        <Typography variant="body1" color="green" marginBottom={2}>
          {successMessage}
        </Typography>
      )}
      <Box
        sx={{ my: 3 }}
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" gap={4} marginBottom={2} width="100%">
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            onChange={handleChange}
            value={formData.firstName} // Controlled input
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            onChange={handleChange}
            value={formData.lastName} // Controlled input
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Box>
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          onChange={handleChange}
          value={formData.email} // Controlled input
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          onChange={handleChange}
          value={formData.message} // Controlled input
          fullWidth
          multiline
          rows={4}
          margin="normal"
          error={!!errors.message}
          helperText={errors.message}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: '#DAFF23',
            px: 4,
            color: 'black',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}
