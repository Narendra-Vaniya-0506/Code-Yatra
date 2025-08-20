import React, { useState } from "react";
import LessonLayout from "./lessons_layout";

export default function PythonLessons() {
  const [openSections, setOpenSections] = useState({
    introduction: true,
    dataTypes: false,
  });
  const [activeLink, setActiveLink] = useState("overview");

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sidebarContent = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Tutorial</h3>
      {/* Introduction Section */}
      <div className="lesson-section">
        <button className={`lesson-section-toggle ${openSections.introduction ? "open" : ""}`} onClick={() => toggleSection("introduction")} aria-expanded={openSections.introduction}>
          Introduction
        </button>
        <ul style={{ maxHeight: openSections.introduction ? "200px" : "0" }} className="lesson-sublist">
          <li><a href="#overview" onClick={(e) => handleLinkClick(e, "overview")} className={activeLink === "overview" ? "active" : ""}>Python Overview</a></li>
          <li><a href="#installation" onClick={(e) => handleLinkClick(e, "installation")} className={activeLink === "installation" ? "active" : ""}>Installation</a></li>
        </ul>
      </div>
      {/* Data Types Section */}
      <div className="lesson-section">
        <button className={`lesson-section-toggle ${openSections.dataTypes ? "open" : ""}`} onClick={() => toggleSection("dataTypes")} aria-expanded={openSections.dataTypes}>
          Data Types & Operators
        </button>
        <ul style={{ maxHeight: openSections.dataTypes ? "200px" : "0" }} className="lesson-sublist">
          <li><a href="#datatypes" onClick={(e) => handleLinkClick(e, "datatypes")} className={activeLink === "datatypes" ? "active" : ""}>Data Types</a></li>
          <li><a href="#numbers" onClick={(e) => handleLinkClick(e, "numbers")} className={activeLink === "numbers" ? "active" : ""}>Numbers</a></li>
        </ul>
      </div>
    </nav>
  );

  return (
    <LessonLayout
      title="Python Tutorial"
      breadcrumbs={[
        { label: "Tutorials", href: "#" },
        { label: "Python Tutorial" },
      ]}
      sidebar={sidebarContent}
    >
      <div className="lesson-hero">
        <h1>Python Tutorial</h1>
        <p>Python is a high-level, interpreted, general-purpose programming language.</p>
      </div>

      <div id="overview">
        <h2>Get Started</h2>
        <p>Welcome to the Python Tutorial series! To begin learning, select a lesson from the sidebar. Work through the lessons in order for the best learning experience.</p>
      </div>

      <div id="installation">
        <h2>Installation</h2>
        <p>Content about installing Python goes here...</p>
      </div>

      <div id="datatypes">
        <h2>Data Types</h2>
        <p>Content about Python data types goes here...</p>
      </div>
      
      <div id="numbers">
        <h2>Numbers</h2>
        <p>Content about Python numbers goes here...</p>
      </div>
    </LessonLayout>
  );
}
