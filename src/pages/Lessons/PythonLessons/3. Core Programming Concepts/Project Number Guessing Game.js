import React, { useState } from "react";
import '../../lessons.css';

const ProjectNumberGuessingGame = () => {
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
        <h1>Project: Number Guessing Game</h1>
        <p className="intro-text">
          Build a fun number guessing game in Python to practice loops, conditionals, and user input.
        </p>
      </div>
      <div id="project-number-guessing-game" className="lesson-content">

        <h2 className="lesson-title">Project: Number Guessing Game</h2>

        <h3 className="section-title">1. Introduction</h3>
        <p className="intro-text">
          In this project, we'll build a fun and interactive <b>Number Guessing Game</b> using all the concepts we've learned in the Core Programming Concepts section. This game helps you practice conditions, loops, functions, and variable scopes — all in one engaging mini project!
        </p>

        <h3 className="section-title">2. Concepts Used</h3>
        <ul className="lesson-list">
          <li>Conditional Statements (if, elif, else)</li>
          <li>Loops (for, while)</li>
          <li>Loop Control (break, continue, pass)</li>
          <li>Functions (def, return)</li>
          <li>Function Arguments (default, keyword)</li>
          <li>Variable Scope (local, global)</li>
          <li>Lambda Functions</li>
        </ul>

        <h3 className="section-title">3. Project Goal</h3>
        <p className="intro-text">
          We'll create a guessing game where:
        </p>
        <ol className="lesson-list">
          <li>Python secretly selects a random number.</li>
          <li>The player tries to guess it.</li>
          <li>The program gives hints if the guess is too high or too low.</li>
          <li>The player wins if the correct number is guessed within limited attempts.</li>
        </ol>

        <h3 className="section-title">4. Game Logic Flow</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Step</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Action</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Concept Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Generate a random number</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variable & Import</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ask user for input</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Input Function</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Compare guess with secret number</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>if, elif, else</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Show hint (Too high / Too low)</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Conditional Statement</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>5</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Repeat until correct or out of attempts</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>while loop + break</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>6</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Display result</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Function + return + lambda</td>
            </tr>
          </tbody>
        </table>

        <h3 className="section-title">5. Full Code (number_guess.py)</h3>
        <div className="code-container">
          <pre>{`import random

# Global variable for score
score = 0

# Lambda for display message
show_result = lambda won: " You guessed it right!" if won else " Better luck next time!"

def play_game(max_range=10, max_attempts=5):
    global score
    secret = random.randint(1, max_range)
    print(f"\nI'm thinking of a number between 1 and {max_range}.")
    attempts = 0
    while attempts < max_attempts:
        try:
            guess = int(input("\nEnter your guess: "))
        except ValueError:
            print("\nPlease enter a valid number.")
            continue
        attempts += 1
        if guess == secret:
            print("\nCorrect! You guessed it in", attempts, "attempt(s).")
            score += 10
            print(show_result(True))
            break
        elif guess < secret:
            print("\nToo low! Try again.")
        else:
            print("\nToo high! Try again.")
        if attempts == max_attempts:
            print(f"Out of attempts! The number was {secret}.")
            print(show_result(False))

def main():
    print("\nWelcome to the Number Guessing Game!")
    play_game(max_range=20, max_attempts=6)
    print(f"\nYour total score: {score}")

main()`}</pre>
          <button onClick={() => copyCode(`import random\n\n# Global variable for score\nscore = 0\n\n# Lambda for display message\nshow_result = lambda won: " You guessed it right!" if won else " Better luck next time!"\n\ndef play_game(max_range=10, max_attempts=5):\n    global score\n    secret = random.randint(1, max_range)\n    print(f"\nI'm thinking of a number between 1 and {max_range}.")\n    attempts = 0\n    while attempts < max_attempts:\n        try:\n            guess = int(input("\nEnter your guess: "))\n        except ValueError:\n            print("\nPlease enter a valid number.")\n            continue\n        attempts += 1\n        if guess == secret:\n            print("\nCorrect! You guessed it in", attempts, "attempt(s).")\n            score += 10\n            print(show_result(True))\n            break\n        elif guess < secret:\n            print("\nToo low! Try again.")\n        else:\n            print("\nToo high! Try again.")\n        if attempts == max_attempts:\n            print(f"Out of attempts! The number was {secret}.")\n            print(show_result(False))\n\ndef main():\n    print("\nWelcome to the Number Guessing Game!")\n    play_game(max_range=20, max_attempts=6)\n    print(f"\nYour total score: {score}")\n\nmain()`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">6. How It Works</h3>
        <ul className="lesson-list">
          <li>A random number is generated using <code>random.randint()</code>.</li>
          <li>The user is asked to guess it within a limited number of attempts.</li>
          <li>Using <code>if</code>, <code>elif</code>, <code>else</code>, the program gives hints.</li>
          <li>The <code>while</code> loop keeps running until the player guesses correctly or runs out of tries.</li>
          <li>A global score variable is updated when the player wins.</li>
          <li>A lambda function quickly displays a winning or losing message.</li>
        </ul>

        <h3 className="section-title">7. Sample Output</h3>
        <div className="code-container">
          <pre>{`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 20.
Enter your guess: 10
Too low! Try again.
Enter your guess: 15
Too high! Try again.
Enter your guess: 12
Correct! You guessed it in 3 attempt(s).
 You guessed it right!
Your total score: 10`}</pre>
          <button onClick={() => copyCode(`Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 20.\nEnter your guess: 10\nToo low! Try again.\nEnter your guess: 15\nToo high! Try again.\nEnter your guess: 12\nCorrect! You guessed it in 3 attempt(s).\n You guessed it right!\nYour total score: 10`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">8. Bonus Enhancements</h3>
        <ul className="lesson-list">
          <li>Add difficulty levels (Easy: 1–10, Hard: 1–50)</li>
          <li>Allow multiple rounds</li>
          <li>Track best score</li>
          <li>Let players replay without restarting program</li>
          <li>Display remaining attempts dynamically</li>
        </ul>

        <h3 className="section-title">9. Summary – Concepts Used</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Concept</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Where Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>if, elif, else</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Checking guesses (Too high / Too low)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>while loop</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Repeating guesses until success</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>break, continue</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Controlling game loop flow</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Functions & Arguments</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Game logic inside play_game()</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variable Scope</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>score as global variable</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lambda</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Short success/failure message</td>
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

export default ProjectNumberGuessingGame;
