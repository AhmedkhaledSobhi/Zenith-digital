import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import ContactForm from './ContactForm/ContactForm';
import ServicesSection from './ServicesSection/ServicesSection';
import MissionStatement from './component/MissionStatement/MissionStatement';
import VisionSection from './component/VisionSection/VisionSection';
import { Box } from '@mui/material';
import ContactFormText from './component/ContactFormText/ContactFormText';
import Posts from './component/Posts/posts';

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />
      <HeroSection />
      <ServicesSection />
      <VisionSection />
      <MissionStatement />
      <Box
        sx={{ width: { md: '60%' }, mx: 'auto' }}
        padding={4}
        textAlign="center"
      >
        <ContactFormText/>   
        <ContactForm />
      </Box>

      <Posts/>

      <Footer />
    </>
  )
}
