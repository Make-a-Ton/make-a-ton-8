import ContactSection from "./ContactSection";
import SocialLinks from "./SocialLinks";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* ===== TOP AREA: FAQ + CONTACT ===== */}
      <div className="footer-top">
        {/* FAQ Area */}
        <div className="footer-faq-area">
          <h2 className="footer-heading">Knock,Knock - It's US!</h2>
          <div className="faq-bars">
            <div className="faq-bar"></div>
            <div className="faq-bar"></div>
            <div className="faq-bar"></div>
            <div className="faq-bar"></div>
          </div>
        </div>

        {/* Contact Area: USE YOUR EXISTING COMPONENT DIRECTLY */}
        <div className="footer-contact-area">
          
        </div>
      </div>

      {/* ===== BOTTOM BAND ===== */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <span>Make-A-Ton</span>
          <span>CITTIC</span>
        </div>

        <div className="footer-actions">
          <a
            href="https://2024.makeaton.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            Past Edition
          </a>
          <a href="/sponsor-us" className="footer-btn filled">
            Sponsor us
          </a>
        </div>
      </div>
    </footer>
  );
}
