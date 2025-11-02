import React, { useState } from "react";

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
    <div id="data-types">
      <h2 className="python-lesson-h2">Data Types</h2>

      <h3 className="python-lesson-h3">What are Data Types?</h3>
      <p className="python-lesson-p">In Python, every value has a data type. Data types are classifications that tell the computer what kind of data a variable is holding. This is important because the data type determines what kind of operations you can perform on that data.</p>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li"><b className="python-lesson-b">Analogy:</b> Think of data types like different kinds of containers. You use a bottle for water (a liquid), a box for toys (solid objects), and a folder for documents (papers). Each container is designed for a specific type of item.</li>
      </ul>

      <h3 className="python-lesson-h3">Common Python Data Types</h3>
      <p className="python-lesson-p">Python has several built-in data types. Here are the most fundamental ones.</p>

      <h4 className="python-lesson-h4">Numeric Types</h4>
      <p className="python-lesson-p">These types are used to store numerical values.</p>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li"><b className="python-lesson-b">Integer (int):</b> Represents positive or negative whole numbers without any decimal points.</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">age = 28<br/>score = -150</pre>
          <button className="python-copy-btn" onClick={() => copyCode('age = 28\nscore = -150')}>Copy</button>
        </div>
        <li className="python-lesson-li"><b className="python-lesson-b">Float (float):</b> Represents numbers that have a decimal point. They are used for values that require precision.</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">price = 499.99<br/>pi_value = 3.14159</pre>
          <button className="python-copy-btn" onClick={() => copyCode('price = 499.99\npi_value = 3.14159')}>Copy</button>
        </div>
        <li className="python-lesson-li"><b className="python-lesson-b">Complex (complex):</b> Represents numbers with a real and an imaginary part (e.g., a + bj). These are mainly used in scientific and mathematical applications.</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">complex_number = 5 + 6j</pre>
          <button className="python-copy-btn" onClick={() => copyCode('complex_number = 5 + 6j')}>Copy</button>
        </div>
      </ul>

      <h4 className="python-lesson-h4">Text Type</h4>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li"><b className="python-lesson-b">String (str):</b> A sequence of characters used to store text. Strings must be enclosed in either single quotes ('...') or double quotes ("...").</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">user_name = "CodeYatra"<br/>message = 'Python is fun!'</pre>
          <button className="python-copy-btn" onClick={() => copyCode('user_name = "CodeYatra"\nmessage = \'Python is fun!\'')}>Copy</button>
        </div>
      </ul>

      <h4 className="python-lesson-h4">Boolean Type</h4>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li"><b className="python-lesson-b">Boolean (bool):</b> Represents one of two possible values: True or False. Booleans are crucial for conditional logic and making decisions in your code.</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">is_active = True<br/>game_over = False</pre>
          <button className="python-copy-btn" onClick={() => copyCode('is_active = True\ngame_over = False')}>Copy</button>
        </div>
      </ul>

      <h4 className="python-lesson-h4">None Type</h4>
      <ul className="python-lesson-ul">
        <li className="python-lesson-li"><b className="python-lesson-b">NoneType (None):</b> A special data type that represents the absence of a value. If a variable has no value assigned to it yet, you can assign None as a placeholder. There is only one None value.</li>
        <div className="python-code-wrapper">
          <pre className="python-code-block">winner = None</pre>
          <button className="python-copy-btn" onClick={() => copyCode('winner = None')}>Copy</button>
        </div>
      </ul>

      <h3 className="python-lesson-h3">How to Check a Variable's Type</h3>
      <p className="python-lesson-p">You can easily check the data type of any variable using Python's built-in type() function.</p>
      <p className="python-lesson-p"><b className="python-lesson-b">Example:</b></p>
      <div className="python-code-wrapper">
        <pre className="python-code-block">{`user_name = "CODE YATRA"
score = 100
is_learning = True

print(type(user_name))    # Output: <class 'str'>
print(type(score))        # Output: <class 'int'>
print(type(is_learning))  # Output: <class 'bool'>`}</pre>
        <button className="python-copy-btn" onClick={() => copyCode(`user_name = "CODE YATRA"
score = 100
is_learning = True

print(type(user_name))    # Output: <class 'str'>
print(type(score))        # Output: <class 'int'>
print(type(is_learning))  # Output: <class 'bool'>`)}>Copy</button>
      </div>

      {showToast && (
        <div className="python-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default DataTypes;
