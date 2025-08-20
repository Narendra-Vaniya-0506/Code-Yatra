import React, { useState, useEffect, useRef, useCallback } from 'react';
import './lessons.css';

export default function LessonLayout({
  title,
  subtitle,
  breadcrumbs = [],
  sidebar,
  prev = null,
  next = null,
  toc = true,
  children
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef(null);
  const sidebarRef = useRef(null);

  // Handle mobile drawer
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Handle navigation link clicks to close sidebar on mobile
  const handleNavLinkClick = useCallback((e) => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile && isSidebarOpen) {
      closeSidebar();
    }
  }, [isSidebarOpen, closeSidebar]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        closeSidebar();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen, closeSidebar]);

  // Handle focus trap in drawer
  useEffect(() => {
    if (isSidebarOpen && sidebarRef.current) {
      const focusableElements = sidebarRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isSidebarOpen]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scrollspy for active sections
  useEffect(() => {
    if (!toc) return;

    const headings = Array.from(mainRef.current?.querySelectorAll('h2[id], h3[id]') || []);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    headings.forEach(heading => observer.observe(heading));
    return () => headings.forEach(heading => observer.unobserve(heading));
  }, [toc, children]);

  // Smooth scrolling for anchor links and auto-close sidebar
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"], .lesson-sidebar-nav a, .lesson-toc a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      // Handle internal anchor links
      if (href.startsWith('#')) {
        const element = document.getElementById(href.slice(1));
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.style.scrollMargin = '16px';
        }
      }

      // Auto-close sidebar on mobile when clicking any navigation link
      const isMobile = window.innerWidth <= 1024;
      if (isMobile && isSidebarOpen) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isSidebarOpen, closeSidebar]);

  // Auto-generated TOC
  const generateToc = () => {
    if (!toc || !mainRef.current) return null;

    const headings = Array.from(mainRef.current.querySelectorAll('h2[id], h3[id]'));
    if (headings.length === 0) return null;

    return (
      <nav className="lesson-toc" aria-label="Table of contents">
        <h4>On this page</h4>
        <ul>
          {headings.map(heading => (
            <li key={heading.id} className={heading.tagName === 'H3' ? 'sub-item' : ''}>
              <a 
                href={`#${heading.id}`}
                className={activeSection === heading.id ? 'active' : ''}
                aria-current={activeSection === heading.id ? 'true' : undefined}
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className="lesson-layout">
      {/* Reading progress bar */}
      <div 
        className="lesson-progress-bar" 
        style={{ '--progress': `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* Mobile drawer backdrop */}
      {isSidebarOpen && (
        <div 
          className="lesson-drawer-backdrop" 
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Mobile toggle button */}
      <button 
        className="lesson-sidebar-toggle"
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-controls="lesson-sidebar"
        aria-label="Toggle lessons sidebar"
      >
        <span className="sr-only">Lessons</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="lesson-container">
        <aside 
          id="lesson-sidebar"
          ref={sidebarRef}
          className={`lesson-sidebar ${isSidebarOpen ? 'open' : ''}`}
          aria-label="Lesson navigation"
        >
          <div className="lesson-sidebar-content">
            {sidebar}
            {generateToc()}
          </div>
          
          <button 
            className="lesson-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </aside>

        <main 
          id="lesson-main-content"
          ref={mainRef}
          className="lesson-main"
          tabIndex="-1"
        >
          {breadcrumbs.length > 0 && (
            <nav className="lesson-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    {crumb.href ? (
                      <a href={crumb.href}>{crumb.label}</a>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <header className="lesson-header">
            <h1>{title}</h1>
            {subtitle && <p className="lesson-subtitle">{subtitle}</p>}
          </header>

          <div className="lesson-content">
            {children}
          </div>

          {(prev || next) && (
            <nav className="lesson-pagination" aria-label="Lesson navigation">
              {prev && (
                <a href={prev.href} className="lesson-prev">
                  <span className="lesson-nav-label">Previous</span>
                  <span className="lesson-nav-title">{prev.label}</span>
                </a>
              )}
              {next && (
                <a href={next.href} className="lesson-next">
                  <span className="lesson-nav-label">Next</span>
                  <span className="lesson-nav-title">{next.label}</span>
                </a>
              )}
            </nav>
          )}
        </main>
      </div>
    </div>
  );
}

/*
import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function JavaScriptLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>JavaScript Lessons</h3>
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#datatypes">Data Types</a></li>
        <li><a href="#strings">Strings</a></li>
        <li><a href="#arrays">Arrays</a></li>
        <li><a href="#functions">Functions</a></li>
        <li><a href="#modules">Modules</a></li>
        <li><a href="#oop">OOP</a></li>
        <li><a href="#advanced">Advanced Topics</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="JavaScript Tutorial"
      subtitle="Modern JS, step by step"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "JavaScript" }
      ]}
      sidebar={sidebar}
      prev={{ label: "HTML Lessons", href: "/pages/HTMLLessons/html" }}
      next={{ label: "CSS Lessons", href: "/pages/CSSLessons/css" }}
      toc={true}
    >
      <section id="intro"><h2>Introduction</h2><p>...</p></section>
      <section id="datatypes"><h2>Data Types</h2><p>...</p></section>
      <section id="strings"><h2>Strings</h2><p>...</p></section>
      <section id="arrays"><h2>Arrays</h2><p>...</p></section>
      <section id="functions"><h2>Functions</h2><p>...</p></section>
      <section id="modules"><h2>Modules</h2><p>...</p></section>
      <section id="oop"><h2>OOP</h2><p>...</p></section>
      <section id="advanced"><h2>Advanced Topics</h2><p>...</p></section>
    </LessonLayout>
  );
}
*/
