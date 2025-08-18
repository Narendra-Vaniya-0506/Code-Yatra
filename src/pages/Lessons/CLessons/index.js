import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/c/introduction' },
  { id: 'data-types', title: 'C Data Types & Operators', path: '/lessons/c/data-types' },
  { id: 'variables', title: 'Variables in C', path: '/lessons/c/variables' },
  { id: 'arrays', title: 'Arrays in C', path: '/lessons/c/arrays' },
  { id: 'pointers', title: 'Pointers in C', path: '/lessons/c/pointers' },
  { id: 'strings', title: 'Strings in C', path: '/lessons/c/strings' },
  { id: 'structures', title: 'Structures in C', path: '/lessons/c/structures' },
  { id: 'conditionals', title: 'Conditional Statements', path: '/lessons/c/conditionals' },
  { id: 'loops', title: 'Loops in C', path: '/lessons/c/loops' },
  { id: 'functions', title: 'Functions in C', path: '/lessons/c/functions' },
  { id: 'file-handling', title: 'File Handling in C', path: '/lessons/c/file-handling' },
  { id: 'memory-management', title: 'Memory Management', path: '/lessons/c/memory-management' },
  { id: 'advanced', title: 'Advanced Topics', path: '/lessons/c/advanced' },
];

export default function CLessons() {
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
        title: 'Welcome to C Programming',
        content: (
          <div>
            <h1>Introduction to C</h1>
            <p>C is a powerful general-purpose programming language. It is fast, portable, and available on all platforms.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>Basic C syntax</li>
              <li>Variables and data types</li>
              <li>Control structures</li>
              <li>Functions and pointers</li>
              <li>Data structures</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> Practice coding daily to improve your C skills!</p>
            </div>
          </div>
        )
      },
      'data-types': {
        title: 'C Data Types & Operators',
        content: (
          <div>
            <h1>Data Types & Operators</h1>
            <p>C has several built-in data types including int, float, char, and more.</p>
            <h2>Basic Data Types:</h2>
            <ul>
              <li><strong>int:</strong> Whole numbers (e.g., 1, 2, 100)</li>
              <li><strong>float:</strong> Decimal numbers (e.g., 3.14, 2.5)</li>
              <li><strong>char:</strong> Single characters (e.g., 'a', 'b')</li>
            </ul>
            <h2>Operators:</h2>
            <ul>
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
    <LessonLayout>
      <div className="lesson-content-wrapper">
        <h1>{lessonContent?.title || 'C Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
