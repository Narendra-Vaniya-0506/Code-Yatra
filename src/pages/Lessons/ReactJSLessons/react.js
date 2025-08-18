import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/react/introduction' },
  { id: 'components', title: 'React Components', path: '/lessons/react/components' },
  { id: 'props-state', title: 'Props & State', path: '/lessons/react/props-state' },
  { id: 'hooks', title: 'React Hooks', path: '/lessons/react/hooks' },
  { id: 'routing', title: 'React Router', path: '/lessons/react/routing' },
  { id: 'context-api', title: 'Context API', path: '/lessons/react/context-api' },
  { id: 'styling', title: 'Styling in React', path: '/lessons/react/styling' },
  { id: 'forms', title: 'Forms & Validation', path: '/lessons/react/forms' },
  { id: 'api-integration', title: 'API Integration', path: '/lessons/react/api-integration' },
  { id: 'performance', title: 'Performance Optimization', path: '/lessons/react/performance' },
  { id: 'testing', title: 'Testing React Apps', path: '/lessons/react/testing' },
  { id: 'deployment', title: 'Deployment', path: '/lessons/react/deployment' },
];

export default function ReactLessons() {
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
        title: 'Welcome to React Development',
        content: (
          <div>
            <h1>Introduction to React</h1>
            <p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage application state efficiently.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>React fundamentals and JSX</li>
              <li>Components, props, and state</li>
              <li>React Hooks for state management</li>
              <li>Routing with React Router</li>
              <li>Context API and advanced patterns</li>
              <li>Performance optimization techniques</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> React is the most popular frontend framework - master it to build modern web applications!</p>
            </div>
          </div>
        )
      },
      'components': {
        title: 'React Components',
        content: (
          <div>
            <h1>React Components</h1>
            <p>Components are the building blocks of React applications. They can be functional or class-based.</p>
            <h2>Types of Components:</h2>
            <ul>
              <li><strong>Functional Components:</strong> Simple functions that return JSX</li>
              <li><strong>Class Components:</strong> ES6 classes with lifecycle methods</li>
              <li><strong>Presentational Components:</strong> Focus on UI appearance</li>
              <li><strong>Container Components:</strong> Focus on data management</li>
            </ul>
            <h2>Component Benefits:</h2>
            <ul>
              <li>Reusability</li>
              <li>Maintainability</li>
              <li>Testability</li>
              <li>Performance optimization</li>
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
        <h1>{lessonContent?.title || 'React Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
