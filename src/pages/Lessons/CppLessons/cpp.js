import LessonLayout from "../lesson_layout";
import "../lessons.css";

export default function CppLessons() {
  const sidebar = (
    <nav className="lesson-sidebar-nav">
      <h3>C++ Tutorial</h3>
      <ul>
        <li><a href="#introduction">Introduction to C++</a></li>
        <li><a href="#basics">C++ Basics</a></li>
        <li><a href="#functions">Functions & Classes</a></li>
        <li><a href="#pointers">Pointers & Memory</a></li>
        <li><a href="#stl">STL Containers</a></li>
        <li><a href="#templates">Templates & Generics</a></li>
        <li><a href="#oop">OOP in C++</a></li>
        <li><a href="#advanced">Advanced C++</a></li>
      </ul>
    </nav>
  );

  return (
    <LessonLayout
      title="C++ Tutorial"
      subtitle="Master C++ programming from fundamentals to advanced systems development"
      breadcrumbs={[
        { label: "Tutorials", href: "/tutorials" },
        { label: "C++" }
      ]}
      sidebar={sidebar}
      prev={{ label: "C Lessons", href: "/pages/CLessons/c" }}
      next={{ label: "Python Lessons", href: "/pages/PythonLessons" }}
      toc={true}
    >
      <section id="introduction">
        <h2>Introduction to C++</h2>
        <p>C++ is a powerful, high-performance programming language that builds upon C with object-oriented features. Created by Bjarne Stroustrup in 1985, C++ is used for system programming, game development, and performance-critical applications.</p>
        <p>This comprehensive tutorial will take you from C++ fundamentals to advanced concepts, covering everything you need to build efficient, robust applications and systems.</p>
      </section>

      <section id="basics">
        <h2>C++ Basics</h2>
        <p>Learn the fundamental building blocks of C++ including data types, variables, operators, control structures, and input/output operations. Understand the differences between C and C++ and how to write modern, safe C++ code.</p>
        <p>Master C++ syntax, namespaces, references, and the standard library basics to build a solid foundation for more advanced topics.</p>
      </section>

      <section id="functions">
        <h2>Functions & Classes</h2>
        <p>Explore C++ functions including overloading, default arguments, and inline functions. Learn about classes and objects, constructors, destructors, and member functions that form the basis of object-oriented programming in C++.</p>
        <p>Understand encapsulation, access specifiers, and how to design effective class hierarchies for reusable, maintainable code.</p>
      </section>

      <section id="pointers">
        <h2>Pointers & Memory</h2>
        <p>Master C++ memory management including pointers, references, dynamic memory allocation, and smart pointers. Understand RAII (Resource Acquisition Is Initialization) and how to avoid memory leaks and dangling pointers.</p>
        <p>Learn about memory management best practices, resource handling, and modern C++ techniques for safe, efficient memory usage.</p>
      </section>

      <section id="stl">
        <h2>STL Containers</h2>
        <p>The Standard Template Library (STL) provides powerful, generic containers and algorithms. Learn about vectors, lists, maps, sets, and other containers along with their usage patterns and performance characteristics.</p>
        <p>Master iterators, algorithms, and how to choose the right container for your specific use case while writing efficient, generic code.</p>
      </section>

      <section id="templates">
        <h2>Templates & Generics</h2>
        <p>C++ templates enable generic programming by allowing you to write code that works with different data types without duplication. Learn about function templates, class templates, and template specialization.</p>
        <p>Understand template metaprogramming, variadic templates, and how to create flexible, reusable code components that adapt to different types and requirements.</p>
      </section>

      <section id="oop">
        <h2>OOP in C++</h2>
        <p>Master object-oriented programming concepts in C++ including inheritance, polymorphism, virtual functions, and abstract classes. Learn about multiple inheritance, interfaces, and design patterns.</p>
        <p>Explore advanced OOP features like operator overloading, friend functions, and how to design robust class hierarchies for complex software systems.</p>
      </section>

      <section id="advanced">
        <h2>Advanced C++</h2>
        <p>Delve into advanced C++ features including move semantics, lambda expressions, concurrency with threads, and the latest C++20/23 features. Learn about performance optimization and modern C++ idioms.</p>
        <p>Discover advanced topics like custom allocators, reflection, and how to write high-performance, modern C++ code that leverages the full power of the language.</p>
      </section>
    </LessonLayout>
  );
}
