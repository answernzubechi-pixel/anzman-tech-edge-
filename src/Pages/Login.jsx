// src/Pages/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../Context/Authcontext'; 
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer'; 

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(studentId, pin);
    if (success) { navigate('/Dashboard'); }
  };

  return (
    <div className="login-page-wrapper">
      
      {/* THE SPLIT SCREEN SECTION */}
      <div className="login-container">
        
        {/* LEFT SIDE: Branding */}
        <div className="login-side-content">
          <div className="hero-text">
            <h1>AnZtech Edge</h1>
            <h2>Fast & Reliable <br /> Academic Portal</h2>
            <p>Empowering students with real-time academic insights and secure records.</p>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="login-form-side">
          <div className="login-card">
            <h3>Welcome Back</h3>
            <span className="sub-label">Enter details to access results</span>

            {/* Error Message Logic */}
            {error && (
              <p style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '8px', marginBottom: '15px', fontWeight: 'bold', border: '1px solid #ef4444', fontSize: '0.85rem' }}>
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Admission ID</label>
                <input 
                  type="text" 
                  placeholder="ANZ-2024-XXX"
                  value={studentId} 
                  onChange={(e) => setStudentId(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>Security PIN</label>
                <input 
                  type="password" 
                  placeholder="••••"
                  value={pin} 
                  onChange={(e) => setPin(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="login-btn">Access Portal</button>
            </form>
          </div>
        </div>
      </div>

      {/* THE FOOTER SECTION */}
      <Footer />

    </div>
  );
};

export default Login;