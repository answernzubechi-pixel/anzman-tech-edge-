import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="main-content">
      {/* 1. WELCOME HEADER */}
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>
          Welcome, <span style={{ color: '#8b5cf6' }}>{user.name}</span>
        </h1>
        <p style={{ color: '#64748b' }}>Campus Connect: Student Overview Portal</p>
      </header>

      <div className="dashboard-grid">
        
        {/* 2. CONSOLIDATED STUDENT PROFILE CARD */}
        <div className="profile-card">
          <div className="profile-header">
            <img 
              src={`/Avatar/${user.id}.png`} 
              alt="Profile" 
              onError={(e) => e.target.src = "https://via.placeholder.com/150"}
            />
            <div>
              <h2 style={{ fontSize: '1.2rem', color: '#1e293b' }}>{user.name}</h2>
              <p style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {user.currentClass} {user.arm}
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#64748b' }}>Admission No:</span>
              <span style={{ fontWeight: '600' }}>{user.admissionNo}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#64748b' }}>Sport House:</span>
              <span style={{ fontWeight: '600', color: '#b45309' }}>{user.house}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Guardian:</span>
              <span style={{ fontWeight: '600' }}>{user.guardianName}</span>
            </div>
          </div>
        </div>

        {/* 3. ACADEMIC SNAPSHOT STATS */}
        <div className="stats-grid">
          <div className="stat-box purple">
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Class Rank</p>
            <h3 style={{ fontSize: '1.8rem' }}>{user.rank}</h3>
          </div>
          <div className="stat-box blue">
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Attendance</p>
            <h3 style={{ fontSize: '1.8rem' }}>{user.attendance}</h3>
          </div>
          <div className="stat-box green">
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Avg Score</p>
            <h3 style={{ fontSize: '1.8rem' }}>{user.averageScore}%</h3>
          </div>

          {/* 4. QUICK NOTICE PREVIEW */}
          <div style={{ 
            gridColumn: 'span 3', 
            background: '#fff', 
            padding: '20px', 
            borderRadius: '15px', 
            marginTop: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            borderLeft: '5px solid #ef4444'
          }}>
            <h4 style={{ color: '#ef4444', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '5px' }}>Important Notice</h4>
            <p style={{ color: '#1e293b', fontSize: '0.9rem' }}>
              Inter-House sports competition starts next week. Ensure all athletes have submitted their medical clearance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;