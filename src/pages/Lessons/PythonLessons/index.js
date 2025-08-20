import React, { useState } from "react";

// A simple component for displaying code blocks
const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

// Define your lessons in order for easy management
const lessons = [
  { id: 'overview', title: 'Python Overview', category: 'Introduction' },
  { id: 'installation', title: 'Installation & Getting Started', category: 'Introduction' },
  { id: 'syntax', title: 'What is Syntax?', category: 'Introduction' },
  // Add more lessons here. Make sure to create corresponding content sections below.
];

// Header Component for the top bar with breadcrumbs
const Header = ({ currentLesson }) => {
    return (
        <header className="lesson-top-header">
            <div className="breadcrumbs">
                {/* This is a placeholder for a potential icon */}
                {/* <span className="breadcrumb-icon">ICON</span> */}
                <a href="/tutorials">Tutorials</a>
                <span>&rsaquo;</span>
                <a href="/tutorials/python">Python Tutorial</a>
                <span>&rsaquo;</span>
                <span>{currentLesson.category}</span>
            </div>
        </header>
    );
};


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
  
  // Find the current lesson object to pass its category to the header
  const currentLesson = lessons.find(l => l.id === activeContent) || lessons[0];

  // Define the sidebar content, now generated dynamically from the 'lessons' array
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Tutorial</h3>

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
          {lessons.map(lesson => (
             <li key={lesson.id}>
               <a
                 href={`#${lesson.id}`}
                 onClick={(e) => {
                   e.preventDefault();
                   handleContentChange(lesson.id);
                 }}
                 className={activeContent === lesson.id ? "active" : ""}
               >
                 {lesson.title}
               </a>
             </li>
          ))}
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
    <div className="lesson-container">
        <aside className="lesson-sidebar">
            {sidebar}
        </aside>
        <main className="lesson-main">
            <Header currentLesson={currentLesson} />
            
            <div className="lesson-content-wrapper">
                {/* --- Main Content Area: Renders content based on state --- */}

                {/* Show Overview Content */}
                {activeContent === "overview" && (
                  <div id="overview" className="lesson-overview-hero">
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
                    <p>In simplest terms, <b>syntax</b> is the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a language. In the case of a computer language, the syntax helps us understand the meaning or semantics of the code.</p>
                    <h3>Indentation</h3>
                    <p>Unlike many other languages that use curly braces `{"{}"}` to define blocks of code, Python uses indentation. A block of code (like the body of a function, loop, or conditional statement) must be indented. It is a strict rule and is central to Python's design. Have a look at the following code, where `print(i)` is said to be indented with respect to the `for` loop.</p>
                    <CodeBlock>
                      {`# This loop will run 5 times
for i in range(5):
    print(i) # This line is inside the for loop block`}
                    </CodeBlock>
                  </div>
                )}
            </div>
        </main>
    </div>
  );
}
