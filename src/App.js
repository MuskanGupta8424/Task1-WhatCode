import React from 'react'
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import {light} from './Styles/Theme';
import gsap from "gsap";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Products from './components/Sections/Products'
import Usecase from './components/Sections/Usecase'
import Pricing from './components/Sections/Pricing'
import Navigation from './components/Navigation'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useEffect,useRef } from 'react'
import ScrollTrigger1 from './components/ScrollTrigger1';
import Loading from './components/Loading';
import Footer1 from './components/Sections/Footer1';




function App() {
  

  // knswfknsgkn
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <GlobalStyle/>
<ThemeProvider theme = {light}>
<LocomotiveScrollProvider
    options={{
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }}
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <AnimatePresence>
  {loaded ? null:<Loading/>}
  </AnimatePresence>
  <ScrollTrigger1 />
  <AnimatePresence>
  <main className='App' data-scroll-container ref={containerRef}>


    <Navigation/>
    <Home/>
    <About/>
    <Pricing/>
    <Products/>
    <Usecase/>
    <Footer1/>
    </main>
  </AnimatePresence>
</LocomotiveScrollProvider>

</ThemeProvider>
    </>

  )
}

export default App