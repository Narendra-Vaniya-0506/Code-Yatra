import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/javascript/introduction' },
  { id: 'variables', title: 'Variables & Data Types', path: '/lessons/javascript/variables' },
  { id: 'functions', title: 'Functions', path: '/lessons/javascript/functions' },
  { id: 'objects', title: 'Objects', path: '/lessons/javascript/objects' },
  { id: 'arrays', title: 'Arrays', path: '/lessons/javascript/arrays' },
  { id: 'dom-manipulation', title: 'DOM Manipulation', path: '/lessons/javascript/dom-manipulation' },
  { id: 'events', title: 'Events', path: '/lessons/javascript/events' },
  { id: 'async-programming', title: 'Async Programming', path: '/lessons/javascript/async' },
  { id: 'es6-features', title: 'ES6+ Features', path: '/lessons/javascript/es6' },
  { id: 'advanced', title: 'Advanced Topics', path: '/lessons/javascript/advanced' },
];

export default function JavaScriptLessons() {
  const [activeLesson, setActiveLesson] = useState('introduction');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lessonId = pathParts[pathParts.length - 1];
    if (lessonId && lessons.find(l => l.id === lessonId)) {
      setActiveLesson(lessonId);
    }
  }, [location.pathname]);

  const getLessonContent = () => {
    const lesson = lessons.find(l => l.id === activeLesson);
    if (!lesson) return null;

    const contentMap = {
      'introduction': {
        title: 'Welcome to JavaScript Programming',
        content: (
          <div>
            <h1>Introduction to JavaScript</h1>
            <p>JavaScript is a versatile programming language that powers the interactive web. It's the language of the web browser.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>JavaScript fundamentals</li>
              <li>DOM manipulation and events</li>
              <li>Asynchronous programming</li>
              <li>Modern ES6+ features</li>
              <li>Advanced JavaScript concepts</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> JavaScript is essential for modern web development!</p>
            </div>
          </div>
        )
      },
      'variables': {
        title: 'Variables & Data Types',
        content: (
          <div>
            <h1>Variables & Data Types</h1>
            <p>JavaScript has dynamic typing and several data types.</p>
            <h2>Data Types:</h2>
            <ul>
              <li><strong>Number:</strong> Both integers and floating point</li>
              <li><strong>String:</strong> Text data</li>
              <li><strong>Boolean:</strong> true or false</li>
              <li><strong>Object:</strong> Key-value pairs</li>
              <li><strong>Array:</strong> Ordered list of values</li>
              <li><strong>null:</strong> Intentional absence of value</li>
              <li><strong>undefined:</strong> Uninitialized variable</li>
            </ul>
            <h2>Variable Declarations:</h2>
            <ul>
              <li><strong>let:</strong> Block-scoped variable</li>
              <li><strong>const:</strong> Block-scoped constant</li>
              <li><strong>var:</strong> Function-scoped variable (legacy)</li>
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
    <LessonLayout>
      <div className="lesson-content-wrapper">
        <h1>{lessonContent?.title || 'JavaScript Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
