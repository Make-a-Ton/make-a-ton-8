import './Organizers.css'
import matLogo from '../assets/MAT new logo.png'

// Organizer data - sorted alphabetically
const organizers = [
  {
    name: 'Adithyan Pramod',
    photo: '/member_photos/adithyan pramod.jpg',
    linkedin: 'https://www.linkedin.com/in/adithyan-pramod/',
    instagram: 'https://www.instagram.com/adithyannpramod/',
  },
  {
    name: 'Adithyan SV',
    photo: '/member_photos/adithyan SV.jpg',
    linkedin: 'https://www.linkedin.com/in/adithyansv/',
    instagram: 'https://www.instagram.com/adithyansv1304/',
  },
  {
    name: 'Afnash Ali',
    photo: '/member_photos/afnash.jpg',
    linkedin: 'https://www.linkedin.com/in/afnash-ali/',
    instagram: 'https://www.instagram.com/_afnashhh._/',
  },
  {
    name: 'Aisha Nama',
    photo: '/member_photos/aisha.jpg',
    linkedin: 'https://www.linkedin.com/in/aisha-nama-06256b253/',
    instagram: 'https://www.instagram.com/aishanama/',
  },
  {
    name: 'Akshay S',
    photo: '/member_photos/akshay.jpg',
    linkedin: 'https://www.linkedin.com/in/akshay-s-730774336/',
    instagram: 'https://www.instagram.com/akshay._.exe/',
  },
  {
    name: 'Ameena Jaliya',
    photo: '/member_photos/Ameena Jaliya.jpg',
    linkedin: 'https://www.linkedin.com/in/ameena-jaliya-00697537a/',
    instagram: 'https://www.instagram.com/ameenajeliya/',
  },
  {
    name: 'Amrutha M',
    photo: '/member_photos/Amrutha.jpg',
    linkedin: 'https://www.linkedin.com/in/amrutha-m-738a78272/',
    instagram: 'https://www.instagram.com/amrutham__/',
  },
  {
    name: 'Anjali Georance',
    photo: '/member_photos/anjali.jpg',
    linkedin: 'https://www.linkedin.com/in/anjali-georance-61b017275/',
    instagram: 'https://www.instagram.com/_anjaligeo_/',
  },
  {
    name: 'Anjana Sankar',
    photo: '/member_photos/anjana.jpg',
    linkedin: 'https://www.linkedin.com/in/anjana-sankar-1ba508243/',
    instagram: 'https://www.instagram.com/_nj_n_rue/',
  },
  {
    name: 'Aryan SV',
    photo: '/member_photos/aryan S V.jpg',
    linkedin: 'https://www.linkedin.com/in/aryan-s-vijayan-a0bb29390/',
    instagram: 'https://www.instagram.com/aryansv_07/',
  },
  {
    name: 'Ashwin Menon',
    photo: '/member_photos/ashwin.jpg',
    linkedin: 'https://www.linkedin.com/in/ashwinmenon502/',
    instagram: 'instagram.com/ashwin.menon',
  },
  {
    name: 'Austin Benny',
    photo: '/member_photos/austin.jpg',
    linkedin: 'https://www.linkedin.com/in/austin-benny-/',
    instagram: 'https://www.instagram.com/austin4_19/',
  },
  {
    name: 'Muhammed Ithban',
    photo: '/member_photos/Ithban.jpg',
    linkedin: 'https://www.linkedin.com/in/ithbanmuhammed/',
    instagram: 'https://www.instagram.com/ithban_mhd/',
  },
  {
    name: 'Jayasurya',
    photo: '/member_photos/jayasurya.jpg',
    linkedin: 'https://www.linkedin.com/in/jayasurya-jayakumar-b4a878252/',
    instagram: 'https://www.instagram.com/jaya._surya/',
  },
  {
    name: 'Jenoo Liju',
    photo: '/member_photos/jenoo.jpg',
    linkedin: 'https://www.linkedin.com/in/jenoo/',
    instagram: 'https://www.instagram.com/jenooliju/',
  },
  {
    name: 'Jude Thomas',
    photo: '/member_photos/jude.jpg',
    linkedin: 'https://www.linkedin.com/in/jude-thomas-3884502b8/',
    instagram: 'https://www.instagram.com/jude.the.dude007/',
  },
  {
    name: 'Kamesh Singh',
    photo: '/member_photos/kamesh singh.jpg',
    linkedin: 'https://www.linkedin.com/in/kamesh-singh-6a5923307/',
    instagram: 'https://www.instagram.com/kamesh_singh_2627/',
  },
  {
    name: 'Megha Suresh',
    photo: '/member_photos/megha suresh.jpg',
    linkedin: 'https://www.linkedin.com/in/megha-suresh-a9a815329/',
    instagram: 'https://www.instagram.com/mehaa.suresh/',
  },
  {
    name: 'Muhsin Ali',
    photo: '/member_photos/muhsin.jpg',
    linkedin: 'https://www.linkedin.com/in/muzin/',
    instagram: 'https://www.instagram.com/muszzin/',
  },
  {
    name: 'Muhsina Beegum',
    photo: '/member_photos/Muhsina Beegum.jpg',
    linkedin: 'https://www.linkedin.com/in/muhsina-beegum/',
    instagram: 'https://www.instagram.com/hey_beeegum/',
  },
  {
    name: 'Rio Roy',
    photo: '/member_photos/Rio Roy.jpg',
    linkedin: 'https://www.linkedin.com/in/rio-roy/',
    instagram: 'https://www.instagram.com/riio_roy/',
  },
  {
    name: 'Rohit MR',
    photo: '/member_photos/rohit m r.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-mr/',
    instagram: 'https://www.instagram.com/rohitrmr07/',
  },
  {
    name: 'Ruvais P',
    photo: '/member_photos/ruvais.jpg',
    linkedin: 'https://www.linkedin.com/in/ruvais-p/',
    instagram: 'https://www.instagram.com/ruvaisp/',
  },
  {
    name: 'Sajad',
    photo: '/member_photos/sajad.jpg',
    linkedin: 'https://www.linkedin.com/in/sajad-hussain-malla-983854274/',
    instagram: 'https://www.instagram.com/aly_sajad_huxain_/',
  },
  {
    name: 'Samir Navas',
    photo: '/member_photos/Samir.jpg',
    linkedin: 'https://www.linkedin.com/in/samir-navas-a6128633b/',
    instagram: 'https://www.instagram.com/_samirnavas_/',
  },
  {
    name: 'Sruthy S',
    photo: '/member_photos/sruthy.jpg',
    linkedin: 'https://www.linkedin.com/in/sruthy-s-b57116298/',
    instagram: 'https://www.instagram.com/sruuwu_/',
  },
]

