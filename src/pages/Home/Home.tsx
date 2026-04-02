import "../../App.css";

import webviewImage from "@/assets/Homapage.png";
import mobileBgImage from "@/assets/Slice 1.png";
import kathakaliImage from "@/assets/kathakali.png";
import circleTextImage from "@/assets/circle-text.png";
import CursorEffects from "../../components/CursorEffects";
import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import AboutText from "../../components/AboutText";
// import SponsorBanners from '../components/SponsorBanners'
// import Brochure from "../../components/Brochure";
// import ContactSection from "../../components/ContactSection";
// import SocialLinks from "../../components/SocialLinks";
import TracksPage from "./Tracks";
import Sponsers from "./Sponsers";
import Footer from "../../components/layout/Footer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePreventContextMenu } from "../../hooks/usePreventContextMenu";

export default function Home() {
  const useMobileBg = useMediaQuery(
    "(max-width: 700px), (orientation: portrait), (max-aspect-ratio: 2/3)",
  );

  // Prevent only background image copying and downloading (kathakali images)
  usePreventContextMenu(["kathakali-image", "kathakali-shadow"]);

  return (
    <>
      <Navbar />

      <div className="app-container">
        <CursorEffects />

        <section className="hero-wrapper">
          {!useMobileBg && (
            <img
              src={webviewImage}
              alt="Background"
              className="background-image"
            />
          )}
          {useMobileBg && (
            <img
              src={mobileBgImage}
              alt="Background"
              className="mobile-background-image"
            />
          )}

          <Hero />

          <img
            src={circleTextImage}
            alt="Circle Text"
            className="circle-text"
          />
          <img
            src={kathakaliImage}
            alt="Kathakali Shadow"
            className="kathakali-shadow"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <img
            src={kathakaliImage}
            alt="Kathakali"
            className="kathakali-image"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />

          <AboutText />
        </section>

        <TracksPage />

        <Sponsers />

        <Footer />

        {/* <LastSection/> */}

        {/* <Brochure />

        <ContactSection />

        <SocialLinks /> */}
      </div>
    </>
  );
}
