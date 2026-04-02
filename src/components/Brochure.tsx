export default function Brochure() {
  return (
    <div className="brochure-section">
      <a 
        href="/Make-A-Ton 8.0 Brochure.pdf"
        download="Make-A-Ton 8.0 Brochure.pdf"
        className="brochure-button"
        aria-label="Download Make-A-Ton 8.0 Brochure"
      >
        <svg className="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.75l-3.75-3.75h2.25V3h3v9h2.25L12 15.75zM3 18.75h18v1.5H3v-1.5z" fill="currentColor"/>
        </svg>
        Check out our Brochure
      </a>
    </div>
  )
}
