import React from 'react';

const Calendar = () => {
  // Logic: An array of events categorized by month
  const calendarData = [
    {   
      month: "September",
      events: [
        { date: "Sept 10", title: "Resumption for 1st Term", type: "Academic" },
        { date: "Sept 12", title: "General Orientation for New Students", type: "Academic" },
        { date: "Sept 25", title: "Welcome Party / Social Night", type: "Social" },
      ]
    },
    {
      month: "October",
      events: [
        { date: "Oct 1", title: "Independence Day (Public Holiday)", type: "Holiday" },
        { date: "Oct 15", title: "Cultural Day Celebration", type: "Social" },
        { date: "Oct 24 - 26", title: "Mid-Term Break", type: "Holiday" },
        { date: "Oct 30", title: "Open Day (Parents/Teachers Review)", type: "Administrative" },
      ]
    },
    {
      month: "November",
      events: [
        { date: "Nov 10", title: "Inter-House Sports (Heats & Trials)", type: "Sports" },
        { date: "Nov 20", title: "PTA General Meeting (10:00 AM)", type: "Administrative" },
        { date: "Nov 28", title: "Inter-House Sports Grand Finale", type: "Sports" },
      ]
    },
    {
      month: "December",
      events: [
        { date: "Dec 5 - 12", title: "1st Term Final Examinations", type: "Academic" },
        { date: "Dec 15", title: "Carol Service & End of Term Party", type: "Social" },
        { date: "Dec 18", title: "Vacation / Result Collection", type: "Administrative" },
      ]
    }
  ];

  // Logic to color-code the event types for the "Ooo" factor
  const getTypeStyles = (type) => {
    switch(type) {
      case 'Sports': return { color: '#10b981', background: '#ecfdf5' };
      case 'Social': return { color: '#8b5cf6', background: '#f5f3ff' };
      case 'Holiday': return { color: '#ef4444', background: '#fef2f2' };
      case 'Administrative': return { color: '#f59e0b', background: '#fffbeb' };
      default: return { color: '#3b82f6', background: '#eff6ff' };
    }
  };

  return (
    <div>
      {/* 1. HEADER */}
      <header style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>Academic Roadmap</h1>
        <p style={{ color: '#64748b' }}>Events Schedule: 2024/2025 First Term</p>
      </header>

      {/* 2. TIMELINE OF MONTHS */}
      <div style={{ maxWidth: '800px' }}>
        {calendarData.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '40px' }}>
            {/* Month Label */}
            <h3 style={{ 
              color: '#8b5cf6', 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                background: '#8b5cf6', 
                borderRadius: '50%', 
                marginRight: '10px' 
              }}></span>
              {section.month}
            </h3>

            {/* List of Events in that Month */}
            <div style={{ paddingLeft: '20px', borderLeft: '2px solid #e2e8f0', marginLeft: '5px' }}>
              {section.events.map((event, eIdx) => {
                const styles = getTypeStyles(event.type);
                return (
                  <div key={eIdx} className="content-card" style={{ 
                    padding: '20px', 
                    marginBottom: '15px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderLeft: `5px solid ${styles.color}`
                  }}>
                    <div>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        fontWeight: 'bold', 
                        textTransform: 'uppercase', 
                        color: styles.color,
                        background: styles.background,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        display: 'inline-block',
                        marginBottom: '5px'
                      }}>
                        {event.type}
                      </span>
                      <h4 style={{ color: '#1e293b', fontSize: '1.1rem' }}>{event.title}</h4>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: 'bold', color: '#64748b' }}>{event.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 3. LEGEND (Lively Footer) */}
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        background: '#fff', 
        borderRadius: '10px', 
        display: 'flex', 
        gap: '20px', 
        fontSize: '0.8rem' 
      }}>
        <span style={{ color: '#10b981' }}>● Sports</span>
        <span style={{ color: '#8b5cf6' }}>● Social</span>
        <span style={{ color: '#ef4444' }}>● Holidays</span>
        <span style={{ color: '#3b82f6' }}>● Academic</span>
      </div>
    </div>
  );
};

export default Calendar;    