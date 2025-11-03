import React, { useState } from "react";
import '../../lessons.css';

const ProjectSimpleCalculator = () => {
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
    <div id="calculator-project" className="lesson-content">
      <h2 className="lesson-title">Project: Simple Command-Line Calculator</h2>

      <p className="intro-text">This project combines everything we've learned so far: variables, input/output, type casting, and arithmetic operators. It also introduces a crucial new concept: conditional logic, which we will cover formally in the next lesson.</p>

      <h3 className="section-title">Goal</h3>
      <p className="intro-text">To create a program that:</p>
      <ol className="lesson-list">
        <li>Asks the user to enter a number.</li>
        <li>Asks for an operator (+, -, *, /).</li>
        <li>Asks for a second number.</li>
        <li>Performs the calculation and displays the result.</li>
      </ol>

      <h3 className="section-title">Concepts Used</h3>
      <ul className="lesson-list">
        <li><b>print():</b> To display messages.</li>
        <li><b>input():</b> To get data from the user.</li>
        <li><b>float():</b> To convert the user's string input into numbers that can have decimals.</li>
        <li><b>Arithmetic Operators:</b> +, -, *, /.</li>
        <li><b>Conditional Logic:</b> if, elif, else to decide which calculation to perform.</li>
      </ul>

      <h3 className="section-title">Full Code (calculator.py)</h3>
      <div className="code-container">
        <pre>{`# calculator.py
# A simple command-line calculator in Python.

# 1. Greet the user
print("Welcome to the Simple Calculator!")
print("You can add, subtract, multiply, or divide.")
print("-" * 30)

# 2. Get input from the user
# We use float() to allow for decimal numbers.
num1 = float(input("Enter the first number: "))
op = input("Enter an operator (+, -, *, /): ")
num2 = float(input("Enter the second number: "))

# 3. Perform the calculation using conditional logic
# This is the "brain" of our calculator.
if op == '+':
    result = num1 + num2
elif op == '-':
    result = num1 - num2
elif op == '*':
    result = num1 * num2
elif op == '/':
    # Handle the special case of division by zero
    if num2 == 0:
        result = "Error! Division by zero is not allowed."
    else:
        result = num1 / num2
else:
    # Handle the case where the user enters an invalid operator
    result = "Error! Invalid operator."

# 4. Display the result
print("-" * 30)
# We check the type of result. If it's a string, it means an error occurred.
if type(result) == str:
    print(result)
else:
    # Use an f-string to show the full equation and result
    print(f"The result is: {num1} {op} {num2} = {result}")`}</pre>
        <button onClick={() => copyCode(`# calculator.py
# A simple command-line calculator in Python.

# 1. Greet the user
print("Welcome to the Simple Calculator!")
print("You can add, subtract, multiply, or divide.")
print("-" * 30)

# 2. Get input from the user
# We use float() to allow for decimal numbers.
num1 = float(input("Enter the first number: "))
op = input("Enter an operator (+, -, *, /): ")
num2 = float(input("Enter the second number: "))

# 3. Perform the calculation using conditional logic
# This is the "brain" of our calculator.
if op == '+':
    result = num1 + num2
elif op == '-':
    result = num1 - num2
elif op == '*':
    result = num1 * num2
elif op == '/':
    # Handle the special case of division by zero
    if num2 == 0:
        result = "Error! Division by zero is not allowed."
    else:
        result = num1 / num2
else:
    # Handle the case where the user enters an invalid operator
    result = "Error! Invalid operator."

# 4. Display the result
print("-" * 30)
# We check the type of result. If it's a string, it means an error occurred.
if type(result) == str:
    print(result)
else:
    # Use an f-string to show the full equation and result
    print(f"The result is: {num1} {op} {num2} = {result}")`)} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">How It Works</h3>
      <ol className="lesson-list">
        <li><b>Input:</b> The program first takes two numbers and an operator as input. float() is used to ensure we can work with decimal numbers like 10.5.</li>
        <li><b>Decision Making:</b> The if-elif-else structure is like a series of questions.
          <ul className="lesson-list">
            <li>First, it asks, "Is the operator +?" If yes, it adds the numbers and skips the rest.</li>
            <li>If not, it asks, "Is the operator -?" If yes, it subtracts and skips the rest.</li>
            <li>It continues this for * and /.</li>
            <li>The final else acts as a catch-all: if the operator is none of the above, it sets an error message.</li>
          </ul>
        </li>
      </ol>

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

export default ProjectSimpleCalculator;
