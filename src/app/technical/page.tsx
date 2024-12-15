import { Box, Button, CardContent, Link, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from '../Header/Header.module.css'

export default function Technical() {
  const services = [
    {
      icon: '/Vector1.png',
      title: 'Programming & Development',
      description:
        'Elevate your online presence and create a powerful brand identity.',
      link: 'Are you ready to upgrade your digital presence? Let s build the future website for you today!',
    },

    {
      icon: '/Vector1.png',
      title: 'Social Media Marketing',
      description:
        'We develop customized marketing strategies that Enhance your business success through social media.',
      link: 'Transform your marketing strategy today!',
    },

    {
      icon: '/Vector1.png',
      title: 'Cybersecurity Solutions',
      description:
        'We offer multi-layered solutions to protect your digital assets.',
      link: 'Keep your data safe - Contact us today!',
    },

    {
      icon: '/Vector1.png',
      title: 'Content Writing',
      description:
        'Our content writing services ensure that your message reaches your audience and ranks high on search engine results.',
      link: 'Ready to tell your story? Let’s Write Together!',
    },

    {
      icon: '/Vector1.png',
      title: '(UI/UX) Design',
      description:
        'We focus on designing innovative interfaces and user experience that enhance interaction and increase user retention.',
      link: 'Are you ready to offer a great user experience? Let s help you with that!',
    },

    {
      icon: '/Vector1.png',
      title: 'Digital Marketing',
      description:
        'We provide thoughtful digital marketing strategies that deliver tangible results.',
      link: 'We help you taking your brand to the next level!',
    },

    {
      icon: '/Vector1.png',
      title: 'Search Engine Optimization (SEO)',
      description:
        'We help you enhance your online visibility and increase organic visits.',
      link: 'Achieve better results on search engines! let s start improving your site now.',
    },

    {
      icon: '/Vector1.png',
      title: 'Graphic Design',
      description:
        'Stunning design is key to capturing your audience’s attention. We specialize in creating visuals that speak to your brand’s essence and engage your audience.',
      link: 'Let’s bring your vision to life through design. Contact Us!',
    },

    {
      icon: '/Vector1.png',
      title: 'Artificial Intelligence',
      description:
        'Leverage the power of AI to innovate and stay ahead of the competition.',
      link: 'Harness the power of AI with us—Start today!',
    },
  ]

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        
        sx={{ height:{xs:'40vh', md:'100vh'}, pb:{xs:9}, alignItems:{xs:'end', md:"center"}, textAlign: 'center' }}
        className={styles.headerPage}
      >
        <Box>
          <Link
            href="/about"
            sx={{
              color: '#fff',
              fontSize: {xs:'30px', md:'50px'},
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
        <Typography
          variant="h4"
          gutterBottom
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
          <span style={{ color: '#000' }}>Our Services</span>
        </Typography>
        <Typography
          variant="body1"
          marginBottom={3}
          sx={{ width: {xs:'93', md:'40%'}, mx: 'auto', color: '#000' }}
        >
          At Zenith Digital Space, we're enabling your business digitally by
          offering comprehensive solutions that help you succeed in a constantly
          changing online world.
        </Typography>
        <Typography
          variant="body1"
          marginBottom={4}
          sx={{ width: {xs:'93%', md:'43%'}, mx: 'auto', color: '#000' }}
        >
          We provide customized digital services aimed at enhancing your
          presence and attracting your target audience. Thanks to our team, we
          are committed to providing the support to help you achieve a
          successful digital future.
        </Typography>

        <Typography
          variant="h5"
          marginBottom={4}
          sx={{
            width: {xs:'95%', md:'68%'},
            textTransform: 'uppercase',
            mx: 'auto',
            color: '#000',
          }}
        >
          Discover our range of services and start developing your digital
          strategy to reach your business goals.
        </Typography>

        <Grid
          container
          
          sx={{width:{xs:'90%'}, spacing:{xs:2, md:8} ,mx:{xs:'auto'} , display:'flex', justifyContent: 'center', my: 2 }}
        >
          {services.map((service, i) => (
            <Grid size={{ md: 6 }} key={i} sx={{ position: 'relative' }}>
              <Box
                sx={{
                  mx: 'auto',
                  my:{xs:2},
                  textAlign: 'center',
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderImageSource:
                    'linear-gradient(180deg, #8411E6 0%, #0000FE 100%)',
                  borderImageSlice: 1,
                  color: '#fff',
                  px: 2,
                  py: 3,
                  width:{xs:'300px', md:'400px'},
                  height: '420px',
                }}
              >
                <Box>
                  <img
                    style={{ width: '20%', margin: 'auto' }}
                    src={service.icon}
                    alt=""
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: '18px', fontWeight: 600, color: '#000' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ px: {xs:1, md:4}, }}
                    color="gray"
                    gutterBottom
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      width:{xs:'300px', md:"350px"},
                      mx: 'auto',
                      justifyContent: 'center',
                      position: 'absolute',
                      bottom: '25px',
                      left: '56%',
                      transform: 'translateX(-53%)',
                    }}
                  >
                    <Link
                      sx={{
                        // width:{xs:'100%'},
                        mx:{xs:2, md:4},
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
                        py: 1,
                        mt: 3,
                      }}
                    >
                      Explore More
                    </Button>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my:{xs:1, md:5 }}}>
          <Typography
            variant="body1"
            marginBottom={4}
            sx={{ width:{xs:'90%', md:'52%'} , mx: 'auto', color: '#000' }}
          >
            Your partnership with Zenith Digital Space is your first step
            towards remarkable digital transformation that ensures you excel in
            the in the tech world.
          </Typography>

          <Typography
            variant="body1"
            // marginBottom={4}
            sx={{
              width:{xs:'90%', md:'52%'},
              textTransform: 'uppercase',
              mx: 'auto',
              color: '#000',
              mb:{xs:1, md:4}
            }}
          >
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
