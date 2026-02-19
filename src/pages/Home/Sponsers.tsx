import "./SponsorPage.css";
import platinumSponsor from "../../assets/kireap_logo.png";
import goldSponsor2 from "../../assets/fixmystore logo.png";
import prizepartner from "../../assets/cusattech foundation logo.png"
import refreshmentpartner from "../../assets/kappo logo.png"
import communitypartner1 from "../../assets/TinkerHub logo.png"
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
        <div className="stamp-box large">
          <img
            className="sponser-logo"
            src={platinumSponsor}
            alt="Platinum Sponsor"
          />
        </div>

        {/* Gold */}
        <h2 className="sponsor-title">Gold sponsor</h2>
        <div className="stamp-row">
          <div className="stamp-box">
            <img
            className="sponser-logo"
            src={"sponsors/buffersec.png"}
            alt="Platinum Sponsor"
          />
          </div>
          <div className="stamp-box">
            <img
            className="sponser-logo"
            src={goldSponsor2}
            alt="Platinum Sponsor"
          />
          </div>
        </div>

        {/* Platform */}
        <h2 className="sponsor-title">Platform partner</h2>
        <div className="stamp-box">
          <img
            className="sponser-logo"
            src={"sponsors/makemypass-white.svg"}
            alt="Platinum Sponsor"
          />
        </div>

        {/* Merchandise */}
        <h2 className="sponsor-title">Merchandise Partner</h2>
        <div className="stamp-box">
          <img
            className="sponser-logo"
            src={"sponsors/DESH KEYBOARD.png"}
            alt="Platinum Sponsor"
          />
        </div>

        {/* Prize */}
        <h2 className="sponsor-title">Prize Partner</h2>
        <div className="stamp-box">
          <img
            className="prize-partner-logo"
            src={prizepartner}
            alt="Prize partner"
          />
        </div>

        {/* Refreshment */}
        <h2 className="sponsor-title">Refreshment Partner</h2>
        <div className="stamp-box">
          <img
            className="refreshment-partner-logo"
            src={refreshmentpartner}
            alt="Refreshment Partner"
          />
        </div>

        {/* Community */}
        <h2 className="sponsor-title">Community partners</h2>
        <div className="stamp-row">
          <div className="stamp-box">
            <img
            className="sponser-logo"
            src={communitypartner1}
            alt="Community Sponsor"
          />
          </div>
          <div className="stamp-box">
            <img
            className="sponser-logo"
            src={"sponsors/pechacks-1-white-tr.svg"}
            alt="Platinum Sponsor"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
