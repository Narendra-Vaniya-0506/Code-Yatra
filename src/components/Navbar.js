import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Section */}
      <div style={styles.navLeft}>
        <button onClick={handleGoBack} style={styles.backBtn} title="Go back">
          ←
        </button>

        <Link
          to="/"
          style={styles.logo}
          onClick={() => {
            window.open('https://www.youtube.com/@codeyatra0605', '_blank', 'noopener,noreferrer');
            setMenuOpen(false);
          }}
        >
          Code Yatra
        </Link>
      </div>

      {/* Hamburger (mobile only) */}
      <button
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <ul
        style={{
          ...styles.navLinks,
          ...(menuOpen ? styles.navLinksOpen : {}),
        }}
      >
        {user && <li><Link style={styles.link} to="/profile">Profile</Link></li>}
        <li><Link style={styles.link} to="/">Home</Link></li>
        <li><Link style={styles.link} to="/lessons">Code lessons</Link></li>
        <li><Link style={styles.link} to="/Studyabroad">Studyabroad</Link></li>
        <li><Link style={styles.link} to="/contact">Contact</Link></li>
      </ul>

      {/* Right Section */}
      <div style={styles.navRight}>
        {!user ? (
          <>
            <button style={styles.outlineBtn} onClick={() => navigate("/login")}>Login</button>
            <button style={styles.gradientBtn} onClick={() => navigate("/signup")}>Signup</button>
          </>
        ) : (
          <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

/* =========================
   🔹 Inline CSS Styles
========================= */
const styles = {
  navbar: {
    background: 'linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95))',
    backdropFilter: 'blur(12px)',
    padding: '0.8rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logo: {
    color: '#FFD700',
    fontWeight: '900',
    fontSize: '1.6rem',
    letterSpacing: '1px',
    textShadow: '0 2px 5px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLinksOpen: {
    flexDirection: 'column',
    background: '#fff',
    position: 'absolute',
    top: '60px',
    left: 0,
    width: '100%',
    padding: '1rem 0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    borderTop: '1px solid #eee',
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '0.6rem',
  },
  navRight: {
    display: 'flex',
    gap: '0.8rem',
    marginLeft: 'auto',
  },
  outlineBtn: {
    padding: '0.5rem 1.2rem',
    background: 'transparent',
    border: '2px solid #FFD700',
    borderRadius: '30px',
    color: '#FFD700',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  gradientBtn: {
    padding: '0.5rem 1.2rem',
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    border: 'none',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  logoutBtn: {
    padding: '0.5rem 1.2rem',
    background: 'linear-gradient(135deg, #43cea2, #185a9d)',
    border: 'none',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  backBtn: {
    padding: '0.4rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '36px',
    minHeight: '36px',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#fff',
  },
};

/* ✅ Responsive Fix (mobile-only)
   Inline JS can't handle media queries,
   so we add this quick helper in JS.
*/
if (typeof window !== "undefined") {
  const updateResponsive = () => {
    if (window.innerWidth <= 768) {
      styles.navbar.background = '#fff';
      styles.logo.color = '#111';
      styles.hamburger.display = 'block';
      styles.link.color = '#333';
    } else {
      styles.navbar.background = 'linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95))';
      styles.logo.color = '#FFD700';
      styles.hamburger.display = 'none';
      styles.link.color = '#fff';
    }
  };
  window.addEventListener("resize", updateResponsive);
  window.addEventListener("load", updateResponsive);
}

export default Navbar;
