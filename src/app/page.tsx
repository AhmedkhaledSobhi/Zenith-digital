import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import ContactForm from './ContactForm/ContactForm'
import ServicesSection from './ServicesSection/ServicesSection'
import MissionStatement from './component/MissionStatement/MissionStatement'
import VisionSection from './component/VisionSection/VisionSection'

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />
      <HeroSection />
      <ServicesSection />
      <VisionSection />
      <MissionStatement />
      <ContactForm />

      <Footer />
    </>
  )
}
