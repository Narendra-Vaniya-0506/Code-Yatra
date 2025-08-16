import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // 🔹 Added: Page loading state for loader animation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!identifier || !password) {
      setError("Please enter both email/phone and password.");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await login(identifier, password, rememberMe);
      
      if (result.success) {
        navigate("/profile", { replace: true });
      } else {
        setError(result.error || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 Loading screen
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
          borderTop: '4px solid #d4af37',
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
          Loading login information...
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

  // 🔹 Main login form
  return (
    <>
      <div
        style={{
          maxWidth: "400px",
          margin: "4rem auto",
          padding: "2rem",
          boxShadow: "0 0 20px rgba(0,0,0,0.15)",
          borderRadius: "12px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "800",
            fontSize: "2rem",
            color: "#222",
          }}
        >
          Login to Code Yatra
        </h2>

        {error && (
          <p style={{
            color: '#D8000C', 
            backgroundColor: '#FFD2D2',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
            required
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
            }}
            required
          />
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: "0.5rem" }}
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => alert("Password reset feature coming soon!")}
              style={{
                background: "none",
                border: "none",
                color: "#000",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "0.9rem",
              }}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: "1rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: isLoading ? "#666" : "#000",
              color: "#fff",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "1rem", textAlign: "center", color: "#555", fontSize: "0.9rem" }}>
          <p>
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              style={{
                background: "none",
                border: "none",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
