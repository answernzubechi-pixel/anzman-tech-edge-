import React from 'react';


const CampusNews = () => {
  // Logic: An array of school highlights to make the site look professional and active
  const newsList = [
    {
      id: 1,
      tag: "Sports",
      date: "October 28, 2024",
      title: "Red House Leads the Inter-House Heats",
      desc: "An impressive display of speed and stamina as Yellow House athletes dominated the 100m and 400m trials today.",
      img: "https://plus.unsplash.com/premium_photo-1664304936422-4b3b09f047e6?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      tag: "Academic",
      date: "October 20, 2024",
      title: "New Ultra-Modern ICT Hub Commissioned",
      desc: "The Principal officially opened the AnZtech ICT Hub today, featuring 50 new workstations for high-level data processing.",
      img: "https://media.istockphoto.com/id/2162383759/photo/modern-computer-classroom-with-monitors-and-blue-chairs.jpg?s=1024x1024&w=is&k=20&c=JjZroPw2jjeZs3M27_QlQd_DMIS_8MkndFKcaO4HFN0="
    },
    {
      id: 3,
      tag: "Cultural",
      date: "October 15, 2026",
      title: "Cultural Day Celebration: A Success",
      desc: "Our students showcased the rich heritage of our nation through dance, attire, and local cuisines in a spectacular event.",
      img: "https://images.unsplash.com/photo-1774437668053-74fc297fb8e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      tag: "PTA",
      date: "October 05, 2024",
      title: "Summary of the Parent-Teacher Meeting",
      desc: "Discussions focused on student security, the upcoming exams, and the end-of-year Carol Service planning.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&h=250&auto=format&fit=crop"
    }
  ];  

  return (
    <div>
      {/* 1. PAGE HEADER */}
      <header style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a' }}>Campus Life & News</h1>
        <p style={{ color: '#64748b' }}>Latest highlights and official updates from the school.</p>
      </header>

      {/* 2. THE NEWS GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '25px' 
      }}>
        {newsList.map((item) => (
          <div key={item.id} className="content-card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* News Image */}
            <div style={{ position: 'relative' }}>
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <span style={{ 
                position: 'absolute', 
                top: '15px', 
                left: '15px', 
                background: '#8b5cf6', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '0.7rem', 
                fontWeight: 'bold'
              }}>
                {item.tag}
              </span>
            </div>

            {/* News Text */}
            <div style={{ padding: '20px' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '10px' }}>{item.date}</p>
              <h3 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '12px', lineHeight: '1.4' }}>
                {item.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '15px' }}>
                {item.desc}
              </p>
              <button style={{ 
                background: 'none', 
                border: 'none', 
                color: '#4f46e5', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                fontSize: '0.9rem',
                padding: '0'
              }}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. NEWSLETTER BANNER (Lively Touch) */}
      <div style={{ 
        marginTop: '40px', 
        background: 'linear-gradient(135deg, #0f172a, #1e293b)', 
        padding: '40px', 
        borderRadius: '20px', 
        color: 'white', 
        textAlign: 'center' 
      }}> <br/>
        <h3 style={{ marginBottom: '10px' }}>Never Miss an Update</h3>
        <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '25px' }}>
          Subscribe to our official newsletter to get school news delivered to your parent's email.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <input 
            type="email" 
            placeholder="Enter Parent's Email" 
            style={{ padding: '12px 20px', borderRadius: '8px', border: 'none', width: '280px' }}
          />
          <button style={{ 
            background: '#8b5cf6', 
            color: 'white', 
            padding: '12px 25px', 
            borderRadius: '8px', 
            border: 'none', 
            fontWeight: 'bold' 
          }}>
            Join Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusNews;