import React, { useState } from 'react'
import "./header.css"

const Header = () => {
    const [toggle,showMenu]=useState(false);
  return (
    <div className='header' >
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Ayush</a>
        <div className={toggle?"nav_menu show-menu":
            "nav_menu"}>
        
            <ul className="nav_list grid">
                <li className="nav_item active-link">
                    <a href="#home" className="nav_link">
                        <i className="uil uil-estate nav_icon"></i>Home
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#about" className="nav_link">
                        <i className="uil uil-user nav_icon"></i>About
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#skills" className="nav_link">
                        <i className="uil uil-file-alt nav_icon"></i>Skills
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#services" className="nav_link">
                        <i className="uil uil-briefcase nav_icon"></i>Services
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#qualification" className="nav_link">
                        <i className="uil uil-scenery nav_icon"></i>Qualification
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#contact" className="nav_link">
                        <i className="uil uil-message nav_icon"></i>contact
                    </a>
                </li>
            </ul>

            <i className="uil uil-times nav_close" onClick={()=>showMenu(!toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={()=>showMenu(!toggle)}>
        <i className="uil uil-apps"></i>
        </div>
        
      </nav>
    </div>
  )
}

export default Header
