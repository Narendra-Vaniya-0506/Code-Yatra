import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';
import PdfViewer from '../../../components/PdfViewer';

// Import PDFs like normal files
import introPdf from './Pdfs/Python_Roadmap_CodeYatra.pdf';
// import tuplesPdf from './Pdfs/tuples.pdf';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/python/introduction', pdf: introPdf },
  // { id: 'tuples', title: 'Tuples', path: '/lessons/python/tuples', pdf: tuplesPdf },
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
          <div className="lesson-card">
            <h2 className="lesson-heading">Introduction to Python</h2>
            <p className="lesson-text">
              Python is a versatile programming language known for its simplicity
              and readability. It's widely used in web development, data science,
              artificial intelligence, and more.
            </p>

            <h3 className="lesson-subheading">📌 What you'll learn:</h3>
            <ul className="lesson-list">
              <li>✅ Basic Python syntax</li>
              <li>✅ Variables and data types</li>
              <li>✅ Control structures</li>
              <li>✅ Functions and modules</li>
              <li>✅ Object-oriented programming</li>
            </ul>

            <PdfViewer file={lesson.pdf} />
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
            
            <PdfViewer file={lesson.pdf} />
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
          {lesson.pdf && <PdfViewer file={lesson.pdf} />}
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
