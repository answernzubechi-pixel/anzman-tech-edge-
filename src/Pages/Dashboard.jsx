// src/Pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../Context/Authcontext'; // Match your casing!

const Dashboard = () => {
  // 1. Grab only the student data (The Logout tool is now in the Sidebar!)
  const { user } = useAuth();
  if (!user) return <div> loading Student Profile .....</div> 

  // 2. Logic: Calculate Performance Analytics
  const totalScore = user.results.reduce((acc, curr) => acc + curr.score, 0);
  const average = (totalScore / user.results.length).toFixed(2);

  return (
    <div className="dashboard-content-inner">
      
      {/* 3. STUDENT OVERVIEW HEADER */}
      <header className="dashboard-page-header">
        <div className="header-text">
          <h1>Welcome back, {user.name}</h1>
          <p>Here is your academic performance for this term.</p>
        </div>
      </header>

      {/* 4. PERFORMANCE CARDS (Analytics) */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Average Score</h3>
          <p className={average >= 50 ? "text-pass" : "text-fail"}>{average}%</p>
        </div>
        <div className="stat-card">
          <h3>Total Subjects</h3>
          <p>{user.results.length}</p>
        </div>
        <div className="stat-card">
          <h3>Academic Status</h3>
          <p className={average >= 50 ? "status-pass" : "status-fail"}>
            {average >= 50 ? "PROMOTED" : "HELD BACK"}
          </p>
        </div>
      </div>

      {/* 5. RESULTS TABLE */}
      <div className="table-container">
        <h3>Statement of Results</h3>
        <table className="anz-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* 6. THE LOOP: Maps through the results */}
            {user.results.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.score}</td>
                {/* 7. COLOR LOGIC: Red for fail, Green for pass */}
                <td className={item.score < 50 ? "text-fail" : "text-pass"}>
                  {item.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 8. REMARKS BOX */}
      <div className="remarks-box">
        <h4>Principal's Remark:</h4>
        <p>"{user.remarks}"</p>
      </div>

    </div>
  );
};

export default Dashboard;