import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>
      <div
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
        <a
          href="https://upsidedown.makeaton.in"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
          onClick={() => setMenuOpen(false)}
        >
          Upside Down Hacknight
        </a>
        <Link to="/ca" className="menu-item" onClick={() => setMenuOpen(false)}>
          Campus Ambassador
        </Link>
        <Link
          to="/gallery"
          className="menu-item"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/newsletter"
          className="menu-item"
          onClick={() => setMenuOpen(false)}
        >
          Newsletter
        </Link>
        <span className="menu-item menu-item-coming-soon">
          Projects made at MAT
          <span className="coming-soon-tooltip">Coming Soon</span>
        </span>
      </div>
    </nav>
  );
}
