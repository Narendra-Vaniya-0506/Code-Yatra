import React, { useState } from "react";
import '../../lessons.css';

const InputOutput = () => {
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
    <div id="input-output" className="lesson-content">
      <h2 className="lesson-title">Input & Output</h2>

      <h3 className="section-title">1. What are Input and Output?</h3>
      <p className="intro-text">To create interactive programs, we need a way to communicate with the user.</p>
      <ul className="lesson-list">
        <li><b>Output:</b> This is how a program displays information, results, and messages to the user.</li>
        <li><b>Input:</b> This is how a program receives data and commands from the user.</li>
      </ul>

      <h3 className="section-title">2. Output: The print() Function</h3>
      <p className="intro-text">The print() function is the primary way to display output on the screen in Python. It can be used to show text, the values of variables, or a combination of both.</p>
      <ul className="lesson-list">
        <li><b>Basic Usage:</b></li>
      </ul>
      <div className="code-container">
        <pre>{`# Printing a simple text message
print("Welcome to Python!")`}</pre>
        <button onClick={() => copyCode(`# Printing a simple text message
print("Welcome to Python!")`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Printing Variables:</b> You can pass variable names to the print() function to display their stored values.</li>
      </ul>
      <div className="code-container">
        <pre>{`channel_name = "Code Yatra"
print(channel_name)`}</pre>
        <button onClick={() => copyCode(`channel_name = "Code Yatra"
print(channel_name)`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Printing Multiple Items:</b> When you pass multiple items separated by commas, print() automatically adds a space between them.</li>
      </ul>
      <div className="code-container">
        <pre>{`name = "Code Yatra"
print("Hello,", name, "! Nice to meet you.")`}</pre>
        <button onClick={() => copyCode(`name = "Code Yatra"
print("Hello,", name, "! Nice to meet you.")`)} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">3. Input: The input() Function</h3>
      <p className="intro-text">To get data from the user, we use the input() function.</p>
      <ul className="lesson-list">
        <li><b>How it Works:</b> The input() function pauses your program's execution and waits for the user to type something and press the Enter key. The text the user enters is then returned by the function.</li>
        <li><b>Using a Prompt:</b> You should provide a descriptive message, called a prompt, inside the parentheses to tell the user what kind of information to enter.</li>
      </ul>
      <div className="code-container">
        <pre>{`# The string inside input() is the prompt shown to the user.
name = input("What is your name? ")

# The value entered by the user is stored in the 'name' variable.
print(f"Welcome, {name}!")`}</pre>
        <button onClick={() => copyCode(`# The string inside input() is the prompt shown to the user.
name = input("What is your name? ")

# The value entered by the user is stored in the 'name' variable.
print(f"Welcome, {name}!")`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>Return Value:</b> It is important to remember that the input() function always returns the user's data as a string (str), regardless of what they type.</li>
      </ul>

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

export default InputOutput;
