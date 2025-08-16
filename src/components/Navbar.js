import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [startLearningOpen, setStartLearningOpen] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);
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
    <nav
      className="navbar"
      style={{
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
      }}
    >
      {/* Left Section */}
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

        <Link
          to="/"
          className="logo"
          style={{
            color: '#FFD700',
            fontWeight: '900',
            fontSize: '1.6rem',
            letterSpacing: '1px',
            textShadow: '0 2px 5px rgba(0,0,0,0.4)',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open('https://www.youtube.com/@codeyatra0605', '_blank', 'noopener,noreferrer');
            setStartLearningOpen(false);
            setTutorialsOpen(false);
          }}
        >
          Code Yatra
        </Link>

          <button className="hamburger" onClick={() => setStartLearningOpen(!startLearningOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            className="nav-links"
            style={{
              display: startLearningOpen ? 'flex' : 'none', // Show links when menu is open
              flexDirection: 'column',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
          {user && <li><Link to="/profile" style={linkStyle}>Profile</Link></li>}
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/lessons" style={linkStyle}>Code lessons</Link></li>
          <li><Link to="/Studyabroad" style={linkStyle}>Studyabroad</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          
        </ul>
      </div>

      {/* Right Section */}
      <div className="nav-right" style={{ display: 'flex', gap: '0.8rem' }}>
        {!user ? (
          <>
            <button style={outlineBtnStyle} onClick={() => navigate("/login")}>Login</button>
            <button style={gradientBtnStyle} onClick={() => navigate("/signup")}>Signup</button>
          </>
        ) : (
          <button style={logoutBtnStyle} onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

/* 🔹 Reusable Styles */
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.3rem 0.6rem',
};
const outlineBtnStyle = {
  padding: '0.5rem 1.2rem',
  background: 'transparent',
  border: '2px solid #FFD700',
  borderRadius: '30px',
  color: '#FFD700',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};
const gradientBtnStyle = {
  padding: '0.5rem 1.2rem',
  background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
  border: 'none',
  borderRadius: '30px',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};
const logoutBtnStyle = {
  ...gradientBtnStyle,
  background: 'linear-gradient(135deg, #43cea2, #185a9d)',
};
const backBtnStyle = {
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
};

export default Navbar;
