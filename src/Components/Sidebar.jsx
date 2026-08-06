import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const Sidebar = () => {
  // 1. Grab the tools
  const { logout } = useAuth();
  const navigate = useNavigate();

  // 2. The Logout Handler
  const handleExit = () => {
    logout(); // Tell the brain to forget the student
    navigate('/'); // Send them back to the login page
  };

  return (
    <aside className="anz-sidebar">
      {/* 3. Branding */}
      <div className="sidebar-brand">
        <h2>AnZtech Edge</h2>
      </div>

      {/* 4. Navigation Links */}
      <nav className="sidebar-links">
        <Link to="/Dashboard" className="nav-item">
          Dashboard
        </Link> <br/><br/>
        <Link to = "/Result" className='nav-item'>My Transcript </Link>
        {/* You can add more links here later like "Profile" or "Calendar" */}
      </nav><br/>

      {/* 5. The Kill-Switch (Logout) */}
      <div className="sidebar-footer">
        <button onClick={handleExit} className="logout-btn">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;