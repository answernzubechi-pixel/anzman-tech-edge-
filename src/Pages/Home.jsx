import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Home = () => {
  const { user } = useAuth();
  console.log("Check this:", user);

  return (
    <div>
      {/* 1. TOP GREETING */}
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>
          Welcome back, <span style={{ color: '#8b5cf6' }}>{user.name}</span>!
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          AnZtech Campus Connect: Your Academic Command Center.
        </p>
      </header>

      <div className="dashboard-grid">
        
        {/* 2. THE IDENTITY CARD (Profile Info) */}
        <div className="content-card">
          <div className="profile-header">
            {/* Student Photo */}
          <img 
             src={`/Avatar/${user.id}.png`} 
            alt="Profile" 
             style={{ 
            width: '100px',      // Strict width
            height: '100px',     // Strict height
            borderRadius: '50%', // Makes it a perfect circle
        objectFit: 'cover',  // Prevents the face from stretching
             border: '4px solid #f3f4f6'
                     }}
          onError={(e) => e.target.src = "https://via.placeholder.com/150"}
/>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#1e293b' }}>{user.name}</h2>
              <span style={{ 
                background: '#ede9fe', 
                color: '#7c3aed', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>
                {user.currentClass} - {user.arm}
              </span>
            </div>
          </div>

          {/* Identity Details Row */}
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ color: '#64748b' }}>Admission No:</span>
              <span style={{ fontWeight: '600' }}>{user.id}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ color: '#64748b' }}>Sport House:</span>
              <span style={{ fontWeight: '600', color: '#b45309' }}>{user.house}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Guardian:</span>
              <span style={{ fontWeight: '600' }}>{user.guardianName}</span>
            </div>
          </div>
        </div>

        {/* 3. ACADEMIC SNAPSHOT (The Glowing Stat Boxes) */}
        <div className="stats-grid">
          <div className="stat-box stat-purple">
            <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Class Rank</p>
            <h2 style={{ fontSize: '2rem', marginTop: '5px' }}>{user.rank}</h2>
          </div>
          <div className="stat-box stat-blue">
            <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Attendance</p>
            <h2 style={{ fontSize: '2rem', marginTop: '5px' }}>{user.attendance}</h2>
          </div>
          <div className="stat-box stat-green">
            <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Avg Score</p>
            <h2 style={{ fontSize: '2rem', marginTop: '5px' }}>{user.averageScore}</h2>
          </div>

          {/* 4. LIVELY FACTOR: ANNOUNCEMENT PREVIEW */}
          <div className="content-card" style={{ gridColumn: 'span 3', borderTop: '5px solid #ef4444' }}>
            <h3 style={{ fontSize: '0.9rem', color: '#ef4444', textTransform: 'uppercase', marginBottom: '10px' }}>
              Latest Announcement
            </h3>
            <p style={{ color: '#1e293b', lineHeight: '1.6' }}>
              The <strong>Inter-House Sports Heats</strong> are scheduled for this Wednesday. All students in {user.house} should report to the sports pavilion by 8:00 AM in their house colors.
            </p>
          </div>
        </div>

      </div>

      {/* 5. SCHOOL MOTTO FOOTER */}
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>
        "Empowering Students through Technology and Discipline."
      </footer>
    </div>  
  );
};

export default Home;