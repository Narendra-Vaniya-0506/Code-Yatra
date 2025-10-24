import React from 'react';
import LearningPath from '../../../components/LearningPath/LearningPath';
import '../../../components/LearningPath/LearningPath.css';

const pythonLessonsData = [
  { id: 1, title: 'Introduction', status: 'completed' },
  { id: 2, title: 'What is Python?', status: 'completed' },
  { id: 3, title: 'Why learn Python?', status: 'unlocked' },
  { id: 4, title: 'Installing Python & IDE', status: 'locked' },
  { id: 5, title: 'Running your first program', status: 'locked' },
  { id: 6, title: 'Comments', status: 'locked' },
  { id: 7, title: 'Project', status: 'locked' },
  { id: 8, title: 'Python Foundations (Beginner)', status: 'locked' },
  { id: 9, title: 'Syntax & Indentation', status: 'locked' },
  { id: 10, title: 'Variables & Naming Conventions', status: 'locked' },
  { id: 11, title: 'Data Types', status: 'locked' },
  { id: 12, title: 'String Operations', status: 'locked' },
  { id: 13, title: 'Input & Output', status: 'locked' },
  { id: 14, title: 'Type Casting', status: 'locked' },
  { id: 15, title: 'Operators', status: 'locked' },
  { id: 16, title: 'Project: Simple Calculator', status: 'locked' }
];

const PythonLessons = () => {
  return (
    <div>
      <h1>Python Lesson</h1>
      <LearningPath lessons={pythonLessonsData} />
    </div>
  );
};

