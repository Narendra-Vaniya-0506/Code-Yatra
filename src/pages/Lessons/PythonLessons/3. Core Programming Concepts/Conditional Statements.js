import React, { useState } from "react";
import '../../lessons.css';

const ConditionalStatements = () => {
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
        <h1>Conditional Statements</h1>
        <p className="intro-text">
          Learn how to make decisions in your Python programs using conditional statements like if, elif, and else.
        </p>
      </div>
      <div id="conditional-statements" className="lesson-content">

        <h2 className="lesson-title">Conditional Statements</h2>

        <h3 className="section-title">1. What Are Conditional Statements?</h3>
        <p className="intro-text">
          Conditional statements allow your program to make decisions based on certain conditions. They enable your code to take different paths depending on whether something is true or false. Analogy: Think of conditional statements like traffic signals they decide whether cars should stop, go, or wait.
        </p>

        <h3 className="section-title">2. The if Statement</h3>
        <p className="intro-text">
          The `if` statement checks whether a condition is true. If it is, the indented block of code under it runs.
        </p>
        <div className="code-container">
          <pre>{`age = 18
if age >= 18:
    print("You are eligible to vote!")`}</pre>
          <button onClick={() => copyCode(`age = 18\nif age >= 18:\n    print("You are eligible to vote!")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">3. The elif Statement</h3>
        <p className="intro-text">
          `elif` stands for "else if". It allows you to check multiple conditions, one after another. Python runs the first true condition and skips the rest.
        </p>
        <div className="code-container">
          <pre>{`marks = 85
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 60:
    print("Grade: C")
else:
    print("Grade: D")`}</pre>
          <button onClick={() => copyCode(`marks = 85\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 75:\n    print("Grade: B")\nelif marks >= 60:\n    print("Grade: C")\nelse:\n    print("Grade: D")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">4. The else Statement</h3>
        <p className="intro-text">
          The `else` statement provides a fallback it runs only when all previous `if` and `elif` conditions are false.
        </p>
        <div className="code-container">
          <pre>{`temperature = 12
if temperature > 25:
    print("It's a hot day!")
else:
    print("It's a cool day!")`}</pre>
          <button onClick={() => copyCode(`temperature = 12\nif temperature > 25:\n    print("It's a hot day!")\nelse:\n    print("It's a cool day!")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. Nested if Statements</h3>
        <p className="intro-text">
          You can place one `if` statement inside another this is called nesting. It allows more specific decision-making.
        </p>
        <div className="code-container">
          <pre>{`age = 20
has_id = True
if age >= 18:
    if has_id:
        print("Access granted.")
    else:
        print("ID required!")
else:
    print("You must be 18 or older.")`}</pre>
          <button onClick={() => copyCode(`age = 20\nhas_id = True\nif age >= 18:\n    if has_id:\n        print("Access granted.")\n    else:\n        print("ID required!")\nelse:\n    print("You must be 18 or older.")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">6. Real-Life Example Grading System</h3>
        <p className="intro-text">
          Let's build a grading system used at Code Yatra for students:
        </p>
        <div className="code-container">
          <pre>{`score = int(input("Enter your score: "))
if score >= 90:
    print("Excellent! Grade A")
elif score >= 75:
    print("Good! Grade B")
elif score >= 60:
    print("Satisfactory. Grade C")
else:
    print("Needs Improvement. Grade D")`}</pre>
          <button onClick={() => copyCode(`score = int(input("Enter your score: "))\nif score >= 90:\n    print("Excellent! Grade A")\nelif score >= 75:\n    print("Good! Grade B")\nelif score >= 60:\n    print("Satisfactory. Grade C")\nelse:\n    print("Needs Improvement. Grade D")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">7. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Forgetting the colon (:) after `if`, `elif`, or `else`.</li>
          <li>Misaligned indentation Python requires consistent spacing.</li>
          <li>Using `=` instead of `==` when comparing values.</li>
          <li>Writing unrelated statements inside an `if` block without indentation.</li>
        </ul>

        <h3 className="section-title">8. Quick Practice</h3>
        <p className="intro-text">
          Write a program that asks for a number and prints:
        </p>
        <ul className="lesson-list">
          <li>"Positive" if it's greater than 0</li>
          <li>"Negative" if it's less than 0</li>
          <li>"Zero" if it's equal to 0</li>
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
    </div>
  );
};

export default ConditionalStatements;
