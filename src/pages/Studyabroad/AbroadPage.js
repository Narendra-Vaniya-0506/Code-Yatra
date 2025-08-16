import React from 'react';
import { Link } from 'react-router-dom';

const AbroadPage = () => {
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
    },
    welcomeSection: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    welcomeTitle: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#333',
    },
    welcomeText: {
      fontSize: '1.1rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    navigationSection: {
      marginTop: '40px',
    },
    navigationTitle: {
      textAlign: 'center',
      fontSize: '1.8rem',
      marginBottom: '30px',
      color: '#333',
    },
    optionCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    optionCard: {
      display: 'block',
      textDecoration: 'none',
      background: 'white',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      },
      textAlign: 'center',
      color: '#333',
    },
    cardIcon: {
      fontSize: '3rem',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Study Abroad Guide</h1>
        <p style={styles.subtitle}>Your comprehensive guide to studying abroad</p>
      </div>
      
      <div style={styles.content}>
        <div style={styles.welcomeSection}>
          <h2 style={styles.welcomeTitle}>Welcome to Study Abroad</h2>
          <p style={styles.welcomeText}>
            This is your starting point for all information related to studying abroad. 
            We provide guidance on English language requirements, visa processes, and more.
          </p>
        </div>

        <div style={styles.navigationSection}>
          <h3 style={styles.navigationTitle}>Explore Your Options</h3>
          <div style={styles.optionCards}>
            <Link to="/studyabroad/english" style={styles.optionCard}>
              <div style={styles.cardIcon}>📚</div>
              <h4 style={styles.cardTitle}>English Requirements</h4>
              <p style={styles.cardText}>Learn about English language proficiency requirements</p>
            </Link>
            
            <Link to="/studyabroad/visa" style={styles.optionCard}>
              <div style={styles.cardIcon}>🛂</div>
              <h4 style={styles.cardTitle}>Visa Information</h4>
              <p style={styles.cardText}>Get detailed visa application guidance</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadPage;
