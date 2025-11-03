import React, { useState } from "react";
import '../../lessons.css';

const Project = () => {
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

  return (
    <div id="Project" className="lesson-content">
      <h2 className="lesson-title">Project</h2>

      <h3 className="section-title">Goal</h3>
      <ul className="lesson-list">
        <li>Display a welcome message.</li>
      </ul>

      <h3 className="section-title">This project teaches you:</h3>
      <ul className="lesson-list">
        <li>How to use print()</li>
      </ul>

      <h3 className="section-title">Step 1: Create a new Python file</h3>
      <ol className="steps-list">
        <li>Open your IDE (VS Code, PyCharm, or even Notepad).</li>
        <li>Create a file named Welcome.py.</li>
      </ol>

      <h3 className="section-title">Step 2: Write the code</h3>
      <div className="code-container">
        <pre># Simple Hello World Welcome Program<br/># Display a welcome message<br/>print("Welcome to Python!")</pre>
        <button onClick={() => copyCode('# Simple Hello World welcome Program\n# Display a welcome message\nprint("Welcome to Python!")')} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">Step 3: Run the program</h3>
      <p className="intro-text">• Windows: open terminal and type:</p>
      <div className="code-container">
        <pre>py Welcome.py</pre>
        <button onClick={() => copyCode('py Welcome.py')} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text">macOS/Linux:</p>
      <div className="code-container">
        <pre>python3 Welcome.py</pre>
        <button onClick={() => copyCode('python3 Welcome.py')} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text">You'll see:</p>
      <div className="code-container">
        <pre>Welcome to Python!</pre>
        <button onClick={() => copyCode('Welcome to Python!')} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">How it Works</h3>
      <ol className="steps-list">
        <li>print("Welcome to Python!") &rarr; prints text.</li>
      </ol>

       <p className="created-by">— Created by Code Yatra</p>
       <button className="return-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
         Return to Top
       </button>

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
    </div>
  );
};

export default Project;
