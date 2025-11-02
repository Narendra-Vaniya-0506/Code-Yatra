import React, { useState } from "react";

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
    <div id="first-program">
      <h2 className="python-lesson-h2">Running Your First Program</h2>

      <h3 className="python-lesson-h3">What "Hello, World!" is (and why it matters)</h3>
      <p className="python-lesson-p">It&apos;s the simplest program that prints a small message. The goal isn&apos;t to be fancy—it&apos;s to prove:</p>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">Python is installed correctly,</li>
        <li className="python-lesson-li">your editor is set up,</li>
        <li className="python-lesson-li">you know how to run code.</li>
      </ul>
      <p className="python-lesson-p">Once this works, everything else becomes easier.</p>

      <h3 className="python-lesson-h3">Make sure Python is installed</h3>
      <p className="python-lesson-p">Open your terminal and try these (you only need one to work)</p>

      <h4 className="python-lesson-h4">Windows (CMD/PowerShell):</h4>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">
          <div className="python-code-wrapper">
            <pre className="python-code-block">py -V</pre>
            <button className="python-copy-btn" onClick={() => copyCode('py -V')}>Copy</button>
          </div>
        </li>
        <li className="python-lesson-li">
          <div className="python-code-wrapper">
            <pre className="python-code-block">python --version</pre>
            <button className="python-copy-btn" onClick={() => copyCode('python --version')}>Copy</button>
          </div>
        </li>
      </ul>

      <h4 className="python-lesson-h4">macOS / Linux (Terminal):</h4>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">
          <div className="python-code-wrapper">
            <pre className="python-code-block">python3 --version</pre>
            <button className="python-copy-btn" onClick={() => copyCode('python3 --version')}>Copy</button>
          </div>
        </li>
      </ul>

      <h3 className="python-lesson-h3">Four ways to run Python</h3>

      <h3 className="python-lesson-h3">A) Interactive Prompt (REPL)</h3>
      <p className="python-lesson-p">Type python (or py / python3) in your terminal to open the prompt, then:</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block">print("Hello, World!")</pre>
        <button className="python-copy-btn" onClick={() => copyCode('print("Hello, World!")')}>Copy</button>
      </div>
      <p className="python-lesson-p">Great for quick tests.</p>

      <h3 className="python-lesson-h3">B) As a script (.py file)</h3>
      <ol className="python-lesson-ol">
        <li className="python-lesson-li">Create a file named hello.py with:</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">print("Hello, World!")</pre>
          <button className="python-copy-btn" onClick={() => copyCode('print("Hello, World!")')}>Copy</button>
        </div>
        <li className="python-lesson-li">Run it:</li>
        <p className="python-lesson-p">Windows:</p>
        <div className="python-code-wrapper">
          <pre className="python-code-block">py hello.py<br/># or: python hello.py</pre>
          <button className="python-copy-btn" onClick={() => copyCode('py hello.py\n# or: python hello.py')}>Copy</button>
        </div>
        <p className="python-lesson-p">macOS/Linux:</p>
        <div className="python-code-wrapper">
          <pre className="python-code-block">python3 hello.py</pre>
          <button className="python-copy-btn" onClick={() => copyCode('python3 hello.py')}>Copy</button>
        </div>
      </ol>

      <h3 className="python-lesson-h3">C) Inside an IDE (VS Code / PyCharm)</h3>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">Create hello.py, paste the print line, click Run.</li>
        <li className="python-lesson-li">IDEs show output in an output panel and manage the Python interpreter for you.</li>
      </ul>

      <h3 className="python-lesson-h3">D) In Jupyter Notebook</h3>
      <p className="python-lesson-p">Great for learning and data work.</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block">pip install notebook</pre>
        <button className="python-copy-btn" onClick={() => copyCode('pip install notebook')}>Copy</button>
      </div>
      <div className="python-code-wrapper">
        <pre className="python-code-block">jupyter notebook</pre>
        <button className="python-copy-btn" onClick={() => copyCode('jupyter notebook')}>Copy</button>
      </div>
      <p className="python-lesson-p">Create a new notebook and run:</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block">print("Hello, World!")</pre>
        <button className="python-copy-btn" onClick={() => copyCode('print("Hello, World!")')}>Copy</button>
      </div>
    </div>
  );
}
