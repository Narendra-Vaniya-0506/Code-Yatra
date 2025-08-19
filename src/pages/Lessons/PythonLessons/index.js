import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/python/introduction' },
  // { id: 'tuples', title: 'Tuples', path: '/lessons/python/tuples' },
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
          <div className="intro-card">
            <h2>Introduction to Python</h2>
            <p>
              Python is a versatile programming language known for its simplicity and readability. 
              It's widely used in web development, data science, artificial intelligence, and more.
            </p>

            <h3>📌 What you'll learn:</h3>
            <ul>
              <li>Basic Python syntax</li>
              <li>Variables and data types</li>
              <li>Control structures</li>
              <li>Functions and modules</li>
              <li>Object-oriented programming</li>
            </ul>
          </div>
        )
      },

      /*
      'tuples': {
        title: 'Python Tuples',
        content: (
          <div>
            <h1>Python Tuples Tutorial</h1>
            <p>Tuples are immutable sequences in Python, typically used to store collections of heterogeneous data.</p>
            
            <h2>Key Concepts:</h2>
            <ul>
              <li>Creating tuples</li>
              <li>Accessing tuple elements</li>
              <li>Tuple unpacking</li>
              <li>Tuple methods and operations</li>
            </ul>
          </div>
        )
      }
      */
    };

    return contentMap[lesson.id] || {
      title: lesson.title,
      content: (
        <div>
          <h1>{lesson.title}</h1>
          <p>Content for {lesson.title} coming soon...</p>
        </div>
      )
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
