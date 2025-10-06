import React from 'react';
import { useNavigate } from 'react-router-dom';
import fullstackImg from '../../Image/Full stack.png';
import dataAnalysisImg from '../../Image/data.png';
import machineLearningImg from '../../Image/Machine learning.png';
import aiImg from '../../Image/AI.png';
import gamesImg from '../../Image/Game.png';

const Projects = () => {
  const navigate = useNavigate();

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
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textAlign: 'center',
      color: '#333',
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
  };

  const projects = [
    {
      name: 'Full-stack Projects',
      slug: 'fullstack',
      image: fullstackImg,
    },
    {
      name: 'Data Analysis Projects',
      slug: 'data-analysis',
      image: dataAnalysisImg,
    },
    {
      name: 'Machine Learning Projects',
      slug: 'machine-learning',
      image: machineLearningImg,
    },
    {
      name: 'AI Projects',
      slug: 'ai',
      image: aiImg,
    },
    {
      name: 'Games Projects',
      slug: 'games',
      image: gamesImg,
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
            <div key={index} style={styles.projectCard} onClick={() => navigate(`/projects/${project.slug}`)}>
              <img src={project.image} alt={project.name} style={styles.projectImage} />
              <h4 style={styles.cardTitle}>{project.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
