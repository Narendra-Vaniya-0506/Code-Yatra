import React, { useState } from "react";
import LessonLayout from "../lesson_layout";
import WhatIsPython from "./1. Introduction/what_is_python";
import WhyLearnPython from "./1. Introduction/why_learn_python";
import InstallingPythonIDE from "./1. Introduction/Installing Python & IDE";
import RunningYourFirstProgram from "./1. Introduction/Running your first program";
import Comments from "./1. Introduction/Comments";
import Project from "./1. Introduction/Project";
import SyntaxIndentation from "./2. Python Foundations (Beginner)/Syntax & Indentation";
import VariablesNaming from "./2. Python Foundations (Beginner)/Variables & Naming Conventions";
import DataTypes from "./2. Python Foundations (Beginner)/Data Types";
import StringOperations from "./2. Python Foundations (Beginner)/String Operations";
import InputOutput from "./2. Python Foundations (Beginner)/Input & Output";
import TypeCasting from "./2. Python Foundations (Beginner)/Type Casting";
import Operators from "./2. Python Foundations (Beginner)/Operators";
import ProjectSimpleCalculator from "./2. Python Foundations (Beginner)/Project Simple Calculator";

const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

export default function PythonLessons() {
  const [openSections, setOpenSections] = useState({
    introduction: true,
    foundations: false,
  });

  const [activeContent, setActiveContent] = useState("overview");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleContentChange = (contentId) => {
    setActiveContent(contentId);
  };

  // Function to get dynamic breadcrumbs based on active content
  const getBreadcrumbs = () => {
    const contentNames = {
      "overview": "What is Python?",
      "Why-learn-Python": "Why learn Python?",
      "installation": "Installing Python & IDE",
      "first-program": "Running your first program",
      "Comments": "Comments",
      "Project": "Project",
      "syntax-indentation": "Syntax & Indentation",
      "variables-naming": "Variables & Naming Conventions",
      "data-types": "Data Types",
      "string-operations": "String Operations",
      "input-output": "Input & Output",
      "type-casting": "Type Casting",
      "operators": "Operators",
      "calculator-project": "Project: Simple Calculator"
    };

    return [
      { label: "Lessons", href: "/lessons" },
      { label: "Python lesson", href: "/lessons/python" },
      { label: contentNames[activeContent] || "Python lesson" }
    ];
  };

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyCode = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage("✓ Copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(err => {
      setToastMessage("❌ Failed to copy");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      console.error('Failed to copy code:', err);
    });
  };

  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Lesson</h3>

      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.introduction ? "open" : ""
          }`}
          onClick={() => toggleSection("introduction")}
          aria-expanded={openSections.introduction}
        >
          Introduction
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.introduction ? "500px" : "0" }}
        >
          <li>
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("overview");
              }}
              className={activeContent === "overview" ? "active" : ""}
            >
              What is Python?
            </a>
          </li>
          <li>
            <a
              href="#Why-learn-Python"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Why-learn-Python");
              }}
              className={activeContent === "Why-learn-Python" ? "active" : ""}
            >
              Why learn Python?
            </a>
          </li>
          <li>
            <a
              href="#installation"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("installation");
              }}
              className={activeContent === "installation" ? "active" : ""}
            >
              Installing Python & IDE
            </a>
          </li>
          <li>
            <a
              href="#first-program"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("first-program");
              }}
              className={activeContent === "first-program" ? "active" : ""}
            >
              Running your first program
            </a>
          </li>
          <li>
            <a
              href="#Comments"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Comments");
              }}
              className={activeContent === "Comments" ? "active" : ""}
            >
              Comments
            </a>
          </li>
          <li>
            <a
              href="#Project"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("Project");
              }}
              className={activeContent === "Project" ? "active" : ""}
            >
              Project
            </a>
          </li>
        </ul>
      </div>

      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.foundations ? "open" : ""
          }`}
          onClick={() => toggleSection("foundations")}
          aria-expanded={openSections.foundations}
        >
          Python Foundations (Beginner)
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.foundations ? "500px" : "0" }}
        >
          <li>
            <a
              href="#syntax-indentation"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("syntax-indentation");
              }}
              className={activeContent === "syntax-indentation" ? "active" : ""}
            >
              Syntax & Indentation
            </a>
          </li>
          <li>
            <a
              href="#variables-naming"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("variables-naming");
              }}
              className={activeContent === "variables-naming" ? "active" : ""}
            >
              Variables & Naming Conventions
            </a>
          </li>
          <li>
            <a
              href="#data-types"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("data-types");
              }}
              className={activeContent === "data-types" ? "active" : ""}
            >
              Data Types
            </a>
          </li>
          <li>
            <a
              href="#string-operations"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("string-operations");
              }}
              className={activeContent === "string-operations" ? "active" : ""}
            >
              String Operations
            </a>
          </li>
          <li>
            <a
              href="#input-output"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("input-output");
              }}
              className={activeContent === "input-output" ? "active" : ""}
            >
              Input & Output
            </a>
          </li>
          <li>
            <a
              href="#type-casting"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("type-casting");
              }}
              className={activeContent === "type-casting" ? "active" : ""}
            >
              Type Casting
            </a>
          </li>
          <li>
            <a
              href="#operators"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("operators");
              }}
              className={activeContent === "operators" ? "active" : ""}
            >
              Operators
            </a>
          </li>
          <li>
            <a
              href="#calculator-project"
              onClick={(e) => {
                e.preventDefault();
                handleContentChange("calculator-project");
              }}
              className={activeContent === "calculator-project" ? "active" : ""}
            >
              Project: Simple Calculator
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <LessonLayout
      title="Python lesson"
      breadcrumbs={getBreadcrumbs()}
      sidebar={sidebar}
      lessonId="python-introduction"
    >
      {activeContent === "overview" && <WhatIsPython />}

      {activeContent === "Why-learn-Python" && <WhyLearnPython />}

      {activeContent === "installation" && <InstallingPythonIDE />}
        
      {activeContent === "first-program" && <RunningYourFirstProgram />}

      {activeContent === "Comments" && <Comments />}

      {activeContent === "Project" && <Project />}
        

      {activeContent === "syntax-indentation" && <SyntaxIndentation />}
        
      {activeContent === "variables-naming" && <VariablesNaming />}
        
      {activeContent === "data-types" && <DataTypes />}
        
      {activeContent === "string-operations" && <StringOperations />}

      {activeContent === "input-output" && <InputOutput />}

      {activeContent === "type-casting" && <TypeCasting />}

      {activeContent === "operators" && <Operators />}

      {activeContent === "calculator-project" && <ProjectSimpleCalculator />}

      {showToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#48bb78',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '6px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {toastMessage}
        </div>
      )}
    </LessonLayout>
  );
}
