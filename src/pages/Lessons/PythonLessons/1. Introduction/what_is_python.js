import React from "react";

export default function WhatIsPython() {
  return (
    <div>
      <div className="lesson-hero">
        <h1>Python Lesson</h1>
        <p>
          Python is a modern, high-level programming language known for its interpreted execution and broad applicability across domains.
        </p>
      </div>
      <div id="overview" className="lesson-content">
        <h2 className="python-lesson-h2">Python Overview</h2>

        <h3 className="python-lesson-h3">What is Python?</h3>
        <ul className="python-lesson-ul">
          <li className="python-lesson-li">Python is a <b className="python-lesson-b">high-level, general-purpose programming language.</b></li>
          <li className="python-lesson-li">In simple terms, it's a way to write instructions that a computer can understand and execute.</li>
          <li className="python-lesson-li">Think of it as a recipe for your computer; you provide a set of clear steps, and the computer follows them to accomplish a task, like analyzing data, creating a website, or automating a boring job.</li>
        </ul>

        <h3 className="python-lesson-h3">Features of Python</h3>
        <ul className="python-lesson-ul">
          <li className="python-lesson-li-transition"><b className="python-lesson-b" style={{color: '#2d3748'}}>Simple and easy to understand:</b> Python's clean syntax reads almost like plain English.</li>
          <li className="python-lesson-li-transition"><b className="python-lesson-b" style={{color: '#2d3748'}}>Interpreted and platform-independent:</b> Code runs line by line, making debugging easy, and works on Windows, macOS, and Linux.</li>
          <li className="python-lesson-li-transition"><b className="python-lesson-b" style={{color: '#2d3748'}}>Open-source:</b> Free to use, modify, and distribute for personal or commercial purposes.</li>
          <li className="python-lesson-li-transition"><b className="python-lesson-b" style={{color: '#2d3748'}}>Large standard library:</b> Comes with extensive modules, plus popular libraries like NumPy, TensorFlow, and Django.</li>
        </ul>

        <h3 className="python-lesson-h3">Get Started</h3>
        <p className="python-lesson-p">Welcome to the Python Lesson! To begin learning:</p>
        <ol className="python-lesson-ol">
          <li className="python-lesson-li">Select a lesson from the sidebar on the left.</li>
          <li className="python-lesson-li">Work through the lessons in order for the best learning experience.</li>
          <li className="python-lesson-li">Each lesson contains detailed explanations and examples.</li>
        </ol>
      </div>
    </div>
  );
}
