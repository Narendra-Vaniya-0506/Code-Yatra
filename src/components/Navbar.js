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
    navigate(-1); // Go back to previous page
  };

  return (
    <>
      <nav className="navbar">
        {/* Left Section */}
        <div className="nav-left">
          {/* Back Button */}
          <button onClick={handleGoBack} className="back-btn" title="Go back to previous page">
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

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {user && <li><Link to="/profile">Profile</Link></li>}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Code lessons</Link></li>
            <li><Link to="/Studyabroad">Studyabroad</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="nav-right">
          {!user ? (
            <>
              <button className="outline-btn" onClick={() => navigate("/login")}>Login</button>
              <button className="gradient-btn" onClick={() => navigate("/signup")}>Signup</button>
            </>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>

        {/* Hamburger Menu (mobile only) */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Inline CSS for Navbar */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95));
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          color: #FFD700;
          font-weight: 900;
          font-size: 1.6rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.4);
          cursor: pointer;
          text-decoration: none;
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

        .outline-btn {
          padding: 0.5rem 1.2rem;
          background: transparent;
          border: 2px solid #FFD700;
          border-radius: 30px;
          color: #FFD700;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .outline-btn:hover {
          background: #FFD700;
          color: #000;
        }

        .gradient-btn {
          padding: 0.5rem 1.2rem;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          border: none;
          border-radius: 30px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gradient-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.4);
        }

        .logout-btn {
          padding: 0.5rem 1.2rem;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          border: none;
          border-radius: 30px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .back-btn {
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          min-height: 36px;
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
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            right: 15px;
            flex-direction: column;
            background: rgba(44,62,80,0.95);
            padding: 1rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            width: 200px;
          }
          .nav-links.open {
            display: flex;
          }

          .hamburger {
            display: flex;
          }

          .nav-right {
            display: none; /* hide login/signup buttons in mobile for clean look */
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
