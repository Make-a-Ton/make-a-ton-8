import React, { useState } from 'react';
import '/makeaton-website/make-a-ton-8-main/src/styles/TracksPage.css';
import boatImage from '/makeaton-website/make-a-ton-8-main/assets/boat image.png';
import wavesImage from '/makeaton-website/make-a-ton-8-main/assets/waves.png';

const Tracks: React.FC = () => {
  const [openTrack, setOpenTrack] = useState<string | null>(null);
  const [openPrize, setOpenPrize] = useState<number | null>(null);

  const toggleTrack = (name: string) => {
    setOpenTrack(prev => (prev === name ? null : name));
  };

  const togglePrize = (index: number) => {
    setOpenPrize(prev => (prev === index ? null : index));
  };

  return (
    <div className="tracks-container">
      <div className="tracks-content">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-box">
            <div className="stat-number">100+</div>
            <div className="stat-label">Participants</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2000+</div>
            <div className="stat-label">Registrations</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Colleges</div>
          </div>
        </div>

        {/* Tracks and Prizes Section */}
        <div className="tracks-prizes-wrapper">
          {/* Tracks Column */}
          <div className="tracks-column">
            <h2 className="section-title">TRACKS</h2>

            {/* SOFTWARE */}
            <div
              className={`track-card clickable ${openTrack === 'software' ? 'active' : ''}`}
              onClick={() => toggleTrack('software')}
            >
              <span>SOFTWARE</span>
            </div>
            {/* <div className={`dropdown-content ${openTrack === 'software' ? 'open' : ''}`}>
              <p>Web apps, mobile apps, AI/ML, data science, SaaS platforms, automation tools, APIs, dashboards, etc.</p>
            </div> */}

            {/* HARDWARE */}
            <div
              className={`track-card clickable ${openTrack === 'hardware' ? 'active' : ''}`}
              onClick={() => toggleTrack('hardware')}
            >
              <span>HARDWARE</span>
            </div>
            {/* <div className={`dropdown-content ${openTrack === 'hardware' ? 'open' : ''}`}>
              <p>IoT, robotics, embedded systems, sensors, electronics, smart devices, hardware prototypes, etc.</p>
            </div> */}

            {/* KIREAP */}
            <div
              className={`track-card clickable ${openTrack === 'kireap' ? 'active' : ''}`}
              onClick={() => toggleTrack('kireap')}
            >
              <span>KIREAP</span>
            </div>
            {/* <div className={`dropdown-content ${openTrack === 'kireap' ? 'open' : ''}`}>
              <p>Innovation, research, experimental ideas, social impact projects, and creative tech solutions.</p>
            </div> */}
          </div>

          {/* Prizes Column */}
          {/* <div className="prizes-column">
            <h2 className="section-title">PRIZES</h2>

            {/* Prize 1 */}
            {/* <div
              className={`prize-card clickable ${openPrize === 0 ? 'active' : ''}`}
              onClick={() => togglePrize(0)}
            >
              <span>Winner</span>
            </div>
            <div className={`dropdown-content ${openPrize === 0 ? 'open' : ''}`}>
              <p>Cash prize, trophies, certificates, goodies, and partner rewards.</p>
            </div>

            {/* Prize 2 */}
            {/* <div
              className={`prize-card clickable ${openPrize === 1 ? 'active' : ''}`}
              onClick={() => togglePrize(1)}
            >
              <span>Runner Up</span>
            </div>
            <div className={`dropdown-content ${openPrize === 1 ? 'open' : ''}`}>
              <p>Goodies, certificates, swags, and exclusive sponsor perks.</p>
            </div>

            {/* Prize 3 */}
            {/* <div
              className={`prize-card clickable ${openPrize === 2 ? 'active' : ''}`}
              onClick={() => togglePrize(2)}
            >
              <span>Special Mentions</span>
            </div>
            <div className={`dropdown-content ${openPrize === 2 ? 'open' : ''}`}>
              <p>Certificates, goodies, and recognition from judges & partners.</p>
            </div>

            {/* Prize 4 */}
            {/* <div
              className={`prize-card clickable ${openPrize === 3 ? 'active' : ''}`}
              onClick={() => togglePrize(3)}
            >
              <span>Track Prizes</span>
            </div>
            <div className={`dropdown-content ${openPrize === 3 ? 'open' : ''}`}>
              <p>Best software, best hardware, and innovation awards with exciting rewards.</p>
            </div>
          </div> */}
        </div>

        {/* Waves Image */}
        <img
          src={boatImage}
          alt="Boat"
          className="boat-image"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        <img
          src={wavesImage}
          alt="Waves"
          className="waves-image"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default Tracks;
