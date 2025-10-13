# Code Yatra - Personal Learning Platform

A comprehensive React-based web application designed as a personal portfolio and educational platform for Narendra Vaniya and Shreya Vaghela. This platform showcases coding projects, provides interactive lessons across multiple programming languages, and serves as a hub for learning resources.

## 🚀 Features

### Core Functionality
- **Interactive Homepage**: Hero section with animated elements, feature cards, and developer profiles
- **Authentication System**: Secure login/signup with protected routes
- **Lesson Modules**: Comprehensive tutorials for multiple programming languages
- **Project Showcase**: Categorized portfolio of development projects
- **Responsive Design**: Mobile-first approach with smooth animations

### Programming Lessons
- Python Programming
- C Programming
- C++ Programming
- HTML & CSS
- JavaScript
- Java
- React.js

### Project Categories
- Full-Stack Development
- Data Analysis
- Machine Learning
- Artificial Intelligence
- Game Development

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern React with hooks and concurrent features
- **React Router DOM 7.8.0** - Client-side routing
- **Framer Motion 11.18.2** - Animation library for smooth transitions
- **React Three Fiber & Drei** - 3D graphics and animations
- **Lenis 1.3.11** - Smooth scrolling library

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Custom CSS** - Component-specific styling
- **PostCSS & Autoprefixer** - CSS processing

### Development Tools
- **Create React App** - Build setup and development server
- **ESLint** - Code linting
- **Testing Library** - Unit and integration testing

## 📁 Project Structure

```
my-youtube-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── Logo.jpeg
│   └── models/
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── LessonLayout.js
│   │   ├── MotionPrimitives.js
│   │   ├── Navbar.js
│   │   ├── ProtectedRoute.js
│   │   └── ResetPassword.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── Image/
│   │   ├── AI.png
│   │   ├── data.png
│   │   ├── Developer.jpg
│   │   ├── Developer1.jpg
│   │   ├── Full stack.png
│   │   ├── Game.png
│   │   └── Machine learning.png
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── ForgotPassword.js
│   │   ├── HomePage.js
│   │   ├── Lessons.js
│   │   ├── Login.js
│   │   ├── Privacy.js
│   │   ├── Profile.js
│   │   ├── Signup.js
│   │   ├── Terms.js
│   │   ├── Lessons/
│   │   │   ├── lesson_layout.js
│   │   │   ├── lessons.css
│   │   │   └── [Language]Lessons/
│   │   └── Projects/
│   │       ├── AI.js
│   │       ├── DataAnalysis.js
│   │       ├── Fullstack.js
│   │       ├── Games.js
│   │       ├── MachineLearning.js
│   │       └── Projects.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── reportWebVitals.js
├── package.json
├── README.md
└── credentials.txt
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager


## 📖 Usage

### Navigation
- **Public Routes**: Homepage, Login, Signup, Contact, Terms, Privacy
- **Protected Routes**: Profile, Lessons, Projects (require authentication)

### Authentication
- Register a new account via Signup
- Login with existing credentials
- Access protected content after authentication

### Lessons
- Browse available programming languages
- Access interactive tutorials and examples
- Progress through structured learning paths

### Projects
- Explore different project categories
- View detailed project descriptions and implementations
- Navigate between Full-stack, Data Analysis, ML, AI, and Games

## 🎨 Key Components

### MotionPrimitives.js
Custom animation components using Framer Motion:
- `MotionSection` - Animated sections
- `MotionText` - Text animations
- `FloatingBlob` - Background decorative elements
- Animation variants: `fadeInUp`, `staggerContainer`, `ScaleCard`

### AuthContext.js
Authentication state management:
- User login/logout functionality
- Protected route logic
- Token-based authentication

### HomePage.js Features
- Loading animation with wave loader
- Hero section with floating blobs
- Feature cards with hover effects
- Developer section with animated profile images
- Call-to-action sections

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for sensitive configurations:
```
REACT_APP_API_URL=http://127.0.0.1:8000
```

### Credentials
Sensitive credentials are stored in `credentials.txt` (gitignored).



## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome.

## 👥 Authors

- **Narendra Vaniya** - Developer & Creator
  - LinkedIn:(https://www.linkedin.com/in/narendra-vaniya1617)
- **Shreya Vaghela** - Developer & Creator
  - LinkedIn:(https://www.linkedin.com/in/shreyavaghela65)


**Code Yatra** - Your journey to mastering code begins here! 🚀
