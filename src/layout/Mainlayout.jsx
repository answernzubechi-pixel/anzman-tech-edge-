// 1. IMPORTS - Bringing in the Frame parts
import React from 'react';
import Sidebar from '../Components/Sidebar'; // Ensure 'C' matches your folder name!
import Navbar from '../Components/Navbar';   
import Footer from '../Components/Footer';   

const Mainlayout = ({ children, pageTitle }) => {
  /**
   * THE ARCHITECTURE LOGIC:
   * 1. 'anz-main-layout' (The Shell): Uses Flex-Row to put Sidebar on the LEFT.
   * 2. 'anz-content-area' (The Body): Uses Flex-Column to stack Navbar, Page, and Footer.
   * 3. 'children' (The Data): This is where your Dashboard or Result appears.
   */
  
  return (
    <div className="anz-main-layout">
      
      {/* ZONE 1: THE LEFT WALL (Sidebar) */}
      <Sidebar />

      {/* ZONE 2: THE RIGHT SIDE (Everything else) */}
      <div className="anz-content-area">
        
        {/* TOP: Identity Bar */}
        <Navbar pageTitle={pageTitle} />

        {/* MIDDLE: This expands to push the footer down */}
        <main className="anz-page-content">
          {children}
        </main>

        {/* BOTTOM: Formal Institutional Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Mainlayout;  