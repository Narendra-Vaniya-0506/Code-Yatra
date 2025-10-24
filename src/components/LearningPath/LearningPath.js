import React from 'react';
import { FaCheck, FaLock } from 'react-icons/fa';
import './LearningPath.css';

const LearningPath = ({ lessons }) => {
  return (
    <div className="path-container">
      {lessons.map((lesson, index) => (
        <div key={index} className="lesson-node">
          <div
            className={`node-button ${
              lesson.status === 'completed'
                ? 'completed'
                : lesson.status === 'unlocked'
                ? 'unlocked'
                : 'locked'
            }`}
          >
            {lesson.status === 'completed' && <FaCheck />}
            {lesson.status === 'unlocked' && 'START'}
            {lesson.status === 'locked' && <FaLock />}
          </div>
          <p>{lesson.title}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
