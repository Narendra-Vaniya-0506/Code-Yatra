import React, { useState } from "react";
import '../../lessons.css';

const StringOperations = () => {
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
    <div id="string-operations" className="lesson-content">
      <h2 className="lesson-title">String Operations</h2>

      <h3 className="section-title">1. What are String Operations?</h3>
      <p className="intro-text">Strings in Python are more than just static text; they are objects with a rich set of built-in methods (functions) that allow you to manipulate them. These operations let you join, split, change, and analyze strings with ease.</p>

      <h3 className="section-title">2. Common String Operations</h3>
      <ul className="lesson-list">
        <li><b>Concatenation (+):</b> Joins two or more strings into one.</li>
      </ul>
      <div className="code-container">
        <pre>{`first_name = "Code"
last_name = "Yatra"
full_name = first_name + " " + last_name  # Result: "Code Yatra"`}</pre>
        <button onClick={() => copyCode(`first_name = "Code"
last_name = "Yatra"
full_name = first_name + " " + last_name  # Result: "Code Yatra"`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Repetition (*):</b> Repeats a string multiple times.</li>
      </ul>
      <div className="code-container">
        <pre>{`line = "-_-" * 5  # Result: "-_--_--_--_--_-`}</pre>
        <button onClick={() => copyCode(`line = "-_-" * 5  # Result: "-_--_--_--_--_-"`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Length (len()):</b> Returns the number of characters in a string.</li>
      </ul>
      <div className="code-container">
        <pre>{`message = "Hello World"
print(len(message))  # Output: 11`}</pre>
        <button onClick={() => copyCode(`message = "Hello World"
print(len(message))  # Output: 11`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Case Conversion:</b></li>
        <ul>
          <li><code>.lower()</code>: Converts the entire string to lowercase.</li>
          <li><code>.upper()</code>: Converts the entire string to uppercase.</li>
          <li><code>.capitalize()</code>: Converts the first character to uppercase and the rest to lowercase.</li>
          <li><code>.title()</code>: Converts the first character of each word to uppercase.</li>
        </ul>
        <li><b>Find & replace:</b></li>
        <ul>
          <li><code>.find('substring')</code>: Returns the starting index of the first occurrence of a substring. Returns -1 if not found.</li>
          <li><code>.replace('old', 'new')</code>: Replaces all occurrences of the 'old' substring with the 'new' substring.</li>
        </ul>
      </ul>

      <h3 className="section-title">3. String Slicing (Accessing Parts of a String)</h3>
      <p className="intro-text">Strings are sequences, which means you can access their individual parts using an index. Slicing lets you extract a portion (a "slice") of a string.</p>
      <p className="intro-text">Indexing starts from 0.</p>
      <p className="intro-text"><b>Syntax:</b> my_string[start:stop:step]</p>
      <ul className="lesson-list">
        <li><b>start:</b> The index where the slice begins (inclusive). If omitted, starts from the beginning.</li>
        <li><b>stop:</b> The index where the slice ends (exclusive). If omitted, goes to the end.</li>
        <li><b>step:</b> The interval between characters. Default is 1.</li>
      </ul>
      <p className="intro-text"><b>Examples:</b></p>
      <div className="code-container">
        <pre>{`word = "PythonFun"

# Get a single character
print(word[0])        # Output: 'P'

# Get the first 6 characters
print(word[:6])       # Output: 'Python'

# Get characters from index 6 to the end
print(word[6:])       # Output: 'Fun'

# Negative indexing (from the end)
print(word[-1])       # Output: 'n' (the last character)

# Reverse the string
print(word[::-1])     # Output: 'nuFnohtyP'`}</pre>
        <button onClick={() => copyCode(`word = "PythonFun"

# Get a single character
print(word[0])        # Output: 'P'

# Get the first 6 characters
print(word[:6])       # Output: 'Python'

# Get characters from index 6 to the end
print(word[6:])       # Output: 'Fun'

# Negative indexing (from the end)
print(word[-1])       # Output: 'n' (the last character)

# Reverse the string
print(word[::-1])     # Output: 'nuFnohtyP'`)} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">4. String Formatting (Embedding Variables)</h3>
      <p className="intro-text">String formatting allows you to dynamically create strings by embedding the values of variables.</p>
      <p className="intro-text"><b>f-Strings (Formatted String Literals)</b></p>
      <p className="intro-text">This is the modern, most readable, and recommended way to format strings (available since Python 3.6).</p>
      <ul className="lesson-list">
        <li><b>Syntax:</b> Start the string with the letter f or F before the opening quote. Place variables or expressions inside curly braces {}.</li>
      </ul>
      <p className="intro-text"><b>Example:</b></p>
      <div className="code-container">
        <pre>{`name = "Code Yatra"
score = 98

# Using an f-string
greeting = f"Hello, {name}! Your score is {score}."
print(greeting)  # Output: Hello, Code Yatra! Your score is 98.`}</pre>
        <button onClick={() => copyCode(`name = "Code Yatra"
score = 98

# Using an f-string
greeting = f"Hello, {name}! Your score is {score}."
print(greeting)  # Output: Hello, Code Yatra! Your score is 98.`)} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text"><b>The .format() Method</b></p>
      <p className="intro-text">This is an older method but is still widely used in code written before Python 3.6.</p>
      <ul className="lesson-list">
        <li><b>Syntax:</b> Use curly braces {} as placeholders in the string and call the .format() method on the string, passing the variables as arguments.</li>
      </ul>
      <p className="intro-text"><b>Example:</b></p>
      <div className="code-container">
        <pre>{`name = "Code Yatra"
score = 98

# Using the .format() method
greeting = "Hello, {}! Your score is {}.".format(name, score)
print(greeting)  # Output: Hello, Code Yatra! Your score is 98.`}</pre>
        <button onClick={() => copyCode(`name = "Code Yatra"
score = 98

# Using the .format() method
greeting = "Hello, {}! Your score is {}.".format(name, score)
print(greeting)  # Output: Hello, Code Yatra! Your score is 98.`)} className="copy-button">
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
};

export default StringOperations;
