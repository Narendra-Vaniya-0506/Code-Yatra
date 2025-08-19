import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function JavaLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>Java Tutorial</h3>
      <ul>
        <li><a href="#introduction">Introduction to Java</a></li>
        <li><a href="#datatypes">Data Types & Variables</a></li>
        <li><a href="#conditionals">Conditionals & Logic</a></li>
        <li><a href="#loops">Loops & Iteration</a></li>
        <li><a href="#classes">Classes & Objects</a></li>
        <li><a href="#inheritance">Inheritance & Polymorphism</a></li>
        <li><a href="#advanced">Advanced Topics</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="Java Tutorial"
      subtitle="Master Java programming from fundamentals to enterprise applications"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "Java" }
      ]}
      sidebar={sidebar}
      prev={{ label: "Python Lessons", href: "/pages/PythonLessons" }}
      next={{ label: "HTML Lessons", href: "/pages/HTMLLessons/html" }}
      toc={true}
    >
      <section id="introduction">
        <h2>Introduction to Java</h2>
        <p>Java is a powerful, object-oriented programming language designed for portability and platform independence. Created by James Gosling at Sun Microsystems in 1995, Java follows the "write once, run anywhere" principle through the Java Virtual Machine (JVM).</p>
        <p>This comprehensive tutorial will take you from Java basics to advanced enterprise development, covering everything you need to build robust, scalable applications.</p>
      </section>

      <section id="datatypes">
        <h2>Data Types & Variables</h2>
        <p>Java is a statically-typed language with two main categories of data types: primitive types (int, double, boolean, etc.) and reference types (objects, arrays, strings). Understanding type safety and memory management is crucial for Java development.</p>
        <p>Learn how to declare variables, understand type casting, and work with Java's wrapper classes to bridge the gap between primitives and objects in your applications.</p>
      </section>

      <section id="conditionals">
        <h2>Conditionals & Logic</h2>
        <p>Control flow in Java is managed through conditional statements like if-else, switch-case, and the ternary operator. These constructs allow your programs to make decisions based on different conditions and inputs.</p>
        <p>Master logical operators, comparison methods, and best practices for writing clean, readable conditional logic that handles edge cases effectively in your Java applications.</p>
      </section>

      <section id="loops">
        <h2>Loops & Iteration</h2>
        <p>Java provides several loop constructs including for, while, and do-while loops for repetitive tasks. The enhanced for-loop (for-each) simplifies iteration over collections and arrays.</p>
        <p>Explore loop control statements like break and continue, understand loop optimization techniques, and learn when to use each type of loop for maximum code clarity and performance.</p>
      </section>

      <section id="classes">
        <h2>Classes & Objects</h2>
        <p>Classes are blueprints for creating objects in Java, encapsulating data (fields) and behavior (methods). Object-oriented programming in Java revolves around the concepts of encapsulation, inheritance, and polymorphism.</p>
        <p>Learn to design effective classes, understand constructors, implement encapsulation with access modifiers, and create objects that model real-world entities in your applications.</p>
      </section>

      <section id="inheritance">
        <h2>Inheritance & Polymorphism</h2>
        <p>Inheritance allows classes to inherit properties and methods from parent classes, promoting code reuse and establishing hierarchical relationships. Polymorphism enables objects to take multiple forms through method overriding and interface implementation.</p>
        <p>Master abstract classes, interfaces, method overriding, and dynamic method dispatch to build flexible, extensible Java applications that can evolve with changing requirements.</p>
      </section>

      <section id="advanced">
        <h2>Advanced Topics</h2>
        <p>Delve into advanced Java concepts including generics, collections framework, exception handling, multithreading, and Java 8+ features like lambda expressions and streams. Explore Java's memory model and garbage collection mechanisms.</p>
        <p>Discover enterprise Java technologies like Spring Framework, Hibernate ORM, and build RESTful web services. Learn about Java's role in microservices architecture and cloud-native applications.</p>
      </section>
    </LessonLayout>
  );
}
