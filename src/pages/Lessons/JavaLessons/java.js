import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/java/introduction' },
  { id: 'data-types', title: 'Java Data Types & Operators', path: '/lessons/java/data-types' },
  { id: 'classes-objects', title: 'Classes & Objects', path: '/lessons/java/classes-objects' },
  { id: 'inheritance', title: 'Inheritance', path: '/lessons/java/inheritance' },
  { id: 'polymorphism', title: 'Polymorphism', path: '/lessons/java/polymorphism' },
  { id: 'interfaces', title: 'Interfaces', path: '/lessons/java/interfaces' },
  { id: 'collections', title: 'Java Collections', path: '/lessons/java/collections' },
  { id: 'exceptions', title: 'Exception Handling', path: '/lessons/java/exceptions' },
  { id: 'file-handling', title: 'File Handling', path: '/lessons/java/file-handling' },
  { id: 'multithreading', title: 'Multithreading', path: '/lessons/java/multithreading' },
  { id: 'advanced', title: 'Advanced Topics', path: '/lessons/java/advanced' },
];

export default function JavaLessons() {
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
        title: 'Welcome to Java Programming',
        content: (
          <div>
            <h1>Introduction to Java</h1>
            <p>Java is a powerful, object-oriented programming language known for its "write once, run anywhere" philosophy.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>Java syntax and fundamentals</li>
              <li>Object-oriented programming concepts</li>
              <li>Java Collections Framework</li>
              <li>Exception handling</li>
              <li>Multithreading and concurrency</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> Java is essential for enterprise applications and Android development!</p>
            </div>
          </div>
        )
      },
      'data-types': {
        title: 'Java Data Types & Operators',
        content: (
          <div>
            <h1>Data Types & Operators</h1>
            <p>Java has two categories of data types: primitive and reference types.</p>
            <h2>Primitive Data Types:</h2>
            <ul>
              <li><strong>int:</strong> Integer numbers (-2^31 to 2^31-1)</li>
              <li><strong>double:</strong> Double-precision floating point</li>
              <li><strong>boolean:</strong> true or false</li>
              <li><strong>char:</strong> Single Unicode character</li>
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
        <h1>{lessonContent?.title || 'Java Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
