import React from "react";

const Comments = () => {
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

  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  return (
    <div id="Comments">
      <h2 className="python-lesson-h2">Comments</h2>

      <h3 className="python-lesson-h3">What are Comments?</h3>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">Comments are text inside your code that Python ignores.</li>
        <li className="python-lesson-li">They are written for humans, not computers.</li>
        <li className="python-lesson-li">Purpose: explain what the code does, why you wrote it, or leave notes for yourself/others.</li>
      </ul>
      <p className="python-lesson-p">Think of comments as &ldquo;sticky notes&rdquo; on your code.</p>

      <h3 className="python-lesson-h3">Types of Comments in Python</h3>

      <h4 className="python-lesson-h4">Single-line Comment</h4>
      <p className="python-lesson-p">Start with # &mdash; everything after it on the same line is ignored.</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block"># This is a single-line comment<br/>print("Hello World")  # This prints a message</pre>
        <button className="python-copy-btn" onClick={() => copyCode('# This is a single-line comment\nprint("Hello World")  # This prints a message')}>Copy</button>
      </div>

      <h4 className="python-lesson-h4">Multi-line Comment (unofficial way)</h4>
      <p className="python-lesson-p">Python doesn&apos;t have a &ldquo;true&rdquo; multi-line comment.</p>
      <p className="python-lesson-p">Common practice: use # on each line.</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block"># This program prints a greeting<br/># It was written as a beginner exercise<br/>print("Hello Python")</pre>
        <button className="python-copy-btn" onClick={() => copyCode('# This program prints a greeting\n# It was written as a beginner exercise\nprint("Hello Python")')}>Copy</button>
      </div>
      <p className="python-lesson-p">Another trick: use triple quotes (&ldquo;&rdquo;&rdquo; or &apos;&apos;&apos;).</p>
      <p className="python-lesson-p">These are technically strings, but if not assigned to a variable, Python ignores them.</p>
      <div className="python-code-wrapper">
        <pre className="python-code-block">"""<br/>This is a multi-line comment<br/>using triple quotes<br/>"""<br/>print("Python is fun")</pre>
        <button className="python-copy-btn" onClick={() => copyCode('"""\nThis is a multi-line comment\nusing triple quotes\n"""\nprint("Python is fun")')}>Copy</button>
      </div>

      <h3 className="python-lesson-h3">Why Are Comments Important?</h3>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li">Help beginners understand code logic.</li>
        <li className="python-lesson-li">Make teamwork easier &mdash; others can read your code.</li>
        <li className="python-lesson-li">Future-you will thank present-you.</li>
        <li className="python-lesson-li">Good practice for professional coding standards.</li>
      </ul>

      {showToast && (
        <div className="python-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Comments;
