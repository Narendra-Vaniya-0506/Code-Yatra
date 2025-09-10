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
    foundations: false,
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

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyCode = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage("✓ Copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(err => {
      setToastMessage("❌ Failed to copy");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      console.error('Failed to copy code:', err);
    });
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
              Comments
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
            openSections.foundations ? "open" : ""
          }`}
          onClick={() => toggleSection("foundations")}
          aria-expanded={openSections.foundations}
        >
          Python Foundations (Beginner)
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.foundations ? "500px" : "0" }}
        >
          <li>
            <a
              href="#syntax-indentation"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("syntax-indentation");
              }}
              className={activeContent === "syntax-indentation" ? "active" : ""}
            >
              Syntax & Indentation
            </a>
          </li>
          <li>
            <a
              href="#variables-naming"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("variables-naming");
              }}
              className={activeContent === "variables-naming" ? "active" : ""}
            >
              Variables & Naming Conventions
            </a>
          </li>
          <li>
            <a
              href="#data-types"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("data-types");
              }}
              className={activeContent === "data-types" ? "active" : ""}
            >
              Data Types
            </a>
          </li>
          <li>
            <a
              href="#string-operations"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("string-operations");
              }}
              className={activeContent === "string-operations" ? "active" : ""}
            >
              String Operations
            </a>
          </li>
          <li>
            <a
              href="#input-output"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("input-output");
              }}
              className={activeContent === "input-output" ? "active" : ""}
            >
              Input & Output
            </a>
          </li>
          <li>
            <a
              href="#type-casting"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("type-casting");
              }}
              className={activeContent === "type-casting" ? "active" : ""}
            >
              Type Casting
            </a>
          </li>
          <li>
            <a
              href="#operators"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("operators");
              }}
              className={activeContent === "operators" ? "active" : ""}
            >
              Operators
            </a>
          </li>
          <li>
            <a
              href="#calculator-project"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("calculator-project");
              }}
              className={activeContent === "calculator-project" ? "active" : ""}
            >
              Project: Simple Calculator
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <LessonLayout
      title="Python lesson"
      breadcrumbs={[
        { label: "Lessons", href: "/lessons" },
        { label: "Python lesson" },
      ]}
      sidebar={sidebar}
      lessonId="python-introduction"
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
      )}

      {activeContent === "Why-learn-Python" && (
        <div id="Why-learn-Python" style={{
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
          }}>Why learn Python?</h2>
          
          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>1. It’s Easy to Understand </h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Python looks like English. </li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>You don’t need to write lots of confusing symbols. </li>
          </ul>
          
          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>2. You Can Do Many Things With It</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python is like a <b>super tool. You can use it for:</b> </p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>🌐Websites (Instagram, YouTube use Python)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>🤖Artificial Intelligence (self-driving cars, chatbots)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>📊Data Science (analyzing and making charts) </li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>⚙️Automation (make your computer do boring work for you)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>🎮Games (small fun games with Pygame)</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>3. Lots of Jobs Use Python</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Companies like Google, Netflix, and NASA use Python. </li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Learning Python can help you get good jobs in the future. </li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Even small businesses and startups love it because it’s fast and simple.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>4. Big Community = Easy Help</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Millions of people learn and use Python.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>If you get stuck, you can quickly find answers online.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Tons of free tutorials, videos, and examples are already out there.</li>
          </ul>
          
          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>5. Future-Proof Skill</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Python is growing every year.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>It’s not going away, it’s getting more popular.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Learning it now will help you for years.</li>
          </ul>
          
        </div>
      )}

      {activeContent === "installation" && (
        <div id="installation" style={{
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
          }}>
            Installation & Getting Started
          </h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>
            Steps for Windows:
          </h3>
          <ol style={{marginLeft: '1.5rem'}}>
            <li>Visit the official Python website: 
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', textDecoration: 'none'}}>https://www.python.org/</a>
            </li>
            <li>Download the latest installer for your OS.</li>
            <li>Run the installer. <b>Important:</b> Check "Add Python to PATH".</li>
            <li>Click Install Now.</li>
          </ol>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Version Check</h4>
          <p>After installation, open your terminal or command prompt and type:</p>

          {/* Windows Code Block */}
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>python --version</pre>
            <button onClick={() => copyCode('python --version')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Steps for macOS:</h3>
          <ol style={{marginLeft: '1.5rem'}}>
            <li>Python 2.x may already be installed, but you need Python 3.</li>
            <li>Install Homebrew (a package manager).</li>
            <li>Run:</li>
          </ol>

          {/* macOS Code Block */}
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>brew install python</pre>
            <button onClick={() => copyCode('brew install python')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Check with:</h4>

          {/* macOS Check */}
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>python --version</pre>
            <button onClick={() => copyCode('python --version')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Steps for Linux:</h3>
          <ol style={{marginLeft: '1.5rem'}}>
            <li>Most Linux systems already have Python.</li>
          </ol>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Check with:</h4>

          {/* Linux Check */}
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>python --version</pre>
            <button onClick={() => copyCode('python --version')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <p>If not installed, run:</p>

          {/* Linux Install */}
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>sudo apt-get install python3</pre>
            <button onClick={() => copyCode('sudo apt-get install python3')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
        </div>
      )}


      

      {activeContent === "first-program" && (
        <div id="first-program" style={{
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
          }}>Running Your First Program</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>What "Hello, World!" is (and why it matters)</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>It&apos;s the simplest program that prints a small message. The goal isn&apos;t to be fancy—it&apos;s to prove:</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Python is installed correctly,</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>your editor is set up,</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>you know how to run code.</li>
          </ul>
          <p style={{
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Once this works, everything else becomes easier.</p>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Make sure Python is installed</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Open your terminal and try these (you only need one to work)</p>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Windows (CMD/PowerShell):</h4>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>
              <div style={{position: 'relative', margin: '1rem 0'}}>
                <pre style={{
                  background: '#1a202c',
                  color: '#f8f8f2',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  margin: '0'
                }}>py -V</pre>
                <button onClick={() => copyCode('py -V')} style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  background: '#2d3748',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}>Copy</button>
              </div>
            </li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>
              <div style={{position: 'relative', margin: '1rem 0'}}>
                <pre style={{
                  background: '#1a202c',
                  color: '#f8f8f2',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  margin: '0'
                }}>python --version</pre>
                <button onClick={() => copyCode('python --version')} style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  background: '#2d3748',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}>Copy</button>
              </div>
            </li>
          </ul>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>macOS / Linux (Terminal):</h4>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>
              <div style={{position: 'relative', margin: '1rem 0'}}>
                <pre style={{
                  background: '#1a202c',
                  color: '#f8f8f2',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  margin: '0'
                }}>python3 --version</pre>
                <button onClick={() => copyCode('python3 --version')} style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  background: '#2d3748',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}>Copy</button>
              </div>
            </li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Four ways to run Python</h3>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #4299e1'
          }}>A) Interactive Prompt (REPL)</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Type python (or py / python3) in your terminal to open the prompt, then:</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>print("Hello, World!")</pre>
            <button onClick={() => copyCode('print("Hello, World!")')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <p style={{
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Great for quick tests.</p>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #4299e1'
          }}>B) As a script (.py file)</h3>
          <ol style={{
            listStyleType: 'decimal',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Create a file named hello.py with:</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0'
              }}>print("Hello, World!")</pre>
              <button onClick={() => copyCode('print("Hello, World!")')} style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                background: '#2d3748',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>Copy</button>
            </div>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Run it:</li>
            <p style={{
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
              color: '#4a5568',
              paddingLeft: '2rem'
            }}>Windows:</p>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0'
              }}>py hello.py<br/># or: python hello.py</pre>
              <button onClick={() => copyCode('py hello.py\n# or: python hello.py')} style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                background: '#2d3748',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>Copy</button>
            </div>
            <p style={{
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
              color: '#4a5568',
              paddingLeft: '2rem'
            }}>macOS/Linux:</p>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0'
              }}>python3 hello.py</pre>
              <button onClick={() => copyCode('python3 hello.py')} style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                background: '#2d3748',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>Copy</button>
            </div>
          </ol>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #4299e1'
          }}>C) Inside an IDE (VS Code / PyCharm)</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Create hello.py, paste the print line, click Run.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>IDEs show output in an output panel and manage the Python interpreter for you.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #4299e1'
          }}>D) In Jupyter Notebook</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Great for learning and data work.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>pip install notebook</pre>
            <button onClick={() => copyCode('pip install notebook')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>jupyter notebook</pre>
            <button onClick={() => copyCode('jupyter notebook')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Create a new notebook and run:</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>print("Hello, World!")</pre>
            <button onClick={() => copyCode('print("Hello, World!")')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
        </div>
      )}

      {activeContent === "Comments" && (
        <div id="Comments" style={{
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
          }}>Comments</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>What are Comments?</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Comments are text inside your code that Python ignores.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>They are written for humans, not computers.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Purpose: explain what the code does, why you wrote it, or leave notes for yourself/others.</li>
          </ul>
          <p style={{
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Think of comments as &ldquo;sticky notes&rdquo; on your code.</p>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Types of Comments in Python</h3>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Single-line Comment</h4>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Start with # &mdash; everything after it on the same line is ignored.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}># This is a single-line comment<br/>print("Hello World")  # This prints a message</pre>
            <button onClick={() => copyCode('# This is a single-line comment\nprint("Hello World")  # This prints a message')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Multi-line Comment (unofficial way)</h4>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python doesn&apos;t have a &ldquo;true&rdquo; multi-line comment.</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Common practice: use # on each line.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}># This program prints a greeting<br/># It was written as a beginner exercise<br/>print("Hello Python")</pre>
            <button onClick={() => copyCode('# This program prints a greeting\n# It was written as a beginner exercise\nprint("Hello Python")')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Another trick: use triple quotes (&ldquo;&rdquo;&rdquo; or &apos;&apos;&apos;).</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>These are technically strings, but if not assigned to a variable, Python ignores them.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>"""<br/>This is a multi-line comment<br/>using triple quotes<br/>"""<br/>print("Python is fun")</pre>
            <button onClick={() => copyCode('"""\nThis is a multi-line comment\nusing triple quotes\n"""\nprint("Python is fun")')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Why Are Comments Important?</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Help beginners understand code logic.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Make teamwork easier &mdash; others can read your code.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Future-you will thank present-you.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Good practice for professional coding standards.</li>
          </ul>
        </div>
      )}

      {activeContent === "Project" && (
        <div id="Project" style={{
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
          }}>Project</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Goal</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Display a welcome message.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>This project teaches you:</h3>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>How to use print()</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Step 1: Create a new Python file</h3>
          <ol style={{
            listStyleType: 'decimal',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Open your IDE (VS Code, PyCharm, or even Notepad).</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>Create a file named Welcome.py.</li>
          </ol>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Step 2: Write the code</h3>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}># Simple Hello World Welcome Program<br/># Display a welcome message<br/>print("Welcome to Python!")</pre>
            <button onClick={() => copyCode('# Simple Hello World welcome Program\n# Display a welcome message\nprint("Welcome to Python!")')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Step 3: Run the program</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>• Windows: open terminal and type:</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>py Welcome.py</pre>
            <button onClick={() => copyCode('py Welcome.py')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>macOS/Linux:</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>python3 Welcome.py</pre>
            <button onClick={() => copyCode('python3 Welcome.py')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>You&apos;ll see:</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0'
            }}>Welcome to Python!</pre>
            <button onClick={() => copyCode('Welcome to Python!')} style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: '#2d3748',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>Copy</button>
          </div>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>How it Works</h3>
          <ol style={{
            listStyleType: 'decimal',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}>print("Welcome to Python!") &rarr; prints text.</li>
          </ol>
        </div>
      )}

      {activeContent === "syntax-indentation" && (
        <div id="syntax-indentation" style={{
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
          }}>Syntax & Indentation</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "variables-naming" && (
        <div id="variables-naming" style={{
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
          }}>Variables & Naming Conventions</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "data-types" && (
        <div id="data-types" style={{
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
          }}>Data Types</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "string-operations" && (
        <div id="string-operations" style={{
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
          }}>String Operations</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "input-output" && (
        <div id="input-output" style={{
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
          }}>Input & Output</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "type-casting" && (
        <div id="type-casting" style={{
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
          }}>Type Casting</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "operators" && (
        <div id="operators" style={{
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
          }}>Operators</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {activeContent === "calculator-project" && (
        <div id="calculator-project" style={{
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
          }}>Project: Build a Simple Calculator</h2>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Content coming soon...</p>
        </div>
      )}

      {showToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#48bb78',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '6px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {toastMessage}
        </div>
      )}
    </LessonLayout>
  );
}
