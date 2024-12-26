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

type Mutation {
  create_contact_us_messages_item(data: CreateContactMessageInput!): Boolean
}

input CreateContactMessageInput {
  email: String!
  message: String!
  first_name: String!
  last_name: String!
}
  const client = createDirectus<Post>('https://cms-zenith.treasuredeal.com').with(
    graphql()
  )
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
    // useEffect( function() {
    //   clinet.query<Post[]>(`
    //     query{
    //       site_settings{
    //         translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
    //           contact_us_text
    //           contact_us_title
    //           contact_us_form_note
    //         }
    //       }
    //     }
    //   `).then(console.log)

    // }, [])
    // const [data, setData] = useState<Post | null>(null) // Store fetched data

    useEffect(() => {
      client
        .query<Post[]>(
          `
          query {
            site_settings {
              translations(filter: { languages_code: { code: {_eq: "ar"} } }) {
                contact_us_text
                contact_us_title
                contact_us_form_note
              }
            }
          }
        `
        )
        .then((response) => {
          // console.log('Fetched data:', response)
          // setData(response)
        })
        .catch((error) => console.error('Error fetching data:', error))
    }, [])

    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    })

    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errors, setErrors] = useState<FormErrors>({})

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))

      if (errors[name]) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
      }
    }

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
      if (!formData.message)
        validationErrors.message = 'Message is required'
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


    const [isLoading, setIsLoading] = useState(false)


    // Inside handleSubmit
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): void => {
    //   e.preventDefault()
    //   const validationErrors = validateForm()
    //   if (Object.keys(validationErrors).length > 0) {
    //     setErrors(validationErrors)
    //     return
    //   }

    //   setIsLoading(true) // Set loading state

    //   const mutation = `
    //    mutation {
    //     create_contact_us_messages_item(data: {
    //       email: "ahmed665@mail.com"
    //       message: "asdads"
    //       first_name: "ahmed"
    //       last_name: "kh"
    //     })
    //   }`

    //   const variables = {
    //     data: {
    //       email: formData.email,
    //       message: formData.message,
    //       first_name: formData.firstName,
    //       last_name: formData.lastName,
    //     },
    //   }

    //   try {
    //     const response = await client.request(mutation, variables)
    //     console.log('Message sent successfully:', response)
    //     setSuccessMessage(
    //       'Thank you for your message! We will get back to you soon.'
    //     )
    //     setFormData({ firstName: '', lastName: '', email: '', message: '' })
    //     setErrors({})
    //   } catch (error) {
    //     console.error('Error creating contact message:', error)
    //   } finally {
    //     setIsLoading(false) // Reset loading state
    //   }
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  // Validate the form
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsLoading(true); // Set loading state

  const mutation = `
    mutation CreateContactMessage($data: CreateContactMessageInput!) {
      create_contact_us_messages_item(data: $data)
    }
  `;

  const variables = {
    data: {
      email: formData.email,
      message: formData.message,
      first_name: formData.firstName,
      last_name: formData.lastName,
    },
  };

  try {
    // Send GraphQL request
    const response = await client.graphql(mutation, variables);
    console.log('Message sent successfully:', response);

    setSuccessMessage(
      'Thank you for your message! We will get back to you soon.'
    );

    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setErrors({});
  } catch (error) {
    console.error('Error creating contact message:', error);
  } finally {
    setIsLoading(false); // Reset loading state
 }
};


    return (
      <Box
        sx={{ width: { md: '60%' }, mx: 'auto' }}
        padding={4}
        textAlign="center"
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: '32px' } }}
        >
          Let’s Get In Touch
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
          {/* Whether you have questions about our services, want to discuss a
          potential project, or need more information, our team at Zenith Digital
          Space is here to help. */}
          {/* {data.site_settings.translations.[0].contact_us_text} */}
        </Typography>
        <Typography sx={{ mb: 4 }}>
          <Link sx={{ textDecoration: 'none' }}>
            Please fill out the form below, and we’ll get back to you as
            soon as possible.
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

  export default ContactForm


