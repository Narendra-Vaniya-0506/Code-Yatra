import React, { useState } from "react";
import '../../lessons.css';

const TypeCasting = () => {
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
    <div id="type-casting" className="lesson-content">
      <h2 className="lesson-title">Type Casting</h2>

      <h3 className="section-title">1. What is Type Casting?</h3>
      <p className="intro-text">Type Casting (or Type Conversion) is the process of converting a variable's value from one data type to another. This is a common and necessary task in programming, especially when dealing with user input.</p>
      <p className="intro-text">For example, you might need to convert a string that contains a number (like '25') into an actual integer (25) to perform mathematical calculations.</p>

      <h3 className="section-title">2. Common Type Casting Functions</h3>
      <p className="intro-text">Python provides simple, built-in functions to convert between data types.</p>
      <ul className="lesson-list">
        <li><b>int():</b> This function converts a compatible value into an integer.</li>
        <ul>
          <li>It can convert a float, truncating the decimal part (e.g., int(7.9) becomes 7).</li>
          <li>It can convert a string that represents a whole number (e.g., int('101') becomes 101).</li>
        </ul>
        <li><b>float():</b> This function converts a compatible value into a floating-point number.</li>
        <ul>
          <li>It can convert an integer (e.g., float(10) becomes 10.0).</li>
          <li>It can convert a string that represents a number (e.g., float('45.6') becomes 45.6).</li>
        </ul>
        <li><b>str():</b> This function converts a value into a string. You can convert almost any type, like integers, floats, and booleans, into their string representation.</li>
        <ul>
          <li>str(123) becomes '123'.</li>
          <li>str(True) becomes 'True'.</li>
        </ul>
      </ul>

      <h3 className="section-title">3. Practical Example: Solving the input() Problem</h3>
      <p className="intro-text">In the previous lesson, we learned that the input() function always returns a string. Type casting is the solution to this problem.</p>
      <p className="intro-text"><b>The Problem:</b></p>
      <div className="code-container">
        <pre>{`# User enters 30
age_str = input("Enter your age: ")
# The line below causes a TypeError because 'age_str' is a string ('30'), not a number.
# future_age = age_str + 5`}</pre>
        <button onClick={() => copyCode(`# User enters 30
age_str = input("Enter your age: ")
# The line below causes a TypeError because 'age_str' is a string ('30'), not a number.
# future_age = age_str + 5`)} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text"><b>The Solution using int():</b> We use the int() function to cast the string received from input() into an integer before we use it in a calculation.</p>
      <div className="code-container">
        <pre>{`# User enters 30
age_str = input("Enter your age: ")
# Convert the string '30' to the integer 30
age_num = int(age_str)
# Now the math operation works correctly
future_age = age_num + 5
print(f"In five years, you will be {future_age} years old.")`}</pre>
        <button onClick={() => copyCode(`# User enters 30
age_str = input("Enter your age: ")
# Convert the string '30' to the integer 30
age_num = int(age_str)
# Now the math operation works correctly
future_age = age_num + 5
print(f"In five years, you will be {future_age} years old.")`)} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text"><b>Common Shorthand:</b> Programmers often perform the input and casting in a single line for cleaner code.</p>
      <div className="code-container">
        <pre>{`age = int(input("Enter your age: "))
print(f"Your age is {age}.")`}</pre>
        <button onClick={() => copyCode(`age = int(input("Enter your age: "))
print(f"Your age is {age}.")`)} className="copy-button">
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

export default TypeCasting;

