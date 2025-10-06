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
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.5',
    },
    projectInfo: {
      marginTop: '10px',
      fontSize: '0.9rem',
      color: '#555',
      textAlign: 'left',
    },
    projectLink: {
      color: '#1a0dab',
      textDecoration: 'none',
    }
  };

  const projects = [
    {
      title: 'Project One',
      technology: 'React, Node.js',
      github: 'https://github.com/username/project-one',
    },
    {
      title: 'Project Two',
      technology: 'Python, Flask',
      github: 'https://github.com/username/project-two',
    },
    {
      title: 'Project Three',
      technology: 'Java, Spring Boot',
      github: 'https://github.com/username/project-three',
    },
    {
      title: 'Project Four',
      technology: 'React Native',
      github: 'https://github.com/username/project-four',
    },
    {
      title: 'Project Five',
      technology: 'Django, PostgreSQL',
      github: 'https://github.com/username/project-five',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.subtitle}>Explore and build amazing projects</p>
      </div>

      <div style={styles.content}>
        <div style={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h4 style={styles.cardTitle}>{project.title}</h4>
              <div style={styles.projectInfo}>
                <p><strong>Technology:</strong> {project.technology}</p>
                <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>{project.github}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
