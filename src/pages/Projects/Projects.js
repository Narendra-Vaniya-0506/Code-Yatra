import React from 'react';

const AI = () => {
  const projects = [
    {
      photo: '/src/Image/AI.png',
      name: 'Chatbot Assistant',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      purpose: 'An AI-powered chatbot for customer support automation.',
      github: 'https://github.com/example/chatbot'
    },
    {
      photo: '/src/Image/Machine learning.png',
      name: 'Image Classifier',
      technologies: ['Python', 'Keras', 'CNN'],
      purpose: 'Classifies images into categories using deep learning.',
      github: 'https://github.com/example/image-classifier'
    },
    {
      photo: '/src/Image/Full stack.png',
      name: 'Recommendation System',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      purpose: 'Recommends products based on user behavior.',
      github: 'https://github.com/example/recommendation'
    },
    {
      photo: '/src/Image/Game.png',
      name: 'AI Game Agent',
      technologies: ['Python', 'Reinforcement Learning', 'Unity'],
      purpose: 'An AI agent that learns to play games autonomously.',
      github: 'https://github.com/example/game-agent'
    },
    {
      photo: '/src/Image/data.png',
      name: 'Data Analyzer',
      technologies: ['Python', 'Jupyter', 'Matplotlib'],
      purpose: 'Analyzes large datasets for insights and visualizations.',
      github: 'https://github.com/example/data-analyzer'
    },
    {
      photo: '/src/Image/Developer.jpg',
      name: 'Code Generator',
      technologies: ['JavaScript', 'Node.js', 'OpenAI API'],
      purpose: 'Generates code snippets based on natural language prompts.',
      github: 'https://github.com/example/code-generator'
    },
    {
      photo: '/src/Image/Developer1.jpg',
      name: 'Voice Assistant',
      technologies: ['Python', 'Speech Recognition', 'Flask'],
      purpose: 'A voice-controlled assistant for home automation.',
      github: 'https://github.com/example/voice-assistant'
    },
    {
      photo: '/src/Image/Gemini_Generated_Image_f0gn5lf0gn5lf0gn.png',
      name: 'Predictive Model',
      technologies: ['R', 'Caret', 'Random Forest'],
      purpose: 'Predicts future trends using historical data.',
      github: 'https://github.com/example/predictive-model'
    },
    {
      photo: '/src/Image/background-1.png',
      name: 'Sentiment Analyzer',
      technologies: ['Python', 'NLTK', 'SVM'],
      purpose: 'Analyzes text sentiment for social media monitoring.',
      github: 'https://github.com/example/sentiment-analyzer'
    },
    {
      photo: '/src/Image/background-2.png',
      name: 'Autonomous Drone',
      technologies: ['Python', 'OpenCV', 'ROS'],
      purpose: 'Controls a drone for autonomous navigation.',
      github: 'https://github.com/example/autonomous-drone'
    }
  ];

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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px 0',
    },
    card: {
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '20px',
    },
    name: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#333',
    },
    tech: {
      fontSize: '1rem',
      marginBottom: '10px',
      color: '#666',
    },
    purpose: {
      fontSize: '1rem',
      marginBottom: '15px',
      color: '#555',
    },
    link: {
      display: 'inline-block',
      padding: '10px 15px',
      background: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Projects</h1>
        <p style={styles.subtitle}>Explore artificial intelligence applications</p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
            <img src={project.photo} alt={project.name} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.name}>{project.name}</h3>
              <p style={styles.tech}><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <p style={styles.purpose}><strong>Purpose:</strong> {project.purpose}</p>
              <a href={project.github} style={styles.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AI;
