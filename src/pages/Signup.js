import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState(null);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);



  const handleClosePopup = () => {
    setPopupMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      setPopupMessage("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setPopupMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone_number: phoneNumber,
          password,
        }),
      });
      if (response.ok) {
        setPopupMessage("Signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        const errorData = await response.json();
        console.error("Signup Error from Backend:", errorData);
        const errorMsg =
          typeof errorData === "object"
            ? JSON.stringify(errorData)
            : errorData;
        setPopupMessage(
          "Signup failed: " +
            (errorMsg || "An unknown error occurred. Please check the console.")
        );
      }
    } catch (error) {
      console.error("Network or parsing error during signup:", error);
      setPopupMessage(
        "Signup failed: Could not connect to the server or parse the response."
      );
    }
  };

  if (loading) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      animation: 'fadeIn 0.5s ease-in-out',
    }}>
      <div style={{
        width: '55px',
        height: '55px',
        border: '4px solid rgba(0,0,0,0.05)',
        borderTop: '4px solid #d4af37', // Elegant gold tone
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        marginBottom: '18px',
      }}></div>
      <p style={{
        color: '#555',
        fontSize: '1.1rem',
        fontWeight: '500',
        letterSpacing: '0.3px',
      }}>
        Loading Sign up information...
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

  return (
    <>
      {/* Your original signup form */}
      <div
        style={{
          maxWidth: "400px",
          margin: "4rem auto",
          padding: "2rem",
          boxShadow: "0 0 20px rgba(0,0,0,0.15)",
          borderRadius: "12px",
          fontFamily:
            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: "800",
            fontSize: "2rem",
            color: "#222",
          }}
        >
          Sign Up for Code Yatra
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = "#000")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = "#000")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = "#000")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = "#000")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease",
            }}
            required
            onFocus={(e) => (e.target.style.borderColor = "#000")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <button
            type="submit"
            style={{
              padding: "1rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#000",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#222")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#000")
            }
          >
            Sign Up
          </button>
        </form>
        <div
          style={{
            marginTop: "1rem",
            textAlign: "center",
            color: "#555",
            fontSize: "0.9rem",
          }}
        >
          <p>
            Have an account? Just{" "}
            <button
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
                padding: 0,
                marginLeft: "0.3rem",
              }}
            >
              Log In
            </button>
            .
          </p>
        </div>
      </div>
      {popupMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "90%",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
              {popupMessage}
            </p>
            <button
              onClick={handleClosePopup}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
