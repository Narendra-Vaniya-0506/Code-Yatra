import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/python/introduction' },
  { id: 'data-types', title: 'Python Data Types & Operators', path: '/lessons/python/data-types' },
  { id: 'strings', title: 'Python Strings', path: '/lessons/python/strings' },
  { id: 'lists', title: 'Python Lists', path: '/lessons/python/lists' },
  { id: 'tuples', title: 'Python Tuples', path: '/lessons/python/tuples' },
  { id: 'sets', title: 'Python Sets', path: '/lessons/python/sets' },
  { id: 'dictionaries', title: 'Python Dictionaries', path: '/lessons/python/dictionaries' },
  { id: 'conditionals', title: 'Conditional Statements', path: '/lessons/python/conditionals' },
  { id: 'loops', title: 'Python Loops', path: '/lessons/python/loops' },
  { id: 'functions', title: 'Python Functions', path: '/lessons/python/functions' },
  { id: 'modules', title: 'Python Modules', path: '/lessons/python/modules' },
  { id: 'oops', title: 'Python OOPS', path: '/lessons/python/oops' },
  { id: 'advanced', title: 'Advanced Topics', path: '/lessons/python/advanced' },
  { id: 'file-handling', title: 'File Handling', path: '/lessons/python/file-handling' },
];

export default function PythonLessons() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState('introduction');
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lessonId = pathParts[pathParts.length - 1];
    if (lessonId && lessons.find(l => l.id === lessonId)) {
      setActiveLesson(lessonId);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson.id);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const getLessonContent = () => {
    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    const contentMap = {
      'introduction': {
        title: 'Welcome to Python Programming',
        content: (
          <div>
            <h2 className="text-3xl font-bold mb-4">Introduction to Python</h2>
            <p className="mb-4">Python is a versatile programming language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and more.</p>
            <h3 className="text-xl font-semibold mb-2">What you'll learn:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Basic Python syntax</li>
              <li>Variables and data types</li>
              <li>Control structures</li>
              <li>Functions and modules</li>
              <li>Object-oriented programming</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800"><strong>Pro Tip:</strong> Practice coding daily to improve your Python skills!</p>
            </div>
          </div>
        )
      },
      'data-types': {
        title: 'Python Data Types & Operators',
        content: (
          <div>
            <h2 className="text-3xl font-bold mb-4">Data Types & Operators</h2>
            <p className="mb-4">Python has several built-in data types including numbers, strings, lists, tuples, dictionaries, and sets.</p>
            <h3 className="text-xl font-semibold mb-2">Basic Data Types:</h3>
            <ul className="list-disc list-inside mb-4">
              <li><strong>int:</strong> Whole numbers (e.g., 1, 2, 100)</li>
              <li><strong>float:</strong> Decimal numbers (e.g., 3.14, 2.5)</li>
              <li><strong>str:</strong> Text strings (e.g., "Hello", 'Python')</li>
              <li><strong>bool:</strong> True or False values</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Operators:</h3>
            <ul className="list-disc list-inside mb-4">
              <li><strong>+</strong> Addition</li>
              <li><strong>-</strong> Subtraction</li>
              <li><strong>*</strong> Multiplication</li>
              <li><strong>/</strong> Division</li>
              <li><strong>%</strong> Modulus</li>
            </ul>
          </div>
        )
      }
    };

    return contentMap[lesson.id] || {
      title: lesson.title,
      content: <p>Content for {lesson.title} coming soon...</p>
    };
  };

  const lessonContent = getLessonContent();

  return (
    <div className="lessons-container">
      {/* Sidebar */}
      <aside className={`sidebar-lessons ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Python Lessons</h2>
          {isMobile && (
            <button onClick={toggleSidebar} className="text-white" style={{float: 'right'}}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <button
                  onClick={() => handleLessonClick(lesson)}
                  className={activeLesson === lesson.id ? 'active' : ''}
                >
                  <span>{lesson.title}</span>
                  {activeLesson === lesson.id && (
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="lessons-main">
        {/* Header */}
        <header className="lessons-header">
          <div className="lessons-header-content">
            <div style={{display: 'flex', alignItems: 'center'}}>
              {isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="hamburger-btn"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
              <h1 className="lessons-title">{lessonContent?.title || 'Python Lessons'}</h1>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="lessons-content">
          <div className="content-wrapper">
            {lessonContent?.content}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="sidebar-overlay show"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
