import React from "react";
import "./Prizes.css";

const Prizes: React.FC = () => {
  return (
    <div className="prizes-wrapper">
      {/* Big main prize */}
      <div className="prize-card main">
        <div className="prize-amount">30K</div>
        <div className="prize-title">Best Software Product</div>
      </div>
      <div className="prize-card main">
        <div className="prize-amount">20K</div>
        <div className="prize-title">Best Hardware Product</div>
      </div>

      {/* Other prizes */}
      <div className="prizes-grid">
        <div className="prize-card small">
          <div className="prize-amount">10K</div>
          <div className="prize-title">Best Product-KIREAP</div>
        </div>

        <div className="prize-card small">
          <div className="prize-amount">10K</div>
          <div className="prize-title">Runner Up</div>
        </div>

        <div className="prize-card small">
          <div className="prize-amount">10K</div>
          <div className="prize-title">Hack4CUSAT</div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
