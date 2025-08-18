import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/lessons.css';

const LessonLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const lessonLinks = [
    { path: '/lessons/python/introduction', label: 'Introduction' },
    { path: '/lessons/python/variables', label: 'Variables & Data Types' },
    { path: '/lessons/python/control-flow', label: 'Control Flow' },
    { path: '/lessons/python/functions', label: 'Functions' },
    { path: '/lessons/python/lists', label: 'Lists & Arrays' },
    { path: '/lessons/python/dictionaries', label: 'Dictionaries' },
    { path: '/lessons/python/classes', label: 'Classes & Objects' },
  ];

  return (
    <div className="lessons-container">
      {/* Hamburger button for mobile */}
      <button 
        className="hamburger-btn"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Python Tutorial</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {lessonLinks.map(link => (
              <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lesson-content">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default LessonLayout;
