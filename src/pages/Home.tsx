import '../App.css'

import { useEffect, useState } from 'react'
import webviewImage from '/makeaton-website/make-a-ton-8-main/assets/Homapage.png'
import mobileBgImage from '/makeaton-website/make-a-ton-8-main/assets/Slice 1.png'
import kathakaliImage from '/makeaton-website/make-a-ton-8-main/assets/kathakali.png'
import circleTextImage from '/assets/circle-text.png'
import CursorEffects from '../components/CursorEffects'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutText from '../components/AboutText'
// import SponsorBanners from '../components/SponsorBanners'
// import Brochure from '../components/Brochure'
// import ContactSection from '../components/ContactSection'
// import SocialLinks from '../components/SocialLinks'
import TracksPage from '../components/Tracks'
import Sponsers from '../components/Sponsers'
import Footer from '../components/Footer'

export default function Home() {
  const [useMobileBg, setUseMobileBg] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px), (orientation: portrait), (max-aspect-ratio: 2/3)')
    const update = () => setUseMobileBg(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    window.addEventListener('resize', update)
    return () => {
      mq.removeEventListener?.('change', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Prevent only background image copying and downloading (kathakali images)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('kathakali-image') || target.classList.contains('kathakali-shadow')) {
        e.preventDefault()
        return false
      }
    }
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('kathakali-image') || target.classList.contains('kathakali-shadow')) {
        e.preventDefault()
        return false
      }
    }
    const handleTouch = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('kathakali-image') || target.classList.contains('kathakali-shadow')) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('touchstart', handleTouch, { passive: false })
    document.addEventListener('touchend', handleTouch, { passive: false })
    document.addEventListener('touchmove', handleTouch, { passive: false })

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('touchstart', handleTouch)
      document.removeEventListener('touchend', handleTouch)
      document.removeEventListener('touchmove', handleTouch)
    }
  }, [])

  return (
    <>
      <Navbar />

      <div className="app-container">
        <CursorEffects />

        <section className="hero-wrapper">
          {!useMobileBg && (
            <img src={webviewImage} alt="Background" className="background-image" />
          )}
          {useMobileBg && (
            <img src={mobileBgImage} alt="Background" className="mobile-background-image" />
          )}

          <Hero />

          <AboutText />

          <img src={circleTextImage} alt="Circle Text" className="circle-text" />
          <img src={kathakaliImage} alt="Kathakali Shadow" className="kathakali-shadow" draggable={false} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
          <img src={kathakaliImage} alt="Kathakali" className="kathakali-image" draggable={false} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
        </section>

        <TracksPage/>

        <Sponsers/>

        <Footer/>

        {/* <LastSection/> */}

        {/* <Brochure /> */}

        {/* <ContactSection /> */}
        
        {/* <SocialLinks /> */}
      </div>
    </>
  )
}
