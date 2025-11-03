import React, { useState } from "react";
import '../../lessons.css';

const LoopControl = () => {
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
        <h1>Loop Control</h1>
        <p className="intro-text">
          Learn how to control the flow of loops using break, continue, and pass statements.
        </p>
      </div>
      <div id="loop-control" className="lesson-content">

        <h2 className="lesson-title">Loop Control</h2>

        <h3 className="section-title">1. What Is Loop Control?</h3>
        <p className="intro-text">
          Loop control statements allow you to change the flow of loops. They give you the power to stop, skip, or temporarily do nothing inside a loop. Analogy: Imagine driving a car on a circular track. 'break' is like hitting the brakes to stop, 'continue' skips a checkpoint, and 'pass' just keeps the engine running quietly.
        </p>

        <h3 className="section-title">2. The break Statement – Stop the Loop</h3>
        <p className="intro-text">
          The `break` statement is used to exit a loop immediately, even if the condition hasn't finished. When Python encounters a `break`, it jumps out of the loop and continues with the rest of the program.
        </p>
        <div className="code-container">
          <pre>{`# Example: Stop at number 3
for num in range(1, 6):
    if num == 3:
        break
    print(num)
print("Loop ended.")
# Output:
1
2
Loop ended.`}</pre>
          <button onClick={() => copyCode(`# Example: Stop at number 3\nfor num in range(1, 6):\n    if num == 3:\n        break\n    print(num)\nprint("Loop ended.")`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: When num == 3, the loop stops instantly it doesn't print 3, 4, or 5.
        </p>

        <h3 className="section-title">3. The continue Statement Skip and Move On</h3>
        <p className="intro-text">
          The `continue` statement skips the current iteration and moves to the next loop cycle. It doesn't stop the loop just skips one round!
        </p>
        <div className="code-container">
          <pre>{`# Example: Skip number 3
for num in range(1, 6):
    if num == 3:
        continue
    print(num)
# Output:
1
2
4
5`}</pre>
          <button onClick={() => copyCode(`# Example: Skip number 3\nfor num in range(1, 6):\n    if num == 3:\n        continue\n    print(num)`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: When num == 3, Python skips the print() line and moves to the next number.
        </p>

        <h3 className="section-title">4. The pass Statement – Do Nothing (Placeholder)</h3>
        <p className="intro-text">
          Sometimes you need a statement that does nothing just to fill space and avoid errors. The `pass` keyword is a no-operation placeholder. It's often used in loops, functions, or classes that are still being built.
        </p>
        <div className="code-container">
          <pre>{`# Example: Using pass inside a loop
for num in range(1, 4):
    if num == 2:
        pass  # Do nothing for now
    print("Number:", num)
# Output:
Number: 1
Number: 2
Number: 3`}</pre>
          <button onClick={() => copyCode(`# Example: Using pass inside a loop\nfor num in range(1, 4):\n    if num == 2:\n        pass  # Do nothing for now\n    print("Number:", num)`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: When num == 2, Python just moves on without skipping or breaking it quietly passes.
        </p>

        <h3 className="section-title">5. Combined Example – break, continue, pass Together</h3>
        <p className="intro-text">
          Let's combine all three in one small program to see how they interact:
        </p>
        <div className="code-container">
          <pre>{`for num in range(1, 7):
    if num == 2:
        pass  # Placeholder
    elif num == 4:
        continue  # Skip 4
    elif num == 6:
        break  # Stop loop
    print("Current number:", num)
print("Loop finished!")
# Output:
Current number: 1
Current number: 2
Current number: 3
Current number: 5
Loop finished!`}</pre>
          <button onClick={() => copyCode(`for num in range(1, 7):\n    if num == 2:\n        pass  # Placeholder\n    elif num == 4:\n        continue  # Skip 4\n    elif num == 6:\n        break  # Stop loop\n    print("Current number:", num)\nprint("Loop finished!")`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: The loop skips 4, ends at 6, and uses pass at 2. Clean, controlled, and easy to manage!
        </p>

        <h3 className="section-title">6. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Forgetting to use `break` wisely can exit too early.</li>
          <li>Using `continue` incorrectly may skip essential code.</li>
          <li>Misunderstanding `pass` it doesn't skip or stop; it just 'does nothing'.</li>
          <li>Indentation errors inside loops are common stay consistent!</li>
        </ul>

        <h3 className="section-title">7. Quick Practice</h3>
        <p className="intro-text">
          Write a program using a for loop that prints numbers 1 to 10. • Skip number 5 using continue. • Stop the loop completely when number is 8 using break. • Use pass for number 3 as a placeholder. Observe the output carefully!
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

export default LoopControl;
