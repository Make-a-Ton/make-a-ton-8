import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./TracksPage.css";
import boatImage from "../../assets/boat image.png";
import wavesImage from "../../assets/waves.png";

const Tracks: React.FC = () => {
  const [openTrack, setOpenTrack] = useState<string | null>(null);
  // const [openPrize, setOpenPrize] = useState<number | null>(null);

  const toggleTrack = (name: string) => {
    setOpenTrack((prev) => (prev === name ? null : name));
  };

  // const togglePrize = (index: number) => {
  //   setOpenPrize((prev) => (prev === index ? null : index));
  // };

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stats = statsRef.current?.querySelectorAll(".stat-number");
          if (stats) {
            stats.forEach((stat) => {
              const targetText = stat.textContent || "";
              const targetValue = parseInt(targetText.replace(/\D/g, ""), 10);
              const suffix = targetText.replace(/[0-9]/g, ""); // Extract non-numeric characters (like +)

              if (!isNaN(targetValue)) {
                const obj = { value: 0 };
                gsap.to(obj, {
                  value: targetValue,
                  duration: 2,
                  ease: "power2.out",
                  onUpdate: () => {
                    stat.textContent = `${Math.floor(obj.value)}${suffix}`;
                  },
                });
              }
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tracks-container">
      <div className="tracks-content">
        {/* Stats Section */}
        <div className="stats-section" ref={statsRef}>
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

        {/* Tracks Section */}
        <div className="tracks-prizes-wrapper">
          <div className="tracks-column">
            <h2 className="section-title">TRACKS</h2>

            <div
              className={`track-card clickable ${openTrack === "software" ? "active" : ""}`}
              onClick={() => toggleTrack("software")}
            >
              <span>SOFTWARE</span>
            </div>

            <div
              className={`track-card clickable ${openTrack === "hardware" ? "active" : ""}`}
              onClick={() => toggleTrack("hardware")}
            >
              <span>HARDWARE</span>
            </div>

            <div
              className={`track-card clickable ${openTrack === "kireap" ? "active" : ""}`}
              onClick={() => toggleTrack("kireap")}
            >
              <span>KIREAP</span>
            </div>
          </div>
        </div>

        {/* Prizes Column */}
        {/* <div className="prizes-column">
            <h2 className="section-title">PRIZES</h2>

            {/* Prize 1 */}

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
