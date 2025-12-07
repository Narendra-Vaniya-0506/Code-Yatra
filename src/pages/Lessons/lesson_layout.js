import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// --- Styles Component ---
// To resolve the build error, the CSS styles are included directly within the layout component.
const LessonStyles = () => (
  <style>{`
    /* --- CSS Variables for Theming --- */
    :root {
      --color-primary: #2563eb;
      --color-background: #ffffff;
      --color-surface: #f8fafc;
      --color-border: #e2e8f0;
      --color-text: #1e293b;
      --color-text-muted: #64748b;
      --spacing-sm: 0.5rem;
      --spacing-md: 1rem;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
      --spacing-2xl: 3rem;
      --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
      --sidebar-width: 280px;
      --content-max-width: 1200px;
      --header-height: 60px;
      --border-radius: 0.375rem;
      --transition-normal: 250ms ease;
    }

    /* Prevents background scroll when mobile sidebar is open */
    body.no-scroll {
      overflow: hidden;
    }

    /* --- Base Layout --- */
    .lesson-container {
      display: grid;
      grid-template-columns: 1fr; /* Mobile-first: single column */
    }

    /* --- Sidebar --- */
    .lesson-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: var(--sidebar-width);
      height: 100vh;
      background-color: var(--color-background);
      border-right: 1px solid var(--color-border);
      transform: translateX(-100%);
      transition: transform var(--transition-normal);
      z-index: 1000;
      overflow-y: auto;
    }
    .lesson-layout.sidebar-open .lesson-sidebar {
      transform: translateX(0);
    }
    .lesson-sidebar-content {
      padding: var(--spacing-lg);
    }

    /* --- Main Content Area --- */
    .lesson-main {
      width: 100%;
      max-width: none; /* Allow it to fill the available space */
      padding: var(--spacing-lg) var(--spacing-md); /* Adjust padding as needed */
    }
    .lesson-header {
      display: flex;
      align-items: center;
      padding: 0 var(--spacing-md);
      border-bottom: 1px solid var(--color-border);
      height: var(--header-height);
      position: sticky;
      top: 0;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      z-index: 100;
    }
    .lesson-header h2 {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin: 0;
    }
    .lesson-sidebar-toggle {
      display: flex;
      background: none;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      padding: var(--spacing-sm);
      margin-right: var(--spacing-sm);
      border-radius: var(--border-radius);
    }
    .lesson-sidebar-toggle:hover {
      background-color: var(--color-surface);
    }

    .lesson-content-wrapper {
      max-width: var(--content-max-width);
      margin: 0 auto;
      padding: var(--spacing-xl) var(--spacing-md);
    }

    /* --- Breadcrumbs --- */
    .lesson-breadcrumbs {
      font-size: var(--font-size-sm);
      margin-bottom: var(--spacing-xl);
    }
    .lesson-breadcrumbs ol {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: var(--spacing-sm);
    }
    .lesson-breadcrumbs li:not(:last-child)::after {
      content: '›';
      margin-left: var(--spacing-sm);
      color: var(--color-text-muted);
    }
    .lesson-breadcrumbs a {
      color: var(--color-text-muted);
      text-decoration: none;
    }
    .lesson-breadcrumbs a:hover {
      color: var(--color-primary);
    }

    /* --- Accordion Sidebar Navigation --- */
    .lesson-sidebar-nav h3 {
      font-size: var(--font-size-base);
      font-weight: 600;
      padding: 0 var(--spacing-md);
      margin: 0 0 var(--spacing-lg) 0;
    }
    .lesson-section {
      margin-bottom: var(--spacing-sm);
    }
    .lesson-section-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: var(--spacing-sm) var(--spacing-md);
      background: none;
      border: none;
      border-radius: var(--border-radius);
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--color-text-muted);
      text-align: left;
      cursor: pointer;
      transition: 150ms ease;
    }
    .lesson-section-toggle:hover {
      background-color: var(--color-surface);
      color: var(--color-text);
    }
    .lesson-section-toggle::after {
      content: '›';
      font-size: 1.5em;
      font-weight: 400;
      transition: transform var(--transition-normal);
      transform: rotate(0deg);
    }
    .lesson-section-toggle.open::after {
      transform: rotate(90deg);
    }
    .lesson-sublist {
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    .lesson-sublist li a {
      display: block;
      padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) var(--spacing-xl);
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: var(--font-size-sm);
      transition: 150ms ease;
    }
    .lesson-sublist li a:hover {
      color: var(--color-text);
    }
    .lesson-sublist li a.active {
      color: var(--color-primary);
      font-weight: 600;
    }

    /* --- Hero Section (Remove card styling, left-align, add bottom border) */
    .lesson-hero {
      text-align: left; /* Change from center to left */
      padding: var(--spacing-2xl) var(--spacing-md);
      background-color: transparent; /* Remove card background */
      border-radius: 0; /* Remove border radius */
      margin-bottom: var(--spacing-2xl);
      border: none; /* Remove all borders */
    }
    .lesson-hero h1 {
      font-size: var(--font-size-3xl);
      font-weight: 700;
      margin: 0 0 var(--spacing-sm) 0;
      border-bottom: 2px solid var(--color-primary); /* Add bottom border */
      padding-bottom: var(--spacing-sm); /* Add padding below border */
    }
    .lesson-hero p {
      font-size: var(--font-size-lg);
      color: var(--color-text-muted);
      max-width: none; /* Remove center alignment constraint */
      margin: 0; /* Remove auto margin */
      text-align: left; /* Ensure left alignment */
    }

    /* --- General Content Styles --- */
    .lesson-content h2 {
      font-size: var(--font-size-2xl);
      font-weight: 600;
      margin: var(--spacing-2xl) 0 var(--spacing-lg);
      border-bottom: 1px solid var(--color-border);
      padding-bottom: var(--spacing-sm);
      scroll-margin-top: 80px; /* Offset for sticky header */
    }

    /* --- Mobile Drawer Backdrop --- */
    .lesson-drawer-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    /* --- Desktop Layout (1024px and wider) --- */
    @media (min-width: 1024px) {
      .lesson-container {
        grid-template-columns: var(--sidebar-width) 1fr;
      }
      .lesson-sidebar {
        position: sticky;
        transform: translateX(0);
        z-index: 10;
      }
      .lesson-sidebar-toggle, .lesson-header, .lesson-drawer-backdrop {
        display: none;
      }
      .lesson-hero h1 {
        font-size: var(--font-size-4xl);
      }
      .lesson-content h2 {
        font-size: var(--font-size-3xl);
      }
    }
  `}</style>
);


// SVG icon for the mobile sidebar toggle
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function LessonLayout({
  title,
  breadcrumbs = [],
  sidebar,
  children,
  lessonId
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { isAuthenticated } = useAuth();



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

      // Add click event listeners to all anchor tags in the sidebar
      const sidebarLinks = sidebarRef.current?.querySelectorAll('a');
      const handleLinkClick = () => {
        closeSidebar();
      };

      if (sidebarLinks) {
        sidebarLinks.forEach(link => {
          link.addEventListener('click', handleLinkClick);
        });
      }

      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.classList.remove('no-scroll');

        // Remove click event listeners from sidebar links
        if (sidebarLinks) {
          sidebarLinks.forEach(link => {
            link.removeEventListener('click', handleLinkClick);
          });
        }
      };
    } else {
      document.body.classList.remove('no-scroll');
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isSidebarOpen, closeSidebar]);



  return (
    <div className={`lesson-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <LessonStyles />
      {isSidebarOpen && <div className="lesson-drawer-backdrop" onClick={closeSidebar} />}
      <div className="lesson-container">
        <aside id="lesson-sidebar" ref={sidebarRef} className="lesson-sidebar">
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
                      {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
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
