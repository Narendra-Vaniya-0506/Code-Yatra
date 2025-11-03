import React, { useState } from "react";
import '../../lessons.css';

export default function RunningYourFirstProgram() {
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
    <div id="first-program" className="lesson-content">
      <h2 className="lesson-title">Running Your First Program</h2>

      <h3 className="section-title">What "Hello, World!" is (and why it matters)</h3>
      <p className="intro-text">It's the simplest program that prints a small message. The goal isn't to be fancy—it's to prove:</p>
      <ul className="lesson-list">
        <li>Python is installed correctly,</li>
        <li>your editor is set up,</li>
        <li>you know how to run code.</li>
      </ul>
      <p className="intro-text">Once this works, everything else becomes easier.</p>

      <h3 className="section-title">Make sure Python is installed</h3>
      <p className="intro-text">Open your terminal and try these (you only need one to work)</p>

      <h4>Windows (CMD/PowerShell):</h4>
      <ul className="lesson-list">
        <li>
          <div className="code-container">
            <pre>py -V</pre>
            <button onClick={() => copyCode('py -V')} className="copy-button">
              Copy
            </button>
          </div>
        </li>
        <li>
          <div className="code-container">
            <pre>python --version</pre>
            <button onClick={() => copyCode('python --version')} className="copy-button">
              Copy
            </button>
          </div>
        </li>
      </ul>

      <h4>macOS / Linux (Terminal):</h4>
      <ul className="lesson-list">
        <li>
          <div className="code-container">
            <pre>python3 --version</pre>
            <button onClick={() => copyCode('python3 --version')} className="copy-button">
              Copy
            </button>
          </div>
        </li>
      </ul>

      <h3 className="section-title">Four ways to run Python</h3>

      <h3 className="section-title">A) Interactive Prompt (REPL)</h3>
      <p className="intro-text">Type python (or py / python3) in your terminal to open the prompt, then:</p>
      <div className="code-container">
        <pre>print("Hello, World!")</pre>
        <button onClick={() => copyCode('print("Hello, World!")')} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text">Great for quick tests.</p>

      <h3 className="section-title">B) As a script (.py file)</h3>
      <ol className="steps-list">
        <li>Create a file named hello.py with:</li>
        <div className="code-container">
          <pre>print("Hello, World!")</pre>
          <button onClick={() => copyCode('print("Hello, World!")')} className="copy-button">
            Copy
          </button>
        </div>
        <li>Run it:</li>
        <p className="intro-text">Windows:</p>
        <div className="code-container">
          <pre>py hello.py<br/># or: python hello.py</pre>
          <button onClick={() => copyCode('py hello.py\n# or: python hello.py')} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">macOS/Linux:</p>
        <div className="code-container">
          <pre>python3 hello.py</pre>
          <button onClick={() => copyCode('python3 hello.py')} className="copy-button">
            Copy
          </button>
        </div>
      </ol>

      <h3 className="section-title">C) Inside an IDE (VS Code / PyCharm)</h3>
      <ul className="lesson-list">
        <li>Create hello.py, paste the print line, click Run.</li>
        <li>IDEs show output in an output panel and manage the Python interpreter for you.</li>
      </ul>

      <h3 className="section-title">D) In Jupyter Notebook</h3>
      <p className="intro-text">Great for learning and data work.</p>
      <div className="code-container">
        <pre>pip install notebook</pre>
        <button onClick={() => copyCode('pip install notebook')} className="copy-button">
          Copy
        </button>
      </div>
      <div className="code-container">
        <pre>jupyter notebook</pre>
        <button onClick={() => copyCode('jupyter notebook')} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text">Create a new notebook and run:</p>
      <div className="code-container">
        <pre>print("Hello, World!")</pre>
        <button onClick={() => copyCode('print("Hello, World!")')} className="copy-button">
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
