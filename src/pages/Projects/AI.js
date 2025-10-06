import React from 'react';

const AI = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      padding: '40px 0',
      background: 'linear-gradient(135deg, rgba(75, 109, 139, 0.85), rgba(67, 89, 112, 0.95))',
      color: 'white',
      borderRadius: '10px',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: '0.9',
    },
    content: {
      padding: '20px 0',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Projects</h1>
        <p style={styles.subtitle}>Explore artificial intelligence applications</p>
      </div>

      <div style={styles.content}>
        <p>Projects coming soon...</p>
      </div>
    </div>
  );
};

export default AI;
