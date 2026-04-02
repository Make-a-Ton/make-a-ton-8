import { useMediaQuery } from "../../src/hooks/useMediaQuery";

export default function AboutText() {
  const isDesktop = useMediaQuery("(min-width: 1201px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1200px)");
  //const isMobile = useMediaQuery("(max-width: 768px)");

  let modifier = "";
  if (isDesktop) modifier = "about-text--desktop";
  else if (isTablet) modifier = "about-text--tablet";
  else modifier = "about-text--mobile";

  return (
    <div className={`about-text ${modifier}`}>
      <p>
        For the past seven editions, we’ve brought together{" "}
        <span className="about-highlight">dreamers</span>,{" "}
        <span className="about-highlight">builders</span>, and{" "}
        <span className="about-highlight">innovators</span> to create magic —
        and if you ask our hackers, they’ll tell you it’s been unforgettable
        every single time. Each year, Make-a-Ton evolves with fresh ideas, new
        energy, and bold experiments.
      </p>
      <p>
        This year, we’re rebranding and adding a{" "}
        <span className="about-accent">special twist</span> — a celebration of{" "}
        <span className="about-accent">Kerala’s vibrant culture</span> woven
        into the festival of innovation. Because why not blend tradition with
        tomorrow?
      </p>
      <p>
        Recognized as{" "}
        <span className="about-chip">South India's Largest Hackathon</span>,
        Make-A-Ton is where technology, creativity, and community collide. With
        an exciting prize pool, cutting-edge gadgets, and coveted internship
        opportunities on the line, this is more than a hackathon — it’s{" "}
        <span className="about-accent">history in the making</span>.
      </p>
      <p>
        Proudly organized by CITTIC, Make-A-Ton 2026 is back, bigger and
        brighter than ever. And we want{" "}
        <span className="about-highlight">YOU</span> to be a part of it.
      </p>
    </div>
  );
}
