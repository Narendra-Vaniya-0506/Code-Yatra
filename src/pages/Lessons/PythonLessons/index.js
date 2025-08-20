import React, { useState } from "react";
import LessonLayout from "../lesson_layout";

// Reusable component for displaying code blocks
const CodeBlock = ({ children }) => (
  <pre className="code-block">
    <code>{children}</code>
  </pre>
);

// Accordion Section Component
const AccordionSection = ({ title, sectionKey, isOpen, toggle, children }) => (
  <div className="lesson-section">
    <button
      className={`lesson-section-toggle ${isOpen ? "open" : ""}`}
      onClick={() => toggle(sectionKey)}
      aria-expanded={isOpen}
    >
      {title}
    </button>
    <ul
      className="lesson-sublist"
      style={{ maxHeight: isOpen ? "500px" : "0" }}
    >
      {children}
    </ul>
  </div>
);

// Sidebar Link Component
const SidebarLink = ({ id, activeContent, handleContentChange, children }) => (
  <li>
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        handleContentChange(id);
      }}
      className={activeContent === id ? "active" : ""}
    >
      {children}
    </a>
  </li>
);

export default function PythonLessons() {
  const [openSections, setOpenSections] = useState({
    introduction: true,
    dataTypes: false,
  });

  const [activeContent, setActiveContent] = useState("overview");

  const toggleSection = (section) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Tutorial</h3>

      <AccordionSection
        title="Introduction"
        sectionKey="introduction"
        isOpen={openSections.introduction}
        toggle={toggleSection}
      >
        <SidebarLink
          id="overview"
          activeContent={activeContent}
          handleContentChange={setActiveContent}
        >
          Python Overview
        </SidebarLink>
        <SidebarLink
          id="installation"
          activeContent={activeContent}
          handleContentChange={setActiveContent}
        >
          Installation & Getting Started
        </SidebarLink>
        <SidebarLink
          id="syntax"
          activeContent={activeContent}
          handleContentChange={setActiveContent}
        >
          What is Syntax?
        </SidebarLink>
      </AccordionSection>

      <AccordionSection
        title="Data Types & Operators"
        sectionKey="dataTypes"
        isOpen={openSections.dataTypes}
        toggle={toggleSection}
      >
        {/* Future links go here */}
      </AccordionSection>
    </nav>
  );

  return (
    <LessonLayout
      title="Python Tutorial"
      breadcrumbs={[
        { label: "Lessons", href: "/lessons" },
        { label: "Python Tutorial" },
      ]}
      sidebar={sidebar}
    >
      {/* Hero Section */}
      <section className="lesson-hero">
        <h1>Python Tutorial</h1>
        <p>
          Python is a high-level, interpreted, general-purpose programming
          language.
        </p>
      </section>

      {/* Dynamic Content */}
      {activeContent === "overview" && (
        <section id="overview">
          <h2>Python Overview</h2>
          <h3>What is Python?</h3>
          <ul>
            <li>
              Python is a dynamically typed, general-purpose programming
              language that supports both object-oriented and functional
              approaches.
            </li>
            <li>It is also an interpreted and high-level programming language.</li>
            <li>Created by Guido van Rossum in 1989.</li>
          </ul>

          <h3>Features of Python</h3>
          <ul>
            <li>
              <b>Simple and easy to understand:</b> Python's clean syntax reads
              almost like plain English.
            </li>
            <li>
              <b>Interpreted & cross-platform:</b> Runs line by line, making
              debugging easier, and works across Windows, macOS, and Linux.
            </li>
            <li>
              <b>Open-source:</b> Free to use, modify, and distribute.
            </li>
            <li>
              <b>Rich ecosystem:</b> Massive standard library + frameworks like
              NumPy, TensorFlow, Django.
            </li>
          </ul>

          <h3>Get Started</h3>
          <ol>
            <li>Select a lesson from the sidebar.</li>
            <li>Work through them in order for the best experience.</li>
            <li>Each lesson has detailed explanations and examples.</li>
          </ol>
        </section>
      )}

      {activeContent === "installation" && (
        <section id="installation">
          <h2>Installation & Getting Started</h2>
          <h3>Steps to Install Python:</h3>
          <ol type="a">
            <li>
              Visit:{" "}
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                python.org
              </a>
            </li>
            <li>
              Download the latest installer for your OS (Windows, macOS, etc.).
            </li>
            <li>
              Run installer → <b>Important:</b> On Windows, check{" "}
              <i>"Add Python to PATH"</i>.
            </li>
          </ol>

          <h4>Version Check</h4>
          <p>Run this in terminal/command prompt:</p>
          <CodeBlock>python --version</CodeBlock>

          <h3>Starting Python</h3>
          <p>
            Use Python <b>IDLE</b> or your favorite editor. Try this classic
            example:
          </p>
          <CodeBlock>{`print("Hello, World!")`}</CodeBlock>
        </section>
      )}

      {activeContent === "syntax" && (
        <section id="syntax">
          <h2>What is Syntax?</h2>
          <p>
            <b>Syntax</b> is the set of rules that define valid code structure.
            In Python, indentation is crucial.
          </p>

          <h3>Indentation</h3>
          <p>
            Unlike other languages that use braces, Python uses indentation to
            define blocks. Example:
          </p>
          <CodeBlock>{`# This loop runs 5 times
for i in range(5):
    print(i)  # inside the loop`}</CodeBlock>
        </section>
      )}
    </LessonLayout>
  );
}
