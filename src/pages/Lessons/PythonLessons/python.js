import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

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
        title: 'Welcome to Python Programming',
        content: (
          <div>
            <h1>Introduction to Python</h1>
            <p>Python is a versatile programming language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and more.</p>
            
            <h2>What you'll learn:</h2>
            <ul>
              <li>Basic Python syntax</li>
              <li>Variables and data types</li>
              <li>Control structures</li>
              <li>Functions and modules</li>
              <li>Object-oriented programming</li>
            </ul>
            
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> Practice coding daily to improve your Python skills!</p>
            </div>
          </div>
        )
      },
      'data-types': {
        title: 'Python Data Types & Operators',
        content: (
          <div>
            <h1>Data Types & Operators</h1>
            <p>Python has several built-in data types including numbers, strings, lists, tuples, dictionaries, and sets.</p>
            
            <h2>Basic Data Types:</h2>
            <ul>
              <li><strong>int:</strong> Whole numbers (e.g., 1, 2, 100)</li>
              <li><strong>float:</strong> Decimal numbers (e.g., 3.14, 2.5)</li>
              <li><strong>str:</strong> Text strings (e.g., "Hello", 'Python')</li>
              <li><strong>bool:</strong> True or False values</li>
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
        <h1>{lessonContent?.title || 'Python Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
