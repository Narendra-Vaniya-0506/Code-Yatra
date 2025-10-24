import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { UnderlineLink, fadeInUp, staggerContainer } from './MotionPrimitives';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [startLearningOpen, setStartLearningOpen] = useState(false);
  const [tutorialsOpen, setTutorialsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

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
    <motion.nav
      className="nav-linear linear-container"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{
        background: 'rgba(255,255,255,0.4)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        backdropFilter: 'saturate(180%) blur(20px)',
        padding: window.innerWidth <= 768 ? '0.8rem 1rem' : '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '70px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section - Logo + Brand */}
      <div className="nav-left" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }} onClick={() => setStartLearningOpen(false)}>
          <img src={process.env.PUBLIC_URL + '/Logo.jpeg'} alt="Code Yatra" style={{ width: 28, height: 28, borderRadius: '50%' }} />
          <span style={{ color: '#111827', fontWeight: 800, fontSize: isMobile ? '1.1rem' : '1.2rem', letterSpacing: '0.2px' }}>Code Yatra</span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <motion.ul variants={fadeInUp} style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.4rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          marginLeft: '0',
          justifyContent: 'flex-start'
        }}>
          {user && (
            <li>
              <Link to="/dashboard" style={{...linkStyle, color: '#374151'}} onClick={() => setStartLearningOpen(false)}>
                <NavItem label="Dashboard" active={isActive('/dashboard')} />
              </Link>
            </li>
          )}
          <li>
            <Link to="/" style={{...linkStyle, color: '#374151'}} onClick={() => setStartLearningOpen(false)}>
              <NavItem label="Home" active={isActive('/')} />
            </Link>
          </li>
          <li>
            <Link to="/lessons" style={{...linkStyle, color: '#374151'}} onClick={() => setStartLearningOpen(false)}>
              <NavItem label="Code lessons" active={isActive('/lessons')} />
            </Link>
          </li>
          <li>
            <Link to="/projects" style={{...linkStyle, color: '#374151'}} onClick={() => setStartLearningOpen(false)}>
              <NavItem label="Projects" active={isActive('/projects')} />
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{...linkStyle, color: '#374151'}} onClick={() => setStartLearningOpen(false)}>
              <NavItem label="Contact" active={isActive('/contact')} />
            </Link>
          </li>
        </motion.ul>
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
            backgroundColor: '#111827',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#111827',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#111827',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}></span>
        </button>
      )}

      {/* Right Section - Desktop icons */}
      {!isMobile && (
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <button
            aria-label={user ? 'Profile' : 'Login'}
            onClick={() => navigate(user ? '/profile' : '/login')}
            className="btn btn-glass"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer'
            }}
          >
            <FaUser size={14} />
          </button>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && startLearningOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.7)',
          WebkitBackdropFilter: 'saturate(180%) blur(18px)',
          backdropFilter: 'saturate(180%) blur(18px)',
          borderBottom: '1px solid rgba(17,24,39,0.06)',
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
            {user && <li><Link to="/dashboard" style={{...mobileLinkStyle, color: '#111827'}} onClick={() => setStartLearningOpen(false)}>Dashboard</Link></li>}
            <li><Link to="/" style={{...mobileLinkStyle, color: '#111827'}} onClick={() => setStartLearningOpen(false)}>Home</Link></li>
            <li><Link to="/lessons" style={{...mobileLinkStyle, color: '#111827'}} onClick={() => setStartLearningOpen(false)}>Code lessons</Link></li>
            <li><Link to="/projects" style={{...mobileLinkStyle, color: '#111827'}} onClick={() => setStartLearningOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" style={{...mobileLinkStyle, color: '#111827'}} onClick={() => setStartLearningOpen(false)}>Contact</Link></li>
            <li style={{ marginTop: '1rem' }}>
              {!user ? (
                <div style={{ display: 'flex', gap: '0.8rem', flexDirection: 'column', alignItems: 'center' }}>
                  <button className="btn btn-glass" style={{ width: '120px', color: '#000' }} onClick={() => {navigate("/login"); setStartLearningOpen(false);}}>Login</button>
                  <button className="btn btn-primary" style={{ width: '120px', color: '#000' }} onClick={() => {navigate("/signup"); setStartLearningOpen(false);}}>Signup</button>
                </div>
              ) : (
                <button className="btn btn-glass" style={{ width: '120px', color: '#000' }} onClick={() => {handleLogout(); setStartLearningOpen(false);}}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

/* 🔹 Reusable Styles */
const linkStyle = {
  color: '#111827',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
  padding: '0.3rem 0.6rem',
  display: 'block',
};

function NavItem({ label, active }) {
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.3rem 0.6rem',
        borderRadius: 999,
        transition: 'background 200ms ease, color 200ms ease',
        background: active ? 'rgba(17,24,39,0.06)' : 'transparent',
      }}
    >
      {label}
    </span>
  );
}
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
