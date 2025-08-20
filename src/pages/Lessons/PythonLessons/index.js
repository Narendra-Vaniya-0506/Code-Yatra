// src/pages/Lessons/PythonLessons/index.js
import React, { useState } from "react";
import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function PythonLessons() {
  const [openSections, setOpenSections] = useState({
    introduction: true,
    dataTypes: false,
    strings: false,
    lists: false,
    tuples: false,
  });

  const [activeLink, setActiveLink] = useState("introduction");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Python Tutorial</h3>

      {/* ---------------- Introduction ---------------- */}
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
          className={`lesson-sublist ${
            openSections.introduction ? "expanded" : ""
          }`}
          style={{
            maxHeight: openSections.introduction ? "500px" : "0",
            transition: "max-height 0.25s ease",
          }}
        >
          <li>
            <a
              href="#overview"
              onClick={() => handleLinkClick("overview")}
              className={activeLink === "overview" ? "active" : ""}
            >
              Python Overview
            </a>
          </li>
          <li>
            <a
              href="#installation"
              onClick={() => handleLinkClick("installation")}
              className={activeLink === "installation" ? "active" : ""}
            >
              Installation & Getting Started
            </a>
          </li>
          <li>
            <a
              href="#syntax"
              onClick={() => handleLinkClick("syntax")}
              className={activeLink === "syntax" ? "active" : ""}
            >
              What is Syntax?
            </a>
          </li>
          <li>
            <a
              href="#comments"
              onClick={() => handleLinkClick("comments")}
              className={activeLink === "comments" ? "active" : ""}
            >
              Python Comments
            </a>
          </li>
          <li>
            <a
              href="#variables"
              onClick={() => handleLinkClick("variables")}
              className={activeLink === "variables" ? "active" : ""}
            >
              Python Variables
            </a>
          </li>
        </ul>
      </div>

      {/* ---------------- Data Types & Operators ---------------- */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.dataTypes ? "open" : ""
          }`}
          onClick={() => toggleSection("dataTypes")}
          aria-expanded={openSections.dataTypes}
        >
          Python Data Types & Operators
        </button>
        <ul
          className={`lesson-sublist ${
            openSections.dataTypes ? "expanded" : ""
          }`}
          style={{
            maxHeight: openSections.dataTypes ? "500px" : "0",
            transition: "max-height 0.25s ease",
          }}
        >
          <li>
            <a
              href="#datatypes"
              onClick={() => handleLinkClick("datatypes")}
              className={activeLink === "datatypes" ? "active" : ""}
            >
              Data Types
            </a>
          </li>
          <li>
            <a
              href="#numbers"
              onClick={() => handleLinkClick("numbers")}
              className={activeLink === "numbers" ? "active" : ""}
            >
              Python Numbers
            </a>
          </li>
          <li>
            <a
              href="#conversion"
              onClick={() => handleLinkClick("conversion")}
              className={activeLink === "conversion" ? "active" : ""}
            >
              Data Conversion
            </a>
          </li>
          <li>
            <a
              href="#casting"
              onClick={() => handleLinkClick("casting")}
              className={activeLink === "casting" ? "active" : ""}
            >
              Type Casting
            </a>
          </li>
          <li>
            <a
              href="#operators"
              onClick={() => handleLinkClick("operators")}
              className={activeLink === "operators" ? "active" : ""}
            >
              Python Operators
            </a>
          </li>
          <li>
            <a
              href="#booleans"
              onClick={() => handleLinkClick("booleans")}
              className={activeLink === "booleans" ? "active" : ""}
            >
              Python Booleans
            </a>
          </li>
        </ul>
      </div>

      {/* ---------------- Strings ---------------- */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.strings ? "open" : ""
          }`}
          onClick={() => toggleSection("strings")}
          aria-expanded={openSections.strings}
        >
          Python Strings
        </button>
        <ul
          className={`lesson-sublist ${openSections.strings ? "expanded" : ""}`}
          style={{
            maxHeight: openSections.strings ? "500px" : "0",
            transition: "max-height 0.25s ease",
          }}
        >
          <li>
            <a
              href="#strings"
              onClick={() => handleLinkClick("strings")}
              className={activeLink === "strings" ? "active" : ""}
            >
              String Basics
            </a>
          </li>
          <li>
            <a
              href="#string-methods"
              onClick={() => handleLinkClick("string-methods")}
              className={activeLink === "string-methods" ? "active" : ""}
            >
              String Methods
            </a>
          </li>
          <li>
            <a
              href="#formatting"
              onClick={() => handleLinkClick("formatting")}
              className={activeLink === "formatting" ? "active" : ""}
            >
              String Formatting
            </a>
          </li>
        </ul>
      </div>

      {/* ---------------- Lists ---------------- */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.lists ? "open" : ""
          }`}
          onClick={() => toggleSection("lists")}
          aria-expanded={openSections.lists}
        >
          Python Lists
        </button>
        <ul
          className={`lesson-sublist ${openSections.lists ? "expanded" : ""}`}
          style={{
            maxHeight: openSections.lists ? "500px" : "0",
            transition: "max-height 0.25s ease",
          }}
        >
          <li>
            <a
              href="#lists"
              onClick={() => handleLinkClick("lists")}
              className={activeLink === "lists" ? "active" : ""}
            >
              List Basics
            </a>
          </li>
          <li>
            <a
              href="#list-methods"
              onClick={() => handleLinkClick("list-methods")}
              className={activeLink === "list-methods" ? "active" : ""}
            >
              List Methods
            </a>
          </li>
          <li>
            <a
              href="#slicing"
              onClick={() => handleLinkClick("slicing")}
              className={activeLink === "slicing" ? "active" : ""}
            >
              List Slicing
            </a>
          </li>
        </ul>
      </div>

      {/* ---------------- Tuples ---------------- */}
      <div className="lesson-section">
        <button
          className={`lesson-section-toggle ${
            openSections.tuples ? "open" : ""
          }`}
          onClick={() => toggleSection("tuples")}
          aria-expanded={openSections.tuples}
        >
          Python Tuples
        </button>
        <ul
          className={`lesson-sublist ${openSections.tuples ? "expanded" : ""}`}
          style={{
            maxHeight: openSections.tuples ? "500px" : "0",
            transition: "max-height 0.25s ease",
          }}
        >
          <li>
            <a
              href="#tuples"
              onClick={() => handleLinkClick("tuples")}
              className={activeLink === "tuples" ? "active" : ""}
            >
              Tuple Basics
            </a>
          </li>
          <li>
            <a
              href="#tuple-methods"
              onClick={() => handleLinkClick("tuple-methods")}
              className={activeLink === "tuple-methods" ? "active" : ""}
            >
              Tuple Methods
            </a>
          </li>
          <li>
            <a
              href="#immutability"
              onClick={() => handleLinkClick("immutability")}
              className={activeLink === "immutability" ? "active" : ""}
            >
              Immutability
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <LessonLayout sidebar={sidebar}>
      <div className="lesson-content">
        <h1>Welcome to Python Lessons</h1>
        <p>Select a topic from the sidebar to get started.</p>
      </div>
    </LessonLayout>
  );
}
