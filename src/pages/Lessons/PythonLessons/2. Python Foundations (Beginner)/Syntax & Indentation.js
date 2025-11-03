import React, { useState } from "react";
import '../../lessons.css';

const SyntaxIndentation = () => {
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
    <div id="syntax-indentation" className="lesson-content">
      <h2 className="lesson-title">Syntax & Indentation</h2>

      <h3 className="section-title">1. What is Syntax?</h3>
      <p className="intro-text">
        In any language, syntax refers to the set of rules that dictates the correct structure of sentences. For example, in English, a sentence has a specific grammar. Similarly, in programming, syntax refers to the rules that define how a Python program must be written. If you break these rules, Python won't understand your instructions and will give you a SyntaxError.
      </p>
      <ul className="lesson-list">
        <li><b>Analogy:</b> Think of syntax as the "grammar" of the Python language.</li>
      </ul>

      <h3 className="section-title">2. Python's Basic Syntax Rules</h3>
      <p className="intro-text">
        Python is known for its simple and clean syntax. Here are a few key rules:
      </p>
      <ul className="lesson-list">
        <li><b>Case-Sensitivity:</b> Python is case-sensitive. This means the variables name, Name, and NAME are three different variables.</li>
        <li><b>Statements:</b> A statement is an instruction that the Python interpreter can execute. Typically, you write one statement per line.</li>
        <li><b>No Semicolons:</b> Unlike other languages like Java or C++, you do not need to put a semicolon (;) at the end of a statement.</li>
      </ul>

      <h3 className="section-title">3. What is Indentation? (Python's Special Rule)</h3>
      <p className="intro-text">Indentation refers to the spaces at the beginning of a code line. In many other programming languages, indentation is only for readability. In Python, indentation is mandatory and has a specific meaning. It is used to group statements together into a code block.</p>
      <ul className="lesson-list">
        <li><b>Code Block:</b> A block of code is a group of statements that are executed as a unit. For example, the code inside a loop, an if statement, or a function is a code block.</li>
      </ul>

      <h3 className="section-title">4. Why Indentation is Crucial</h3>
      <p className="intro-text">Python uses indentation to understand the structure and flow of your program. Incorrect indentation will cause an IndentationError.</p>
      <p className="intro-text"><b>Example: Using if statement</b></p>
      <p className="intro-text"><b>Correct Code:</b> The print() statement is indented, so Python knows it belongs inside the if block. It will only run if age is greater than 18.</p>
      <div className="code-container">
        <pre>{`age = 20

if age > 18:

    print("You are an adult.")`}</pre>
        <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\n    print("You are an adult.")`)} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text"><b>Incorrect Code:</b> The print() statement is not indented, so Python doesn't know where it belongs. This will raise an error.</p>
      <div className="code-container">
        <pre>{`age = 20

if age > 18:

print("You are an adult.")`}</pre>
        <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\nprint("You are an adult.")`)} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">5. The Rules of Indentation</h3>
      <ol className="lesson-list">
        <li><b>Use 4 Spaces:</b> The standard convention (recommended by PEP 8, Python's official style guide) is to use four spaces for each level of indentation.</li>
        <li><b>Be Consistent:</b> You must use the same number of spaces for all statements within the same code block.</li>
        <li><b>Avoid Mixing Tabs and Spaces:</b> It's best practice to only use spaces. Most modern code editors like VS Code and PyCharm automatically convert the Tab key into four spaces for you.</li>
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

export default SyntaxIndentation;