function Organizers() {
  return (
    <div className="organizers-page">
      {/* Decorative elements */}
      <div className="organizers-bg-pattern"></div>
      <div className="organizers-glow organizers-glow-1"></div>
      <div className="organizers-glow organizers-glow-2"></div>
      <div className="organizers-glow organizers-glow-3"></div>

      {/* Logo */}
      <a href="/" className="organizers-logo-link">
        <img src={matLogo} alt="Make-A-Ton" className="organizers-logo" />
      </a>

      {/* Hero Section - Text above, Group Photo below */}
      <section className="organizers-hero">
        <div className="hero-content">
          <div className="hero-description">
            <p className="hero-tagline">
              The <span className="cursive-text">humans</span> behind the curtain (and occasional chaos).
            </p>
            <p>
              Somehow, between spreadsheets, panic, and questionable group chat ideas, 
              we made things happen.
            </p>
            <p className="hero-italic">Would we do it again? ...unfortunately, yes.</p>
            <p className="hero-cta">
              Want to connect with an organizer that you saw at the Hackathon? 
              Well, scroll down(You're Welcome). 
            </p>
          </div>
        </div>

        <div className="group-photo-container">
          <div className="corrugated-edge corrugated-edge-top"></div>
          <div className="group-photo-wrapper">
            <img 
              src="/organizers/group.png" 
              alt="Make-A-Ton Organizing Team" 
              className="group-photo"
            />
            <div className="group-photo-overlay"></div>
          </div>
          <div className="corrugated-edge corrugated-edge-bottom"></div>
        </div>

        <div className="scroll-indicator">
          <span>Check 'em out</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Individual Organizers Section */}
      <section className="organizers-grid-section">
        <h2 className="section-title">Meet The Team</h2>
        <div className="organizers-grid">
          {organizers.map((organizer, index) => (
            <div key={index} className="organizer-card">
              <div className="organizer-photo-container">
                <img
                  src={organizer.photo}
                  alt={organizer.name}
                  className="organizer-photo"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&background=5c0023&color=E8DBCC&size=200`
                  }}
                />
                <div className="organizer-photo-glow"></div>
              </div>
              <div className="organizer-info">
                <h3 className="organizer-name">{organizer.name}</h3>
                {(organizer.linkedin || organizer.instagram) && (
                  <div className="organizer-socials">
                    {organizer.linkedin && (
                      <a
                        href={organizer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn linkedin"
                        aria-label={`${organizer.name}'s LinkedIn`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {organizer.instagram && (
                      <a
                        href={organizer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn instagram"
                        aria-label={`${organizer.name}'s Instagram`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="organizers-footer">
        <p>Watchu lookin' at? There ain't no footers here.</p>
      </footer>
    </div>
  )
}

export default Organizers
