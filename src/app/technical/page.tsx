import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import styles from '../Header/Header.module.css';

import { createDirectus, graphql } from '@directus/sdk';

interface Translations {
  languages_code: { code: string }
  title: string
  excerpt: string
  content: string
  our_services_title: string
  our_services_text: string
  our_services_page_discover_text_3: string
  our_services_page_discover_text_2: string
  our_services_page_discover_text_1: string
}

interface Service {
  translations: Translations[]
  icon: { id: string }
}

interface StaticContentTexts {
  translations: Translations[]
}


interface Schema {
  services: Service[]
  static_content_texts: StaticContentTexts[]
}

const BASE_URL = process.env.NEXT_APP_API_BASE_URL as string
const client = createDirectus<Schema>(BASE_URL).with(graphql())

async function HomeData() {
  return await client.query<Schema>(`
    query{
      static_content_texts{ 
        translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
          our_services_title
          our_services_text
          our_services_page_discover_text_3
          our_services_page_discover_text_2
          our_services_page_discover_text_1
        }
      }
      services {
        translations(filter: {languages_code: {code: {_eq: "ar"}}}) {
          title
          excerpt
          content
        }
        icon{
          id
        }    
      }
    }
  `)
}


export default async function Technical() {

  let data = await HomeData();
  const staticContent = data?.static_content_texts?.translations?.[0] || {}

  const service = data?.services.map((item) => ({
    icon: `${BASE_URL}/assets/${item.icon?.id}`,
    title: item.translations[0]?.title,
    description: item.translations[0]?.excerpt,
    link: item.translations[0]?.content,
  }))

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          height: { xs: '40vh', md: '100vh' },
          pb: { xs: 9 },
          alignItems: { xs: 'end', md: 'center' },
          textAlign: 'center',
        }}
        className={styles.headerPage}
      >
        <Box>
          <Link
            href="/about"
            sx={{
              color: '#fff',
              fontSize: { xs: '30px', md: '50px' },
              fontWeight: 600,
              lineHeight: '56px',
              position: 'relative',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background:
                'linear-gradient(to right, #FDFDFD, #FDFDFD, #0000FE, #0000FE )',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-5px',
                width: '100%',
                height: '2px',
                backgroundColor: '#8411E6',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            Technical expertise
          </Link>
        </Box>
      </Box>

      <Box py={8} color="white" textAlign="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box mx={2}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 0C29.4371 15.8316 42.1684 28.5629 58 29C42.1684 29.4371 29.4371 42.1684 29 58C28.5629 42.1684 15.8316 29.4371 0 29C15.8316 28.5629 28.5629 15.8316 29 0Z"
                fill="#0000FE"
              />
            </svg>
          </Box>
          <Typography variant="h4" gutterBottom sx={{ color: '#000' }}>
            {/* Our Services */}
            {staticContent.our_services_title}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          marginBottom={3}
          sx={{ width: { xs: '93', md: '40%' }, mx: 'auto', color: '#000' }}
        >
          {staticContent.our_services_text}
        </Typography>
        <Typography
          variant="body1"
          marginBottom={4}
          sx={{ width: { xs: '93%', md: '43%' }, mx: 'auto', color: '#000' }}
        >
          {/* {staticContent.our_services_title} */}
          We provide customized digital services aimed at enhancing your
          presence and attracting your target audience. Thanks to our team, we
          are committed to providing the support to help you achieve a
          successful digital future.
        </Typography>

        <Typography
          variant="h5"
          marginBottom={4}
          sx={{
            width: { xs: '95%', md: '68%' },
            textTransform: 'uppercase',
            mx: 'auto',
            color: '#000',
          }}
        >
          {/* {staticContent.our_services_title} */}
          Discover our range of services and start developing your digital
          strategy to reach your business goals.
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            width: '80%',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            my: 2,
          }}
        >
          {service.map((service, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Card
                sx={{
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderImageSource:
                    'linear-gradient(180deg, #8411E6 0%, #0000FE 100%)',
                  borderImageSlice: 1,
                  color: '#fff',
                  py: { xs: 0, md: 3 },
                  mx: { xs: 2 },
                  boxSizing: 'border-box',
                  minHeight: { md: '390px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <img
                    style={{
                      width: '18%',
                      margin: '8px auto',
                    }}
                    src={service.icon}
                    alt=""
                  />
                </Box>
                <CardContent sx={{ px: 0, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: '16px' }}
                    color="black"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ px: 2 }}
                    color="gray"
                    gutterBottom
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                  <Link
                    sx={{
                      mx: { xs: 2, md: 4 },
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    {service.link}
                  </Link>
                  <Button
                    sx={{
                      bgcolor: '#0000EF',
                      color: '#fff',
                      px: 3,
                      my: 1,
                      pt: 1,
                      mt: 3,
                      textTransform: 'none',
                    }}
                  >
                    Explore More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: { xs: 1, md: 5 } }}>
          <Typography
            variant="body1"
            marginBottom={4}
            sx={{ width: { xs: '90%', md: '52%' }, mx: 'auto', color: '#000' }}
          >
            {/* {staticContent.our_services_title} */}
            Your partnership with Zenith Digital Space is your first step
            towards remarkable digital transformation that ensures you excel in
            the in the tech world.
          </Typography>

          <Typography
            variant="body1"
            // marginBottom={4}
            sx={{
              width: { xs: '90%', md: '52%' },
              textTransform: 'uppercase',
              mx: 'auto',
              color: '#000',
              mb: { xs: 1, md: 4 },
            }}
          >
            {/* {staticContent.our_services_title} */}
            With us, you will reach new heights of success and innovation, as we
            pave the way for you to achieve your digital vision with the highest
            standards of quality and creativity.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
