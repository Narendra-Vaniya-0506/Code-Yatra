import React, { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [notification, setNotification] = useState({ message: '', visible: false, type: '' });
  const notificationTimeout = useRef(null); // store timeout id

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ message: 'Message sent successfully!', visible: true, type: 'success' });

        // Clear any existing timeout before setting a new one
        if (notificationTimeout.current) {
          clearTimeout(notificationTimeout.current);
        }
        notificationTimeout.current = setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
        }, 3000);

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setNotification({ message: 'Failed to send message. Please try again.', visible: true, type: 'error' });
      }
    } catch (error) {
      setNotification({
        message: 'An error occurred while sending the message. Please try again or first login then try.',
        visible: true,
        type: 'error',
      });
      console.error('Error:', error);
    }
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, visible: false }));
    if (notificationTimeout.current) {
      clearTimeout(notificationTimeout.current);
    }
  };

  return (
    <div className="linear-container with-lines lines-animate" style={styles.container}>
      {notification.visible && (
        <div
          style={{
            ...styles.notification,
            backgroundColor: notification.type === 'success' ? '#4caf50' : '#e53935',
          }}
        >
          <span>{notification.message}</span>
          <button onClick={closeNotification} style={styles.closeButton}>X</button>
        </div>
      )}

      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>
          Let's build something great together. Whether you have a question or feedback, we're ready to connect.
        </p>
        <p style={styles.paragraph}>
          You can also contact us at{' '}
          <a href="mailto:codeyatra0605@gmail.com" style={styles.emailLink}>
            codeyatra0605@gmail.com
          </a>
        </p>
        <img src="/Logo.jpeg" alt="Contact" style={styles.image} />
      </div>

      <form className="glass" style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="Your 10-digit Indian Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit Indian phone number"
            required
          />
        </label>
        <label style={styles.label}>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message
          <textarea
            name="message"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, height: '100px', resize: 'vertical' }}
            required
          />
        </label>
        <button type="submit" className="btn-glass-dark btn-lg" style={{ color: '#fff' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '50px auto',
    padding: '35px',
    gap: '40px',
    borderRadius: '18px',
    background: 'transparent',
    boxShadow: 'none',
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
  },
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    color: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '300px',
  },
  closeButton: {
    marginLeft: '10px',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  leftSection: {
    flex: 1,
    minWidth: '280px',
  },
  heading: {
    fontSize: '2.6rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.05rem',
    color: '#4a5568',
    lineHeight: 1.7,
    marginBottom: '14px',
  },
  emailLink: {
    color: '#2563eb',
    fontWeight: '600',
    textDecoration: 'none',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s ease',
  },
  image: {
    marginTop: '25px',
    width: '100%',
    borderRadius: '14px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  },
  form: {
    flex: 1,
    minWidth: '300px',
    background: 'rgba(0,0,0,0.4)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
    border: '1px solid rgba(255,255,255,0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: 'var(--cy-text)',
  },
  input: {
    marginTop: '6px',
    padding: '12px 14px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1.5px solid var(--cy-border)',
    outline: 'none',
    background: 'rgba(255,255,255,0.08)',
    color: 'var(--cy-text)',
    transition: 'all 0.25s ease',
  },
  button: {
    marginTop: '18px',
    padding: '14px',
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#fff',
    background: 'linear-gradient(90deg, #2563eb, #1e40af)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(37,99,235,0.4)',
    transition: 'all 0.3s ease',
  }
};

export default Contact;
