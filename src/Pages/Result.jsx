import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Result = () => {
  // 1. Grab the current student data
  const { user } = useAuth();

  // 2. Logic: The Print Function
  const handlePrint = () => {
    window.print(); // This opens the browser's print/save dialog
  };

  return (
    <div className="result-page-container">
      
      {/* 3. THE FORMAL HEADER (School Letterhead) */}
      <header className="school-letterhead">
        <div className="letterhead-content">
          <h1>ANZTECH ACADEMIC ACADEMY</h1>
          <p>Innovation Hub, Tech District, Nigeria</p>
          <hr />
          <h3>OFFICIAL STATEMENT OF RESULTS</h3>
        </div>
      </header>

      {/* 4. STUDENT BIO INFORMATION */}
      <section className="transcript-bio">
        <div className="bio-row">
          <p><strong>STUDENT NAME:</strong> {user.name}</p>
          <p><strong>ADMISSION NO:</strong> {user.id}</p>
        </div>
        <div className="bio-row">
          <p><strong>CLASS:</strong> {user.class}</p>
          <p><strong>SESSION:</strong> 2023/2024</p>
        </div>
      </section>

      {/* 5. THE TRANSCRIPT TABLE */}
      <table className="transcript-table">
        <thead>
          <tr>
            <th>SUBJECT</th>
            <th>SCORE</th>
            <th>GRADE</th>
            <th>REMARK</th>
          </tr>
        </thead>
        <tbody>
          {/* THE LOOP: Mapping through the results */}
          {user.results.map((res, index) => (
            <tr key={index}>
              <td>{res.subject}</td>
              <td>{res.score}</td>
              <td className={res.score < 50 ? "text-fail" : "text-pass"}>
                {res.grade}
              </td>
              <td>
                {res.score >= 70 ? "Excellent" : 
                 res.score >= 50 ? "Credit" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 6. THE OFFICIAL ACTION BUTTON */}
      <div className="print-section">
        <button onClick={handlePrint} className="anz-print-btn">
          Print Transcript (PDF)
        </button>
      </div>

    </div>
  );
};

export default Result;