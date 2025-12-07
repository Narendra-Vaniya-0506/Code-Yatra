import React, { useState } from "react";
import '../../lessons.css';

const VariablesNamingConventions = () => {
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
    <div id="variables-naming" className="lesson-content">
      <h2 className="lesson-title">Variables & Naming Conventions</h2>

      <h3 className="section-title">1. What is a Variable?</h3>
      <p className="intro-text">A variable is a fundamental concept in programming. Think of it as a labeled container or a box where you can store data. You give the container a name, and you can put information inside it. This information can be used, accessed, or changed later in your program.</p>
      <ul className="lesson-list">
        <li><b>Analogy:</b> A variable is like a contact in your phone. The name of the contact is the variable's name (e.g., "John Doe"), and the phone number is the value stored in it (e.g., "9876543210").</li>
      </ul>

      <h3 className="section-title">2. How to Create (Declare) a Variable</h3>
      <p className="intro-text">In Python, creating a variable is simple. You just need to choose a name and assign a value to it using the equals sign (=).</p>
      <p className="intro-text"><b>Syntax:</b> variable_name = value</p>
      <p className="intro-text"><b>Examples:</b></p>
      <div className="code-container">
        <pre>{`# A variable 'name' storing text (string)
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
is_learning = True`)} className="copy-button">
          Copy
        </button>
      </div>
      <p className="intro-text"><b>Dynamic Typing:</b> Python is a dynamically typed language. This means you don't have to explicitly declare the data type of a variable. Python automatically figures out the type based on the value you assign.</p>

      <h3 className="section-title">3. Naming Rules (The "Must-Follow" Rules)</h3>
      <p className="intro-text">Python has strict rules for naming variables. If you break these rules, you will get a SyntaxError.</p>
      <ol className="lesson-list">
        <li><b>Start with a Letter or Underscore:</b> A variable name must begin with a letter (a-z, A-Z) or an underscore (_). <code>_my_var</code> (Correct) <code>my_var</code> (Correct) <code>9my_var</code> (Incorrect)</li>
        <li><b>Allowed Characters:</b> A variable name can only contain letters, numbers, and underscores (A-z, 0-9, and _). <code>user_name_1</code> (Correct) <code>user-name</code> (Incorrect, uses a hyphen)</li>
        <li><b>Case-Sensitive:</b> Variable names are case-sensitive. <code>age</code>, <code>Age</code>, and <code>AGE</code> are three different variables.</li>
        <li><b>No Keywords:</b> You cannot use Python's reserved keywords as variable names. Keywords are words that have a special meaning in Python, like <code>if</code>, <code>for</code>, <code>def</code>, <code>class</code>, <code>else</code>, etc.</li>
      </ol>

      <h3 className="section-title">4. Naming Conventions (The "Should-Follow" Best Practices)</h3>
      <p className="intro-text">These are not strict rules but are strongly recommended for writing clean, readable, and professional code.</p>
      <ul className="lesson-list">
        <li><b>Use snake_case:</b> This is the most common convention in the Python community. Write variable names in all lowercase letters, separating words with underscores. <code>first_name</code>, <code>user_email_address</code>, <code>total_price</code> (Good) <code>firstname</code>, <code>userEmailAddress</code>, <code>TotalPrice</code> (Bad)</li>
        <li><b>Be Descriptive:</b> Choose names that clearly describe the data they hold. This makes your code much easier to understand for yourself and others. <code>user_name = "Alice"</code> (Good) <code>un = "Alice"</code> or <code>x = "Alice"</code> (Bad)</li>
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

export default VariablesNamingConventions;
