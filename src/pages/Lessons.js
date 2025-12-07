import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. DATA MODIFICATION
// Each object now has a 'path' property.
// A non-null path means the lesson is available. A null path means it's "Coming Soon".
const tutorialsData = [
  {
    title: "Python Lessons",
    description:
      "Begin coding with Python, a language famous for its simple, readable syntax. It's a top choice for web development, AI, and data science.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    path: "/lessons/python", // Active
  },
  {
    title: "HTML Lessons",
    description:
      "Start your web journey here. Learn HTML to build the fundamental skeleton and content of every website.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    path: null,
  },
  {
    title: "CSS Lessons",
    description:
      "Bring your websites to life! Learn CSS to style your HTML with beautiful colors, fonts, layouts, and animations.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    path: null,
  },
  {
    title: "JavaScript Lessons",
    description:
      "Add power and interactivity to your pages. JavaScript is the language that makes websites dynamic and responsive to users.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    path: null, // Coming Soon
  },
  {
    title: "C Lessons",
    description:
      "Grasp the core concepts of programming with C, the influential language that laid the groundwork for many others like C++ and Java.",
    icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    path: null, // Coming Soon
  },
  {
    title: "C++ Lessons",
    description:
      "Unleash high-speed performance with C++. Learn this powerful language to build complex software like games, desktop apps, and operating systems.",
    icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    path: null, // Coming Soon
  },
  {
    title: "React JS Lessons",
    description:
      "Build modern, fast, and interactive user interfaces. Learn the popular React library to create dynamic single-page applications.",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    path: null, 
  },
  {
    title: "Java Lessons",
    description:
      "Master Java, a versatile and powerful language that runs on billions of devices worldwide, from Android apps to web servers.",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    path: null, // Coming Soon
  },
];

export default function Tutorials() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_TIME = 1000; // minimum 1 sec
    const startTime = Date.now();

    const fetchData = new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    fetchData.then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_TIME - elapsed, 0);
      setTimeout(() => setLoading(false), remaining);
    });
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        animation: 'fadeIn 0.5s ease-in-out',
      }}>
        <div style={{
          width: '55px',
          height: '55px',
          border: '4px solid rgba(0,0,0,0.05)',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          marginBottom: '18px',
        }}></div>
        <p style={{
          color: '#555',
          fontSize: '1.1rem',
          fontWeight: '500',
          letterSpacing: '0.3px',
        }}>
          Loading lessons...
        </p>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(5px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        padding: "3rem 1rem",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontWeight: "900",
            fontSize: "2.8rem",
            display: "inline-block",
            position: "relative",
            paddingBottom: "0.5rem",
            textShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shine 3s ease-in-out infinite",
              display: "inline-block",
            }}
          >
            Learn with Fun
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              animation: "bounceEmoji 1.5s infinite",
            }}
          >
            🥳
          </span>
        </h1>
        <style>
          {`
            @keyframes shine {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes bounceEmoji {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}
        </style>
      </div>
      <h2
        style={{
          fontWeight: "700",
          marginBottom: "2.5rem",
          textAlign: "center",
          fontSize: "1.5rem",
          color: "#495057",
        }}
      >
        Lessons
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* 2. LOGIC MODIFICATION */}
        {/* We now destructure 'path' and use it for our check */}
        {tutorialsData.map(({ title, description, icon, path }) => {
          return (
            <div
              key={title}
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(8px)",
                borderRadius: "16px",
                padding: "1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.8rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: path ? "pointer" : "default", // Change cursor based on availability
              }}
              onMouseEnter={(e) => {
                 if (path) { // Only apply hover effect if the card is active
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                 }
              }}
              onMouseLeave={(e) => {
                if (path) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                }
              }}
              // If the card is active, clicking it will navigate
              onClick={() => {
                if (path) {
                    navigate(path);
                }
              }}
            >
              <img
                src={icon}
                alt={title}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                  marginBottom: "0.5rem",
                }}
              />
              <h3 style={{ margin: 0, fontWeight: "700", color: "#2c3e50" }}>
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6c757d",
                  lineHeight: 1.5,
                  flexGrow: 1, // Make description take up space
                }}
              >
                {description}
              </p>
              {/* The ternary operator now checks 'path' */}
              {path ? (
                <button
                  // The button no longer needs its own onClick. The parent div handles it.
                  style={{
                    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                    color: "#fff",
                    border: "none",
                    padding: "0.6rem 1.3rem",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "auto",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                   onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
                   }}
                   onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                   }}
                >
                  Start Learning!
                </button>
              ) : (
                <button
                  disabled
                  style={{
                    backgroundColor: "#adb5bd",
                    color: "#fff",
                    border: "none",
                    padding: "0.6rem 1.3rem",
                    borderRadius: "30px",
                    cursor: "not-allowed",
                    fontWeight: "bold",
                    marginTop: "auto",
                    opacity: 0.8,
                  }}
                >
                  Coming Soon
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}