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



  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>AI Projects</h1>
        <p style={styles.subtitle}>Explore artificial intelligence applications</p>
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

export default AI;
