import React, { useState } from "react";
import '../../lessons.css';

const DataTypes = () => {
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
    <div id="data-types" className="lesson-content">
      <h2 className="lesson-title">Data Types</h2>

      <h3 className="section-title">What are Data Types?</h3>
      <p className="intro-text">In Python, every value has a data type. Data types are classifications that tell the computer what kind of data a variable is holding. This is important because the data type determines what kind of operations you can perform on that data.</p>
      <ul className="lesson-list">
        <li><b>Analogy:</b> Think of data types like different kinds of containers. You use a bottle for water (a liquid), a box for toys (solid objects), and a folder for documents (papers). Each container is designed for a specific type of item.</li>
      </ul>

      <h3 className="section-title">Common Python Data Types</h3>
      <p className="intro-text">Python has several built-in data types. Here are the most fundamental ones.</p>

      <h4>Numeric Types</h4>
      <p className="intro-text">These types are used to store numerical values.</p>
      <ul className="lesson-list">
        <li><b>Integer (int):</b> Represents positive or negative whole numbers without any decimal points.</li>
        <div className="code-container">
          <pre>age = 28<br/>score = -150</pre>
          <button onClick={() => copyCode('age = 28\nscore = -150')} className="copy-button">
            Copy
          </button>
        </div>
        <li><b>Float (float):</b> Represents numbers that have a decimal point. They are used for values that require precision.</li>
        <div className="code-container">
          <pre>price = 499.99<br/>pi_value = 3.14159</pre>
          <button onClick={() => copyCode('price = 499.99\npi_value = 3.14159')} className="copy-button">
            Copy
          </button>
        </div>
        <li><b>Complex (complex):</b> Represents numbers with a real and an imaginary part (e.g., a + bj). These are mainly used in scientific and mathematical applications.</li>
        <div className="code-container">
          <pre>complex_number = 5 + 6j</pre>
          <button onClick={() => copyCode('complex_number = 5 + 6j')} className="copy-button">
            Copy
          </button>
        </div>
      </ul>

      <h4>Text Type</h4>
      <ul className="lesson-list">
        <li><b>String (str):</b> A sequence of characters used to store text. Strings must be enclosed in either single quotes ('...') or double quotes ("...").</li>
        <div className="code-container">
          <pre>user_name = "CodeYatra"<br/>message = 'Python is fun!'</pre>
          <button onClick={() => copyCode('user_name = "CodeYatra"\nmessage = \'Python is fun!\'')} className="copy-button">
            Copy
          </button>
        </div>
      </ul>

      <h4>Boolean Type</h4>
      <ul className="lesson-list">
        <li><b>Boolean (bool):</b> Represents one of two possible values: True or False. Booleans are crucial for conditional logic and making decisions in your code.</li>
        <div className="code-container">
          <pre>is_active = True<br/>game_over = False</pre>
          <button onClick={() => copyCode('is_active = True\ngame_over = False')} className="copy-button">
            Copy
          </button>
        </div>
      </ul>

      <h4>None Type</h4>
      <ul className="lesson-list">
        <li><b>NoneType (None):</b> A special data type that represents the absence of a value. If a variable has no value assigned to it yet, you can assign None as a placeholder. There is only one None value.</li>
        <div className="code-container">
          <pre>winner = None</pre>
          <button onClick={() => copyCode('winner = None')} className="copy-button">
            Copy
          </button>
        </div>
      </ul>

      <h3 className="section-title">How to Check a Variable's Type</h3>
      <p className="intro-text">You can easily check the data type of any variable using Python's built-in type() function.</p>
      <p className="intro-text"><b>Example:</b></p>
      <div className="code-container">
        <pre>{`user_name = "CODE YATRA"
score = 100
is_learning = True

print(type(user_name))    # Output: <class 'str'>
print(type(score))        # Output: <class 'int'>
print(type(is_learning))  # Output: <class 'bool'>`}</pre>
        <button onClick={() => copyCode(`user_name = "CODE YATRA"
score = 100
is_learning = True

print(type(user_name))    # Output: <class 'str'>
print(type(score))        # Output: <class 'int'>
print(type(is_learning))  # Output: <class 'bool'>`)} className="copy-button">
          Copy
        </button>
      </div>
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

export default DataTypes;
