import React, { useState } from "react";
import LessonLayout from "../lesson_layout";

const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

export default function PythonLessons() {
  const [openSections, setOpenSections] = useState({
    introduction: true,
    dataTypes: false,
  });

  const [activeContent, setActiveContent] = useState("overview");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleContentChange = (contentId) => {
    setActiveContent(contentId);
  };

  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Lesson</h3>

      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.introduction ? "open" : ""
          }`}
          onClick={() => toggleSection("introduction")}
          aria-expanded={openSections.introduction}
        >
          Introduction
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.introduction ? "500px" : "0" }}
        >
          <li>
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("overview");
              }}
              className={activeContent === "overview" ? "active" : ""}
            >
              What is Python?
            </a>
          </li>
          <li>
            <a
              href="#Why-learn-Python"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Why-learn-Python");
              }}
              className={activeContent === "Why-learn-Python" ? "active" : ""}
            >
              Why learn Python?
            </a>
          </li>
          <li>
            <a
              href="#installation"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("installation");
              }}
              className={activeContent === "installation" ? "active" : ""}
            >
              Installing Python & IDE
            </a>
          </li>
          <li>
            <a
              href="#first-program"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("first-program");
              }}
              className={activeContent === "first-program" ? "active" : ""}
            >
              Running your first program
            </a>
          </li>
          <li>
            <a
              href="#Comments"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Comments");
              }}
              className={activeContent === "Comments" ? "active" : ""}
            >
              Comments & Documentation
            </a>
          </li>
          <li>
            <a
              href="#Project"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Project");
              }}
              className={activeContent === "Project" ? "active" : ""}
            >
              Project
            </a>
          </li>
        </ul>
      </div>

      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.dataTypes ? "open" : ""
          }`}
          onClick={() => toggleSection("dataTypes")}
          aria-expanded={openSections.dataTypes}
        >
          Data Types & Operators
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.dataTypes ? "500px" : "0" }}
        >
        </ul>
      </div>
    </nav>
  );

  return (
    <LessonLayout
      title="Python Tutorial"
      breadcrumbs={[
        { label: "Lessons", href: "/lessons" },
        { label: "Python Tutorial" },
      ]}
      sidebar={sidebar}
    >
      {activeContent === "overview" && (
        <div>
          <div className="lesson-hero">
            <h1>Python Lesson</h1>
            <p>
              Python is a modern, high-level programming language known for its interpreted execution and broad applicability across domains.
            </p>
          </div>
          <div id="overview" style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            margin: '2rem 0',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.6',
            color: '#2d3748'
          }}>
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
            }}>Python is a dynamically typed, general-purpose programming language that supports both object-oriented and functional programming approaches.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>It is also an interpreted and high-level programming language.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Created by Guido van Rossum in 1989.</li>
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
          }}>Welcome to the Python Tutorial series! To begin learning:</p>
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
      )}

      {activeContent === "installation" && (
        <div id="installation">
          <h2>Installation & Getting Started</h2>
          <h3>Steps to Install Python:</h3>
          <ol type="a">
            <li>Visit the official Python website: <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">https://www.python.org/</a></li>
            <li>Download the latest executable installer based on your Operating System (e.g., Windows, macOS).</li>
            <li>Run the installer. <b>Important:</b> On Windows, make sure to check the box that says "Add Python to PATH" during installation.</li>
          </ol>
          <h4>Version Check</h4>
          <p>After installation, you can check the version of Python by opening your terminal or command prompt and typing the following command:</p>
          <CodeBlock>python --version</CodeBlock>
          <h3>Starting Python</h3>
          <p>You can start writing Python code by opening the Python IDLE (which comes with the installation) or any text editor of your choice. Let's understand Python code execution with the simplest print statement. Type the following in your editor or Python shell and press Enter:</p>
          <CodeBlock>{'print("Hello, World!")'}</CodeBlock>
        </div>
      )}

      {activeContent === "syntax" && (
        <div id="syntax">
          <h2>What is Syntax?</h2>
          <p>coming soon...</p>
        </div>
      )}

      {activeContent === "Why-learn-Python" && (
        <div id="Why-learn-Python">
          <h2>Why Learn Python?</h2>
          <p>Content coming soon...</p>
        </div>
      )}

      {activeContent === "first-program" && (
        <div id="first-program">
          <h2>Running Your First Program</h2>
          <p>Content coming soon...</p>
        </div>
      )}

      {activeContent === "Comments" && (
        <div id="Comments">
          <h2>Comments & Documentation</h2>
          <p>Content coming soon...</p>
        </div>
      )}

      {activeContent === "Project" && (
        <div id="Project">
          <h2>Project</h2>
          <p>Content coming soon...</p>
        </div>
      )}
    </LessonLayout>
  );
}
