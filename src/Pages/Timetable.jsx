import React from 'react';
import { useAuth } from '../Context/Authcontext';

const Timetable = () => {
  const { user } = useAuth();

  // Logic: Different schedules for different classes
  const schedules = {
    "SSS 3": [
      { time: "08:00 - 08:40", subject: "Mathematics", teacher: "Mr. Benson", period: "1st Period" },
      { time: "08:40 - 09:20", subject: "Physics", teacher: "Dr. Ade", period: "2nd Period" },
      { time: "09:20 - 10:00", subject: "English Language", teacher: "Mrs. Bello", period: "3rd Period" },
      { time: "10:00 - 10:30", subject: "SHORT BREAK", teacher: "-", period: "Interval" },
      { time: "10:30 - 11:10", subject: "Chemistry", teacher: "Mr. Okon", period: "4th Period" },
      { time: "11:10 - 11:50", subject: "Biology", teacher: "Ms. Sarah", period: "5th Period" },
      { time: "11:50 - 12:30", subject: "LONG BREAK", teacher: "-", period: "Lunch" },
      { time: "12:30 - 01:10", subject: "Data Processing", teacher: "AnZman Pixel", period: "6th Period" },
      { time: "01:10 - 01:50", subject: "Civic Education", teacher: "Mrs. Uche", period: "7th Period" },
    ],
    // Add other classes here if needed
  };

  // Logic: Get the student's class schedule (default to SSS 3 if not found)
  const currentSchedule = schedules[user.currentClass] || schedules["SSS 3"];

  return (
    <div>
      {/* 1. HEADER */}
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>Daily Timetable</h1>
        <p style={{ color: '#64748b' }}>
          Schedule for <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>{user.currentClass} {user.arm}</span>
        </p>
      </header>

      {/* 2. TIMETABLE CARD */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Time Slot</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentSchedule.map((item, index) => {
              // Logic: Highlight breaks differently to make it "lively"
              const isBreak = item.subject.includes("BREAK");
              
              return (
                <tr key={index} style={{ backgroundColor: isBreak ? '#f8fafc' : 'transparent' }}>
                  <td style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {item.period}
                  </td>
                  <td style={{ fontWeight: '600', color: '#4f46e5' }}>
                    {item.time}
                  </td>
                  <td style={{ fontWeight: 'bold', color: isBreak ? '#ef4444' : '#1e293b' }}>
                    {item.subject}
                  </td>
                  <td style={{ color: '#64748b' }}>
                    {item.teacher}
                  </td>
                  <td>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      background: isBreak ? '#fee2e2' : '#dcfce7',
                      color: isBreak ? '#b91c1c' : '#15803d'
                    }}>
                      {isBreak ? 'Non-Academic' : 'Active'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 3. LIVELY FOOTER NOTE */}
      <div className="content-card" style={{ marginTop: '25px', borderLeft: '5px solid #8b5cf6' }}>
        <h4 style={{ color: '#8b5cf6', marginBottom: '5px' }}>Important Daily Note:</h4>
        <p style={{ fontSize: '0.9rem', color: '#475569' }}>
          Students are expected to be in their respective classrooms 5 minutes before the start of each period. 
          Lateness to class will be recorded in the attendance portal.
        </p>
      </div>
    </div>
  );
};

export default Timetable;