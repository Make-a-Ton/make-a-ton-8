import './CampusAmb.css'
import matLogo from '../../assets/MAT new logo.png'
import Leaderboard from './leaderboard'

function CampusAmb() {

  return (
    <div className="campus-amb-page">
      {/* Decorative elements */}
      <div className="campus-amb-bg-pattern"></div>
      <div className="campus-amb-glow campus-amb-glow-1"></div>
      <div className="campus-amb-glow campus-amb-glow-2"></div>

      <div className="campus-amb-content">
        {/* Logo */}
        <a href="/" className="campus-amb-logo-link">
          <img src={matLogo} alt="Make-A-Ton" className="campus-amb-logo" />
        </a>

        {/* Header */}
        <div className="campus-amb-header">
          <h1 className="campus-amb-title">Bring Make-A-Ton to your campus!</h1>
          <p className="campus-amb-subtitle">
            Be the face of Make-A-Ton and get a chance to win a Mechanical Keyboard <br />
          </p>
        </div>

        <Leaderboard />

        {/* Form Container */}
        {/* <div className="campus-amb-form-container">
          <iframe src="https://makemypass.com/event/make-a-ton-campus-ambassador/?type=embed"
            width="100%"
            height="950">

          </iframe>
        </div> */}

        {/* Footer */}
        <div className="campus-amb-footer">
          <p>Opportunities, recognition, and rewards — powered by Make-A-Ton.</p>
        </div>
      </div>
    </div>
  )
}

export default CampusAmb

