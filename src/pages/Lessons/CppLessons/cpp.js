import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/cpp/introduction' },
  { id: 'data-types', title: 'C++ Data Types & Operators', path: '/lessons/cpp/data-types' },
  { id: 'classes-objects', title: 'Classes & Objects', path: '/lessons/cpp/classes-objects' },
  { id: 'inheritance', title: 'Inheritance', path: '/lessons/cpp/inheritance' },
  { id: 'polymorphism', title: 'Polymorphism', path: '/lessons/cpp/polymorphism' },
  { id: 'templates', title: 'Templates', path: '/lessons/cpp/templates' },
  { id: 'stl', title: 'STL (Standard Template Library)', path: '/lessons/cpp/stl' },
  { id: 'file-handling', title: 'File Handling', path: '/lessons/cpp/file-handling' },
  { id: 'advanced', title: 'Advanced Topics', path: '/lessons/cpp/advanced' },
];

export default function CppLessons() {
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
        title: 'Welcome to C++ Programming',
        content: (
          <div>
            <h1>Introduction to C++</h1>
            <p>C++ is a powerful general-purpose programming language that supports both procedural and object-oriented programming paradigms.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>Basic C++ syntax</li>
              <li>Object-oriented programming concepts</li>
              <li>Templates and STL</li>
              <li>Memory management</li>
              <li>Advanced C++ features</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> Master C++ to build high-performance applications!</p>
            </div>
          </div>
        )
      },
      'data-types': {
        title: 'C++ Data Types & Operators',
        content: (
          <div>
            <h1>Data Types & Operators</h1>
            <p>C++ provides a rich set of data types and operators for efficient programming.</p>
            <h2>Basic Data Types:</h2>
            <ul>
              <li><strong>int:</strong> Integer numbers</li>
              <li><strong>float:</strong> Single-precision floating point</li>
              <li><strong>double:</strong> Double-precision floating point</li>
              <li><strong>char:</strong> Single characters</li>
              <li><strong>bool:</strong> Boolean values</li>
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
        <h1>{lessonContent?.title || 'C++ Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
