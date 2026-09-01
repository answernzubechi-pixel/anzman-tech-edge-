import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Context/Authcontext';

// Import Components
import Sidebar from './Components/Sidebar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Result from './Pages/Result';
import Calendar from './Pages/Calendar';
import Timetable from './Pages/Timetable';
import CampusNews from './Pages/CampusNews';

// Import the new CSS
import './App.css';

// Protected Route Logic: If student isn't logged in, send them to Login
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 1. Public Route: Login Page (No Sidebar here) */}
          <Route path="/login" element={<Login />} />

          {/* 2. Protected Routes: All these pages will have the Sidebar */}
          <Route path="/*" element={
            <ProtectedRoute>
              <div className="app-container">
                {/* Fixed Sidebar on the left */}
                <Sidebar />
                
                {/* Content changes here on the right */}
                <div className="main-content">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/timetable" element={<Timetable />} />
                    <Route path="/campusnews" element={<CampusNews />} />
                    
                    {/* Default path redirects to Home after Login */}
                    <Route path="/" element={<Navigate to="/home" />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
