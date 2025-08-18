import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/css/introduction' },
  { id: 'selectors', title: 'CSS Selectors', path: '/lessons/css/selectors' },
  { id: 'colors-backgrounds', title: 'Colors & Backgrounds', path: '/lessons/css/colors-backgrounds' },
  { id: 'box-model', title: 'CSS Box Model', path: '/lessons/css/box-model' },
  { id: 'flexbox', title: 'CSS Flexbox', path: '/lessons/css/flexbox' },
  { id: 'grid', title: 'CSS Grid', path: '/lessons/css/grid' },
  { id: 'responsive', title: 'Responsive Design', path: '/lessons/css/responsive' },
  { id: 'animations', title: 'CSS Animations', path: '/lessons/css/animations' },
  { id: 'transitions', title: 'CSS Transitions', path: '/lessons/css/transitions' },
  { id: 'advanced', title: 'Advanced CSS', path: '/lessons/css/advanced' },
];

export default function CSSLessons() {
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
        title: 'Welcome to CSS Styling',
        content: (
          <div>
            <h1>Introduction to CSS</h1>
            <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>CSS syntax and selectors</li>
              <li>Colors, backgrounds, and typography</li>
              <li>Layout techniques (Flexbox, Grid)</li>
              <li>Responsive design principles</li>
              <li>Animations and transitions</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> Master CSS to create beautiful, responsive web designs!</p>
            </div>
          </div>
        )
      },
      'selectors': {
        title: 'CSS Selectors',
        content: (
          <div>
            <h1>CSS Selectors</h1>
            <p>CSS selectors are used to select and style HTML elements.</p>
            <h2>Common Selectors:</h2>
            <ul>
              <li><strong>Element:</strong> h1, p, div</li>
              <li><strong>Class:</strong> .classname</li>
              <li><strong>ID:</strong> #idname</li>
              <li><strong>Attribute:</strong> [type="text"]</li>
              <li><strong>Pseudo-class:</strong> :hover, :focus</li>
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
        <h1>{lessonContent?.title || 'CSS Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
