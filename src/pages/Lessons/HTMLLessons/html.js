import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LessonLayout from '../../../components/LessonLayout';

const lessons = [
  { id: 'introduction', title: 'Introduction', path: '/lessons/html/introduction' },
  { id: 'basic-structure', title: 'HTML Basic Structure', path: '/lessons/html/basic-structure' },
  { id: 'text-formatting', title: 'Text Formatting', path: '/lessons/html/text-formatting' },
  { id: 'links-images', title: 'Links & Images', path: '/lessons/html/links-images' },
  { id: 'lists', title: 'HTML Lists', path: '/lessons/html/lists' },
  { id: 'tables', title: 'HTML Tables', path: '/lessons/html/tables' },
  { id: 'forms', title: 'HTML Forms', path: '/lessons/html/forms' },
  { id: 'semantic-elements', title: 'Semantic Elements', path: '/lessons/html/semantic-elements' },
  { id: 'media', title: 'HTML Media', path: '/lessons/html/media' },
  { id: 'advanced', title: 'Advanced HTML', path: '/lessons/html/advanced' },
];

export default function HTMLLessons() {
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
        title: 'Welcome to HTML',
        content: (
          <div>
            <h1>Introduction to HTML</h1>
            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.</p>
            <h2>What you'll learn:</h2>
            <ul>
              <li>HTML syntax and structure</li>
              <li>Text formatting and semantic elements</li>
              <li>Links, images, and media</li>
              <li>Lists, tables, and forms</li>
              <li>HTML5 features and best practices</li>
            </ul>
            <div className="tip-box">
              <p><strong>Pro Tip:</strong> HTML is the foundation of web development - master it first!</p>
            </div>
          </div>
        )
      },
      'basic-structure': {
        title: 'HTML Basic Structure',
        content: (
          <div>
            <h1>HTML Basic Structure</h1>
            <p>Every HTML document has a basic structure that includes the doctype, html, head, and body elements.</p>
            <h2>Basic HTML Template:</h2>
            <pre>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`}
            </pre>
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
        <h1>{lessonContent?.title || 'HTML Lessons'}</h1>
        <div className="lesson-content">
          {lessonContent?.content}
        </div>
      </div>
    </LessonLayout>
  );
}
