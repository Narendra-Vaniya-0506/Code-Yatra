import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function CLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>C Tutorial</h3>
      <ul>
        <li><a href="#introduction">Introduction to C</a></li>
        <li><a href="#basics">C Basics</a></li>
        <li><a href="#arrays">Arrays & Strings</a></li>
        <li><a href="#pointers">Pointers & Memory</a></li>
        <li><a href="#structs">Structures</a></li>
        <li><a href="#files">File I/O</a></li>
        <li><a href="#dynamic">Dynamic Memory</a></li>
        <li><a href="#advanced">Advanced C</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="C Tutorial"
      subtitle="Learn C programming from fundamentals to systems development"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "C" }
      ]}
      sidebar={sidebar}
      prev={{ label: "C++ Lessons", href: "/pages/CppLessons/cpp" }}
      next={{ label: "Python Lessons", href: "/pages/PythonLessons" }}
      toc={true}
    >
      <section id="introduction">
        <h2>Introduction to C</h2>
        <p>C is a powerful, efficient programming language that has been the foundation of modern computing for over 50 years. Created by Dennis Ritchie in 1972, C is used for system programming, embedded systems, and high-performance applications.</p>
        <p>This comprehensive tutorial will guide you through C fundamentals, from basic syntax to advanced systems programming concepts, helping you build a solid foundation for understanding how computers work at a low level.</p>
      </section>

      <section id="basics">
        <h2>C Basics</h2>
        <p>Learn the fundamental building blocks of C including data types, variables, operators, control structures, and functions. Understand how to write efficient, portable C code that can run on any system with a C compiler.</p>
        <p>Master C syntax, header files, compilation process, and how to use the standard library effectively to build robust applications and understand the underlying system architecture.</p>
      </section>

      <section id="arrays">
        <h2>Arrays & Strings</h2>
        <p>Arrays and strings are fundamental data structures in C that allow you to work with collections of data. Learn about static and dynamic arrays, multidimensional arrays, and C-style strings.</p>
        <p>Understand memory layout, array manipulation techniques, and string handling functions from the C standard library for efficient data processing and storage.</p>
      </section>

      <section id="pointers">
        <h2>Pointers & Memory</h2>
        <p>Pointers are one of the most powerful features of C, providing direct memory access and manipulation capabilities. Learn about pointer arithmetic, memory addresses, and dynamic memory management.</p>
        <p>Master pointer operations, memory allocation with malloc and free, and understand how pointers enable efficient data structures and system-level programming.</p>
      </section>

      <section id="structs">
        <h2>Structures</h2>
        <p>C structures allow you to create custom data types by grouping related data together. Learn how to define and use structures to model complex data and create more sophisticated programs.</p>
        <p>Understand structure declaration, initialization, member access, and how structures enable modular programming and data organization in C applications.</p>
      </section>

      <section id="files">
        <h2>File I/O</h2>
        <p>C provides powerful file handling capabilities for reading and writing data to files. Learn about file operations, file pointers, and various I/O functions from the C standard library.</p>
        <p>Master file opening modes, reading and writing operations, error handling, and how to work with different file formats for data persistence and exchange.</p>
      </section>

      <section id="dynamic">
        <h2>Dynamic Memory</h2>
        <p>Dynamic memory allocation allows you to manage memory at runtime using malloc, calloc, realloc, and free. Learn about heap memory management and memory leaks prevention.</p>
        <p>Understand memory allocation strategies, memory debugging techniques, and best practices for efficient memory usage in C programs.</p>
      </section>

      <section id="advanced">
        <h2>Advanced C</h2>
        <p>Explore advanced C concepts including preprocessor directives, bitwise operations, function pointers, and advanced data structures. Learn about performance optimization and system programming techniques.</p>
        <p>Discover how C is used in system programming, embedded systems, and performance-critical applications. Understand the relationship between C and assembly language.</p>
      </section>
    </LessonLayout>
  );
}
