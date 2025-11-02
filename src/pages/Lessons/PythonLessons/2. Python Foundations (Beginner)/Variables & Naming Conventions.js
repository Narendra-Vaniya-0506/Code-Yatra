import React, { useState } from "react";

const VariablesNaming = () => {
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
    <div id="variables-naming">
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Variables & Naming Conventions</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>1. What is a Variable?</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>A variable is a fundamental concept in programming. Think of it as a labeled container or a box where you can store data. You give the container a name, and you can put information inside it. This information can be used, accessed, or changed later in your program.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Analogy:</b> A variable is like a contact in your phone. The name of the contact is the variable's name (e.g., "John Doe"), and the phone number is the value stored in it (e.g., "9876543210").</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>2. How to Create (Declare) a Variable</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>In Python, creating a variable is simple. You just need to choose a name and assign a value to it using the equals sign (=).</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}><b>Syntax:</b> variable_name = value</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}><b>Examples:</b></p>
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
        }}>{`# A variable 'name' storing text (string)
name = "CODE YATRA"

# A variable 'age' storing a whole number (integer)
age = 25

# A variable 'price' storing a decimal number (float)
price = 99.95

# A variable 'is_learning' storing a true/false value (boolean)
is_learning = True`}</pre>
        <button onClick={() => copyCode(`# A variable 'name' storing text (string)
name = "CODE YATRA"

# A variable 'age' storing a whole number (integer)
age = 25

# A variable 'price' storing a decimal number (float)
price = 99.95

# A variable 'is_learning' storing a true/false value (boolean)
is_learning = True`)} style={{
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
      }}><b>Dynamic Typing:</b> Python is a dynamically typed language. This means you don't have to explicitly declare the data type of a variable. Python automatically figures out the type based on the value you assign.</p>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>3. Naming Rules (The "Must-Follow" Rules)</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Python has strict rules for naming variables. If you break these rules, you will get a SyntaxError.</p>
      <ol style={{
        listStyleType: 'decimal',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Start with a Letter or Underscore:</b> A variable name must begin with a letter (a-z, A-Z) or an underscore (_). <code>_my_var</code> (Correct) <code>my_var</code> (Correct) <code>9my_var</code> (Incorrect)</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Allowed Characters:</b> A variable name can only contain letters, numbers, and underscores (A-z, 0-9, and _). <code>user_name_1</code> (Correct) <code>user-name</code> (Incorrect, uses a hyphen)</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Case-Sensitive:</b> Variable names are case-sensitive. <code>age</code>, <code>Age</code>, and <code>AGE</code> are three different variables.</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>No Keywords:</b> You cannot use Python's reserved keywords as variable names. Keywords are words that have a special meaning in Python, like <code>if</code>, <code>for</code>, <code>def</code>, <code>class</code>, <code>else</code>, etc.</li>
      </ol>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>4. Naming Conventions (The "Should-Follow" Best Practices)</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>These are not strict rules but are strongly recommended for writing clean, readable, and professional code.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Use snake_case:</b> This is the most common convention in the Python community. Write variable names in all lowercase letters, separating words with underscores. <code>first_name</code>, <code>user_email_address</code>, <code>total_price</code> (Good) <code>firstname</code>, <code>userEmailAddress</code>, <code>TotalPrice</code> (Bad)</li>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Be Descriptive:</b> Choose names that clearly describe the data they hold. This makes your code much easier to understand for yourself and others. <code>user_name = "Alice"</code> (Good) <code>un = "Alice"</code> or <code>x = "Alice"</code> (Bad)</li>
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

export default VariablesNaming;
