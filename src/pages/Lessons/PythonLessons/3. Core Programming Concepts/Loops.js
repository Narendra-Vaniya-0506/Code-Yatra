import React, { useState } from "react";
import '../../lessons.css';

const Loops = () => {
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
        <h1>Loops</h1>
        <p className="intro-text">
          Learn how to repeat code efficiently using loops in Python.
        </p>
      </div>
      <div id="loops" className="lesson-content">

        <h2 className="lesson-title">Loops</h2>

        <h3 className="section-title">1. What Are Loops?</h3>
        <p className="intro-text">
          Loops are used to repeat a block of code multiple times. They save time and make code shorter. Instead of writing the same line again and again, we tell Python to 'keep doing this' until a condition is met. Analogy: Think of loops like brushing your teeth every morning same task, done repeatedly!
        </p>

        <h3 className="section-title">2. The for Loop</h3>
        <p className="intro-text">
          The `for` loop runs a block of code for each item in a sequence like a list, tuple, or range of numbers. It's perfect when you know *how many times* you want the loop to run.
        </p>
        <div className="code-container">
          <pre>{`# Example 1: Using range()
for i in range(5):
    print("Code Yatra rocks!")
# Output:
Code Yatra rocks!
Code Yatra rocks!
Code Yatra rocks!
Code Yatra rocks!
Code Yatra rocks!`}</pre>
          <button onClick={() => copyCode(`# Example 1: Using range()\nfor i in range(5):\n    print("Code Yatra rocks!")`)} className="copy-button">
            Copy
          </button>
        </div>
        <div className="code-container">
          <pre>{`# Example 2: Looping through a list
students = ["Aman", "Sara", "Kabir"]
for name in students:
    print("Welcome,", name)
# Output:
Welcome, Aman
Welcome, Sara
Welcome, Kabir`}</pre>
          <button onClick={() => copyCode(`# Example 2: Looping through a list\nstudents = ["Aman", "Sara", "Kabir"]\nfor name in students:\n    print("Welcome,", name)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">3. The while Loop</h3>
        <p className="intro-text">
          A `while` loop runs *as long as* its condition is True. It's useful when you don't know in advance how many times you'll need to repeat something.
        </p>
        <div className="code-container">
          <pre>{`# Example: Countdown program
count = 5
while count > 0:
    print("Counting down:", count)
    count -= 1
print("Blast off! ")
# Output:
Counting down: 5
Counting down: 4
Counting down: 3
Counting down: 2
Counting down: 1
Blast off!`}</pre>
          <button onClick={() => copyCode(`# Example: Countdown program\ncount = 5\nwhile count > 0:\n    print("Counting down:", count)\n    count -= 1\nprint("Blast off! ")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">4. Breaking and Continuing Loops</h3>
        <p className="intro-text">
          Python gives us two powerful tools to control loops:
        </p>
        <ul className="lesson-list">
          <li><b>`break`</b> – Immediately stops the loop.</li>
          <li><b>`continue`</b> – Skips the current iteration and moves to the next one.</li>
        </ul>
        <div className="code-container">
          <pre>{`# Example: Using break and continue
for num in range(1, 6):
    if num == 3:
        continue  # Skip 3
    if num == 5:
        break     # Stop when number is 5
    print(num)
# Output:
1
2
4`}</pre>
          <button onClick={() => copyCode(`# Example: Using break and continue\nfor num in range(1, 6):\n    if num == 3:\n        continue  # Skip 3\n    if num == 5:\n        break     # Stop when number is 5\n    print(num)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. Nested Loops</h3>
        <p className="intro-text">
          A loop inside another loop is called a nested loop. It's useful when working with grids, tables, or combinations.
        </p>
        <div className="code-container">
          <pre>{`# Example: Multiplication Table (1 to 3)
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i*j)
    print("------")
# Output:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3-----
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6-----
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9-----`}</pre>
          <button onClick={() => copyCode(`# Example: Multiplication Table (1 to 3)\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(i, "x", j, "=", i*j)\n    print("------")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">6. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Forgetting to update the variable in a while loop (causes an infinite loop!).</li>
          <li>Using `break` incorrectly can stop the loop too early.</li>
          <li>Mixing up indentation make sure your loop body is indented properly.</li>
        </ul>

        <h3 className="section-title">7. Quick Practice</h3>
        <p className="intro-text">
          Write a program that asks the user for a number (n) and prints all numbers from 1 to n using a for loop. Then modify it to print only even numbers using continue.
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

export default Loops;
