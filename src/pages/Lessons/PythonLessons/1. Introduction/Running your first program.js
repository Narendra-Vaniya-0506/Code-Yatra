import React, { useState } from "react";

export default function RunningYourFirstProgram() {
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
    <div id="first-program">
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Running Your First Program</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>What "Hello, World!" is (and why it matters)</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>It&apos;s the simplest program that prints a small message. The goal isn&apos;t to be fancy—it&apos;s to prove:</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Python is installed correctly,</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>your editor is set up,</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>you know how to run code.</li>
      </ul>
      <p style={{
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Once this works, everything else becomes easier.</p>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Make sure Python is installed</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Open your terminal and try these (you only need one to work)</p>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Windows (CMD/PowerShell):</h4>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>
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
            }}>py -V</pre>
            <button onClick={() => copyCode('py -V')} style={{
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
        </li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>
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
            }}>python --version</pre>
            <button onClick={() => copyCode('python --version')} style={{
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
        </li>
      </ul>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>macOS / Linux (Terminal):</h4>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>
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
            }}>python3 --version</pre>
            <button onClick={() => copyCode('python3 --version')} style={{
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
        </li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Four ways to run Python</h3>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #4299e1'
      }}>A) Interactive Prompt (REPL)</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Type python (or py / python3) in your terminal to open the prompt, then:</p>
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
        }}>print("Hello, World!")</pre>
        <button onClick={() => copyCode('print("Hello, World!")')} style={{
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
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Great for quick tests.</p>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #4299e1'
      }}>B) As a script (.py file)</h3>
      <ol style={{
        listStyleType: 'decimal',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Create a file named hello.py with:</li>
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
          }}>print("Hello, World!")</pre>
          <button onClick={() => copyCode('print("Hello, World!")')} style={{
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
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Run it:</li>
        <p style={{
          marginBottom: '0.5rem',
          fontSize: '1.1rem',
          color: '#4a5568',
          paddingLeft: '2rem'
        }}>Windows:</p>
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
          }}>py hello.py<br/># or: python hello.py</pre>
          <button onClick={() => copyCode('py hello.py\n# or: python hello.py')} style={{
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
          marginBottom: '0.5rem',
          fontSize: '1.1rem',
          color: '#4a5568',
          paddingLeft: '2rem'
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
          }}>python3 hello.py</pre>
          <button onClick={() => copyCode('python3 hello.py')} style={{
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
      </ol>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #4299e1'
      }}>C) Inside an IDE (VS Code / PyCharm)</h3>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>Create hello.py, paste the print line, click Run.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}>IDEs show output in an output panel and manage the Python interpreter for you.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.25rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #4299e1'
      }}>D) In Jupyter Notebook</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Great for learning and data work.</p>
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
        }}>pip install notebook</pre>
        <button onClick={() => copyCode('pip install notebook')} style={{
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
        }}>jupyter notebook</pre>
        <button onClick={() => copyCode('jupyter notebook')} style={{
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
      }}>Create a new notebook and run:</p>
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
        }}>print("Hello, World!")</pre>
        <button onClick={() => copyCode('print("Hello, World!")')} style={{
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
    </div>
  );
}
