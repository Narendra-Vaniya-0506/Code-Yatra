import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Lessons from "./pages/Lessons";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ForgotPassword from "./pages/ForgotPassword";


// Import lesson pages
import PythonLessons from "./pages/Lessons/PythonLessons/index";
import CLessons from "./pages/Lessons/CLessons/c";
import CppLessons from "./pages/Lessons/CppLessons/cpp";
import CSSLessons from "./pages/Lessons/CSSLessons/css";
import HTMLLessons from "./pages/Lessons/HTMLLessons/html";
import JavaLessons from "./pages/Lessons/JavaLessons/java";
import JavaScriptLessons from "./pages/Lessons/JavaScriptLessons/javascript";
import ReactLessons from "./pages/Lessons/ReactJSLessons/react";

// Study abroad pages
import AbroadPage from "./pages/Studyabroad/AbroadPage";
import English from "./pages/Studyabroad/English";
import Visa from "./pages/Studyabroad/Visa";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Protected routes */}
          <Route path="/profile" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />
          
          {/* Lessons routes */}
          <Route path="/lessons" element={
            <ProtectedRoute><Lessons /></ProtectedRoute>
          } />
          
          {/* Individual lesson routes */}
          <Route path="/lessons/python/*" element={
            <ProtectedRoute><PythonLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/c/*" element={
            <ProtectedRoute><CLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/cpp/*" element={
            <ProtectedRoute><CppLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/css/*" element={
            <ProtectedRoute><CSSLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/html/*" element={
            <ProtectedRoute><HTMLLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/java/*" element={
            <ProtectedRoute><JavaLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/javascript/*" element={
            <ProtectedRoute><JavaScriptLessons /></ProtectedRoute>
          } />
          <Route path="/lessons/react/*" element={
            <ProtectedRoute><ReactLessons /></ProtectedRoute>
          } />
          
          {/* Study abroad routes */}
          <Route path="/studyabroad" element={
            <ProtectedRoute><AbroadPage /></ProtectedRoute>
          } />
          <Route path="/studyabroad/english" element={
            <ProtectedRoute><English /></ProtectedRoute>
          } />
          <Route path="/studyabroad/visa" element={
            <ProtectedRoute><Visa /></ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
