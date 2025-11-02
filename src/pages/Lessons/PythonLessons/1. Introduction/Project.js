import React, { useState } from "react";

const Project = () => {
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
    <div id="Project">
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Project</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Goal</h3>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Display a welcome message.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>This project teaches you:</h3>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>How to use print()</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Step 1: Create a new Python file</h3>
      <ol style={{
        listStyleType: 'decimal',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Open your IDE (VS Code, PyCharm, or even Notepad).</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Create a file named Welcome.py.</li>
      </ol>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Step 2: Write the code</h3>
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
        }}># Simple Hello World Welcome Program<br/># Display a welcome message<br/>print("Welcome to Python!")</pre>
        <button onClick={() => copyCode('# Simple Hello World welcome Program\n# Display a welcome message\nprint("Welcome to Python!")')} style={{
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
      }}>Step 3: Run the program</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>• Windows: open terminal and type:</p>
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
        }}>py Welcome.py</pre>
        <button onClick={() => copyCode('py Welcome.py')} style={{
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
      }}>macOS/Linux:</p>
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
        }}>python3 Welcome.py</pre>
        <button onClick={() => copyCode('python3 Welcome.py')} style={{
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
      }}>You'll see:</p>
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
        }}>Welcome to Python!</pre>
        <button onClick={() => copyCode('Welcome to Python!')} style={{
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
      }}>How it Works</h3>
      <ol style={{
        listStyleType: 'decimal',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>print("Welcome to Python!") &rarr; prints text.</li>
      </ol>

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

export default Project;
