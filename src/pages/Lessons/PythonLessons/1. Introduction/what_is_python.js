import React from "react";
import '../../lessons.css';

export default function WhatIsPython() {
  return (
    <div>
      <div className="lesson-hero">
        <h1>Python Lesson</h1>
        <p className="intro-text">
          Python is a modern, high-level programming language known for its interpreted execution and broad applicability across domains.
        </p>
      </div>
      <div id="overview" className="lesson-content">

        <h2 className="lesson-title">Python Overview</h2>

        <h3 className="section-title">What is Python?</h3>

        <ul className="lesson-list">
          <li>Python is a <b>high-level, general-purpose programming language.</b></li>
          <li>In simple terms, it's a way to write instructions that a computer can understand and execute.</li>
          <li>Think of it as a recipe for your computer; you provide a set of clear steps, and the computer follows them to accomplish a task, like analyzing data, creating a website, or automating a boring job.</li>
        </ul>


        <h3 className="section-title">Features of Python</h3>
        
        <ul className="lesson-list">
          <li><b>Simple and easy to understand:</b> Python's clean syntax reads almost like plain English.</li>
          <li><b>Interpreted and platform-independent:</b> Code runs line by line, making debugging easy, and works on Windows, macOS, and Linux.</li>
          <li><b>Open-source:</b> Free to use, modify, and distribute for personal or commercial purposes.</li>
          <li><b>Large standard library:</b> Comes with extensive modules, plus popular libraries like NumPy, TensorFlow, and Django.</li>
        </ul>

        <h3 className="section-title">Get Started</h3>
          <p className="intro-text">
            Welcome to the Python Lesson! To begin learning:
          </p>
          <ol className="steps-list">
            <li>Select a lesson from the sidebar on the left.</li>
            <li>Work through the lessons in order for the best learning experience.</li>
            <li>Each lesson contains detailed explanations and examples.</li>
          </ol>

      </div>
       <p className="created-by">— Created by Code Yatra</p>
       <button className="return-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
         Return to Top
       </button>

    </div>
  );
}
