import React, { useState } from "react";
import '../../lessons.css';

const Functions = () => {
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
        <h1>Functions</h1>
        <p className="intro-text">
          Learn how to create and use functions to make your code reusable and organized.
        </p>
      </div>
      <div id="functions" className="lesson-content">

        <h2 className="lesson-title">Functions</h2>

        <h3 className="section-title">1. What Are Functions?</h3>
        <p className="intro-text">
          Functions are reusable blocks of code that perform a specific task. Instead of writing the same logic again and again, you can 'define' it once and call it whenever needed. Analogy: Think of a function as a vending machine — you press a button (call it) and get your desired item (result)!
        </p>

        <h3 className="section-title">2. Why Use Functions?</h3>
        <ul className="lesson-list">
          <li>Avoid repetition — write code once, use many times.</li>
          <li>Make code easier to read and debug.</li>
          <li>Divide big problems into smaller tasks.</li>
          <li>Reuse logic in different parts of the program.</li>
        </ul>

        <h3 className="section-title">3. Creating a Function Using def</h3>
        <p className="intro-text">
          To define a function, use the `def` keyword followed by the function name and parentheses (). The code inside runs only when you call the function.
        </p>
        <div className="code-container">
          <pre>{`# Example: Simple function
def greet():
    print("Welcome to Code Yatra!")
# Calling the function
greet()
# Output:
Welcome to Code Yatra!`}</pre>
          <button onClick={() => copyCode(`# Example: Simple function\ndef greet():\n    print("Welcome to Code Yatra!")\n# Calling the function\ngreet()`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">4. Function with Parameters</h3>
        <p className="intro-text">
          Functions can accept data as input — these are called parameters or arguments. They make your functions dynamic and reusable.
        </p>
        <div className="code-container">
          <pre>{`# Example: Function with parameters
def greet_user(name):
    print("Hello,", name)
# Calling the function
greet_user("Aman")
greet_user("Sara")
# Output:
Hello, Aman
Hello, Sara`}</pre>
          <button onClick={() => copyCode(`# Example: Function with parameters\ndef greet_user(name):\n    print("Hello,", name)\n# Calling the function\ngreet_user("Aman")\ngreet_user("Sara")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. Using return – Getting Output from a Function</h3>
        <p className="intro-text">
          The `return` statement sends data back to the place where the function was called. It allows your function to give results that you can store or use further.
        </p>
        <div className="code-container">
          <pre>{`# Example: Function that returns a value
def add(a, b):
    result = a + b
    return result
sum_value = add(5, 7)
print("Sum is:", sum_value)
# Output:
Sum is: 12`}</pre>
          <button onClick={() => copyCode(`# Example: Function that returns a value\ndef add(a, b):\n    result = a + b\n    return result\nsum_value = add(5, 7)\nprint("Sum is:", sum_value)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">6. Function Without return – Direct Action</h3>
        <p className="intro-text">
          If a function doesn't have a `return`, it just performs its task (like printing or modifying data) but doesn't send any output back.
        </p>
        <div className="code-container">
          <pre>{`# Example: Function without return
def show_message():
    print("Python functions make life easier!")
show_message()
# Output:
Python functions make life easier!`}</pre>
          <button onClick={() => copyCode(`# Example: Function without return\ndef show_message():\n    print("Python functions make life easier!")\nshow_message()`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">7. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Forgetting to call the function after defining it.</li>
          <li>Mixing up parameters (input) and return values (output).</li>
          <li>Not using return when you need to save or reuse the result.</li>
          <li>Writing print() instead of return when a value is required later.</li>
        </ul>

        <h3 className="section-title">8. Quick Practice</h3>
        <p className="intro-text">
          Write a function named `multiply(a, b)` that returns the product of two numbers. Then call it for different values and print the results.
        </p>

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

export default Functions;
