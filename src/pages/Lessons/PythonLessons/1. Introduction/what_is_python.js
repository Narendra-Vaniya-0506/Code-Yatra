import React from "react";

export default function WhatIsPython() {
  return (
    <div>
      <div className="lesson-hero">
        <h1>Python Lesson</h1>
        <p>
          Python is a modern, high-level programming language known for its interpreted execution and broad applicability across domains.
        </p>
      </div>
      <div id="overview" className="lesson-content">
        <h2 style={{
          color: '#2d3748',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: '3px solid #4299e1'
        }}>Python Overview</h2>

        <h3 style={{
          color: '#4a5568',
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '1.5rem 0 1rem 0',
          paddingLeft: '0.5rem',
          borderLeft: '4px solid #48bb78'
        }}>What is Python?</h3>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '2rem',
          marginBottom: '1.5rem'
        }}>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>Python is a <b>high-level, general-purpose programming language.</b></li>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>In simple terms, it's a way to write instructions that a computer can understand and execute.</li>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>Think of it as a recipe for your computer; you provide a set of clear steps, and the computer follows them to accomplish a task, like analyzing data, creating a website, or automating a boring job.</li>
        </ul>

        <h3 style={{
          color: '#4a5568',
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '1.5rem 0 1rem 0',
          paddingLeft: '0.5rem',
          borderLeft: '4px solid #48bb78'
        }}>Features of Python</h3>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '2rem',
          marginBottom: '1.5rem'
        }}>
          <li style={{
            marginBottom: '0.75rem',
            paddingLeft: '0.5rem',
            transition: 'transform 0.2s ease'
          }}><b style={{color: '#2d3748'}}>Simple and easy to understand:</b> Python's clean syntax reads almost like plain English.</li>
          <li style={{
            marginBottom: '0.75rem',
            paddingLeft: '0.5rem',
            transition: 'transform 0.2s ease'
          }}><b style={{color: '#2d3748'}}>Interpreted and platform-independent:</b> Code runs line by line, making debugging easy, and works on Windows, macOS, and Linux.</li>
          <li style={{
            marginBottom: '0.75rem',
            paddingLeft: '0.5rem',
            transition: 'transform 0.2s ease'
          }}><b style={{color: '#2d3748'}}>Open-source:</b> Free to use, modify, and distribute for personal or commercial purposes.</li>
          <li style={{
            marginBottom: '0.75rem',
            paddingLeft: '0.5rem',
            transition: 'transform 0.2s ease'
          }}><b style={{color: '#2d3748'}}>Large standard library:</b> Comes with extensive modules, plus popular libraries like NumPy, TensorFlow, and Django.</li>
        </ul>

        <h3 style={{
          color: '#4a5568',
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '1.5rem 0 1rem 0',
          paddingLeft: '0.5rem',
          borderLeft: '4px solid #4299e1'
        }}>Get Started</h3>
        <p style={{
          marginBottom: '1rem',
          fontSize: '1.1rem',
          color: '#4a5568'
        }}>Welcome to the Python Lesson! To begin learning:</p>
        <ol style={{
          listStyleType: 'decimal',
          paddingLeft: '2rem',
          marginBottom: '1.5rem'
        }}>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>Select a lesson from the sidebar on the left.</li>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>Work through the lessons in order for the best learning experience.</li>
          <li style={{
            marginBottom: '0.5rem',
            paddingLeft: '0.5rem'
          }}>Each lesson contains detailed explanations and examples.</li>
        </ol>
      </div>
    </div>
  );
}
