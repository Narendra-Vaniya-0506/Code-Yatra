import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/lessons.css';

const LessonLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const lessonLinks = [
    { path: '/lessons/introduction', label: 'Introduction' },
    { path: '/lessons/data-types', label: 'Data Types' },
    { path: '/lessons/strings', label: 'Strings' },
    { path: '/lessons/loops', label: 'Loops' },
    { path: '/lessons/functions', label: 'Functions' },
    { path: '/lessons/oops', label: 'OOPS' },
  ];

  return (
    <div className="lesson-layout">
      <header className="lesson-header">
        <h1>Code Yatra</h1>
        <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          &#9776;
        </button>
      </header>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          {lessonLinks.map(link => (
            <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path} onClick={() => setIsSidebarOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <main className="lesson-content">
        {children}
      </main>
    </div>
  );
};

export default LessonLayout;
