import React, { useState, useEffect, useRef, useCallback } from 'react';

// SVG icon for the mobile sidebar toggle
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function LessonLayout({
  title,
  breadcrumbs = [],
  sidebar,
  children
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);

    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('no-scroll');
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
    <div className={`lesson-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* --- DELETED <LessonStyles /> from here --- */}
      
      {isSidebarOpen && <div className="lesson-drawer-backdrop" onClick={closeSidebar} />}
      <div className="lesson-container">
        <aside id="lesson-sidebar" className="lesson-sidebar">
          <div className="lesson-sidebar-content">
            <div className="lesson-sidebar-nav">
              {sidebar}
            </div>
          </div>
        </aside>
        <main id="lesson-main-content" className="lesson-main">
          <header className="lesson-header">
            <button className="lesson-sidebar-toggle" onClick={toggleSidebar} aria-expanded={isSidebarOpen} aria-controls="lesson-sidebar" aria-label="Toggle sidebar">
              <MenuIcon />
            </button>
            <div className="lesson-header-content">
              <h2>{title}</h2>
            </div>
          </header>
          <div className="lesson-content-wrapper">
            {breadcrumbs.length > 0 && (
              <nav className="lesson-breadcrumbs">
                <ol>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index}>
                      {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="lesson-content">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}