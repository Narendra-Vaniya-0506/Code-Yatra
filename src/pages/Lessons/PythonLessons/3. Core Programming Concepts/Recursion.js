import React, { useState } from "react";
import '../../lessons.css';

const Recursion = () => {
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
        <h1>Recursion</h1>
        <p className="intro-text">
          Learn about recursion, a powerful technique where functions call themselves to solve problems.
        </p>
      </div>
      <div id="recursion" className="lesson-content">

        <h2 className="lesson-title">Recursion</h2>

        <h3 className="section-title">1. What Is Recursion?</h3>
        <p className="intro-text">
          Recursion is a programming technique where a function calls itself to solve smaller versions of the same problem. It continues until it reaches a condition where it stops — called the <b>base case</b>. Analogy: Think of recursion like standing between two mirrors — you keep seeing reflections of yourself until it fades away!
        </p>

        <h3 className="section-title">2. How It Works</h3>
        <p className="intro-text">
          Every recursive function has two parts:
        </p>
        <ul className="lesson-list">
          <li><b>Base Case:</b> The condition that stops the recursion.</li>
          <li><b>Recursive Case:</b> The part where the function calls itself again.</li>
        </ul>
        <p className="intro-text">
          Example Template:
        </p>
        <div className="code-container">
          <pre>{`def function_name(parameters):
    if base_condition:
        return result
    else:
        return function_name(modified_parameters)`}</pre>
          <button onClick={() => copyCode(`def function_name(parameters):\n    if base_condition:\n        return result\n    else:\n        return function_name(modified_parameters)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">3. Recursion vs Loop</h3>
        <p className="intro-text">
          Both recursion and loops repeat actions, but recursion does it by calling itself, whereas loops use iteration keywords like `for` or `while`. Recursion is elegant for problems that can be divided into smaller subproblems, like factorial, Fibonacci, and tree traversal.
        </p>

        <h3 className="section-title">4. Example 1 – Factorial Using Recursion</h3>
        <p className="intro-text">
          Factorial of a number `n` (written as `n!`) is the product of all numbers from 1 to n. For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
        </p>
        <div className="code-container">
          <pre>{`def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)
print(factorial(5))
# Output:
120`}</pre>
          <button onClick={() => copyCode(`def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\nprint(factorial(5))`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Step-by-Step Call Stack for factorial(5):
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Call</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>What Happens</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Returned Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(5)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>calls factorial(4)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 * factorial(4)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(4)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>calls factorial(3)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 * factorial(3)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(3)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>calls factorial(2)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 * factorial(2)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(2)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>calls factorial(1)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 * factorial(1)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(1)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>returns 1</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            </tr>
          </tbody>
        </table>
        <p className="intro-text">
          When the base case is reached (n == 1), recursion stops and the results start returning back up the stack.
        </p>

        <h3 className="section-title">5. Example 2 – Fibonacci Using Recursion</h3>
        <p className="intro-text">
          Fibonacci sequence is a series where each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13...
        </p>
        <div className="code-container">
          <pre>{`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
for i in range(7):
    print(fibonacci(i), end=" ")
# Output:
0 1 1 2 3 5 8`}</pre>
          <button onClick={() => copyCode(`def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n - 1) + fibonacci(n - 2)\nfor i in range(7):\n    print(fibonacci(i), end=" ")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">6. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Missing base case → leads to infinite recursion (RecursionError)</li>
          <li>Forgetting to reduce problem size in recursive calls</li>
          <li>Using recursion for large inputs without optimization can cause stack overflow</li>
        </ul>

        <h3 className="section-title">7. Quick Practice</h3>
        <p className="intro-text">
          Write a recursive function `sum_n(n)` that returns the sum of all numbers from 1 to n. Example: sum_n(5) → 15
        </p>

        <h3 className="section-title">8. Summary Table – Recursion vs Iteration</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Aspect</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Recursion</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Iteration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Definition</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Function calls itself</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Repeats using loops</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Base case stops recursion</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Loop condition stops iteration</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Memory</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uses call stack</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uses less memory</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Best For</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Problems that can be divided</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Simple repeated tasks</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Example</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>factorial(), fibonacci()</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>for loops, while loops</td>
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

export default Recursion;
