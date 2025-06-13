// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../assets/css/navbar.css';

import {
  BiMenu, BiX, BiHome, BiUser, BiCodeAlt, BiBook,
  BiCollection, BiMedal, BiBadgeCheck, BiFileBlank, BiEnvelope
} from 'react-icons/bi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleHeader = () => setShowMenu(!showMenu);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowMenu(false); // Close menu after click
    }
  };

  return (
    <header id="header" className={`header d-flex flex-column justify-content-center ${showMenu ? 'header-show' : ''}`}>
      <div className="header-toggle d-xl-none" onClick={toggleHeader}>
        {showMenu ? <BiX /> : <BiMenu />}
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" onClick={(e) => handleAnchorClick(e, 'hero')}><BiHome className="navicon" /><span>Home</span></a></li>
          <li><a href="#about" onClick={(e) => handleAnchorClick(e, 'about')}><BiUser className="navicon" /><span>About</span></a></li>
          <li><a href="#skills" onClick={(e) => handleAnchorClick(e, 'skills')}><BiCodeAlt className="navicon" /><span>Skills</span></a></li>
          <li><a href="#education" onClick={(e) => handleAnchorClick(e, 'education')}><BiBook className="navicon" /><span>Education</span></a></li>
          <li><a href="#projects" onClick={(e) => handleAnchorClick(e, 'projects')}><BiCollection className="navicon" /><span>Projects</span></a></li>
          <li><a href="#certifications" onClick={(e) => handleAnchorClick(e, 'certifications')}><BiBadgeCheck className="navicon" /><span>Certifications</span></a></li>
          <li><a href="#publications" onClick={(e) => handleAnchorClick(e, 'publications')}><BiFileBlank className="navicon" /><span>Publications</span></a></li>
          <li><a href="#achievements" onClick={(e) => handleAnchorClick(e, 'achievements')}><BiMedal className="navicon" /><span>Achievements</span></a></li>
          <li><a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}><BiEnvelope className="navicon" /><span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
