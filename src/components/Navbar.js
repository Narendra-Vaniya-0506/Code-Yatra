import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [startLearningOpen, setStartLearningOpen] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setStartLearningOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (startLearningOpen && !event.target.closest('.nav-left') && !event.target.closest('.hamburger')) {
        setStartLearningOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [startLearningOpen]);

  return (
    <nav
      style={{
        background: 'linear-gradient(135deg, rgba(44,62,80,0.85), rgba(44,62,80,0.95))',
        backdropFilter: 'blur(12px)',
        padding: window.innerWidth <= 768 ? '0.8rem 1rem' : '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: '70px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section */}
      <div className="nav-left" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem'
      }}>
        <Link
          to="/"
          style={{
            color: '#FFD700',
            fontWeight: '900',
            fontSize: isMobile ? '1.4rem' : '1.6rem',
            letterSpacing: '1px',
            textShadow: '0 2px 5px rgba(0,0,0,0.4)',
            cursor: 'pointer',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open('https://www.youtube.com/@codeyatra0605', '_blank', 'noopener,noreferrer');
            setStartLearningOpen(false);
            setTutorialsOpen(false);
          }}
        >
          Code Yatra
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <ul style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          marginLeft: 'auto'
        }}>
          {user && <li><Link to="/profile" style={linkStyle} onClick={() => setStartLearningOpen(false)}>Profile</Link></li>}
          <li><Link to="/" style={linkStyle} onClick={() => setStartLearningOpen(false)}>Home</Link></li>
          <li><Link to="/lessons" style={linkStyle} onClick={() => setStartLearningOpen(false)}>Code lessons</Link></li>
          <li><Link to="/Studyabroad" style={linkStyle} onClick={() => setStartLearningOpen(false)}>Studyabroad</Link></li>
          <li><Link to="/contact" style={linkStyle} onClick={() => setStartLearningOpen(false)}>Contact</Link></li>
        </ul>
      )}

      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button 
          className="hamburger"
          onClick={() => setStartLearningOpen(!startLearningOpen)} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '30px',
            height: '25px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            zIndex: 1001
          }}
        >
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#FFD700',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#FFD700',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#FFD700',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
        </button>
      )}

      {/* Right Section - Desktop */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          {!user ? (
            <>
              <button style={outlineBtnStyle} onClick={() => navigate("/login")}>Login</button>
              <button style={gradientBtnStyle} onClick={() => navigate("/signup")}>Signup</button>
            </>
          ) : (
            <button style={logoutBtnStyle} onClick={handleLogout}>Logout</button>
          )}
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && startLearningOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(44,62,80,0.98)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 1000,
          padding: '1rem 0',
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            {user && <li><Link to="/profile" style={mobileLinkStyle} onClick={() => setStartLearningOpen(false)}>Profile</Link></li>}
            <li><Link to="/" style={mobileLinkStyle} onClick={() => setStartLearningOpen(false)}>Home</Link></li>
            <li><Link to="/lessons" style={mobileLinkStyle} onClick={() => setStartLearningOpen(false)}>Code lessons</Link></li>
            <li><Link to="/Studyabroad" style={mobileLinkStyle} onClick={() => setStartLearningOpen(false)}>Studyabroad</Link></li>
            <li><Link to="/contact" style={mobileLinkStyle} onClick={() => setStartLearningOpen(false)}>Contact</Link></li>
            <li style={{ marginTop: '1rem' }}>
              {!user ? (
                <div style={{ display: 'flex', gap: '0.8rem', flexDirection: 'column', alignItems: 'center' }}>
                  <button style={{...outlineBtnStyle, width: '120px'}} onClick={() => {navigate("/login"); setStartLearningOpen(false);}}>Login</button>
                  <button style={{...gradientBtnStyle, width: '120px'}} onClick={() => {navigate("/signup"); setStartLearningOpen(false);}}>Signup</button>
                </div>
              ) : (
                <button style={{...logoutBtnStyle, width: '120px'}} onClick={() => {handleLogout(); setStartLearningOpen(false);}}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      )}
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
const mobileLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  display: 'block',
  width: '100%',
  textAlign: 'center',
  transition: 'color 0.3s ease',
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
