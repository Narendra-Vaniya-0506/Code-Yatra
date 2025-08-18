import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/lessons.css';

const LessonLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const lessonLinks = [
    { path: '/lessons/python/introduction', label: 'Introduction' },
    { path: '/lessons/python/variables', label: 'Variables & Data Types' },
    { path: '/lessons/python/strings', label: 'Strings & Methods' },
    { path: '/lessons/python/lists', label: 'Lists & Tuples' },
    { path: '/lessons/python/dictionaries', label: 'Dictionaries & Sets' },
    { path: '/lessons/python/conditionals', label: 'Conditional Statements' },
    { path: '/lessons/python/loops', label: 'Loops (for & while)' },
    { path: '/lessons/python/functions', label: 'Functions' },
    { path: '/lessons/python/oops', label: 'Object-Oriented Programming' },
    { path: '/lessons/python/file-handling', label: 'File Handling' },
    { path: '/lessons/python/exceptions', label: 'Exception Handling' },
    { path: '/lessons/python/modules', label: 'Modules & Packages' },
    { path: '/lessons/python/regex', label: 'Regular Expressions' },
    { path: '/lessons/python/database', label: 'Database Connectivity' },
    { path: '/lessons/python/flask', label: 'Web Development with Flask' }
  ];

  return (
    <div className="lesson-layout">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      {/* Header */}
      <header className="lesson-header">
        <div className="header-content">
          <button 
            className="hamburger-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="site-title">Code Yatra</h1>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Python Tutorial</h2>
          <button 
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
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
