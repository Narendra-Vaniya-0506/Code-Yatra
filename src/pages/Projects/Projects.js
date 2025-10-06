import React from 'react';

const Projects = () => {
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
    projectList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    projectCard: {
      background: 'white',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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

  const projects = [
    {
      icon: '💻',
      title: 'Web Development Projects',
      description: 'Build responsive websites and web applications using HTML, CSS, JavaScript, and React.'
    },
    {
      icon: '📊',
      title: 'Data Analysis Projects',
      description: 'Analyze datasets, create visualizations, and derive insights using Python and libraries like Pandas and Matplotlib.'
    },
    {
      icon: '🤖',
      title: 'Machine Learning Projects',
      description: 'Implement ML algorithms, train models, and deploy predictive systems.'
    },
    {
      icon: '📱',
      title: 'Mobile App Projects',
      description: 'Develop cross-platform mobile applications using React Native or Flutter.'
    },
    {
      icon: '🗄️',
      title: 'Database Projects',
      description: 'Design and manage databases, write queries, and build backend systems.'
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'Create RESTful APIs and integrate third-party services.'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.subtitle}>Explore and build amazing projects</p>
      </div>

      <div style={styles.content}>
        <div style={styles.welcomeSection}>
          <h2 style={styles.welcomeTitle}>Welcome to Projects</h2>
          <p style={styles.welcomeText}>
            This section showcases various project ideas and tutorials to help you build your portfolio.
            Choose a project that interests you and start coding!
          </p>
        </div>

        <div style={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.cardIcon}>{project.icon}</div>
              <h4 style={styles.cardTitle}>{project.title}</h4>
              <p style={styles.cardText}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
