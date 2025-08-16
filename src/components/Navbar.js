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
    setMenuOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Left: back button */}
        <button onClick={handleGoBack} className="back-btn" title="Go back">
          Back
        </button>

        {/* Center: logo */}
        <Link
          to="/"
          className="logo"
          onClick={() => {
            window.open('https://www.youtube.com/@codeyatra0605', '_blank', 'noopener,noreferrer');
            setMenuOpen(false);
          }}
        >
          Code Yatra
        </Link>

        {/* Right: hamburger */}
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {user && <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>}
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/lessons" onClick={closeMenu}>Code lessons</Link></li>
        <li><Link to="/Studyabroad" onClick={closeMenu}>Studyabroad</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        {!user ? (
          <>
            <li><button className="outline-btn" onClick={() => { navigate("/login"); closeMenu(); }}>Login</button></li>
            <li><button className="gradient-btn" onClick={() => { navigate("/signup"); closeMenu(); }}>Signup</button></li>
          </>
        ) : (
          <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
        )}
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
          background: linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95));
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 60px;
        }

        .logo {
          color: #FFD700;
          font-weight: 900;
          font-size: 1.3rem;
          text-shadow: 0 2px 5px rgba(0,0,0,0.4);
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Hamburger */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1100;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Nav links */
        .nav-links {
          display: flex; /* Show links by default */
          flex-direction: column;
          gap: 1rem;
          list-style: none;
          padding: 1rem;
          margin: 0;
          background: rgba(44,62,80,0.98);
          width: 100%;
          text-align: center;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex; /* Show links in a row on larger screens */
            flex-direction: row;
            justify-content: space-around;
          }
          .hamburger {
            display: none; /* Hide hamburger on larger screens */
          }
        }
        .nav-links.open {
          display: flex;
        }
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #FFD700;
        }

        /* Buttons inside menu */
        .outline-btn, .gradient-btn, .logout-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 0.5rem;
        }
        .outline-btn {
          background: transparent;
          border: 2px solid #FFD700;
          color: #FFD700;
        }
        .outline-btn:hover {
          background: #FFD700;
          color: #000;
        }
        .gradient-btn {
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          border: none;
          color: #fff;
        }
        .logout-btn {
          background: linear-gradient(135deg, #43cea2, #185a9d);
          border: none;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Navbar;
