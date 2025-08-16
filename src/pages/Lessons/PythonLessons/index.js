import React, { useState } from "react";

const lessons = [
  "Introduction",
  "Python Data Types & Operators",
  "Python Strings",
  "Python Lists",
  "Python Tuples",
  "Python Sets",
  "Python Dictionaries",
  "Conditional Statements",
  "Python Loops",
  "Python Functions",
  "Python Modules",
  "Python OOPS",
  "Advanced Topics",
  "File Handling",
];

export default function PythonLessons() {
  const [activeLesson, setActiveLesson] = useState(null);

  const toggleLesson = (lesson) => {
    setActiveLesson(activeLesson === lesson ? null : lesson);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f5f7fa" }}>
      {/* Sidebar */}
      <nav
        style={{
          width: "280px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          padding: "1.5rem",
          overflowY: "auto",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontWeight: "700", fontSize: "1.8rem", marginBottom: "1.5rem", borderBottom: "1px solid #34495e", paddingBottom: "0.5rem" }}>
          Python Lessons
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {lessons.map((lesson) => (
            <li
              key={lesson}
              onClick={() => toggleLesson(lesson)}
              style={{
                padding: "0.75rem 1rem",
                marginBottom: "0.3rem",
                backgroundColor: activeLesson === lesson ? "#34495e" : "transparent",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                userSelect: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = activeLesson === lesson ? "#34495e" : "#3d566e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = activeLesson === lesson ? "#34495e" : "transparent")}
            >
              <span>{lesson}</span>
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>{activeLesson === lesson ? "−" : "+"}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "3rem 4rem", backgroundColor: "#fff", boxShadow: "0 0 15px rgba(0,0,0,0.1)", margin: "1.5rem", borderRadius: "12px" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#2c3e50", marginBottom: "0.5rem" }}>Python Lessons</h1>
          <p style={{ color: "#7f8c8d", fontSize: "1.2rem", maxWidth: "700px" }}>
            Begin coding with Python, a language famous for its simple, readable syntax. It's a top choice for web development, AI, and data science.
          </p>
        </header>

        <section style={{ backgroundColor: "#ecf0f1", padding: "2rem", borderRadius: "10px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontWeight: "700", fontSize: "1.8rem", marginBottom: "1rem", color: "#2c3e50" }}>Welcome to your Python learning journey!</h2>
          <p style={{ fontSize: "1rem", color: "#34495e", marginBottom: "1rem" }}>
            Here’s how to get started:
          </p>
          <ol style={{ paddingLeft: "1.5rem", color: "#34495e", fontSize: "1rem", lineHeight: "1.6" }}>
            <li>Pick your first topic from the lesson list on the left.</li>
            <li>For the best results, we suggest tackling the lessons in order.</li>
            <li>Each part is full of clear explanations and practical examples to guide you.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
