import React, { useState } from "react";
import '../../lessons.css';

const Operators = () => {
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
    <div id="operators" className="lesson-content">
      <h2 className="lesson-title">Operators</h2>

      <h3 className="section-title">1. What are Operators?</h3>
      <p className="intro-text">Operators are special symbols in Python that carry out an operation on one or more values. These values are called operands. For example, in the expression 5 + 3, the + is the operator and 5 and 3 are the operands.</p>
      <p className="intro-text">Python's operators can be categorized into several groups.</p>

      <h3 className="section-title">2. Arithmetic Operators</h3>
      <p className="intro-text">These operators are used to perform standard mathematical calculations.</p>
      <table className="operators-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+</td>
            <td>Addition</td>
            <td>10 + 5</td>
            <td>15</td>
          </tr>
          <tr>
            <td>-</td>
            <td>Subtraction</td>
            <td>10 - 5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>*</td>
            <td>Multiplication</td>
            <td>10 * 5</td>
            <td>50</td>
          </tr>
          <tr>
            <td>/</td>
            <td>Division</td>
            <td>10 / 3</td>
            <td>3.33</td>
          </tr>
          <tr>
            <td>//</td>
            <td>Floor Division</td>
            <td>10 // 3</td>
            <td>3</td>
          </tr>
          <tr>
            <td>%</td>
            <td>Modulus</td>
            <td>10 % 3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>**</td>
            <td>Exponentiation</td>
            <td>10 ** 2</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
      <p className="intro-text"><b>Note on Division:</b> / always results in a float, while // (Floor Division) discards the fractional part and returns an integer.</p>

      <h3 className="section-title">3. Comparison (Relational) Operators</h3>
      <p className="intro-text">These operators are used to compare two values. They always return a Boolean value: True or False.</p>
      <table className="operators-table">
        <thead>
          <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>==</td>
            <td>Equal to</td>
            <td>5 == 5</td>
            <td>True</td>
          </tr>
          <tr>
            <td>!=</td>
            <td>Not equal to</td>
            <td>5 != 6</td>
            <td>True</td>
          </tr>
          <tr>
            <td>{'>'}</td>
            <td>Greater than</td>
            <td>5 {'>'} 3</td>
            <td>True</td>
          </tr>
          <tr>
            <td>{'<'}</td>
            <td>Less than</td>
            <td>5 {'<'} 3</td>
            <td>False</td>
          </tr>
          <tr>
            <td>{'>='}</td>
            <td>Greater than or equal to</td>
            <td>5 {'>='} 5</td>
            <td>True</td>
          </tr>
          <tr>
            <td>{'<='}</td>
            <td>Less than or equal to</td>
            <td>5 {'<='} 3</td>
            <td>False</td>
          </tr>
        </tbody>
      </table>

      <h3 className="section-title">4. Logical Operators</h3>
      <p className="intro-text">These operators are used to combine or modify conditional statements and boolean values.</p>
      <ul className="lesson-list">
        <li><b>and:</b> Returns True only if both operands are true.</li>
      </ul>
      <div className="code-container">
        <pre>{`(5 ${'>'} 3) and (10 ${'>'} 5)  # True, because both are true`}</pre>
        <button onClick={() => copyCode(`(5 > 3) and (10 > 5)  # True, because both are true`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>or:</b> Returns True if at least one of the operands is true.</li>
      </ul>
      <div className="code-container">
        <pre>{`(5 ${'>'} 10) or (10 ${'>'} 5)  # True, because the second one is true`}</pre>
        <button onClick={() => copyCode(`(5 > 10) or (10 > 5)  # True, because the second one is true`)} className="copy-button">
          Copy
        </button>
      </div>
      <ul className="lesson-list">
        <li><b>not:</b> Inverts the boolean value. It makes True become False and False become True.</li>
      </ul>
      <div className="code-container">
        <pre>{`not (5 ${'>'} 10)  # True, because (5 ${'>'} 10) is False`}</pre>
        <button onClick={() => copyCode(`not (5 > 10)  # True, because (5 > 10) is False`)} className="copy-button">
          Copy
        </button>
      </div>

      <h3 className="section-title">5. Bitwise Operators</h3>
      <p className="intro-text">Bitwise operators act on operands at the binary level (0s and 1s). These are used in more advanced, low-level programming and are not typically required for general application development.</p>
      <p className="intro-text">The main bitwise operators are: &amp; (AND), | (OR), ^ (XOR), ~ (NOT), {'<<'} (left shift), and {'>>'} (right shift).</p>

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

export default Operators;
