import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Navbar = ({ pageTitle }) => {
  const { user } = useAuth();

  return (
    <div className="anz-navbar">
      <h2>{pageTitle}</h2>
      <div className="anz-nav-user">
        <span>{user.name}</span>
        {/* Dynamic Image logic */}
        <img src={`/Avatar/${user.id}.png`} alt="student"
        className="student-avatar"/>
      </div>
    </div>
  );
};

export default Navbar;
