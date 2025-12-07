import React, { useState } from "react";
import '../../lessons.css';

const VariableScope = () => {
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
    <div>
      <div className="lesson-hero">
        <h1>Variable Scope</h1>
        <p className="intro-text">
          Learn about variable scope in Python to understand where variables can be accessed and modified.
        </p>
      </div>
      <div id="variable-scope" className="lesson-content">

        <h2 className="lesson-title">Variable Scope</h2>

        <h3 className="section-title">1. What Is Variable Scope?</h3>
        <p className="intro-text">
          Variable scope defines <b>where a variable can be accessed</b> or used in your program. Depending on where you create the variable, Python decides how long it exists and who can use it. Analogy: Think of scope like access cards in a building — some open only your room (local), some open the whole building (global), and some connect inner rooms (nonlocal).
        </p>

        <h3 className="section-title">2. Local Variables</h3>
        <p className="intro-text">
          A local variable is defined inside a function. It can only be used within that function — once the function ends, the variable disappears.
        </p>
        <div className="code-container">
          <pre>{`def show_message():
    msg = "Hello from inside!"
    print(msg)
show_message()
print(msg)  # Error!
# Output:
Hello from inside!
NameError: name 'msg' is not defined`}</pre>
          <button onClick={() => copyCode(`def show_message():\n    msg = "Hello from inside!"\n    print(msg)\nshow_message()\nprint(msg)  # Error!`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">3. Global Variables</h3>
        <p className="intro-text">
          A global variable is declared outside any function. It can be used anywhere in the program — inside or outside functions.
        </p>
        <div className="code-container">
          <pre>{`message = "Welcome to Code Yatra!"
def greet():
    print(message)
greet()
print(message)
# Output:
Welcome to Code Yatra!
Welcome to Code Yatra!`}</pre>
          <button onClick={() => copyCode(`message = "Welcome to Code Yatra!"\ndef greet():\n    print(message)\ngreet()\nprint(message)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">4. The global Keyword</h3>
        <p className="intro-text">
          If you want to modify a global variable inside a function, you must use the `global` keyword. Without it, Python treats it as a local variable.
        </p>
        <div className="code-container">
          <pre>{`counter = 0
def increase():
    global counter
    counter += 1
    print("Counter inside:", counter)
increase()
print("Counter outside:", counter)
# Output:
Counter inside: 1
Counter outside: 1`}</pre>
          <button onClick={() => copyCode(`counter = 0\ndef increase():\n    global counter\n    counter += 1\n    print("Counter inside:", counter)\nincrease()\nprint("Counter outside:", counter)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. Nonlocal Variables</h3>
        <p className="intro-text">
          A nonlocal variable is used in nested functions. It connects inner functions to variables of their outer (but not global) scope.
        </p>
        <div className="code-container">
          <pre>{`def outer():
    name = "Aman"
    def inner():
        nonlocal name
        name = "Sara"
        print("Inner:", name)
    inner()
    print("Outer:", name)
outer()
# Output:
Inner: Sara
Outer: Sara`}</pre>
          <button onClick={() => copyCode(`def outer():\n    name = "Aman"\n    def inner():\n        nonlocal name\n        name = "Sara"\n        print("Inner:", name)\n    inner()\n    print("Outer:", name)\nouter()`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: 'name' is updated in both inner and outer functions using the nonlocal keyword.
        </p>

        <h3 className="section-title">6. Combined Example – All Scopes Together</h3>
        <div className="code-container">
          <pre>{`x = "global"
def outer():
    y = "outer local"
    def inner():
        nonlocal y
        y = "modified by inner"
        print("Inner Scope ->", x, y)
    inner()
    print("Outer Scope ->", x, y)
outer()
print("Global Scope ->", x)
# Output:
Inner Scope -> global modified by inner
Outer Scope -> global modified by inner
Global Scope -> global`}</pre>
          <button onClick={() => copyCode(`x = "global"\ndef outer():\n    y = "outer local"\n    def inner():\n        nonlocal y\n        y = "modified by inner"\n        print("Inner Scope ->", x, y)\n    inner()\n    print("Outer Scope ->", x, y)\nouter()\nprint("Global Scope ->", x)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">7. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Trying to access local variables outside their function.</li>
          <li>Forgetting to use `global` before modifying global variables.</li>
          <li>Misunderstanding `nonlocal` — it doesn't access global scope, only outer function scope.</li>
        </ul>

        <h3 className="section-title">8. Quick Practice</h3>
        <p className="intro-text">
          Write a program with nested functions to track a score. Use `nonlocal` to update a variable inside the outer function from the inner one.
        </p>

        <h3 className="section-title">9. Summary Table – Variable Scopes at a Glance</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Scope</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Declared Inside</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Accessible In</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Keyword</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Example Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Local</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inside a function</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>That specific function only</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>None</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Temporary variables</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Global</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Outside all functions</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Everywhere</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>global</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>App-wide settings</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nonlocal</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inside nested function</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Outer (non-global) function</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>nonlocal</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nested updates</td>
            </tr>
          </tbody>
        </table>

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
    </div>
  );
};

export default VariableScope;
