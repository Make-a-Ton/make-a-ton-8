import ContactSection from "../ContactSection";
import FAQ from "../FAQ";
import SocialLinks from "../SocialLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* ===== MAIN HEADING ===== */}
      <div className="footer-main-heading">
        <h2 className="knock-knock-main-heading">Knock-Knock, It's Us!</h2>
      </div>

      {/* ===== TOP AREA: FAQ + CONTACT ===== */}
      <div className="footer-top">
        {/* FAQ Area */}
        <div className="footer-faq-area">
          <h3 className="faq-section-heading">FAQ</h3>
          <FAQ />
        </div>

        {/* Contact Area */}
        <div className="footer-contact-area">
          <h3 className="faq-section-heading">Wanna Connect?</h3>
          <ContactSection />
        </div>
      </div>

      {/* ===== BOTTOM BAND ===== */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <span>Make-A-Ton</span>
          {/* <span>CITTIC</span> */}
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}
