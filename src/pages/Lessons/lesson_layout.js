import React, { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";

// --- Styles Component ---
const LessonStyles = () => (
  <style>{`
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
      --content-max-width: 800px;
      --header-height: 60px;
      --border-radius: 0.375rem;
      --transition-normal: 250ms ease;
    }

    /* Prevents background scroll when mobile sidebar is open */
    .no-scroll {
      overflow: hidden;
      height: 100vh;
    }

    /* --- Base Layout --- */
    .lesson-container {
      display: grid;
      grid-template-columns: 1fr;
      min-height: 100vh;
      font-family: var(--font-family-base);
      color: var(--color-text);
      background: var(--color-background);
    }

    /* --- Sidebar --- */
    .lesson-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: var(--sidebar-width);
      height: 100%;
      background: var(--color-background);
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
      padding: var(--spacing-lg) var(--spacing-md);
    }
    .lesson-header {
      display: flex;
      align-items: center;
      padding: 0 var(--spacing-md);
      border-bottom: 1px solid var(--color-border);
      height: var(--header-height);
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
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
      flex-wrap: wrap;
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
    .lesson-breadcrumbs a[aria-current="page"] {
      color: var(--color-primary);
      font-weight: 600;
    }
    .lesson-breadcrumbs a:hover {
      color: var(--color-primary);
    }

    /* --- Mobile Drawer Backdrop --- */
    .lesson-drawer-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    /* --- Desktop Layout (>=1024px) --- */
    @media (min-width: 1024px) {
      .lesson-container {
        grid-template-columns: var(--sidebar-width) 1fr;
      }
      .lesson-sidebar {
        position: sticky;
        transform: translateX(0);
        z-index: 10;
      }
      .lesson-sidebar-toggle,
      .lesson-header,
      .lesson-drawer-backdrop {
        display: none;
      }
    }
  `}</style>
);

// SVG icon for the mobile sidebar toggle
const MenuIcon = React.memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
));

export default function LessonLayout({ title, breadcrumbs = [], sidebar, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isSidebarOpen) closeSidebar();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.classList.toggle("no-scroll", isSidebarOpen);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("no-scroll");
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
    <div className={clsx("lesson-layout", { "sidebar-open": isSidebarOpen })}>
      <LessonStyles />
      {isSidebarOpen && (
        <div className="lesson-drawer-backdrop" onClick={closeSidebar} aria-hidden="true" />
      )}
      <div className="lesson-container">
        {/* Sidebar */}
        <aside
          id="lesson-sidebar"
          ref={sidebarRef}
          className="lesson-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Lesson navigation"
        >
          <div className="lesson-sidebar-content">{sidebar}</div>
        </aside>

        {/* Main */}
        <main id="lesson-main-content" className="lesson-main">
          <header className="lesson-header">
            <button
              className="lesson-sidebar-toggle"
              onClick={toggleSidebar}
              aria-expanded={isSidebarOpen}
              aria-controls="lesson-sidebar"
              aria-label="Toggle sidebar"
            >
              <MenuIcon />
            </button>
            <div className="lesson-header-content">
              <h2>{title}</h2>
            </div>
          </header>

          <div className="lesson-content-wrapper">
            {breadcrumbs.length > 0 && (
              <nav className="lesson-breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index}>
                      {crumb.href ? (
                        <a
                          href={crumb.href}
                          aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
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
