import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/lessons.css';

const LessonLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const lessonLinks = [
    { path: '/lessons/python/introduction', label: 'Introduction' },
    
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
