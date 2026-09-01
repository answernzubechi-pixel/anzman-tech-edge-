import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Result = () => {
  const { user } = useAuth();

  const handlePrint = () => {
    window.print();
  };

  const getPrincipalRemark = (score) => {
  const numericScore = parseFloat(score); // Converts "78.5" to 78.5
  if (numericScore >= 80) return "An exceptional performance. Keep up the brilliant work!";
  if (numericScore >= 60) return "A good result. With more focus, you can reach the top.";
  if (numericScore >= 50) return "A fair performance, but there is significant room for improvement.";
  return "Below average performance. A meeting with the guardian is required.";
};

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>Academic Result</h1>
          <p style={{ color: '#64748b' }}>Projected Transcript: 2024/2025 Session</p>
        </div>
        <button 
          onClick={handlePrint}
          className="print-btn"
          style={{
            background: '#8b5cf6',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(139, 92, 246, 0.3)'
          }}
        >
          Print Result
        </button>
      </header>

      <div className="content-card" style={{ marginBottom: '25px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div><p style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase' }}>Student Name</p><strong>{user.name}</strong></div>
          <div><p style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase' }}>Class / Arm</p><strong>{user.class} {user.arm}</strong></div>
          <div><p style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase' }}>Admission No</p><strong>{user.id}</strong></div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>CA (40)</th>
              <th>Exam (60)</th>
              <th>Total (100)</th>
              <th>Grade</th>
              <th>Teacher's Remark</th>
            </tr>
          </thead>
          <tbody>
            {user.results.map((item, index) => (
              <tr key={index}>
                <td style={{ fontWeight: '600' }}>{item.subject}</td>
                <td>{item.ca}</td>
                <td>{item.exam}</td>
                <td style={{ fontWeight: 'bold', color: item.total < 50 ? '#ef4444' : '#4f46e5' }}>{item.total}</td>
                <td><span className="grade-pill">{item.grade}</span></td>
                <td style={{ fontStyle: 'italic',  color: '#64748b' }}>{item.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-grid" style={{ marginTop: '25px' }}>
        <div className="content-card">
     <h3 style={{ fontSize: '0.9rem', color: '#8b5cf6', marginBottom: '10px' }}>Principal's Remark</h3>
      {/* The logic goes inside the <p> tag here! */}
      <p style={{ color: '#1e293b', lineHeight: '1.6', fontWeight: 'bold' }}>
      "{getPrincipalRemark(user.averageScore)}"
      </p>
      </div>
        <div className="content-card" style={{ borderTop: '5px solid #10b981' }}>
          <h3 style={{ fontSize: '0.9rem', color: '#10b981', marginBottom: '10px' }}>Final Status</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#059669' }}>{user.termResultStatus}</p>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '5px' }}>Average: {user.averageScore}%</p>
        </div>
      </div>

      <style>{`
        @media print {
          .sidebar, .print-btn { display: none !important; }
          .main-content { margin-left: 0 !important; padding: 20px !important; width: 100% !important; }
          .content-card, .table-container { box-shadow: none !important; border: 1px solid #ddd !important; }
        }
      `}</style>
    </div>
  );
};

export default Result;