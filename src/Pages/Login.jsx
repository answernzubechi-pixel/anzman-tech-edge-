import React, { useState } from 'react';
import { useAuth } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pin, setPin] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(id, pin);
    if (success) {
      navigate('/home'); // Sends student to the new Home (Dashboard)
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#0f172a' // Dark Navy background to match Sidebar
    }}>
      <div className="content-card" style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px', 
        textAlign: 'center',
        borderTop: '8px solid #8b5cf6' // Strong Purple Tech Stripe
      }}>
        {/* Logo Section */}
        <h1 style={{ color: '#0f172a', fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>
          AnZtech <span style={{ color: '#8b5cf6' }}>Connect</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '30px' }}>
          Official Student & Guardian Portal
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>
              STUDENT ADMISSION ID
            </label>
            <input 
              type="text" 
              placeholder="e.g. ANZ-106"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                outline: 'none',
                fontSize: '1rem'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#475569', marginBottom: '8px' }}>
              SECURITY PIN
            </label>
            <input 
              type="password" 
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                outline: 'none',
                fontSize: '1.2rem',
                letterSpacing: '5px'
              }}
              required
            />
          </div>

          {/* Error Message Logic */}
          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '15px', textAlign: 'center' }}>
              ⚠ {error}
            </p>
          )}

          <button type="submit" style={{ 
            width: '100%', 
            background: '#8b5cf6', 
            color: 'white', 
            padding: '14px', 
            borderRadius: '8px', 
            border: 'none', 
            fontWeight: 'bold', 
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            transition: '0.3s'
          }}>
            Access Portal
          </button>
        </form>

        {/* Lively Footer Note */}
        <p style={{ marginTop: '30px', color: '#94a3b8', fontSize: '0.75rem' }}>
          Forgot your PIN? Contact the ICT Department. <br/>
          <span style={{ color: '#10b981' }}>● System Secure & Encrypted</span>
        </p>
      </div>
    </div>
  );
};

export default Login;