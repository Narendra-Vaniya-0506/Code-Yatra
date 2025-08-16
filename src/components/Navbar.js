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
        {/* Left section */}
        <div className="nav-left">
          <button onClick={handleGoBack} className="back-btn" title="Go back">
            ←
          </button>
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
        </div>

        {/* Desktop links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {user && <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>}
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/lessons" onClick={closeMenu}>Code lessons</Link></li>
          <li><Link to="/Studyabroad" onClick={closeMenu}>Studyabroad</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Right section */}
        <div className="nav-right">
          {!user ? (
            <>
              <button className="outline-btn" onClick={() => { navigate("/login"); closeMenu(); }}>Login</button>
              <button className="gradient-btn" onClick={() => { navigate("/signup"); closeMenu(); }}>Signup</button>
            </>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>

        {/* Hamburger (mobile only) */}
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center; /* ensures vertical centering */
          padding: 0 1.2rem;
          background: linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95));
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 60px;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .logo {
          color: #FFD700;
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.4);
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center; /* keeps it vertically aligned */
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          padding: 0.3rem 0.6rem;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #FFD700;
        }

        .outline-btn, .gradient-btn, .logout-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 30px;
          font-weight: bold;
          cursor: pointer;
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

        .back-btn {
          padding: 0.4rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        /* Hamburger menu */
        .hamburger {
          display: none;
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

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            flex-direction: column;
            background: rgba(44,62,80,0.98);
            padding: 1rem;
            width: 100%;
            text-align: center;
          }
          .nav-links.open {
            display: flex;
          }

          .hamburger {
            display: flex;
          }

          .nav-right {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
