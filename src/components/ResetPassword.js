import React, { useState } from 'react';

const ResetPassword = () => {
  const [identifier, setIdentifier] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reset_password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, otp_code: otpCode, new_password: newPassword }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message || 'Password reset successfully!');
        // Clear form fields
        setIdentifier('');
        setOtpCode('');
        setNewPassword('');
      } else {
        setMessage(data.error || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Reset password error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="identifier" style={{ display: 'block', marginBottom: '5px' }}>
            Email or Phone Number:
          </label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="otp_code" style={{ display: 'block', marginBottom: '5px' }}>
            OTP Code:
          </label>
          <input
            type="text"
            id="otp_code"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="new_password" style={{ display: 'block', marginBottom: '5px' }}>
            New Password:
          </label>
          <input
            type="password"
            id="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>

      {message && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: message.includes('success') ? '#d4edda' : '#f8d7da',
          border: message.includes('success') ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
          borderRadius: '4px',
          color: message.includes('success') ? '#155724' : '#721c24'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
