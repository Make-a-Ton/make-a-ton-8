export default function ContactSection() {
  return (
    <>
      <p className="knock-knock-text">Knock Knock, It is Us!</p>
      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-header">
            <h3 className="contact-title">Hey there, Future Hacker! 👋</h3>
            <p className="contact-subtitle">Got any doubts?</p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon"></span>
              <div className="contact-info">
                <span className="contact-label">Ring-a-ding-ding! </span>
                <a href="tel:+918848008766" className="contact-link">+91 8848008766</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon"></span>
              <div className="contact-info">
                <span className="contact-label">Drop us a mail!  </span>
                <a href="mailto:organizer@makeaton.in" className="contact-link">organizer@makeaton.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="wanna-connect-text desktop-only">wanna connect?</p>
      <p className="wanna-connect-text mobile-only">wanna connect?</p>

      <div className="contact-buttons desktop-only">
        <a href="tel:+918848008766" className="contact-button call-button">
          Call Us
          <div className="button-subtext">Make sure to say "<em>Hey <strong>Austin!</strong></em>"</div>
        </a>
        <a href="mailto:organizer@makeaton.in" className="contact-button email-button">Email Us</a>
        <a href="https://2024.makeaton.in" target="_blank" rel="noopener noreferrer" className="previous-edition-link">Check out the previous edition!</a>
      </div>

      <div className="contact-buttons mobile-only">
        <a href="tel:+918848008766" className="contact-button call-button">Call Us
          <div className="button-subtext">Make sure to say "<em>Hey <strong>Austin!</strong></em>"</div>
        </a>
        <a href="mailto:organizer@makeaton.in" className="contact-button email-button">Email Us</a>
        <a href="https://2024.makeaton.in" target="_blank" rel="noopener noreferrer" className="previous-edition-link">Check out the previous edition!</a>
      </div>
    </>
  )
}
