import React, { useState } from 'react'
import "./navbar.css"
function Navbar({tab, setTab}) {
 


  return (
    <div className="navbar-container">
      <p>Raj Bhakta</p>

      <ul className='navbar-links'>
        
        <li className={tab === "aboutme"? "active": null} onClick={()=>setTab("aboutme")}>About Me</li>
        <li className={tab === "portfolio"?"active": null} onClick={()=>setTab("portfolio")}>Portfolio</li>
        <li className={tab === "resume"?"active": null} onClick={()=>setTab("resume")}>Resume</li>
        <li className={tab === "contact"?"active": null} onClick={()=>setTab("contact")}>Contact</li>

      </ul>
    </div>
  )
}

export default Navbar