export default PythonLessons;
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

  // Function to get dynamic breadcrumbs based on active content
  const getBreadcrumbs = () => {
    const contentNames = {
      "overview": "What is Python?",
      "Why-learn-Python": "Why learn Python?",
      "installation": "Installing Python & IDE",
      "first-program": "Running your first program",
      "Comments": "Comments",
      "Project": "Project",
      "syntax-indentation": "Syntax & Indentation",
      "variables-naming": "Variables & Naming Conventions",
      "data-types": "Data Types",
      "string-operations": "String Operations",
      "input-output": "Input & Output",
      "type-casting": "Type Casting",
      "operators": "Operators",
      "calculator-project": "Project: Simple Calculator"
    };

    return [
      { label: "Lessons", href: "/lessons" },
      { label: "Python lesson", href: "/lessons/python" },
      { label: contentNames[activeContent] || "Python lesson" }
    ];
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
      breadcrumbs={getBreadcrumbs()}
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
      )}

      {activeContent === "Why-learn-Python" && (
        <div id="Why-learn-Python">
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
        <div id="installation">
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
        <div id="first-program">
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
                  margin: '0',
                  whiteSpace: 'pre-wrap'
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
                  margin: '0',
                  whiteSpace: 'pre-wrap'
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
                  margin: '0',
                  whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
                margin: '0',
                whiteSpace: 'pre-wrap'
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
                margin: '0',
                whiteSpace: 'pre-wrap'
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
                margin: '0',
                whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
        <div id="Comments">
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
        <div id="Project">
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
              margin: '0',
              whiteSpace: 'pre-wrap'
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
        <div id="syntax-indentation">
          <h2 style={{
            color: '#2d3748',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '3px solid #4299e1'
          }}>Syntax & Indentation</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>1. What is Syntax?</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>In any language, syntax refers to the set of rules that dictates the correct structure of sentences. For example, in English, a sentence has a specific grammar. Similarly, in programming, syntax refers to the rules that define how a Python program must be written. If you break these rules, Python won't understand your instructions and will give you a SyntaxError.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Analogy:</b> Think of syntax as the "grammar" of the Python language.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>2. Python's Basic Syntax Rules</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python is known for its simple and clean syntax. Here are a few key rules:</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Case-Sensitivity:</b> Python is case-sensitive. This means the variables name, Name, and NAME are three different variables.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Statements:</b> A statement is an instruction that the Python interpreter can execute. Typically, you write one statement per line.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>No Semicolons:</b> Unlike other languages like Java or C++, you do not need to put a semicolon (;) at the end of a statement.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>3. What is Indentation? (Python's Special Rule)</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Indentation refers to the spaces at the beginning of a code line. In many other programming languages, indentation is only for readability. In Python, indentation is mandatory and has a specific meaning. It is used to group statements together into a code block.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Code Block:</b> A block of code is a group of statements that are executed as a unit. For example, the code inside a loop, an if statement, or a function is a code block.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>4. Why Indentation is Crucial</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python uses indentation to understand the structure and flow of your program. Incorrect indentation will cause an IndentationError.</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}><b>Example: Using if statement</b></p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}><b>Correct Code:</b> The print() statement is indented, so Python knows it belongs inside the if block. It will only run if age is greater than 18.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0',
              whiteSpace: 'pre-wrap'
            }}>{`age = 20

if age > 18:

    print("You are an adult.")`}</pre>
            <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\n    print("You are an adult.")`)} style={{
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
          }}><b>Incorrect Code:</b> The print() statement is not indented, so Python doesn't know where it belongs. This will raise an error.</p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0',
              whiteSpace: 'pre-wrap'
            }}>{`age = 20

if age > 18:

print("You are an adult.")`}</pre>
            <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\nprint("You are an adult.")`)} style={{
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
          }}>5. The Rules of Indentation</h3>
          <ol style={{
            listStyleType: 'decimal',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Use 4 Spaces:</b> The standard convention (recommended by PEP 8, Python's official style guide) is to use four spaces for each level of indentation.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Be Consistent:</b> You must use the same number of spaces for all statements within the same code block.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Avoid Mixing Tabs and Spaces:</b> It's best practice to only use spaces. Most modern code editors like VS Code and PyCharm automatically convert the Tab key into four spaces for you.</li>
          </ol>
        </div>
      )}

      {activeContent === "variables-naming" && (
        <div id="variables-naming">
          <h2 style={{
            color: '#2d3748',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '3px solid #4299e1'
          }}>Variables & Naming Conventions</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>1. What is a Variable?</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>A variable is a fundamental concept in programming. Think of it as a labeled container or a box where you can store data. You give the container a name, and you can put information inside it. This information can be used, accessed, or changed later in your program.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Analogy:</b> A variable is like a contact in your phone. The name of the contact is the variable's name (e.g., "John Doe"), and the phone number is the value stored in it (e.g., "9876543210").</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>2. How to Create (Declare) a Variable</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>In Python, creating a variable is simple. You just need to choose a name and assign a value to it using the equals sign (=).</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}><b>Syntax:</b> variable_name = value</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}><b>Examples:</b></p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0',
              whiteSpace: 'pre-wrap'
            }}># A variable 'name' storing text (string)<br/>name = "CODE YATRA"<br/><br/># A variable 'age' storing a whole number (integer)<br/>age = 25<br/><br/># A variable 'price' storing a decimal number (float)<br/>price = 99.95<br/><br/># A variable 'is_learning' storing a true/false value (boolean)<br/>is_learning = True</pre>
            <button onClick={() => copyCode('# A variable \'name\' storing text (string)\nname = "CODE YATRA"\n\n# A variable \'age\' storing a whole number (integer)\nage = 25\n\n# A variable \'price\' storing a decimal number (float)\nprice = 99.95\n\n# A variable \'is_learning\' storing a true/false value (boolean)\nis_learning = True')} style={{
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
          }}><b>Dynamic Typing:</b> Python is a dynamically typed language. This means you don't have to explicitly declare the data type of a variable. Python automatically figures out the type based on the value you assign.</p>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>3. Naming Rules (The "Must-Follow" Rules)</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python has strict rules for naming variables. If you break these rules, you will get a SyntaxError.</p>
          <ol style={{
            listStyleType: 'decimal',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Start with a Letter or Underscore:</b> A variable name must begin with a letter (a-z, A-Z) or an underscore (_). <code>_my_var</code> (Correct) <code>my_var</code> (Correct) <code>9my_var</code> (Incorrect)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Allowed Characters:</b> A variable name can only contain letters, numbers, and underscores (A-z, 0-9, and _). <code>user_name_1</code> (Correct) <code>user-name</code> (Incorrect, uses a hyphen)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Case-Sensitive:</b> Variable names are case-sensitive. <code>age</code>, <code>Age</code>, and <code>AGE</code> are three different variables.</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>No Keywords:</b> You cannot use Python's reserved keywords as variable names. Keywords are words that have a special meaning in Python, like <code>if</code>, <code>for</code>, <code>def</code>, <code>class</code>, <code>else</code>, etc.</li>
          </ol>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>4. Naming Conventions (The "Should-Follow" Best Practices)</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>These are not strict rules but are strongly recommended for writing clean, readable, and professional code.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Use snake_case:</b> This is the most common convention in the Python community. Write variable names in all lowercase letters, separating words with underscores. <code>first_name</code>, <code>user_email_address</code>, <code>total_price</code> (Good) <code>firstname</code>, <code>userEmailAddress</code>, <code>TotalPrice</code> (Bad)</li>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Be Descriptive:</b> Choose names that clearly describe the data they hold. This makes your code much easier to understand for yourself and others. <code>user_name = "Alice"</code> (Good) <code>un = "Alice"</code> or <code>x = "Alice"</code> (Bad)</li>
          </ul>
        </div>
      )}

      {activeContent === "data-types" && (
        <div id="data-types">
          <h2 style={{
            color: '#2d3748',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '3px solid #4299e1'
          }}>Data Types</h2>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>What are Data Types?</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>In Python, every value has a data type. Data types are classifications that tell the computer what kind of data a variable is holding. This is important because the data type determines what kind of operations you can perform on that data.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Analogy:</b> Think of data types like different kinds of containers. You use a bottle for water (a liquid), a box for toys (solid objects), and a folder for documents (papers). Each container is designed for a specific type of item.</li>
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>Common Python Data Types</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>Python has several built-in data types. Here are the most fundamental ones.</p>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Numeric Types</h4>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>These types are used to store numerical values.</p>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Integer (int):</b> Represents positive or negative whole numbers without any decimal points.</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>age = 28<br/>score = -150</pre>
              <button onClick={() => copyCode('age = 28\nscore = -150')} style={{
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
            }}><b>Float (float):</b> Represents numbers that have a decimal point. They are used for values that require precision.</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>price = 499.99<br/>pi_value = 3.14159</pre>
              <button onClick={() => copyCode('price = 499.99\npi_value = 3.14159')} style={{
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
            }}><b>Complex (complex):</b> Represents numbers with a real and an imaginary part (e.g., a + bj). These are mainly used in scientific and mathematical applications.</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>complex_number = 5 + 6j</pre>
              <button onClick={() => copyCode('complex_number = 5 + 6j')} style={{
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
          </ul>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Text Type</h4>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>String (str):</b> A sequence of characters used to store text. Strings must be enclosed in either single quotes ('...') or double quotes ("...").</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>user_name = "CodeYatra"<br/>message = 'Python is fun!'</pre>
              <button onClick={() => copyCode('user_name = "CodeYatra"\nmessage = \'Python is fun!\'')} style={{
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
          </ul>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Boolean Type</h4>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>Boolean (bool):</b> Represents one of two possible values: True or False. Booleans are crucial for conditional logic and making decisions in your code.</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>is_active = True<br/>game_over = False</pre>
              <button onClick={() => copyCode('is_active = True\ngame_over = False')} style={{
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
          </ul>

          <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>None Type</h4>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem'
            }}><b>NoneType (None):</b> A special data type that represents the absence of a value. If a variable has no value assigned to it yet, you can assign None as a placeholder. There is only one None value.</li>
            <div style={{position: 'relative', margin: '1rem 0'}}>
              <pre style={{
                background: '#1a202c',
                color: '#f8f8f2',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                overflowX: 'auto',
                margin: '0',
                whiteSpace: 'pre-wrap'
              }}>winner = None</pre>
              <button onClick={() => copyCode('winner = None')} style={{
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
          </ul>

          <h3 style={{
            color: '#4a5568',
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1.5rem 0 1rem 0',
            paddingLeft: '0.5rem',
            borderLeft: '4px solid #48bb78'
          }}>How to Check a Variable's Type</h3>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}>You can easily check the data type of any variable using Python's built-in type() function.</p>
          <p style={{
            marginBottom: '1rem',
            fontSize: '1.1rem',
            color: '#4a5568'
          }}><b>Example:</b></p>
          <div style={{position: 'relative', margin: '1rem 0'}}>
            <pre style={{
              background: '#1a202c',
              color: '#f8f8f2',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              margin: '0',
              whiteSpace: 'pre-wrap'
            }}>{`user_name = "CODE YATRA"\nscore = 100\nis_learning = True\n\nprint(type(user_name))    # Output: <class 'str'>\nprint(type(score))        # Output: <class 'int'>\nprint(type(is_learning))  # Output: <class 'bool'>`}</pre>
            <button onClick={() => copyCode('user_name = "CODE YATRA"\nscore = 100\nis_learning = True\n\nprint(type(user_name))    # Output: <class \'str\'>\nprint(type(score))        \n# Output: <class \'int\'>\nprint(type(is_learning))  # Output: <class \'bool\'>')} style={{
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

      {activeContent === "string-operations" && (
        <div id="string-operations">
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
        <div id="input-output">
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
        <div id="type-casting">
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
        <div id="operators">
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
        <div id="calculator-project">
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
