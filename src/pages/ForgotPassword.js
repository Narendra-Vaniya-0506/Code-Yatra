import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!identifier) {
      setError("Please enter your email address.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/forgot-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage("OTP has been sent to your email address.");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!otp || !newPassword) {
      setError("Please enter OTP and new password.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reset-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, otp_code: otp, new_password: newPassword }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage("Your password has been reset successfully.");
        navigate("/login");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="linear-container with-lines lines-animate glass"
        style={{
          maxWidth: "420px",
          margin: "4rem auto",
          padding: "2rem",
          borderRadius: "16px",
          border: "1px solid var(--cy-border)",
          boxShadow: "var(--cy-elev)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "800",
            fontSize: "2rem",
            color: "var(--cy-text)",
          }}
        >
          Forgot Password
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
        {successMessage && (
          <p style={{
            color: '#4CAF50',
            backgroundColor: '#DFF2BF',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>
            {successMessage}
          </p>
        )}

        <form
          onSubmit={handleSendOtp}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "12px",
              border: "1px solid var(--cy-border)",
              background: "rgba(255,255,255,0.08)",
              color: "var(--cy-text)",
            }}
            required
          />
          <button
            type="submit"
            className="btn-glass-dark btn-lg"
            style={{
              color: "#fff",
            }}
          >
            Send OTP
          </button>
        </form>

        <form
          onSubmit={handleResetPassword}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}
        >
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "12px",
              border: "1px solid var(--cy-border)",
              background: "rgba(255,255,255,0.08)",
              color: "var(--cy-text)",
            }}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: "12px",
              border: "1px solid var(--cy-border)",
              background: "rgba(255,255,255,0.08)",
              color: "var(--cy-text)",
            }}
            required
          />
          <button
            type="submit"
            className="btn-glass-dark btn-lg"
            style={{
              color: "#fff",
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
