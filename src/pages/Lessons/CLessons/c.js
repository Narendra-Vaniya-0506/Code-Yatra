import React, { useState } from "react";
import LessonLayout from "../lesson_layout"; // Correct import

export default function CLessons() {
  // State to manage which accordion section is open
  const [openSections, setOpenSections] = useState({
    introduction: true, // Keep the first section open by default
    dataTypes: false,
    strings: false,
    lists: false,
    tuples: false,
  });

  // State to track the currently active link for styling
  const [activeLink, setActiveLink] = useState("overview");

  // Toggles an accordion section open or closed
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handles link clicks for smooth scrolling and setting active state
  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // The 80px offset accounts for the sticky header on mobile
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Define the sidebar content with the new accordion structure
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>C lesson</h3>

      {/* Introduction Section */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${openSections.introduction ? "open" : ""}`}
          onClick={() => toggleSection("introduction")}
          aria-expanded={openSections.introduction}
        >
          Introduction
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.introduction ? "500px" : "0" }}
        >
          <li><a href="#overview" onClick={() => handleLinkClick("overview")} className={activeLink === "overview" ? "active" : ""}>C Overview</a></li>
          <li><a href="#installation" onClick={() => handleLinkClick("installation")} className={activeLink === "installation" ? "active" : ""}>Installation</a></li>
          <li><a href="#syntax" onClick={() => handleLinkClick("syntax")} className={activeLink === "syntax" ? "active" : ""}>Syntax</a></li>
        </ul>
      </div>

      {/* Data Types Section */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${openSections.dataTypes ? "open" : ""}`}
          onClick={() => toggleSection("dataTypes")}
          aria-expanded={openSections.dataTypes}
        >
          Data Types & Operators
        </button>
        <ul
          className="lesson-sublist"
          style={{ maxHeight: openSections.dataTypes ? "500px" : "0" }}
        >
          <li><a href="#datatypes" onClick={() => handleLinkClick("datatypes")} className={activeLink === "datatypes" ? "active" : ""}>Data Types</a></li>
          <li><a href="#numbers" onClick={() => handleLinkClick("numbers")} className={activeLink === "numbers" ? "active" : ""}>Numbers</a></li>
          <li><a href="#operators" onClick={() => handleLinkClick("operators")} className={activeLink === "operators" ? "active" : ""}>Operators</a></li>
        </ul>
      </div>
      
      {/* Add other sections here following the same pattern... */}

    </nav>
  );

  return (
    <LessonLayout
      title="C Tutorial"
      breadcrumbs={[
        { label: "Lessons", href: "/lessons" },
        { label: "C Tutorial" },
      ]}
      sidebar={sidebar}
      lessonId="c-introduction"
    >
      {/* Hero Section */}
      <div className="lesson-hero">
        <h1>C Tutorial</h1>
        <p>C is a general-purpose, procedural computer programming language.</p>
      </div>

      {/* Main Content */}
      <div id="overview">
        <h2>Get Started</h2>
        <p>Welcome to the C Tutorial series! To begin learning:</p>
        <ol>
          <li>Select a lesson from the sidebar on the left.</li>
          <li>Work through the lessons in order for the best learning experience.</li>
          <li>Each lesson contains detailed explanations and examples.</li>
        </ol>
      </div>

      <div id="installation" style={{ paddingTop: '60px', marginTop: '-60px' }}>
        <h2>Installation</h2>
        <p>Content about installing C compiler goes here...</p>
      </div>

      <div id="syntax" style={{ paddingTop: '60px', marginTop: '-60px' }}>
        <h2>Syntax</h2>
        <p>Content about C syntax goes here...</p>
      </div>
      
      {/* Add other content sections here corresponding to the sidebar links */}

    </LessonLayout>
  );
}
