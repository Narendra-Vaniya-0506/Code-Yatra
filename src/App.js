import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Lessons from "./pages/Lessons"; 
import LessonLayout from "./components/LessonLayout"; 
import AbroadPage from "./pages/Studyabroad/AbroadPage";
import English from "./pages/Studyabroad/English";
import Visa from "./pages/Studyabroad/Visa";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import "./App.css";
import PythonLessons from "./pages/Lessons/PythonLessons";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={
            <ProtectedRoute>
              <Lessons />
            </ProtectedRoute>
          } />
          <Route path="/studyabroad" element={
            <ProtectedRoute>
              <AbroadPage />
            </ProtectedRoute>
          } />
          <Route path="/studyabroad/english" element={
            <ProtectedRoute>
              <English />
            </ProtectedRoute>
          } />
          <Route path="/studyabroad/visa" element={
            <ProtectedRoute>
              <Visa />
            </ProtectedRoute>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/lessons/python" element={
            <ProtectedRoute>
              <PythonLessons />
            </ProtectedRoute>
          } />
          <Route path="/lessons/python/:lessonId" element={
            <ProtectedRoute>
              <PythonLessons />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
