export default function ContactSection() {
  return (
    <>

      <div className="contact-buttons desktop-only">
        <a href="tel:+918848008766" className="contact-button call-button">
          Call Us
          <div className="button-subtext">
            Make sure to say "<em>Hey <strong>Austin!</strong></em>"
          </div>
        </a>

        <a href="mailto:organizer@makeaton.in" className="contact-button email-button">
          Email Us
        </a>

        <a
          href="https://2024.makeaton.in"
          target="_blank"
          rel="noopener noreferrer"
          className="previous-edition-link"
        >
          Check out the previous edition!
        </a>
      </div>

      <div className="contact-buttons mobile-only">
        <a href="tel:+918848008766" className="contact-button call-button">
          Call Us
          <div className="button-subtext">
            Make sure to say "<em>Hey <strong>Austin!</strong></em>"
          </div>
        </a>

        <a href="mailto:organizer@makeaton.in" className="contact-button email-button">
          Email Us
        </a>

        <a
          href="https://2024.makeaton.in"
          target="_blank"
          rel="noopener noreferrer"
          className="previous-edition-link"
        >
          Check out the previous edition!
        </a>
      </div>
    </>
  );
}
