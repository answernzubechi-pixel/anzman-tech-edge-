import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        AnZtech <span>Connect</span>
      </div>
      
      <nav className="sidebar-menu">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/result" className="nav-link">Result</NavLink>
        <NavLink to="/calendar" className="nav-link">Calendar</NavLink>
        <NavLink to="/timetable" className="nav-link">Timetable</NavLink>
        <NavLink to="/campusnews" className="nav-link">CampusNews</NavLink>
      </nav>

      {/* --- LOGOUT SECTION --- */}
      <div style={{ padding: '20px', borderTop: '1px solid #1e293b' }}>
        <button 
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '12px',
            background: '#ef4444', // Red for Logout
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}
        >
          Logout
        </button>
        <p style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '15px', textAlign: 'center' }}>
          © 2024 AnZman Education
        </p>
      </div>
    </div>
  );
};

export default Sidebar;