import React, { useState } from "react";

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
    <div id="installation">
      <h2 className="python-lesson-h2">
        Installation & Getting Started
      </h2>

      <h3 className="python-lesson-h3">
        Steps for Windows:
      </h3>
      <ol className="python-lesson-ol">
        <li>Visit the official Python website: 
          <a href="https://www.python.org/" target="_blank" relName="noopener noreferrer" className="python-lesson-a">https://www.python.org/</a>
        </li>
        <li>Download the latest installer for your OS.</li>
        <li>Run the installer. <b className="python-lesson-b">Important:</b> Check "Add Python to PATH".</li>
        <li>Click Install Now.</li>
      </ol>

      <h4 className="python-lesson-h4">Version Check</h4>
      <p className="python-lesson-p">After installation, open your terminal or command prompt and type:</p>

      {/* Windows Code Block */}
      <div className="python-code-wrapper">
        <pre className="python-code-block">python --version</pre>
        <button className="python-copy-btn" onClick={() => copyCode('python --version')}>Copy</button>
      </div>

      <h3 className="python-lesson-h3">Steps for macOS:</h3>
      <ol className="python-lesson-ol">
        <li>Python 2.x may already be installed, but you need Python 3.</li>
        <li>Install Homebrew (a package manager).</li>
        <li>Run:</li>
      </ol>

      {/* macOS Code Block */}
      <div className="python-code-wrapper">
        <pre className="python-code-block">brew install python</pre>
        <button className="python-copy-btn" onClick={() => copyCode('brew install python')}>Copy</button>
      </div>

      <h4 className="python-lesson-h4">Check with:</h4>

      {/* macOS Check */}
      <div className="python-code-wrapper">
        <pre className="python-code-block">python --version</pre>
        <button className="python-copy-btn" onClick={() => copyCode('python --version')}>Copy</button>
      </div>

      <h3 className="python-lesson-h3">Steps for Linux:</h3>
      <ol className="python-lesson-ol">
        <li>Most Linux systems already have Python.</li>
      </ol>

      <h4 className="python-lesson-h4">Check with:</h4>

      {/* Linux Check */}
      <div className="python-code-wrapper">
        <pre className="python-code-block">python --version</pre>
        <button className="python-copy-btn" onClick={() => copyCode('python --version')}>Copy</button>
      </div>

      <p className="python-lesson-p">If not installed, run:</p>

      {/* Linux Install */}
      <div className="python-code-wrapper">
        <pre className="python-code-block">sudo apt-get install python3</pre>
        <button className="python-copy-btn" onClick={() => copyCode('sudo apt-get install python3')}>Copy</button>
      </div>

      {showToast && (
        <div className="python-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
