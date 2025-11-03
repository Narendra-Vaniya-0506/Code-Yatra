 import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const error = null;

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('AuthContext useEffect - token:', token);
    if (token) {
      // Load user from localStorage immediately for persistence on refresh
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  // Add event listener for storage changes to handle logout across tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'authToken' && !e.newValue) {
        // Token was removed, logout user
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.data);
      } else if (response.status === 401) {
        // Token is invalid, logout
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
      } else {
        // Other errors (server down, etc.), keep the stored user
        console.error('Failed to fetch user profile:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Network error, keep stored user
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboardData = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard/`, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch dashboard data');

      const dashboardData = await response.json();
      // You can store or use dashboardData.data as needed
      return dashboardData.data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      return null;
    }
  };

  const login = async (identifier, password, rememberMe = false) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Invalid credentials');
        } else {
          const text = await response.text();
          throw new Error(`Server error: ${text}`);
        }
      }

      const data = await response.json();
      // ✅ FIX: Correctly access the token from the nested 'data' object.
      const token = data.data.token;

      // Always store in localStorage for persistence, regardless of rememberMe
      localStorage.setItem('authToken', token);

      // The user object is now returned directly from the login response.
      // We can set it here to be faster than waiting for fetchUserProfile.
      setUser(data.data.user);
      // Store user in localStorage for persistence on refresh
      localStorage.setItem('user', JSON.stringify(data.data.user));

      // Redirect user to dashboard after successful login
      // Use react-router navigation instead of window.location.href for SPA routing
      // But since this is context, we can return success and let caller handle navigation
      // So remove window.location.href here and let caller redirect

      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        return await login(userData.email, userData.password);
      } else {
        return { success: false, error: data.detail || data.error || 'Signup failed' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateUserProfile = async (updates) => {
    try {
      const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/profile/update/`, { // Note: Corrected URL from your urls.py
        method: 'PATCH',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        // ✅ FIX: Correctly parse the nested data object.
        setUser(updatedUserData.data);
        return { success: true };
      } else {
        return { success: false, error: 'Failed to update profile' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };



  /**
   * Send OTP to user's email for password reset
   * @param {string} identifier - User's email address
   */
  const forgotPassword = async (identifier) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/forgot-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return { success: false, error: 'An error occurred. Please try again later.' };
    }
  };

  /**
   * Reset user password using OTP sent to email
   * @param {string} identifier - User's email address
   * @param {string} otpCode - OTP code received via email
   * @param {string} newPassword - New password to set
   */
  const resetPassword = async (identifier, otpCode, newPassword) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reset-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, otp_code: otpCode, new_password: newPassword }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return { success: false, error: 'An error occurred. Please try again later.' };
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    updateUserProfile,
    forgotPassword,
    resetPassword,
    fetchDashboardData,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};