import React, { useState } from "react";

const SyntaxIndentation = () => {
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
    <div id="syntax-indentation">
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Syntax & Indentation</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>1. What is Syntax?</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>In any language, syntax refers to the set of rules that dictates the correct structure of sentences. For example, in English, a sentence has a specific grammar. Similarly, in programming, syntax refers to the rules that define how a Python program must be written. If you break these rules, Python won't understand your instructions and will give you a SyntaxError.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Analogy:</b> Think of syntax as the "grammar" of the Python language.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>2. Python's Basic Syntax Rules</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Python is known for its simple and clean syntax. Here are a few key rules:</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Case-Sensitivity:</b> Python is case-sensitive. This means the variables name, Name, and NAME are three different variables.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Statements:</b> A statement is an instruction that the Python interpreter can execute. Typically, you write one statement per line.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>No Semicolons:</b> Unlike other languages like Java or C++, you do not need to put a semicolon (;) at the end of a statement.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>3. What is Indentation? (Python's Special Rule)</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Indentation refers to the spaces at the beginning of a code line. In many other programming languages, indentation is only for readability. In Python, indentation is mandatory and has a specific meaning. It is used to group statements together into a code block.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Code Block:</b> A block of code is a group of statements that are executed as a unit. For example, the code inside a loop, an if statement, or a function is a code block.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>4. Why Indentation is Crucial</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Python uses indentation to understand the structure and flow of your program. Incorrect indentation will cause an IndentationError.</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}><b>Example: Using if statement</b></p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}><b>Correct Code:</b> The print() statement is indented, so Python knows it belongs inside the if block. It will only run if age is greater than 18.</p>
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
        }}>{`age = 20

if age > 18:

    print("You are an adult.")`}</pre>
        <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\n    print("You are an adult.")`)} style={{
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
      }}><b>Incorrect Code:</b> The print() statement is not indented, so Python doesn't know where it belongs. This will raise an error.</p>
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
        }}>{`age = 20

if age > 18:

print("You are an adult.")`}</pre>
        <button onClick={() => copyCode(`age = 20\n\nif age > 18:\n\nprint("You are an adult.")`)} style={{
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
      }}>5. The Rules of Indentation</h3>
      <ol style={{
        listStyleType: 'decimal',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Use 4 Spaces:</b> The standard convention (recommended by PEP 8, Python's official style guide) is to use four spaces for each level of indentation.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Be Consistent:</b> You must use the same number of spaces for all statements within the same code block.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Avoid Mixing Tabs and Spaces:</b> It's best practice to only use spaces. Most modern code editors like VS Code and PyCharm automatically convert the Tab key into four spaces for you.</li>
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

export default SyntaxIndentation;
