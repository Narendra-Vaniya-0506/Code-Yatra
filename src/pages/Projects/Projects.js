import React from 'react';
import StudentGrievance from '../../Image/Student_grievance_system.png';
import BankingApp from '../../Image/Banking App.png';
import GamesPython from '../../Image/Game.png';
import MERNStack from '../../Image/MERN stack.png';
import ProjectPluse from '../../Image/Projectpluse.png';

const project = () => {
  const projects = [
    {
      photo: StudentGrievance,
      name: 'Student Grievance System',
      technologies: ['Python', 'Django'],
      purpose: 'A student portal built with Python and Django, designed to allow students to register grievances so administrators can review and resolve them efficiently.',
      github: 'https://github.com/Narendra-Vaniya-0506/Student_grievance_system'
    },
    {
      photo: BankingApp,
      name: 'Banking application',
      technologies: ['Python', 'Flask ', 'MongoDB ', 'JavaScript', 'HTML5, CSS3, Bootstrap 5'],
      purpose: 'The purpose of this project is to create a functional banking application.',
      github: 'https://github.com/Narendra-Vaniya-0506/Banking_application'
    },
    {
      photo: GamesPython,
      name: 'Games Using Python',
      technologies: ['Python'],
      purpose: 'Games Using Python (In this file there are 41 Games).',
      github: 'https://github.com/Narendra-Vaniya-0506/Games-Using-Python'
    },
    {
      photo: MERNStack,
      name: 'MERN Stack application',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      purpose: 'This project is a full-stack MERN For School or tutioan Management.',
      github: 'https://github.com/Narendra-Vaniya-0506/MERN-stack-Star_Academy_System'
    },
    {
      photo: ProjectPluse,
      name: 'ProjectPluse',
      technologies: ['React + Vite', 'Node.js', 'Express', 'MongoDB'],
      purpose: 'A comprehensive project management application built with React and Node.js, designed to streamline team collaboration, task management, and project tracking for organizations of all sizes.',
      github: 'https://github.com/Narendra-Vaniya-0506/ProjectPluse'
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      fontWeight: '700',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: '0.9',
      fontWeight: '300',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '25px',
      padding: '20px 0',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    content: {
      padding: '25px',
    },
    name: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: '#2c3e50',
      fontWeight: '600',
      lineHeight: '1.3',
    },
    tech: {
      fontSize: '0.95rem',
      marginBottom: '15px',
      color: '#7f8c8d',
      fontWeight: '500',
    },
    purpose: {
      fontSize: '1rem',
      marginBottom: '20px',
      color: '#555',
      lineHeight: '1.5',
    },
    link: {
      display: 'inline-block',
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.subtitle}>Explore Our Full Project Library and Build Your Expertise</p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.querySelector('img').style.transform = 'none';
            }}
          >
            <img src={project.photo} alt={project.name} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.name}>{project.name}</h3>
              <p style={styles.tech}><strong style={{color: '#34495e'}}>Technologies:</strong> {project.technologies.join(', ')}</p>
              <p style={styles.purpose}><strong style={{color: '#34495e'}}>Purpose:</strong> {project.purpose}</p>
              <a
                href={project.github}
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0056b3 0%, #004085 100%)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
