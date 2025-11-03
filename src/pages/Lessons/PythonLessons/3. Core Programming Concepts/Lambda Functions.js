import React, { useState } from "react";
import '../../lessons.css';

const LambdaFunctions = () => {
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
        <h1>Lambda Functions</h1>
        <p className="intro-text">
          Learn about lambda functions, Python's way of creating small, anonymous functions for quick operations.
        </p>
      </div>
      <div id="lambda-functions" className="lesson-content">

        <h2 className="lesson-title">Lambda Functions</h2>

        <h3 className="section-title">1. What Are Lambda Functions?</h3>
        <p className="intro-text">
          A <b>Lambda Function</b> in Python is a small, anonymous (nameless) function. It's used when you need a quick, one-line function without using the `def` keyword. Lambda functions are mostly used for short, temporary operations.
        </p>
        <p className="intro-text">
          Analogy: Think of lambda as a <b>shortcut</b> — instead of writing a full function, you write a one-line quick reply!
        </p>

        <h3 className="section-title">2. Syntax and Basic Example</h3>
        <p>
          <code>lambda arguments: expression</code>
        </p>
        <div className="code-container">
          <pre>{`# Example
square = lambda x: x * x
print(square(5))
# Output:
25`}</pre>
          <button onClick={() => copyCode(`# Example\nsquare = lambda x: x * x\nprint(square(5))`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: `lambda x: x * x` creates an anonymous function that returns x squared. We can store it in a variable and use it just like a normal function.
        </p>

        <h3 className="section-title">3. Lambda vs Normal Function</h3>
        <p className="intro-text"> 
          Let's compare both styles side by side
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Using def</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Using lambda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`def add(a, b):
    return a + b`}</pre>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`add = lambda a, b: a + b`}</pre>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`def greet(name):
    return 'Hello ' + name`}</pre>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`greet = lambda name: 'Hello ' + name`}</pre>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`def square(x):
    return x ** 2`}</pre>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <pre>{`square = lambda x: x ** 2`}</pre>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">4. Using Lambda with map(), filter(), and reduce()</h3>
        <p className="intro-text">
          Lambda is often used with Python's built-in higher-order functions — `map`, `filter`, and `reduce` — which apply functions to entire lists or sequences.
        </p>

        <h4>Example 1: Using lambda with map()</h4>
        <div className="code-container">
          <pre>{`numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
print(squares)
# Output:
[1, 4, 9, 16, 25]`}</pre>
          <button onClick={() => copyCode(`numbers = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x ** 2, numbers))\nprint(squares)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h4>Example 2: Using lambda with filter()</h4>
        <div className="code-container">
          <pre>{`numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)
# Output:
[2, 4, 6]`}</pre>
          <button onClick={() => copyCode(`numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h4>Example 3: Using lambda with reduce()</h4>
        <div className="code-container">
          <pre>{`from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(total)
# Output:
15`}</pre>
          <button onClick={() => copyCode(`from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\ntotal = reduce(lambda a, b: a + b, numbers)\nprint(total)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. Real-World Examples</h3>
        <p className="intro-text">
          Lambda functions are useful in situations like sorting, quick operations, or short transformations.
        </p>
        <div className="code-container">
          <pre>{`students = [('Aman', 22), ('Sara', 20), ('Raj', 25)]
students.sort(key=lambda x: x[1])
print(students)
# Output:
[('Sara', 20), ('Aman', 22), ('Raj', 25)]`}</pre>
          <button onClick={() => copyCode(`students = [('Aman', 22), ('Sara', 20), ('Raj', 25)]\nstudents.sort(key=lambda x: x[1])\nprint(students)`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Here, we sorted students by age using a one-line lambda function — neat and powerful!
        </p>

        <h3 className="section-title">6. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Trying to write multiple statements inside lambda (only one expression allowed)</li>
          <li>Forgetting that lambda is for short, simple tasks</li>
          <li>Using lambda for big functions — reduces readability</li>
        </ul>

        <h3 className="section-title">7. Quick Practice</h3>
        <p className="intro-text">
          Write a lambda function to check whether a number is even or odd. Hint: Use a conditional expression like `'Even' if x % 2 == 0 else 'Odd'`
        </p>

        <h3 className="section-title">8. Summary Table – Lambda at a Glance</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Feature</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>def Function</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>lambda Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Keyword</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uses def</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uses lambda</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Name</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Always has a name</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anonymous (can be unnamed)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lines of Code</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Multiple lines</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>One-liner</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Return Statement</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Explicitly written</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Implicitly returns expression result</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Best Use</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Complex logic</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Short & simple tasks</td>
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

export default LambdaFunctions;
