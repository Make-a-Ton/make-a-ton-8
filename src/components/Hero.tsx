import matLogo from '/makeaton-website/make-a-ton-8-main/assets/MAT new logo.png'
import '../styles/about.css'
import '../styles/decorative.css'

export default function Hero() {
  return (
    <>
      <img src={matLogo} alt="MAT Logo" className="mat-logo" />
      <p className="hackathon-subtitle">
        South India's Biggest{' '}
        <span className="hackathon-word">Hackathon</span>
      </p>
      <a 
        href="https://makemypass.com/event/makeaton/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="register-button"
      >
        Happening @ Feb 21 & 22
      </a>
      <div 
        className="registration-deadline-wrapper"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
          const x = (e as MouseEvent & { clientX: number }).clientX - rect.left
          const y = (e as MouseEvent & { clientY: number }).clientY - rect.top
          const glowText = e.currentTarget.querySelector('.registration-deadline-glow-text') as HTMLElement
          if (glowText) {
            glowText.style.setProperty('--mouse-x', `${x}px`)
            glowText.style.setProperty('--mouse-y', `${y}px`)
          }
        }}
        onMouseLeave={(e) => {
          const glowText = e.currentTarget.querySelector('.registration-deadline-glow-text') as HTMLElement
          if (glowText) {
            glowText.style.setProperty('--mouse-x', `-200px`)
            glowText.style.setProperty('--mouse-y', `-200px`)
          }
        }}
      >
        <p className="registration-deadline">Venue : Seminar Hall, CUSAT</p>
        <span className="registration-deadline-glow-text">Venue : Seminar Hall, CUSAT</span>
      </div>
      <p className="festival-quote">
        If a hackathon<span className="hackathon-text"></span> could be a <span className="festival-text">Festival</span>,<br />
        it'd be <span className="make-a-ton-animated">Make-A-Ton</span>.
      </p>
    </>
  )
}
