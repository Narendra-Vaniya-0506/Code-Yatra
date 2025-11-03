import React, { useState } from "react";
import '../../lessons.css';

const FunctionArguments = () => {
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
    <div>
      <div className="lesson-hero">
        <h1>Function Arguments</h1>
        <p className="intro-text">
          Learn how to pass arguments to functions in Python to make them more flexible and reusable.
        </p>
      </div>
      <div id="function-arguments" className="lesson-content">

        <h2 className="lesson-title">Function Arguments</h2>

        <h3 className="section-title">1. What Are Function Arguments?</h3>
        <p className="intro-text">
          Arguments are the values we pass inside a function when calling it. They allow us to send data into a function so it can perform tasks dynamically. Analogy: Imagine ordering food — you tell the waiter what items you want. Those items are the 'arguments' you pass!
        </p>

        <h3 className="section-title">2. Positional Arguments</h3>
        <p className="intro-text">
          These are the most common type. The order of the arguments matters — Python assigns values based on their position.
        </p>
        <div className="code-container">
          <pre>{`# Example: Positional Arguments
def intro(name, age):
    print("My name is", name, "and I am", age, "years old.")
intro("Aman", 20)
intro("Sara", 18)
# Output:
My name is Aman and I am 20 years old.
My name is Sara and I am 18 years old.`}</pre>
          <button onClick={() => copyCode(`# Example: Positional Arguments\ndef intro(name, age):\n    print("My name is", name, "and I am", age, "years old.")\nintro("Aman", 20)\nintro("Sara", 18)`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">3. Default Arguments</h3>
        <p className="intro-text">
          Default arguments are used when you want a parameter to have a pre-set value. If no value is provided, Python uses the default.
        </p>
        <div className="code-container">
          <pre>{`# Example: Default Argument
def greet(name="Guest"):
    print("Hello,", name)
greet("Kabir")
greet()
# Output:
Hello, Kabir
Hello, Guest`}</pre>
          <button onClick={() => copyCode(`# Example: Default Argument\ndef greet(name="Guest"):\n    print("Hello,", name)\ngreet("Kabir")\ngreet()`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: When no argument is passed, Python uses the default value 'Guest'.
        </p>

        <h3 className="section-title">4. Keyword Arguments</h3>
        <p className="intro-text">
          Here, you assign values to parameters using their names. This way, the order doesn't matter — Python matches them by name.
        </p>
        <div className="code-container">
          <pre>{`# Example: Keyword Arguments
def student_info(name, course):
    print(name, "is enrolled in", course)
student_info(course="Python", name="Ravi")
# Output:
Ravi is enrolled in Python`}</pre>
          <button onClick={() => copyCode(`# Example: Keyword Arguments\ndef student_info(name, course):\n    print(name, "is enrolled in", course)\nstudent_info(course="Python", name="Ravi")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">5. *args – Arbitrary Positional Arguments</h3>
        <p className="intro-text">
          When you don't know how many arguments a function will receive, use `*args`. It collects extra positional arguments into a tuple.
        </p>
        <div className="code-container">
          <pre>{`# Example: *args
def show_fruits(*fruits):
    print("Fruits list:", fruits)
show_fruits("Apple", "Banana", "Mango")
# Output:
Fruits list: ('Apple', 'Banana', 'Mango')`}</pre>
          <button onClick={() => copyCode(`# Example: *args\ndef show_fruits(*fruits):\n    print("Fruits list:", fruits)\nshow_fruits("Apple", "Banana", "Mango")`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: All items are packed into a tuple called 'fruits'.
        </p>

        <h3 className="section-title">6. **kwargs – Arbitrary Keyword Arguments</h3>
        <p className="intro-text">
          `**kwargs` allows you to pass multiple keyword arguments. It collects them into a dictionary with key-value pairs.
        </p>
        <div className="code-container">
          <pre>{`# Example: **kwargs
def show_details(**details):
    print("Details:", details)
show_details(name="Aman", age=22, city="Delhi")
# Output:
Details: {'name': 'Aman', 'age': 22, 'city': 'Delhi'}`}</pre>
          <button onClick={() => copyCode(`# Example: **kwargs\ndef show_details(**details):\n    print("Details:", details)\nshow_details(name="Aman", age=22, city="Delhi")`)} className="copy-button">
            Copy
          </button>
        </div>
        <p className="intro-text">
          Explanation: Python stores all keyword arguments inside a dictionary.
        </p>

        <h3 className="section-title">7. Combined Example – All in One!</h3>
        <p className="intro-text">
          Here's how you can mix positional, default, *args, and **kwargs in one function:
        </p>
        <div className="code-container">
          <pre>{`def demo(a, b=10, *args, **kwargs):
    print("a =", a)
    print("b =", b)
    print("args =", args)
    print("kwargs =", kwargs)
demo(5, 20, 30, 40, city="Mumbai", lang="Python")
# Output:
a = 5
b = 20
args = (30, 40)
kwargs = {'city': 'Mumbai', 'lang': 'Python'}`}</pre>
          <button onClick={() => copyCode(`def demo(a, b=10, *args, **kwargs):\n    print("a =", a)\n    print("b =", b)\n    print("args =", args)\n    print("kwargs =", kwargs)\ndemo(5, 20, 30, 40, city="Mumbai", lang="Python")`)} className="copy-button">
            Copy
          </button>
        </div>

        <h3 className="section-title">8. Common Mistakes</h3>
        <ul className="lesson-list">
          <li>Forgetting the order: Positional → Default → *args → **kwargs.</li>
          <li>Mixing argument types incorrectly.</li>
          <li>Using *args or **kwargs but not unpacking them properly.</li>
          <li>Giving parameters without names in keyword arguments.</li>
        </ul>

        <h3 className="section-title">9. Quick Practice</h3>
        <p className="intro-text">
          Write a function `order_food()` that accepts any number of food items (*args) and any number of details like table_no, waiter_name, etc. (**kwargs). Print all items and details neatly!
        </p>

        <h3 className="section-title">10. Summary Table – Difference Between All Argument Types</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Type</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Symbol</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Used For</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Positional</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>None</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Values passed in fixed order</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>intro('Aman', 20)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Default</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>None</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uses default if not provided</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>greet('Guest')</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Keyword</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>None</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Assign values by parameter name</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>student_info(name='Ravi')</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arbitrary Positional</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>*args</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Accepts multiple unnamed arguments</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>show_fruits('Apple', 'Banana')</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Arbitrary Keyword</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>**kwargs</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Accepts multiple named arguments</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>show_details(name='Aman', city='Delhi')</td>
            </tr>
          </tbody>
        </table>

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
    </div>
  );
};

export default FunctionArguments;
