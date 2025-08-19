import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function HTMLLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>HTML Tutorial</h3>
      <ul>
        <li><a href="#introduction">Introduction to HTML</a></li>
        <li><a href="#elements">HTML Elements</a></li>
        <li><a href="#attributes">HTML Attributes</a></li>
        <li><a href="#forms">HTML Forms</a></li>
        <li><a href="#media">Media Elements</a></li>
        <li><a href="#semantic">Semantic HTML</a></li>
        <li><a href="#advanced">Advanced Topics</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="HTML Tutorial"
      subtitle="Build the structure of the web with modern HTML"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "HTML" }
      ]}
      sidebar={sidebar}
      prev={{ label: "Java Lessons", href: "/pages/JavaLessons/java" }}
      next={{ label: "CSS Lessons", href: "/pages/CSSLessons/css" }}
      toc={true}
    >
      <section id="introduction">
        <h2>Introduction to HTML</h2>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure and content of web documents using a system of elements and tags.</p>
        <p>This comprehensive tutorial will teach you modern HTML5, covering everything from basic tags to advanced semantic elements, helping you create well-structured, accessible web content.</p>
      </section>

      <section id="elements">
        <h2>HTML Elements</h2>
        <p>HTML elements are the building blocks of web pages, consisting of opening tags, content, and closing tags. Elements can be nested and have specific purposes in defining document structure.</p>
        <p>Master essential HTML elements including headings, paragraphs, links, images, lists, tables, and structural elements to create meaningful web content that works across all browsers and devices.</p>
      </section>

      <section id="attributes">
        <h2>HTML Attributes</h2>
        <p>Attributes provide additional information about HTML elements, modifying their behavior or appearance. Common attributes include id, class, src, href, alt, and style, among many others.</p>
        <p>Learn how to use attributes effectively for accessibility, SEO, and styling purposes. Understand global attributes versus element-specific attributes and best practices for attribute naming and values.</p>
      </section>

      <section id="forms">
        <h2>HTML Forms</h2>
        <p>HTML forms enable user interaction through input fields, buttons, checkboxes, radio buttons, and other controls. Forms are essential for collecting user data and enabling web applications.</p>
        <p>Explore form elements, input types, validation attributes, and form submission methods. Learn to create accessible, user-friendly forms that work seamlessly with backend processing.</p>
      </section>

      <section id="media">
        <h2>Media Elements</h2>
        <p>Modern HTML provides native support for embedding audio, video, and images without requiring plugins. The img, audio, and video elements make it easy to include rich media content.</p>
        <p>Master responsive images with srcset and picture elements, optimize media for different devices, and ensure accessibility with proper alt text and captions for all media content.</p>
      </section>

      <section id="semantic">
        <h2>Semantic HTML</h2>
        <p>Semantic HTML uses elements that clearly describe their meaning to both browsers and developers. Elements like header, nav, main, article, section, and footer provide better document structure.</p>
        <p>Understand how semantic elements improve accessibility, SEO, and code maintainability. Learn to structure documents logically and create meaningful content hierarchies that benefit all users.</p>
      </section>

      <section id="advanced">
        <h2>Advanced Topics</h2>
        <p>Explore advanced HTML features including custom data attributes, microdata for semantic markup, web components, and progressive web app capabilities. Learn about HTML templating and dynamic content generation.</p>
        <p>Discover HTML5 APIs like geolocation, local storage, and web workers. Understand how HTML integrates with CSS and JavaScript to create modern, interactive web applications and progressive web apps.</p>
      </section>
    </LessonLayout>
  );
}
