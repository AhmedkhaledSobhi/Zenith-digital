import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Twitter,
} from '@mui/icons-material';
import  Image from "next/image";
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {createDirectus, graphql} from '@directus/sdk';

interface Social {
  url: string
  name: string
}

interface Translation {
  footer_statement: string
  contact_us_text: string
}

interface SiteSettings {
  logo: { id: string }
  phone: string
  email: string
  socials: Social[]
  translations: Translation[]
}

interface Schema {
  site_settings: SiteSettings
}

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      site_settings{
        logo {
          id
        }
        phone
        email
        socials
        translations{
          footer_statement
          contact_us_text
        }
      }
    }
  `)
}

export default async function Footer() {
  let data = await HomeData()
  console.log('ahmed Footer', data?.site_settings?.socials)
  function capitalizeFirstLetter(str: string): string {
    if (!str) return str // Return empty string if input is empty
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  // const nameIcon = data?.site_settings?.socials.map((item) => {
  //   return capitalizeFirstLetter(item.name)
  // })
  // console.log('ahmed nameIcon', nameIcon) 

  // async function SocialIcon({ name }: { name: string }) {
  //   if (!name) {
  //     console.error('Icon name is undefined or empty.')
  //     return null
  //   }
  //   try {
  //     const IconComponent = await import(`@mui/icons-material/${name}`).then(
  //       (module) => module.default
  //     )
  //     return IconComponent
  //   } catch (error) {
  //     console.error(`Icon for ${name} not found:`, error)
  //     return null
  //   }
  // }

  // if (nameIcon) {
  //   nameIcon.forEach((iconName) => {
  //     SocialIcon({ name: iconName }).then((IconComponent) => {
  //       console.log(`Icon for ${iconName}:`, IconComponent)
  //     })
  //   })
  // }
  //  async function SocialIcon({name}: {name: string}) {
  //   return  (await import(`@mui/icons-material/${name}`)).default
  // }
  return (
    <Box
      component="footer"
      sx={{
        position: '',
        bottom: '0',
        left: 0,
        right: 0,
        backgroundColor: '#0c00ff',
        color: '#fff',
        px: 0,
      }}
    >
      <Box sx={{ maxWidth: '100%', px: 0 }}>
        <Box sx={{ py: 3 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Box fontWeight="bold" sx={{ mb: 1 }}>
              <Image
                src={`${BASE_URL}/assets/${data?.site_settings?.logo?.id}`}
                alt="Zenith Digital Space Logo"
                width="400"
                height="300"
              />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: '17px' } }}
              textAlign="center"
            >
              {data?.site_settings?.translations[0]?.footer_statement}
              {/* Providing Creative Ideas For Your Business */}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
            <Button
              href={`${data?.site_settings?.phone}`}
              sx={{ color: 'white', padding: '0px', margin: '0px' }}
            >
              <IconButton aria-label="Twitter" color="inherit">
                <Twitter />
              </IconButton>
            </Button>
            <Button
              href={`${data?.site_settings?.phone}`}
              sx={{ color: 'white', padding: '0px', margin: '0px' }}
            >
              <IconButton aria-label="LinkedIn" color="inherit">
                <LinkedIn />
              </IconButton>
            </Button>
            <Button
              href={`${data?.site_settings?.phone}`}
              sx={{ color: 'white', padding: '0px', margin: '0px' }}
            >
              <IconButton aria-label="Instagram" color="inherit">
                <Instagram />
              </IconButton>
            </Button>
            <Button
              href={`${data?.site_settings?.phone}`}
              sx={{ color: 'white', padding: '0px', margin: '0px' }}
            >
              <IconButton aria-label="Facebook" color="inherit">
                <Facebook />
              </IconButton>
            </Button>
          </Stack>

          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <Phone />
              <Button href={`tel:${data?.site_settings?.phone}`}>
                <Typography sx={{ color: 'white' }}>
                  {data?.site_settings?.phone}
                </Typography>
              </Button>
            </Box>
            <Box display="flex" alignItems="center" gap={1} my={2}>
              <Mail />
              <Button href={`mailto:${data?.site_settings?.email}`}>
                <Typography sx={{ color: 'white' }}>
                  {data?.site_settings?.email}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderTop="1px solid #fff"
          py={3}
          flexDirection={{ xs: 'column', md: 'row' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography variant="body2" sx={{ px: 3, mb: { xs: 2, md: 0 } }}>
            Copyright &copy; 2024 Zenith Digital Space
          </Typography>

          <Typography
            sx={{
              borderLeft: { md: '0.1px solid rgba(255, 255, 255, 1)' },
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Terms & Conditions
            </Link>
          </Typography>

          <Typography
            sx={{
              borderLeft: { md: '0.1px solid rgba(255, 255, 255, 1)' },
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Privacy Policies
            </Link>
          </Typography>

          <Typography
            sx={{
              borderLeft: { md: '0.1px solid rgba(255, 255, 255, 1)' },
              px: 3,
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link href="#" style={{ textDecoration: 'none', color: '#fff' }}>
              Cookies Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
