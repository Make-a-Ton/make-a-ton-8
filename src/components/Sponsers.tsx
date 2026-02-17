import '../styles/SponsorPage.css';

export default function Sponsers() {
  return (
    <div className="sponsor-container">
      {/* Left Vertical Title */}
      {/* <div className="sponsor-vertical-title">
        OUR PARTNERS & SPONSORS
      </div> */}

      {/* Main Content */}
      <div className="sponsor-content">
        {/* Platinum */}
        <h2 className="sponsor-title">Platinum Sponsor</h2>
        <div className="stamp-box large"></div>

        {/* Gold */}
        <h2 className="sponsor-title">Gold sponsor</h2>
        <div className="stamp-row">
          <div className="stamp-box"></div>
          <div className="stamp-box"></div>
        </div>

        {/* Platform */}
        <h2 className="sponsor-title">Platform partner</h2>
        <div className="stamp-box"></div>

        {/* Merchandise */}
        <h2 className="sponsor-title">Merchandise Partner</h2>
        <div className="stamp-box"></div>

        {/* Prize */}
        <h2 className="sponsor-title">Prize Partner</h2>
        <div className="stamp-box"></div>

        {/* Refreshment */}
        <h2 className="sponsor-title">Refreshment Partner</h2>
        <div className="stamp-box"></div>

        {/* Community */}
        <h2 className="sponsor-title">Community partners</h2>
        <div className="stamp-row">
          <div className="stamp-box"></div>
          <div className="stamp-box"></div>
        </div>
      </div>
    </div>
  );
}
