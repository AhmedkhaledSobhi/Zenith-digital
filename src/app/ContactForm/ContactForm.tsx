  'use client'
  import React, { useState, useEffect } from 'react';
  import { Box, TextField, Button, Typography, Link } from '@mui/material';
  // -------------
  import { createDirectus, graphql } from '@directus/sdk';

  interface Post {
    site_settings: {
      translations: {
        contact_us_text: string
        contact_us_title: string
        contact_us_form_note: string
      }[]
    }
  }

  const client = createDirectus<Post>('https://cms-zenith.treasuredeal.com').with(graphql())
  // -------------------------

  interface FormData {
    firstName: string
    lastName: string
    email: string
    message: string
  }
  interface FormErrors {
    [key: string]: string 
  }

  const ContactForm: React.FC = () => {
    const clients = createDirectus('https://cms-zenith.treasuredeal.com');

    useEffect(() => {
      client
        .query<Post[]>(`
          query {
            site_settings {
              translations(filter: { languages_code: { code: {_eq: "ar"} } }) {
                contact_us_text
                contact_us_title
                contact_us_form_note
              }
            }
          }
        `)
        .then((response) => {
        // console.log('Fetched data:', response)
        })
        .catch((error) => console.error('Error fetching data:', error))
    }, [])

    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    })

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))

      if (errors[name]) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
      }
    }

  const [errors, setErrors] = useState<FormErrors>({})
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = (): FormErrors => {
      const validationErrors: FormErrors = {}
      if (!formData.firstName)
        validationErrors.firstName = 'First Name is required'
      if (!formData.lastName)
        validationErrors.lastName = 'Last Name is required'
      if (!formData.email) {
        validationErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = 'Email address is invalid'
      }
      if (!formData.message) validationErrors.message = 'Message is required'
      return validationErrors
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    //   e.preventDefault()
    //   const validationErrors = validateForm()
    //   if (Object.keys(validationErrors).length > 0) {
    //     setErrors(validationErrors)
    //     return
    //   }
    //   console.log(formData)
    //   setSuccessMessage(
    //     'Thank you for your message! We will get back to you soon.'
    //   )
    //   setFormData({ firstName: '', lastName: '', email: '', message: '' }) // Reset form fields
    //   setErrors({})
    // }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      const validationErrors = validateForm()
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setIsSubmitting(true)
      try {
        const mutation = `
        mutation CreateContactMessage($data: CreateContactMessageInput!) {
          create_contact_us_messages_item(data: $data)
        }
      `
        const variables = {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            message: formData.message,
          },
        }
        // console.log("ahmed variables", variables.data);

        await clients.graphql(mutation, variables)
        setSuccessMessage('Your message has been sent successfully.')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
        setErrors({})
      } catch (error) {
        setErrorMessage('Failed to send your message. Please try again.')
        console.error('Error submitting form:', error)
      } finally {
        setIsSubmitting(false)
      }
    }

    return (
      <Box
        sx={{ width: { md: '60%' }, mx: 'auto' }}
        padding={4}
        textAlign="center"
      >

        {successMessage && (
          <Typography variant="body1" color="green" marginBottom={2}>
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography variant="body1" color="red" marginBottom={2}>
            {errorMessage}
          </Typography>
        )}

        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '32px' } }}>
          Let’s Get In Touch
          {/* {data?.site_settings.translations[0].contact_us_title} */}
        </Typography>
        <Typography variant="h6" sx={{ my: { xs: 2 } }}>
          We’d love to hear from you!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: '95%', md: '88%' },
            mx: 'auto',
            px: { md: 4 },
          }}
        >
          Whether you have questions about our services, want to discuss a
          potential project, or need more information, our team at Zenith Digital
          Space is here to help.
          {/* {data?.site_settings.translations[0].contact_us_text} */}
        </Typography>
        <Typography sx={{ mb: 4 }}>
          <Link sx={{ textDecoration: 'none' }}>
            Please fill out the form below, and we’ll get back to you as soon as
            possible.
            {/* {data?.site_settings.translations[0].contact_us_form_note} */}
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
              value={formData.firstName}
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              onChange={handleChange}
              value={formData.lastName}
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
            value={formData.email}
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
            value={formData.message}
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

  export default ContactForm


