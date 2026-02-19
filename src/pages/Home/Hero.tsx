import matLogo from "../../assets/MAT new logo.png";
import "./About.css";
import "@/styles/decorative.css";
import { useGlowEffect } from "../../hooks/useGlowEffect";

export default function Hero() {
  const { onMouseMove, onMouseLeave } = useGlowEffect(
    ".registration-deadline-glow-text",
  );

  return (
    <>
      <img src={matLogo} alt="MAT Logo" className="mat-logo" />
      <p className="hackathon-subtitle">
        South India's Biggest <span className="hackathon-word">Hackathon</span>
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="register-button"
      >
        Happening on Feb 21 & 22
      </a>
      <div
        className="registration-deadline-wrapper"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <p className="registration-deadline">Venue : Seminar Hall, CUSAT</p>
        <span className="registration-deadline-glow-text">
          Venue : Seminar Hall, CUSAT
        </span>
      </div>
      <p className="festival-quote">
        If a hackathon<span className="hackathon-text"></span> could be a{" "}
        <span className="festival-text">Festival</span>,<br />
        it'd be <span className="make-a-ton-animated">Make-A-Ton</span>.
      </p>
    </>
  );
}
