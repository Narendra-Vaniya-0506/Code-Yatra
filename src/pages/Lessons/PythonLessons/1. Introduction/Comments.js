import React, { useState } from "react";
import '../../lessons.css';

const Comments = () => {
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
    <div id="Comments" className="lesson-content">
      <h2 className="lesson-title">Comments</h2>

      <h3 className="section-title">What are Comments?</h3>
      <ul className="lesson-list">
        <li>Comments are text inside your code that Python ignores.</li>
        <li>They are written for humans, not computers.</li>
        <li>Purpose: explain what the code does, why you wrote it, or leave notes for yourself/others.</li>
      </ul>
      <p className="intro-text">Think of comments as &ldquo;sticky notes&rdquo; on your code.</p>

      <h3 className="section-title">Types of Comments in Python</h3>

      <h4>Single-line Comment</h4>
      <p className="intro-text">Start with # &mdash; everything after it on the same line is ignored.</p>
      <div className="code-container">
        <pre># This is a single-line comment<br/>print("Hello World")  # This prints a message</pre>
        <button onClick={() => copyCode('# This is a single-line comment\nprint("Hello World")  # This prints a message')} className="copy-button">
          Copy
        </button>
      </div>

      <h4>Multi-line Comment (unofficial way)</h4>
      <p className="intro-text">Python doesn&apos;t have a &ldquo;true&rdquo; multi-line comment.</p>
      <p className="intro-text">Common practice: use # on each line.</p>
      <div className="code-container">
        <pre># This program prints a greeting<br/># It was written as a beginner exercise<br/>print("Hello Python")</pre>
        <button onClick={() => copyCode('# This program prints a greeting\n# It was written as a beginner exercise\nprint("Hello Python")')} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text">Another trick: use triple quotes (&ldquo;&rdquo;&rdquo; or &apos;&apos;&apos;).</p>
      <p className="intro-text">These are technically strings, but if not assigned to a variable, Python ignores them.</p>
      <div className="code-container">
        <pre>"""<br/>This is a multi-line comment<br/>using triple quotes<br/>"""<br/>print("Python is fun")</pre>
        <button onClick={() => copyCode('"""\nThis is a multi-line comment\nusing triple quotes\n"""\nprint("Python is fun")')} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">Why Are Comments Important?</h3>
      <ul className="lesson-list">
        <li>Help beginners understand code logic.</li>
        <li>Make teamwork easier &mdash; others can read your code.</li>
        <li>Future-you will thank present-you.</li>
        <li>Good practice for professional coding standards.</li>
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

export default Comments;
