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
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Comments</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>What are Comments?</h3>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Comments are text inside your code that Python ignores.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>They are written for humans, not computers.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Purpose: explain what the code does, why you wrote it, or leave notes for yourself/others.</li>
      </ul>
      <p style={{
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Think of comments as &ldquo;sticky notes&rdquo; on your code.</p>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Types of Comments in Python</h3>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Single-line Comment</h4>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Start with # &mdash; everything after it on the same line is ignored.</p>
      <div style={{position: 'relative', margin: '1rem 0'}}>
        <pre style={{
          background: '#1a202c',
          color: '#f8f8f2',
          padding: '0.75rem 1rem',
          borderRadius: '6px',
          fontFamily: 'monospace',
          overflowX: 'auto',
          margin: '0',
          whiteSpace: 'pre-wrap'
        }}># This is a single-line comment<br/>print("Hello World")  # This prints a message</pre>
        <button onClick={() => copyCode('# This is a single-line comment\nprint("Hello World")  # This prints a message')} style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          background: '#2d3748',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}>Copy</button>
      </div>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Multi-line Comment (unofficial way)</h4>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Python doesn&apos;t have a &ldquo;true&rdquo; multi-line comment.</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Common practice: use # on each line.</p>
      <div style={{position: 'relative', margin: '1rem 0'}}>
        <pre style={{
          background: '#1a202c',
          color: '#f8f8f2',
          padding: '0.75rem 1rem',
          borderRadius: '6px',
          fontFamily: 'monospace',
          overflowX: 'auto',
          margin: '0',
          whiteSpace: 'pre-wrap'
        }}># This program prints a greeting<br/># It was written as a beginner exercise<br/>print("Hello Python")</pre>
        <button onClick={() => copyCode('# This program prints a greeting\n# It was written as a beginner exercise\nprint("Hello Python")')} style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          background: '#2d3748',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}>Copy</button>
      </div>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Another trick: use triple quotes (&ldquo;&rdquo;&rdquo; or &apos;&apos;&apos;).</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>These are technically strings, but if not assigned to a variable, Python ignores them.</p>
      <div style={{position: 'relative', margin: '1rem 0'}}>
        <pre style={{
          background: '#1a202c',
          color: '#f8f8f2',
          padding: '0.75rem 1rem',
          borderRadius: '6px',
          fontFamily: 'monospace',
          overflowX: 'auto',
          margin: '0',
          whiteSpace: 'pre-wrap'
        }}>"""<br/>This is a multi-line comment<br/>using triple quotes<br/>"""<br/>print("Python is fun")</pre>
        <button onClick={() => copyCode('"""\nThis is a multi-line comment\nusing triple quotes\n"""\nprint("Python is fun")')} style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          background: '#2d3748',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}>Copy</button>
      </div>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Why Are Comments Important?</h3>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Help beginners understand code logic.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Make teamwork easier &mdash; others can read your code.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Future-you will thank present-you.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Good practice for professional coding standards.</li>
      </ul>

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
