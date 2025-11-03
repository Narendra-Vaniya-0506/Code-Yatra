import React, { useState } from "react";
import '../../lessons.css';

export default function InstallingPythonIDE() {
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
    <div id="installation" className="lesson-content">
      <h2 className="lesson-title">Installation & Getting Started</h2>

      <h3 className="section-title">Steps for Windows:</h3>
      <ol className="steps-list">
        <li>Visit the official Python website:
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">https://www.python.org/</a>
        </li>
        <li>Download the latest installer for your OS.</li>
        <li>Run the installer. <b>Important:</b> Check "Add Python to PATH".</li>
        <li>Click Install Now.</li>
      </ol>

      <h4>Version Check</h4>
      <p>After installation, open your terminal or command prompt and type:</p>

      <div className="code-container">
        <pre>python --version</pre>
        <button onClick={() => copyCode('python --version')} className="copy-button">
          Copy
        </button>
      </div>


      <h3 className="section-title">Steps for macOS:</h3>
      <ol className="steps-list">
        <li>Python 2.x may already be installed, but you need Python 3.</li>
        <li>Install Homebrew (a package manager).</li>
        <li>Run:</li>
      </ol>

      <div className="code-container">
        <pre>brew install python</pre>
        <button onClick={() => copyCode('brew install python')} className="copy-button">
          Copy
        </button>
      </div>

      <h4>Check with:</h4>

      <div className="code-container">
        <pre>python --version</pre>
        <button onClick={() => copyCode('python --version')} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">Steps for Linux:</h3>
      <ol className="steps-list">
        <li>Most Linux systems already have Python.</li>
      </ol>

      <h4>Check with:</h4>

      <div className="code-container">
        <pre>python --version</pre>
        <button onClick={() => copyCode('python --version')} className="copy-button">
          Copy
        </button>
      </div>

      <p>If not installed, run:</p>

      <div className="code-container">
        <pre>sudo apt-get install python3</pre>
        <button onClick={() => copyCode('sudo apt-get install python3')} className="copy-button">
          Copy
        </button>
      </div>

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
}
