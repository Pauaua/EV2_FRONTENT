import { useState } from 'react'
import './App.css'
import PreNavbarSection from './components/PreNavbarSection'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import GalerySection from './components/GallerySection'
import EncuestasCiudadanasSection from './components/EncuestasCiudadanasSection'
import BenefitsSection from './components/BenefitsSection'
import UnidadTransitoSection from './components/UnidadTransitoSection'
import PermisoCirculacionSection from './components/PermisoCirculacionSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import YoutubeSection from './components/YoutubeSection'



function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PreNavbarSection />
        <Navbar/>
        <HeroSection/>
        <InfoSection/>

        <UnidadTransitoSection/>
        <EncuestasCiudadanasSection/>
        <BenefitsSection/>

        
        <PermisoCirculacionSection/>

        <GalerySection/>
        <ContactSection/>
        <YoutubeSection/>
        <Footer/>


      </div>
      
    </>
  )
}

export default App
