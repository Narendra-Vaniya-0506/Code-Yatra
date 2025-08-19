import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function CSSLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>CSS Tutorial</h3>
      <ul>
        <li><a href="#introduction">Introduction to CSS</a></li>
        <li><a href="#selectors">CSS Selectors</a></li>
        <li><a href="#boxmodel">Box Model & Layout</a></li>
        <li><a href="#flexbox">Flexbox</a></li>
        <li><a href="#grid">CSS Grid</a></li>
        <li><a href="#animations">Animations & Transitions</a></li>
        <li><a href="#responsive">Responsive Design</a></li>
        <li><a href="#advanced">Advanced CSS</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="CSS Tutorial"
      subtitle="Master modern CSS from basics to advanced styling techniques"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "CSS" }
      ]}
      sidebar={sidebar}
      prev={{ label: "HTML Lessons", href: "/pages/HTMLLessons/html" }}
      next={{ label: "JavaScript Lessons", href: "/pages/JavaScriptLessons/javascript" }}
      toc={true}
    >
      <section id="introduction">
        <h2>Introduction to CSS</h2>
        <p>CSS (Cascading Style Sheets) is the language used to style and layout web pages. It controls colors, fonts, spacing, positioning, and responsive design, making websites visually appealing and user-friendly.</p>
        <p>This tutorial will guide you through modern CSS techniques, from basic styling to advanced layout methods like Flexbox and Grid, helping you create beautiful, responsive web designs.</p>
      </section>

      <section id="selectors">
        <h2>CSS Selectors</h2>
        <p>CSS selectors are patterns used to select and style HTML elements. Master various selector types including element, class, ID, attribute, pseudo-class, and pseudo-element selectors to target elements precisely.</p>
        <p>Learn specificity rules, selector combinations, and best practices for writing efficient, maintainable CSS that scales with your project requirements.</p>
      </section>

      <section id="boxmodel">
        <h2>Box Model & Layout</h2>
        <p>The CSS box model is fundamental to understanding how elements are rendered on the page. It includes content, padding, border, and margin areas that determine element dimensions and spacing.</p>
        <p>Master display properties, positioning techniques, and layout strategies to create complex page structures with proper spacing and alignment.</p>
      </section>

      <section id="flexbox">
        <h2>Flexbox</h2>
        <p>Flexbox is a powerful one-dimensional layout system that makes it easy to align and distribute space among items in a container, even when their size is unknown or dynamic.</p>
        <p>Learn flex container properties, flex item properties, and practical examples for creating responsive navigation bars, card layouts, and complex component arrangements.</p>
      </section>

      <section id="grid">
        <h2>CSS Grid</h2>
        <p>CSS Grid is a two-dimensional layout system that revolutionizes web design by providing precise control over rows and columns, enabling complex layouts that were previously difficult to achieve.</p>
        <p>Master grid container properties, grid item placement, and advanced techniques like grid areas and auto-fit/auto-fill for creating sophisticated, responsive layouts.</p>
      </section>

      <section id="animations">
        <h2>Animations & Transitions</h2>
        <p>CSS animations and transitions bring web pages to life by adding smooth, engaging visual effects. Create hover effects, loading animations, and interactive elements that enhance user experience.</p>
        <p>Learn keyframe animations, transition properties, timing functions, and performance optimization techniques for creating smooth, efficient animations that work across all modern browsers.</p>
      </section>

      <section id="responsive">
        <h2>Responsive Design</h2>
        <p>Responsive design ensures websites look great on all devices, from mobile phones to desktop computers. Use media queries, flexible units, and modern layout techniques to create adaptive designs.</p>
        <p>Master mobile-first design principles, breakpoint strategies, and responsive patterns for navigation, images, and content that provide optimal viewing experiences across all screen sizes.</p>
      </section>

      <section id="advanced">
        <h2>Advanced CSS</h2>
        <p>Explore advanced CSS concepts including CSS variables, custom properties, CSS modules, and preprocessors like Sass. Learn about CSS architecture patterns and methodologies like BEM and SMACSS.</p>
        <p>Discover CSS Houdini, container queries, and upcoming CSS features. Understand performance optimization, critical CSS, and modern tooling for large-scale CSS projects.</p>
      </section>
    </LessonLayout>
  );
}
