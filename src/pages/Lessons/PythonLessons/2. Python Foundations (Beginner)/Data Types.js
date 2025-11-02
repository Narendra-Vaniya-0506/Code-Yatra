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
      <h2 style={{
        color: '#2d3748',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #4299e1'
      }}>Data Types</h2>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>What are Data Types?</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>In Python, every value has a data type. Data types are classifications that tell the computer what kind of data a variable is holding. This is important because the data type determines what kind of operations you can perform on that data.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Analogy:</b> Think of data types like different kinds of containers. You use a bottle for water (a liquid), a box for toys (solid objects), and a folder for documents (papers). Each container is designed for a specific type of item.</li>
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>Common Python Data Types</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>Python has several built-in data types. Here are the most fundamental ones.</p>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Numeric Types</h4>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>These types are used to store numerical values.</p>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Integer (int):</b> Represents positive or negative whole numbers without any decimal points.</li>
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
          }}>age = 28<br/>score = -150</pre>
          <button onClick={() => copyCode('age = 28\nscore = -150')} style={{
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
        }}><b>Float (float):</b> Represents numbers that have a decimal point. They are used for values that require precision.</li>
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
          }}>price = 499.99<br/>pi_value = 3.14159</pre>
          <button onClick={() => copyCode('price = 499.99\npi_value = 3.14159')} style={{
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
        }}><b>Complex (complex):</b> Represents numbers with a real and an imaginary part (e.g., a + bj). These are mainly used in scientific and mathematical applications.</li>
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
          }}>complex_number = 5 + 6j</pre>
          <button onClick={() => copyCode('complex_number = 5 + 6j')} style={{
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
      </ul>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Text Type</h4>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>String (str):</b> A sequence of characters used to store text. Strings must be enclosed in either single quotes ('...') or double quotes ("...").</li>
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
          }}>user_name = "CodeYatra"<br/>message = 'Python is fun!'</pre>
          <button onClick={() => copyCode('user_name = "CodeYatra"\nmessage = \'Python is fun!\'')} style={{
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
      </ul>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>Boolean Type</h4>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>Boolean (bool):</b> Represents one of two possible values: True or False. Booleans are crucial for conditional logic and making decisions in your code.</li>
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
          }}>is_active = True<br/>game_over = False</pre>
          <button onClick={() => copyCode('is_active = True\ngame_over = False')} style={{
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
      </ul>

      <h4 style={{margin: '1rem 0 0.5rem 0', color: '#2d3748'}}>None Type</h4>
      <ul style={{
        listStyleType: 'disc',
        paddingLeft: '2rem',
        marginBottom: '1.5rem'
      }}>
        <li style={{
          marginBottom: '0.5rem',
          paddingLeft: '0.5rem'
        }}><b>NoneType (None):</b> A special data type that represents the absence of a value. If a variable has no value assigned to it yet, you can assign None as a placeholder. There is only one None value.</li>
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
          }}>winner = None</pre>
          <button onClick={() => copyCode('winner = None')} style={{
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
      </ul>

      <h3 style={{
        color: '#4a5568',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem 0',
        paddingLeft: '0.5rem',
        borderLeft: '4px solid #48bb78'
      }}>How to Check a Variable's Type</h3>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}>You can easily check the data type of any variable using Python's built-in type() function.</p>
      <p style={{
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#4a5568'
      }}><b>Example:</b></p>
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
        }}>{`user_name = "CODE YATRA"
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
print(type(is_learning))  # Output: <class 'bool'>`)} style={{
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
