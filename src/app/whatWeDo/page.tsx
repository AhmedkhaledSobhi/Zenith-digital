import { Box, Typography, Link } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from '../Header/Header.module.css'
import ServicesSection from '../ServicesSection/ServicesSection'
import FieldsSection from '../FieldsSection/FieldsSection'
import MakesDifferent from '../MakesDifferent/MakesDifferent'

export default function whatWeDo() {
  return (
    <>
      <Navbar />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: {md:'100vh'}, textAlign: 'center', pt:{xs:9} }}
        className={styles.headerPage}
      >
        <Box sx={{pt:{xs:9}}}>
          <Link
            href="/about"
            sx={{
              my: 9,
              color: '#fff',
              fontSize:{xs:'40px', md:'50px'},
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
            What We Do
          </Link>
          <Typography
            variant="body2"
            sx={{
              my: 5,
              width: {xs:'95%', md:'70%'},
              mx: 'auto',
              color: 'rgba(179,185,198,1)',
              fontSize: {xs:'16px', md:'24px'},
              fontWeight: 400,
              lineHeight: '33.6px',
            }}
          >
            At the Zenith digital space, we believe that every project starts
            with a clear understanding of your vision. Thanks to our extensive
            experience in programming, digital marketing, design, cybersecurity,
            artificial intelligence and more, we specialize in helping our
            clients bring their ideas to life.
          </Typography>
        </Box>
      </Box>

      <FieldsSection />
      <MakesDifferent />
      <ServicesSection />
      <Footer />
    </>
  )
}
