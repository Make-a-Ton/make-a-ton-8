import "./Gallery.css";
import img1 from "../assets/gallery-images/MakeATon 8.0-1024.jpg";
import img2 from "../assets/gallery-images/MakeATon 8.0-1119.jpg";
import img3 from "../assets/gallery-images/MakeATon 8.0-1180.jpg";
import img4 from "../assets/gallery-images/MakeATon 8.0-1193.jpg";

import img5 from "../assets/gallery-images/MakeATon 8.0-1205.jpg";
import img6 from "../assets/gallery-images/MakeATon 8.0-1288.jpg";
import img7 from "../assets/gallery-images/full fam.jpg";
import img8 from "../assets/gallery-images/fun zone.jpg";

import img9 from "../assets/gallery-images/hoogo.jpg";
import img10 from "../assets/gallery-images/MakeATon 8.0-171 (1).jpg";
import img11 from "../assets/gallery-images/MakeATon 8.0-1858.jpg";
import img12 from "../assets/gallery-images/MakeATon 8.0-200.jpg";

import img13 from "../assets/gallery-images/MakeATon 8.0-2121.jpg";
import img14 from "../assets/gallery-images/MakeATon 8.0-215.jpg";
import img15 from "../assets/gallery-images/MakeATon 8.0-2298.jpg";
import img16 from "../assets/gallery-images/MakeATon 8.0-25.jpg";

const galleryImages1 = [img1, img2, img3, img4];
const galleryImages2 = [img5, img6, img7, img8];
const galleryImages3 = [img9, img10, img11, img12];
const galleryImages4 = [img13, img14, img15, img16];

import wavesImage from "../assets/waves.png";

export default function Gallery() {
  return (
    <div className="gallery-section">
      <img 
        src={wavesImage} 
        alt="Waves transition" 
        className="gallery-waves-image" 
      />
      <h2 className="gallery-title">Memories</h2>
      <div className="gallery-container">
        {/* Column 1 - Scrolling Up */}
        <div className="gallery-column column-up">
          <div className="gallery-track">
            {[...galleryImages1, ...galleryImages1].map((src, index) => (
              <div key={`col1-${index}`} className="gallery-item">
                <img src={src} alt={`Gallery ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Scrolling Down */}
        <div className="gallery-column column-down">
          <div className="gallery-track">
            {[...galleryImages2, ...galleryImages2].map((src, index) => (
              <div key={`col2-${index}`} className="gallery-item">
                <img src={src} alt={`Gallery ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 - Scrolling Up */}
        <div className="gallery-column column-up">
          <div className="gallery-track">
            {[...galleryImages3, ...galleryImages3].map((src, index) => (
              <div key={`col3-${index}`} className="gallery-item">
                <img src={src} alt={`Gallery ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 4 - Scrolling Down */}
        <div className="gallery-column column-down">
          <div className="gallery-track">
            {[...galleryImages4, ...galleryImages4].map((src, index) => (
              <div key={`col4-${index}`} className="gallery-item">
                <img src={src} alt={`Gallery ${index}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a 
        href="https://photos.google.com/share/AF1QipMHPnbF1ETBky0r3r9Nn_8v0YEncMQw9B8-BUtGiLFAPdtSZvuMjs55beNosJ-8mA?key=UVJVTVpDMWpqaERqcmpIUGJxZ0xJajBrcUlsZWNB" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="gallery-view-more-btn"
      >
        View More
      </a>
    </div>
  );
}
