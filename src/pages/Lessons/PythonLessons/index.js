import React, { useState } from "react";
import LessonLayout from "../lesson_layout"; // Layout component for lessons

// A simple component for displaying code blocks
const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

export default function PythonLessons() {
  // State to manage which accordion section is open
  const [openSections, setOpenSections] = useState({
    introduction: true, // Start with the introduction section open
    dataTypes: false,
  });

  // State to manage which content section is currently visible
  const [activeContent, setActiveContent] = useState("overview"); // Default to overview

  // Toggles an accordion section open or closed
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handles link clicks to show the correct content
  const handleContentChange = (contentId) => {
    setActiveContent(contentId);
  };

  // Define the sidebar content
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Lesson</h3>

      {/* Introduction Section */}
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
                e.preventDefault(); // Prevent page jump
                handleContentChange("overview");
              }}
              className={activeContent === "overview" ? "active" : ""}
            >
              Python Overview
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
              Installation & Getting Started
            </a>
          </li>
          <li>
            <a
              href="#syntax"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("syntax");
              }}
              className={activeContent === "syntax" ? "active" : ""}
            >
              What is Syntax?
            </a>
          </li>
        </ul>
      </div>

      {/* Data Types Section (Add more links as needed) */}
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
          {/* Add links for this section here */}
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
      {/* Hero Section - This will always be visible */}
      <div className="lesson-hero">
        <h1>Python Lesson</h1>
        <p>
          Python is a modern, high-level programming language known for its interpreted execution and broad applicability across domains.
        </p>
      </div>

      {/* --- Main Content Area: Renders content based on state --- */}

      {/* Show Overview Content */}
      {activeContent === "overview" && (
        <div id="overview">
          <h2>Python Overview</h2>
          <h3>What is Python?</h3>
          <ul>
            <li>Python is a dynamically typed, general-purpose programming language that supports an object-oriented programming approach as well as a functional programming approach.</li>
            <li>It is also an interpreted and high-level programming language.</li>
            <li>It was created by Guido van Rossum in 1989.</li>
          </ul>
          <h3>Features of Python</h3>
          <ul>
            <li><b>Simple and easy to understand:</b> Python's clean syntax reads almost like plain English.</li>
            <li><b>Interpreted and platform-independent:</b> Python code is executed line by line, which makes debugging very easy. It can also run on various operating systems like Windows, macOS, and Linux.</li>
            <li><b>Open-source:</b> Python is free to use, modify, and distribute for both personal and commercial purposes.</li>
            <li><b>Large standard library:</b> Python provides a vast library of pre-written code for tasks ranging from web development to data science. Some popular libraries include NumPy, TensorFlow, and Django.</li>
          </ul>
          <h3>Get Started</h3>
          <p>Welcome to the Python Tutorial series! To begin learning:</p>
          <ol>
            <li>Select a lesson from the sidebar on the left.</li>
            <li>Work through the lessons in order for the best learning experience.</li>
            <li>Each lesson contains detailed explanations and examples.</li>
          </ol>
        </div>
      )}

      {/* Show Installation Content */}
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
          <p>You can start writing Python code by opening the Python <b>IDLE</b> (which comes with the installation) or any text editor of your choice. Let's understand Python code execution with the simplest print statement. Type the following in your editor or Python shell and press Enter:</p>
          <CodeBlock>{'print("Hello, World!")'}</CodeBlock>
        </div>
      )}

      {/* Show Syntax Content */}
      {activeContent === "syntax" && (
        <div id="syntax">
          <h2>What is Syntax?</h2>
          <p>coming soon...</p>
           </div>
      )}
      
    </LessonLayout>
  );
}